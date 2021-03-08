FROM docker.pkg.github.com/jupegarnica/aleph-deno/aleph-base-img

WORKDIR /app


ADD ./app .

# RUN deno cache https://deno.land/x/aleph@v0.3.0-alpha.8/cli/dev.ts
# RUN deno cache https://deno.land/x/aleph@v0.3.0-alpha.8/cli/start.ts
# RUN deno cache https://esm.sh/react@17.0.1
# RUN deno cache https://deno.land/x/aleph@v0.3.0-alpha.8/deps.ts
# RUN deno cache https://deno.land/std@0.88.0/http/file_server.ts

EXPOSE 8080
# RUN rm -rf ./dist
# RUN aleph build
# CMD deno run -A https://deno.land/std@0.88.0/http/file_server.ts dist --port 8080
CMD  aleph start --hostname 0.0.0.0 --port 8080
