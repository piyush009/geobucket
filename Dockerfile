# Lean multi-stage build for small EC2 disks.
# Stage 1 builds the app, then deletes node_modules before the layer is kept.
# Stage 2 copies only the Next.js standalone output (no npm install in runtime).

FROM node:24-alpine AS builder
WORKDIR /app

RUN apk add --no-cache libc6-compat

COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund \
  && npm cache clean --force

COPY . .

ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production
# Needs headroom for `next build` / trace collection (pair with 2GB swap on micro instances).
ENV NODE_OPTIONS="--max-old-space-size=1536"

RUN npm run build \
  && rm -rf node_modules \
  && rm -rf .next/cache \
  && rm -rf /tmp/* \
  && rm -rf /root/.npm

# --- production image (tiny) ---
FROM node:24-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

RUN addgroup --system --gid 1001 nodejs \
  && adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000

CMD ["node", "server.js"]
