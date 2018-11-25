#!/bin/bash
set -e

if [ ! -d "/src/bot/node_modules" ]; then
  npm --prefix /src/bot i /src/bot
fi

if [ ! -d "/src/web/node_modules" ]; then
  npm --prefix /src/web i /src/web
fi

exec "$@"
