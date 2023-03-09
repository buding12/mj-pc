<template>
  <div class="side-bar">
    <div class="top">黑马面板</div>
    <el-menu
      :router="true"
      :default-active="activePage"
      class="el-menu-vertical-demo"
      background-color="#313a46"
      text-color="rgb(131, 145, 162)"
      active-text-color="#fff"
    >
      <el-menu-item index="/layout/home">
        <i class="el-icon-pie-chart"></i>
        <span slot="title">数据看板</span>
      </el-menu-item>
      <el-menu-item index="/layout/article">
        <i class="el-icon-notebook-1"></i>
        <span slot="title">面经管理</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'side-bar',
  props: {},
  components: {},
  data() {
    return {
      activePage: '',
    };
  },
  computed: {},
  watch: {
    $route: {
      // deep: true,
      immediate: true,
      handler(val) {
        this.activePage = val.fullPath;
      },
    },
  },
  created() {},
  mounted() {},
  methods: {

  },
};
</script>

<style lang="less" scoped>
.side-bar {
  .top {
    color: #fff;
    font-size: 20px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    margin-bottom: 20px;
  }
}
::v-deep {
  .el-menu {
    border-right: solid 1px #313a46;
  }
}
</style>
