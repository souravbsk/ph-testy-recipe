#!/bin/bash

# Navigate to the project directory
cd /root/test-applicaion/ph-testy-app/ph-testy-treat-client/

# Install dependencies
npm install

# Build the project
npm run build

# Optionally, restart services or perform other deployment tasks
# Example: Restart a service if using pm2
# pm2 restart all
