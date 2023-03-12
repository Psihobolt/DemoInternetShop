FROM nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80

# Start Nginx when the container has provisioned.
CMD ["nginx", "-g", "daemon off;"]