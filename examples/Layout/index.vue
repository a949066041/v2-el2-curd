<template>
  <el-container class="container">
    <el-header>
      <span @click="$router.push('/')">curd组件库</span>
    </el-header>
    <el-container class="content">
      <el-aside width="200px" style="background-color: #fff;">
        <el-menu router>
          <el-menu-item index="/">
            <i class="el-icon-menu"></i>
            <span slot="title">开始使用</span>
          </el-menu-item>
          <el-submenu v-for="(value, title) of routes" :key="title" :index="title">
            <template slot="title"><i class="el-icon-message"></i>{{ title }}</template>
            <el-menu-item v-for="item of value" :key="item.path" :index="item.path">{{ item.meta.title }}</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { baseRouters } from '../router'
export default {
  data() {
    return {
      routes: {
        基础组件: baseRouters
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .container {
    overflow: hidden;

    .el-header {
      position: relative;
      z-index: 10;
      max-width: 100%;
      height: 60px;
      line-height: 60px;
      background: #fff;
      box-shadow: 0 2px 8px #f0f1f2;
    }

    .content {
      height: calc(100vh - 60px);

      .aside,
      .el-menu {
        height: 100%;
      }
    }
  }
</style>
