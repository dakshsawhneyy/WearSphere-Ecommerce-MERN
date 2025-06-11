FROM node:18 AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

#Stage 2
FROM node:18-alpine

# serve is package used in production
RUN npm install -g serve

COPY --from=builder /app .

EXPOSE 5174

CMD ["serve", "-s", "dist", "-l", "5174"]
