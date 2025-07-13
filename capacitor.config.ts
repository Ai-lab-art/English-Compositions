import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.ba5ba8146095403dabf0cca4798f1c02',
  appName: 'english-compositions-for-secondary-level',
  webDir: 'dist',
  server: {
    url: 'https://ba5ba814-6095-403d-abf0-cca4798f1c02.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  bundledWebRuntime: false
};

export default config;