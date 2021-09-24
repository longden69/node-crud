#!/bin/bash

# Exit on fail
set -e

# Bundle install
npm install

# Start services
node index.js
# Finally call command issued to the docker service
exec "$@"
