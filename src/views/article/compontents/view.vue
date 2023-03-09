<template>
  <div>
    <el-drawer
      size="50%"
      title="我是标题"
      :visible="isShow"
      direction="rtl"
      :before-close="handleClose"
    >
      <span>查看</span>
    </el-drawer>
  </div>
</template>

<script>
export default {
  name: 'view-com',
  props: {
    isShow: {
      type: Boolean,
      required: true,
    },
  },
  components: {},
  data() {
    return {
      // isShow: true,
    };
  },
  computed: {},
  watch: {},
  created() {
  },
  mounted() {},
  methods: {
    show(articleId) {
      console.log('发生请求！！！！！');
      console.log(articleId);
    },
    handleClose() {
      // this.isShow = false;  // 报错的原因：父通过props传子是单向数据流，不能直接改变父组件的变量
      // this.$emit('我想改变isShow的值')
      this.$emit('close');
    },
  },
};
</script>

<style lang="less" scoped>
</style>
