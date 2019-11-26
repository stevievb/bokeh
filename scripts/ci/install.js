#!/bin/bash

set -e # exit on error
set -x # echo commands

# install NPM dependencies
pushd bokehjs
npm ci --no-progress
popd
