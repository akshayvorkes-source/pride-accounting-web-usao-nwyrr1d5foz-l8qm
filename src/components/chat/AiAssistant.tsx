import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { GlassCard } from '@/components/ui/glass-card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { chatService } from '@/lib/chat';
import type { Message } from '../../../worker/types';
export function AiAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping]);
  // Load existing messages when the chat opens
  useEffect(() => {
    if (isOpen) {
      const loadMessages = async () => {
        const response = await chatService.getMessages();
        if (response.success && response.data?.messages) {
          setMessages(response.data.messages);
        }
      };
      loadMessages();
    }
  }, [isOpen]);
  const handleSend = async () => {
    if (!input.trim() || isTyping) return;
    const userMessage: Message = {
      id: crypto.randomUUID(),
      role: 'user',
      content: input.trim(),
      timestamp: Date.now()
    };
    const assistantId = crypto.randomUUID();
    const placeholderAssistantMessage: Message = {
      id: assistantId,
      role: 'assistant',
      content: '',
      timestamp: Date.now()
    };
    setMessages(prev => [...prev, userMessage, placeholderAssistantMessage]);
    const currentInput = input;
    setInput('');
    setIsTyping(true);
    try {
      let accumulatedContent = '';
      await chatService.sendMessage(
        currentInput,
        'google-ai-studio/gemini-2.0-flash',
        (chunk) => {
          accumulatedContent += chunk;
          setMessages(prev =>
            prev.map(msg =>
              msg.id === assistantId
                ? { ...msg, content: accumulatedContent }
                : msg
            )
          );
        }
      );
      if (!accumulatedContent) {
        setMessages(prev =>
          prev.map(msg =>
            msg.id === assistantId
              ? { ...msg, content: "I'm sorry, I'm having trouble connecting to our local Mauritius server." }
              : msg
          )
        );
      }
    } catch (error) {
      console.error('AI Assistant Error:', error);
      setMessages(prev =>
        prev.map(msg =>
          msg.id === assistantId
            ? { ...msg, content: "An error occurred while processing your request. Please try again." }
            : msg
        )
      );
    } finally {
      setIsTyping(false);
    }
  };
  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="mb-4"
          >
            <GlassCard className="w-[350px] sm:w-[400px] h-[500px] flex flex-col p-0 overflow-hidden border-emerald-500/20 shadow-2xl">
              <div className="p-4 bg-emerald-500/10 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-emerald-500 flex items-center justify-center">
                    <Bot className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold">Pride Concierge</h3>
                    <p className="text-[10px] text-emerald-400">Expert Guidance Online</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="hover:bg-white/5 h-8 w-8">
                  <X className="h-4 w-4 text-slate-400" />
                </Button>
              </div>
              <ScrollArea className="flex-1 p-4">
                <div className="space-y-4">
                  {messages.length === 0 && !isTyping && (
                    <div className="text-center py-12 space-y-4">
                      <Bot className="h-12 w-12 text-emerald-500/30 mx-auto" />
                      <p className="text-xs text-slate-400 max-w-[200px] mx-auto leading-relaxed">
                        How can I help you today? Ask about MRA tax compliance, Mauritius accounting, or our Rose Hill headquarters.
                      </p>
                    </div>
                  )}
                  {messages.map((msg) => (
                    <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                        msg.role === 'user'
                          ? 'bg-emerald-500 text-white rounded-tr-none shadow-lg'
                          : 'bg-white/10 text-slate-200 rounded-tl-none border border-white/5 whitespace-pre-wrap'
                      }`}>
                        {msg.content || (msg.role === 'assistant' && isTyping && msg.id === messages[messages.length - 1].id ? <Loader2 className="h-3 w-3 animate-spin inline" /> : msg.content)}
                      </div>
                    </div>
                  ))}
                  {isTyping && messages[messages.length - 1]?.content === '' && (
                    <div className="flex justify-start">
                      <div className="bg-white/10 p-3 rounded-2xl rounded-tl-none border border-white/5 flex gap-2 items-center">
                        <Loader2 className="h-3 w-3 animate-spin text-emerald-500" />
                        <span className="text-[10px] text-slate-400 uppercase tracking-widest font-medium">Analyzing</span>
                      </div>
                    </div>
                  )}
                  <div ref={scrollRef} />
                </div>
              </ScrollArea>
              <div className="p-4 border-t border-white/10 bg-white/5">
                <div className="flex gap-2 mb-3">
                  <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && !isTyping && handleSend()}
                    placeholder="Ask a question..."
                    disabled={isTyping}
                    className="flex-1 bg-white/10 border border-white/10 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-emerald-500/50 transition-all disabled:opacity-50 text-white placeholder:text-slate-500"
                  />
                  <Button onClick={handleSend} size="icon" className="btn-emerald h-10 w-10 shrink-0 rounded-xl" disabled={isTyping || !input.trim()}>
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-[10px] text-center text-slate-500 leading-tight">
                  AI usage is subject to global platform limits. Information provided is for general guidance only.
                </p>
              </div>
            </GlassCard>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="h-14 w-14 rounded-full btn-emerald shadow-[0_20px_50px_rgba(16,185,129,0.3)] flex items-center justify-center relative group"
        aria-label="Toggle AI Concierge"
      >
        <div className="absolute inset-0 rounded-full bg-emerald-500 blur-lg opacity-20 group-hover:opacity-40 transition-opacity" />
        {isOpen ? <X className="h-6 w-6 relative z-10" /> : <MessageCircle className="h-6 w-6 relative z-10" />}
      </motion.button>
    </div>
  );
}