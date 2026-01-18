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

# Copier uniquement les artefacts nécessaires
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/next.config.mjs ./next.config.mjs

# Appliquer les bons droits
RUN chown -R kingsley:appgroup /app

# Utiliser l'utilisateur non-root
USER kingsley

EXPOSE 3000

CMD ["npm", "start"]