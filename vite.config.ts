import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default () => {
	const config = {
		plugins: [react(), tsconfigPaths()],
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `@use "./src/_mantine" as *;`,
				},
			},
		},
		optimizeDeps: {
			exclude: ['chunk-HU2LKPA7'],
		},
	};
	return defineConfig(config);
};
