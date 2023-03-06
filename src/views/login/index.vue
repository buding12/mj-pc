<template>
  <div class="login-page">
    login
  </div>
</template>

<script>
import { login } from '@/api/user';

export default {
  name: 'login-page',
  props: {},
  components: {},
  data() {
    return {

    };
  },
  computed: {},
  watch: {},
  created() {
    login({
      username: 'admin5',
      password: 'admin',
    });
  },
  mounted() {},
  methods: {

  },
};
</script>

<style lang="less" scoped>
.login-page {
  // 在css中要使用 ~@ 代表 src根目录
  background: url('~@/assets/svg/login-bg.svg') no-repeat;
  height: 100vh;
  background-position: center;
  background-size: cover;
}
</style>
