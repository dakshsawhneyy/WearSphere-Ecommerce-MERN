FROM node:18 AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

#Stage 2
FROM node:18-alpine

COPY --from=builder /app .

EXPOSE 4000

CMD ["npm","start"]
