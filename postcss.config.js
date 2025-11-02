import tailwindcss from '@tailwindcss/postcss';
import cssnano from 'cssnano';
import process from 'node:process';
import postcssPresetEnv from 'postcss-preset-env';

/** @type {import('postcss-load-config').Config} */
export default {
  plugins: [
    // postcssImport(),
    tailwindcss(),
    postcssPresetEnv(
      process.env.NODE_ENV === 'production'
        ? { stage: 2, autoprefixer: true }
        : { stage: false, autoprefixer: false },
    ),
    cssnano(),
  ],
};
