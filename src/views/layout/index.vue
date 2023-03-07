<template>
  <div class="layout-page">
    <div class="left-container"></div>
    <div class="right-container">
      <myHeader class="top-container" :user-info="userInfo"></myHeader>
      <div class="main">
        <el-card class="box-card">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>面经后台</el-breadcrumb-item>
            <el-breadcrumb-item>数据面板</el-breadcrumb-item>
          </el-breadcrumb>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
import { getUserInfo } from '@/api/user';
import myHeader from './compontents/myHeader.vue';

export default {
  name: 'layout-page',
  props: {},
  components: {
    myHeader,
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
    background: #333;
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
    }
  }
}
</style>
