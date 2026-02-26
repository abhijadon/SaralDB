# ---------- Base Image ----------
FROM node:20-alpine

# ---------- App Directory ----------
WORKDIR /app

# ---------- Install Dependencies ----------
COPY api/package*.json ./
RUN npm install

# ---------- Copy Source ----------
COPY api/ .

# ---------- Expose Port ----------
EXPOSE 5000

# ---------- Start Command ----------
CMD ["npm", "run", "dev"]