<!--
 * @Author: WindBlows zhanghehan@huawenholdings.com
 * @Date: 2023-02-06 18:07:34
 * @LastEditors: WindBlows zhanghehan@huawenholdings.com
 * @LastEditTime: 2023-02-07 10:23:45
 * @FilePath: \vite-study\src\App.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by zhanghehan@huawenholdings.com, All Rights Reserved. 
-->
<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue';
</script>

<template>
    <div>
        <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" class="logo" alt="Vite logo" />
        </a>
        <a href="https://vuejs.org/" target="_blank">
            <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
        </a>
    </div>
    <HelloWorld msg="Vite + Vue" />
    <!-- sdkjsladkjlas -->
</template>

<style lang="less" scoped>
.logo {
    padding: 1.5em;
    height: 6em;
    transition: filter 300ms;
    will-change: filter;
}

.logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
