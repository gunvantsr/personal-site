import type { Config } from 'tailwindcss';

const config: Config = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      // 'main-bg': '#F2DFCE',
      // 'body-bg': '#FFF1E0',
      'body-bg': '#FFF1E0',
      'main-bg': '#FFF1E0',
      'link-ext': '#0a5e66',
    },
    screens: {
      '2xs': { min: '300px', max: '575px' },
      // xs: { max: '575px' },
      sm: { min: '576px' },
      md: { min: '898px' },
      // Mobile (iPhone 3 - iPhone XS Max).
      // sm: { min: '576px', max: '897px' }, // Mobile (matches max: iPhone 11 Pro Max landscape @ 896px).
      // md: { min: '898px', max: '1199px' }, // Tablet (matches max: iPad Pro @ 1112px).
      lg: { min: '1200px' }, // Desktop smallest.
      xl: { min: '1259px' }, // Desktop wide.
      '2xl': { min: '1359px' }, // Desktop widescreen.
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
export default config;
