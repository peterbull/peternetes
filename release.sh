#!/bin/bash

docker compose build && \
docker tag peternetes-web registry.digitalocean.com/bullcr/peternetes-web && \
docker push registry.digitalocean.com/bullcr/peternetes-web
