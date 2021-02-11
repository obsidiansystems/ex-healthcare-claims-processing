#! /usr/bin/env nix-shell
#! nix-shell -i bash
make build
cd ui && npm install && npm start
