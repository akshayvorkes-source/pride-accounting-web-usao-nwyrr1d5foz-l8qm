# Cloudflare AI Chat Application

[![Deploy to Cloudflare]([![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/akshayvorkes-source/pride-accounting-services-mauritius))]([![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/akshayvorkes-source/pride-accounting-services-mauritius))

A production-ready, full-stack AI chat application built on Cloudflare Workers. Features multi-session conversations, streaming responses, tool calling (weather, web search, MCP integration), and a modern React frontend. Powered by Cloudflare Agents, Durable Objects, and AI Gateway for scalable, edge-deployed AI experiences.

## 🚀 Features

- **Multi-Session Chat**: Persistent conversations with session management, titles, and activity tracking.
- **AI Model Support**: Switch between Gemini models (Flash, Pro, 2.0) via Cloudflare AI Gateway.
- **Streaming Responses**: Real-time message streaming for smooth UX.
- **Tool Calling**: Built-in tools for weather, web search (SerpAPI), and extensible MCP (Model Context Protocol) integration.
- **Modern UI**: React + TypeScript frontend with Shadcn UI, Tailwind CSS, TanStack Query, and dark mode support.
- **Session Controls**: Create, list, update, delete sessions; clear all chats.
- **Edge Deployment**: Zero-cold-start Durable Objects and Agents for global performance.
- **Error Handling & Observability**: Client error reporting, logging, and Cloudflare analytics.

## 🛠 Tech Stack

- **Frontend**: React 18, TypeScript, Vite, Tailwind CSS, Shadcn UI, TanStack Query, React Router, Zustand, Framer Motion, Sonner (toasts).
- **Backend**: Cloudflare Workers, Hono, Cloudflare Agents SDK, Durable Objects, OpenAI SDK (via AI Gateway).
- **AI Integration**: Cloudflare AI Gateway (Gemini models), SerpAPI (search), MCP SDK (tools).
- **Build & Deploy**: Bun, Wrangler, esbuild.
- **UI Components**: Radix UI, Lucide icons, Tailwind Animate.

## ⚡ Quick Start

1. **Prerequisites**:
   - [Bun](https://bun.sh/) installed.
   - Cloudflare account with [Workers AI Gateway](https://developers.cloudflare.com/ai-gateway/) setup.
   - Optional: SerpAPI key for web search.

2. **Clone & Install**:
   ```bash
   git clone <your-repo-url>
   cd pride-accounting-web-usao-nwyrr1d5foz-l8qm
   bun install
   ```

3. **Configure Environment** (edit `wrangler.jsonc`):
   ```json
   "vars": {
     "CF_AI_BASE_URL": "https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/openai",
     "CF_AI_API_KEY": "{your-gateway-token}",
     "SERPAPI_KEY": "{optional-serpapi-key}"
   }
   ```

4. **Generate Types**:
   ```bash
   bun run cf-typegen
   ```

5. **Development**:
   ```bash
   bun dev
   ```
   Open `http://localhost:3000` (or `${PORT:-3000}`).

## 📚 Usage

### Chat Sessions
- **Create Session**: `POST /api/sessions` with `{ title, firstMessage }`.
- **List Sessions**: `GET /api/sessions`.
- **Chat**: `POST /api/chat/{sessionId}/chat` with `{ message, model, stream: true }`.
- **Switch Model**: `POST /api/chat/{sessionId}/model` with `{ model: 'google-ai-studio/gemini-2.5-pro' }`.
- **Clear Chat**: `DELETE /api/chat/{sessionId}/clear`.

### Frontend Hooks & Services
The app includes `src/lib/chat.ts` with a `ChatService` singleton for easy integration:
```tsx
import { chatService } from '@/lib/chat';

const response = await chatService.sendMessage('Hello!', undefined, (chunk) => console.log(chunk));
```

Replace `src/pages/HomePage.tsx` with your chat UI. All backend APIs are ready.

### Customization
- **Add Tools**: Extend `worker/tools.ts` and `getToolDefinitions()`.
- **MCP Servers**: Add to `worker/mcp-client.ts` `MCP_SERVERS` array.
- **UI**: Use Shadcn components (`npx shadcn-ui@latest add <component>`).
- **Routes**: Add to `worker/userRoutes.ts` `userRoutes()`.

## 🔧 Development

- **Hot Reload**: `bun dev` proxies API calls to Workers.
- **Linting**: `bun lint`.
- **Build**: `bun build` (produces `dist/` for preview).
- **Preview**: `bun preview`.
- **Type Generation**: `bun run cf-typegen` after env changes.
- **Sidebar**: Customize `src/components/app-sidebar.tsx` or wrap pages in `AppLayout`.

Watch for Durable Object migrations in `wrangler.jsonc`.

## ☁️ Deployment

1. **Build**:
   ```bash
   bun run build
   ```

2. **Deploy**:
   ```bash
   bun run deploy
   ```
   Or use the dashboard.

[![Deploy to Cloudflare]([![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/akshayvorkes-source/pride-accounting-services-mauritius))]([![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/akshayvorkes-source/pride-accounting-services-mauritius))

**Custom Domain**: Set in Cloudflare Dashboard > Workers > Triggers.

**Environment Variables**: Use Wrangler secrets:
```bash
wrangler secret put CF_AI_API_KEY
```

## 🤝 Contributing

1. Fork & clone.
2. `bun install`.
3. Create feature branch.
4. `bun dev` & test.
5. PR to `main`.

## 📄 License

MIT License. See [LICENSE](LICENSE) for details.

## 🙌 Support

- [Cloudflare Workers Docs](https://developers.cloudflare.com/workers/)
- [Cloudflare AI Gateway](https://developers.cloudflare.com/ai-gateway/)
- [Agents SDK](https://developers.cloudflare.com/agents/)

Built with ❤️ for the Cloudflare ecosystem. Issues? Open a GitHub issue!