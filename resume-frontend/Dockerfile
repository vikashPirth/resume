# Dockerfile for frontend
FROM nginx:alpine

# Copy custom Nginx config (optional)
# COPY nginx.conf /etc/nginx/nginx.conf

# Copy the website content into the nginx directory
COPY dist /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]