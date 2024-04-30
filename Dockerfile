# Based on https://github.com/denoland/deno_docker/blob/main/alpine.dockerfile

ARG DENO_VERSION=1.42.3
ARG BIN_IMAGE=denoland/deno:alpine-${DENO_VERSION}
FROM ${BIN_IMAGE} AS bin

FROM bin AS build

WORKDIR /deno-dir
COPY . .

RUN apk --no-cache add unzip \
  && deno task compile

FROM frolvlad/alpine-glibc:alpine-3.13

RUN apk --no-cache add ca-certificates

RUN addgroup --gid 1000 deno \
  && adduser --uid 1000 --disabled-password deno --ingroup deno \
  && mkdir /deno-dir/ \
  && chown deno:deno /deno-dir/

USER deno

ENV DENO_DIR /deno-dir/
ENV DENO_INSTALL_ROOT /usr/local

ARG DENO_VERSION
ENV DENO_VERSION=${DENO_VERSION}

COPY --from=build /deno-dir/dist/backoffice /bin/backoffice

WORKDIR ${DENO_DIR}

COPY --from=build /deno-dir/views/ views

CMD ["/bin/backoffice"]
