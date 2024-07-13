#!/bin/bash

# Ensure we are in the correct directory
cd "${GITHUB_WORKSPACE}" || exit 1

# Clean up existing dist folder
rm -rf dist

# Run yarn build
yarn build

# Create a new dist folder
mkdir -p dist

# Check if dist folder exists
if [ -d "dist" ]; then
  # Copy contents of dist to current directory
  cp -r dist/* .
else
  echo "No 'dist' folder found."
fi
