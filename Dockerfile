FROM docker.pkg.github.com/jupegarnica/aleph-deno/aleph-base

WORKDIR /app


ADD ./app .

EXPOSE 8080
# RUN rm -rf ./dist
# RUN aleph build
# CMD deno run -A https://deno.land/std@0.88.0/http/file_server.ts dist --port 8080
CMD  aleph start --hostname 0.0.0.0 --port 8080
