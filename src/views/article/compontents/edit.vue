<!-- eslint-disable import/no-extraneous-dependencies -->
<template>
  <div>
    <el-drawer
      :wrapperClosable="false"
      size="50%"
      :title="articleId ? '修改面经' : '新增面经'"
      :visible="isShow"
      direction="rtl"
      :before-close="handleClose"
    >
      <el-form
        :model="formData"
        :rules="rules"
        ref="editForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="标题" prop="stem">
          <el-input v-model="formData.stem"></el-input>
        </el-form-item>

        <el-form-item label="内容" prop="content">
          <quill-editor
            :class="{red: isWrongContent}"
            @blur="validateContent"
            v-model="formData.content"
          />
          <!-- <el-input v-model="formData.content"></el-input> -->
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submit">确定</el-button>
          <el-button @click="cancel">取消</el-button>
        </el-form-item>
      </el-form>
    </el-drawer>
  </div>
</template>

<script>
import { getArticleInfo, updateArticleInfo, addArticleInfo } from '@/api/article';

// eslint-disable-next-line import/no-extraneous-dependencies
import 'quill/dist/quill.core.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'quill/dist/quill.snow.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'quill/dist/quill.bubble.css';

// eslint-disable-next-line import/no-extraneous-dependencies
import { quillEditor } from 'vue-quill-editor';

export default {
  name: 'edit-com',
  props: {
    isShow: {
      type: Boolean,
      required: true,
    },
    articleId: [String, null],
  },
  components: {
    quillEditor,
  },
  data() {
    return {
      isWrongContent: false,
      // isShow: true,
      formData: {
        // formData里的属性名不能随便声明，原因：等会我们编辑后提交数据时，会直接把整个formData发送给服务器
        id: '',
        stem: '',
        content: '',
      },
      rules: {
        stem: [
          { required: true, message: '请输入标题', trigger: 'blur' },
        ],
        content: [
          { required: true, message: '请输入内容', trigger: 'blur' },
        ],
      },
    };
  },
  computed: {},
  watch: {},
  created() {
    this.getArticleInfo();
  },
  mounted() {
    console.log(222222);
  },
  destroyed() {
    console.log('毁灭吧！！！！！');
  },
  methods: {
    validateContent() {
      this.$refs.editForm.validateField('content', (flag) => {
        if (flag) {
          this.isWrongContent = true;
        } else {
          this.isWrongContent = false;
        }
      });
    },
    submit() {
      this.$refs.editForm.validate(async (flag) => {
        if (!flag) return;
        if (this.articleId) {
        // 如果有id 就说明是编辑，所以要调用编辑的接口
          const { data } = await updateArticleInfo({
            id: this.formData.id,
            stem: this.formData.stem,
            content: this.formData.content,
          });
          console.log(data);
        } else {
        // 如果没有id 就说明是新增，所以要调用新增的接口
          await addArticleInfo({
            stem: this.formData.stem,
            content: this.formData.content,
          });
          // console.log(data);
        }
        this.$emit('close');
        this.$emit('updateData');
      });
    },
    cancel() {
      if (this.articleId) {
        // 编辑
        this.getArticleInfo();
      } else {
        // 新增 调用element-ui的form组件身上的resetFields() 即可清空表单
        this.$refs.editForm.resetFields();
      }
    },
    async  getArticleInfo() {
      if (this.articleId === null) return;
      const { data } = await getArticleInfo(this.articleId);
      this.formData = data;
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
.red {
  border: 1px solid red;
}
</style>
