FROM nginx:latest

RUN apt update

COPY ./.docker/conf/nginx.conf /etc/nginx/conf.d/default.conf

ENTRYPOINT ["nginx"]
CMD ["-g", "daemon off;"]
