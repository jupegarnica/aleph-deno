FROM hayd/alpine-deno:1.7.2
# USER deno

RUN deno install -A -f -n aleph https://deno.land/x/aleph@v0.3.0-alpha.1/cli.ts
RUN aleph -v


EXPOSE 8080

WORKDIR /app

# Prefer not to run as root.

ADD ./app .
RUN aleph build
# # Cache the dependencies as a layer (the following two steps are re-run only when deps.ts is modified).
# # Ideally cache deps.ts will download and compile _all_ external files used in main.ts.
# # COPY deps.ts .
# RUN deno cache https://deno.land/x/aleph@v0.3.0-alpha.1/cli/dev.ts
RUN deno cache https://deno.land/std@0.88.0/http/file_server.ts
# These steps will be re-run upon each file change in your working directory:
# ADD . .
# Compile the main app so that it doesn't need to be compiled each startup/entry.
# RUN deno cache main.ts

CMD deno run -A https://deno.land/std@0.88.0/http/file_server.ts dist --port 8080