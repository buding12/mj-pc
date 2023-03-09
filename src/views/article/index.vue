<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <div class="article-page">
    <header>
      <div class="left">共{{total}}条记录</div>
      <div class="right">
        <el-button type="primary" round size="mini" @click="addArticle">
          <i class="el-icon-plus"></i>
          添加面经
        </el-button>
      </div>
    </header>
    <!-- 表格 -->
    <div class="tab-box">
      <el-table :data="tableData" stripe style="width: 99%">
        <el-table-column prop="stem" label="标题" width="300"></el-table-column>
        <el-table-column prop="creator" label="作者" width="120"></el-table-column>
        <el-table-column prop="likeCount" label="点赞" width="80"></el-table-column>
        <el-table-column prop="views" label="浏览" width="80"></el-table-column>
        <el-table-column prop="createdAt" label="创建日期" width="200"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <div class="handler-box">
              <i @click="showView(scope.row.id)" class="el-icon-view"></i>
              <i
                @click="isShowDrawerEdit = true;
                articleId=scope.row.id"
                class="el-icon-edit-outline"
              ></i>
              <i class="el-icon-delete"></i>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 分页 -->
    <div class="pagination-box">
      <el-pagination
        background
        layout="prev, pager, next"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage"
        :page-size="pageSize"
        :total="total"
      ></el-pagination>
    </div>
    <!-- 编辑弹窗 -->
    <view-com
      ref="ViewCom"
      v-if="isShowDrawerView"
      :is-show="isShowDrawerView"
      @close="isShowDrawerView = false"
      :article-id="articleId"
      @updateData="getArticleList"
    ></view-com>
    <edit-com
      v-if="isShowDrawerEdit"
      :is-show="isShowDrawerEdit"
      @close="isShowDrawerEdit = false"
      :article-id="articleId"
    />
  </div>
</template>

<script>
// eslint-disable-next-line import/no-cycle
import { getArticleList } from '@/api/article';
import EditCom from './compontents/edit.vue';
import ViewCom from './compontents/view.vue';

export default {
  name: 'article-page',
  props: {},
  components: {
    EditCom,
    ViewCom,
  },
  data() {
    return {
      tableData: [],
      total: 0,
      pageSize: 5,
      currentPage: 1,
      isShowDrawerView: false,
      isShowDrawerEdit: false,
      articleId: null,
    };
  },
  computed: {},
  watch: {},
  created() {
    this.getArticleList();
  },
  mounted() {},
  methods: {
    handleCurrentChange(val) {
      this.currentPage = val;
      this.getArticleList();
    },
    async getArticleList() {
      const { data } = await getArticleList({
        current: this.currentPage,
        pageSize: this.pageSize,
      });
      // console.log(data);
      this.total = data.total;
      this.tableData = data.rows;
    },
    showView(articleId) {
      this.isShowDrawerView = true;
      this.$refs.ViewCom.show(articleId);
    },
    addArticle() {
      this.articleId = null;
      this.isShowDrawerEdit = true;
    },
  },
};
</script>

<style lang="less" scoped>
.article-page {
  background: #fff;
  border: 1px solid rgb(235, 238, 245);
  // height: 300px;
  margin: 20px 15px;
  border-radius: 5px;
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    padding: 0 20px;
  }
  .pagination-box {
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .tab-box {
    padding: 0 20px;
    .handler-box {
      margin: 0 15px;
      font-size: 20px;
    }
  }
}
</style>
