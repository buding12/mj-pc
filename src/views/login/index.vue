<template>
  <div class="login-page">
    <el-card class="box-card">
      <header>黑马面经</header>
      <el-form
        ref="loginForm"
        class="box-banner"
        :rules="rules"
        label-position="top"
        label-width="80px"
        :model="formData"
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model="formData.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="formData.password" type="password"></el-input>
        </el-form-item>
        <!-- 登录 -->
        <el-form-item class="btn-box">
          <el-button type="primary" @click="submit">登录</el-button>
          <el-button>重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
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
      formData: {
        username: 'admin8',
        password: 'admin',
      },
      // 校验规则
      rules: {
        username: [
          { required: true, message: '请输入用户名称', trigger: 'blur' },
          {
            pattern: /^[0-9a-z]{3,10}$/i, message: '长度在 3 到 10 个字符', trigger: 'blur',
          },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'change' },
          {
            min: 3, max: 8, message: '长度在 3 到 10 个字符', trigger: 'blur',
          },
        ],
      },
    };
  },
  computed: {},
  watch: {},
  created() {
    // login({
    //   username: 'admin5',
    //   password: 'admin',
    // });
  },
  mounted() {},
  methods: {
    submit() {
      this.$refs.loginForm.validate(async (flag) => {
        if (!flag) return;
        // 发送请求
        const { data } = await login(this.formData);
        // console.log(data.token);
        this.$store.commit('SET_TOKEN', data.token);
      });
    },
  },
};
</script>

<style lang="less" scoped>
.login-page {
  // 在css中要使用 ~@ 代表 src根目录
  background: url("~@/assets/svg/login-bg.svg") no-repeat;
  height: 100vh;
  background-position: center;
  background-size: cover;
}
::v-deep {
  .el-card__body,
  .el-main {
    padding: 0 !important;
  }
}
.box-card {
  width: 480px;
  height: 390px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  header {
    height: 80px;
    line-height: 80px;
    background-color: #727cf5;
    font-size: 20px;
    text-align: center;
    color: #fff;
  }
  .box-banner {
    padding: 0 40px;
    margin-top: 20px;
    .btn-box{
      margin-top: 20px;
      text-align: center;
    }
  }
  ::v-deep {
    .el-form--label-top .el-form-item__label {
      padding: 0 !important;
    }
  }
  .el-form-item{
    margin-bottom: 10px;
  }
}
</style>
