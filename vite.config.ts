/*
 * @Author: WindBlows zhanghehan@huawenholdings.com
 * @Date: 2023-02-03 14:35:09
 * @LastEditors: WindBlows zhanghehan@huawenholdings.com
 * @LastEditTime: 2023-02-07 14:51:49
 * @FilePath: \vite-study\vite.config.ts
 * @Description:
 *
 * Copyright (c) 2023 by zhanghehan@huawenholdings.com, All Rights Reserved.
 */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import legacy from '@vitejs/plugin-legacy';
import path from 'path';
const resolve = (str: string): string => path.resolve(__dirname, str);

// https://vitejs.dev/config/
export default defineConfig({
    base: './',
    plugins: [
        legacy({
            targets: ['defaults', 'not IE 11'],
        }),
        vue(),
    ],
    resolve: {
        alias: {
            '@': resolve('./src'),
        },
    },
});
