/*
 * @Author: WindBlows zhanghehan@huawenholdings.com
 * @Date: 2023-02-07 11:14:56
 * @LastEditors: WindBlows zhanghehan@huawenholdings.com
 * @LastEditTime: 2023-02-07 14:54:57
 * @FilePath: \vite-study\src\router\index.ts
 * @Description:
 *
 * Copyright (c) 2023 by zhanghehan@huawenholdings.com, All Rights Reserved.
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
export const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Login',
        component: () => import('@/components/HelloWorld.vue'), // 注意这里要带上 文件后缀.vue
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
