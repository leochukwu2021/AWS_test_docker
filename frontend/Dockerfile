# Use Node image for local development
FROM node:20

WORKDIR /app

# Copy only package files first to leverage caching
COPY package.json package-lock.json ./
RUN npm install

# Copy all frontend files
COPY . .

# Expose React dev server port
EXPOSE 3000

# Start React dev server with live reload
CMD ["npm", "start"]
