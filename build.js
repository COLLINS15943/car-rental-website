#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');

console.log('🚀 Starting custom build process...');

try {
  // Try different approaches to run vite build
  console.log('📦 Attempting Vite build...');
  
  try {
    // First try: using npx with latest vite
    console.log('Method 1: Using npx with latest Vite...');
    execSync('npx --yes vite@latest build', { stdio: 'inherit' });
    console.log('✅ Build completed successfully with npx!');
  } catch (error) {
    console.log('❌ npx method failed, trying direct execution...');
    
    try {
      // Second try: direct node execution
      const vitePath = path.join(__dirname, 'node_modules', '.bin', 'vite');
      execSync(`node ${vitePath} build`, { stdio: 'inherit' });
      console.log('✅ Build completed successfully with direct execution!');
    } catch (error2) {
      console.log('❌ Direct execution failed, trying Vite API...');
      
      // Third try: using Vite API
      const { build } = require('vite');
      await build();
      console.log('✅ Build completed successfully with Vite API!');
    }
  }
  
} catch (error) {
  console.error('💥 All build methods failed:', error.message);
  process.exit(1);
}