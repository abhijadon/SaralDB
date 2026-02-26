# ---------- Base Image ----------
FROM node:20-alpine

# ---------- App Directory ----------
WORKDIR /app

# ---------- Install Dependencies ----------
COPY web/package*.json ./
RUN npm install

# ---------- Copy Source ----------
COPY web/ .

# ---------- Expose Port ----------
EXPOSE 3000

# ---------- Start Command ----------
CMD ["npm", "run", "dev"]