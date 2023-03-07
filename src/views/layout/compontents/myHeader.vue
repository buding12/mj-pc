<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<!-- eslint-disable vuejs-accessibility/alt-text -->
<template>
  <header>
    <div class="left">黑马面经运营后台</div>
    <div class="right">
      <div class="user-box">
        <img class="avatar" :src="userInfo.avatar" alt />
        <span>{{userInfo.username}}</span>
      </div>
      <div class="logout-box" @click="logout">
        <i class="el-icon-switch-button"></i>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'my-header',
  props: {
    userInfo: {
      type: Object,
      // default: {}, // 如果是引用数据类型，默认值不能直接赋值
      default: () => ({}),
    },
  },
  components: {},
  data() {
    return {

    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    logout() {
      // 1.清空token
      this.$store.commit('DEL_TOKEN');
      // 跳转到登录页面
      this.$router.replace('/login');
    },
  },
};
</script>

<style lang="less" scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.left {
  margin-left: 20px;
}
.right {
  display: flex;
  .user-box {
    display: flex;
    align-items: center;
    background: #fafbfd;
    height: 60px;
    border: 1px solid #f1f3fa;
    padding: 0 15px;
    .avatar {
      width: 36px;
      height: 36px;
      margin-right: 15px;
    }
  }
  .logout-box {
    width: 70px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    i {
      font-size: 24px;
      color: #888;
    }
  }
}
</style>
