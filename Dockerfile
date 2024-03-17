# Step 1: Build the Next.js application
FROM node:18-alpine AS builder

# Set the working directory in the container
WORKDIR /app

# Install necessary dependencies for building certain npm modules
RUN apk add --no-cache libc6-compat

# Copy package.json and package-lock.json for npm install
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy the rest of your application code
COPY . .

# Build your Next.js application
RUN npm run build

# Step 2: Serve the application using the Next.js production server
FROM node:18-alpine AS runner

WORKDIR /app

# Copy the build artifacts from the builder stage
COPY --from=builder next.config.js ./
COPY --from=builder public ./public
COPY --from=builder .next ./.next
COPY --from=builder node_modules ./node_modules
COPY --from=builder package.json ./package.json

# Set the port the app runs on
ENV PORT 3000

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
