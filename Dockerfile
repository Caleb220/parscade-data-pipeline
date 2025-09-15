# Build stage
FROM node:20-alpine AS builder

# Install dependencies
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .

RUN npm run build

# Serve stage (using nginx)
FROM nginx:1.27-alpine AS runner

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy default nginx config (can be customized if needed)
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]