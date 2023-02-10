/*
 * @Author: WindBlows zhanghehan@huawenholdings.com
 * @Date: 2023-02-07 11:37:35
 * @LastEditors: WindBlows zhanghehan@huawenholdings.com
 * @LastEditTime: 2023-02-09 15:06:53
 * @FilePath: \vite-study\src\sotre\main.ts
 * @Description:
 *
 * Copyright (c) 2023 by zhanghehan@huawenholdings.com, All Rights Reserved.
 */
import { defineStore } from 'pinia';
export const useMainStore = defineStore('main', {
    state: () => ({
        name: 'windBlows',
    }),
    getters: {
        nameCopy: (state) => state.name + 'copy',
        // 使用this时类型无法自动推断出来
        nameCopy1(): string {
            return this.name + 'copy1';
        },
        // getter返回一个函数以接受传参
        nameCopy2: (state) => {
            return (str: string): string => state.name + str;
        },
    },
    actions: {
        setName(str: string) {
            this.name = str;
        },
    },
});
