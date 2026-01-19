# ---------- BUILD ----------
FROM node:20-alpine AS builder

WORKDIR /app

# Installer uniquement ce qui est nécessaire pour le build
COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build


# ---------- RUNTIME ----------
FROM node:20-alpine AS runner

WORKDIR /app
ENV NODE_ENV=production

# Créer un utilisateur non-root
RUN addgroup -S appgroup && adduser -S kingsley -G appgroup

# Copier avec les bons droits directement (pas de chown -R)
COPY --from=builder --chown=kingsley:appgroup /app/.next ./.next
COPY --from=builder --chown=kingsley:appgroup /app/public ./public
COPY --from=builder --chown=kingsley:appgroup /app/package.json ./package.json
COPY --from=builder --chown=kingsley:appgroup /app/node_modules ./node_modules
COPY --from=builder --chown=kingsley:appgroup /app/next.config.mjs ./next.config.mjs

USER kingsley

EXPOSE 3000
CMD ["npm", "start"]
