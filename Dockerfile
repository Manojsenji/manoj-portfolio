# 1️⃣ Base image
FROM node:20-alpine AS builder

# 2️⃣ Working directory
WORKDIR /app

# 3️⃣ Copy package files
COPY package*.json ./

# 4️⃣ Install dependencies
RUN npm install

# 5️⃣ Copy source code
COPY . .

# 6️⃣ Build Next.js app
RUN npm run build

# 7️⃣ Production image
FROM node:20-alpine

WORKDIR /app

# 8️⃣ Copy build output
COPY --from=builder /app ./

# 9️⃣ Expose Next.js port
EXPOSE 3000

# 🔟 Start app
CMD ["npm", "start"]
