<template>
  <div class="layout-page">
    <div class="left-container">
      <SideBar></SideBar>
    </div>
    <div class="right-container">
      <myHeader class="top-container" :user-info="userInfo"></myHeader>
      <div class="main">
        <el-card class="box-card">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>面经后台</el-breadcrumb-item>
            <el-breadcrumb-item>{{$route.meta.title}}</el-breadcrumb-item>
          </el-breadcrumb>
          <router-view></router-view>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line import/no-cycle
import { getUserInfo } from '@/api/user';
import myHeader from './compontents/myHeader.vue';
import SideBar from './compontents/sidebar.vue';

export default {
  name: 'layout-page',
  props: {},
  components: {
    myHeader,
    SideBar,
  },
  data() {
    return {
      userInfo: {},
    };
  },
  computed: {

  },
  watch: {},
  created() {
    this.getUserInfo();
  },
  mounted() {},
  methods: {
    async  getUserInfo() {
      const { data } = await getUserInfo();
      this.userInfo = data;
    },
  },
};
</script>

<style lang="less" scoped>
.layout-page {
  display: flex;
  height: 100vh;

  .left-container {
    width: 200px;
    flex: none;
    background: rgb(49, 58, 70);
  }
  .right-container {
    flex: 1;
    // background: skyblue;
    display: flex;
    flex-direction: column;
    .top-container {
      height: 60px;
      flex: none;
      background: #fff;
    }
    .main {
      flex: 1;
      background: #f5f5f5;
      // 给那个元素加overflow:auto或者scorll，就显示在那个标签身上
      overflow: auto;
    }
  }
}
</style>
