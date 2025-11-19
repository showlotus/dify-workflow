// import type { Config } from 'tailwindcss'
import commonConfig from './tailwind-common-config'
const config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  ...commonConfig,
}

export default config
