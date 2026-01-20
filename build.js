#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');

try {
  console.log('Starting build process...');
  
  // Try different approaches to run vite build
  const vitePath = path.join(__dirname, 'node_modules', '.bin', 'vite');
  
  try {
    // First try: direct node execution
    execSync(`node ${vitePath} build`, { stdio: 'inherit' });
  } catch (error) {
    console.log('Direct execution failed, trying alternative...');
    
    try {
      // Second try: using require
      const { build } = require('vite');
      await build();
    } catch (error2) {
      console.log('Vite API failed, trying npx...');
      
      // Third try: npx with explicit path
      execSync('npx --yes vite@latest build', { stdio: 'inherit' });
    }
  }
  
  console.log('Build completed successfully!');
} catch (error) {
  console.error('Build failed:', error.message);
  process.exit(1);
}