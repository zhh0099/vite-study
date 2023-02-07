/*
 * @Author: WindBlows zhanghehan@huawenholdings.com
 * @Date: 2023-02-03 14:35:09
 * @LastEditors: WindBlows zhanghehan@huawenholdings.com
 * @LastEditTime: 2023-02-03 17:19:40
 * @FilePath: \vite-study\vite.config.ts
 * @Description:
 *
 * Copyright (c) 2023 by zhanghehan@huawenholdings.com, All Rights Reserved.
 */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
});
