<template>
  <div class="m-header">
    <el-row>
      <el-col>
        <top />
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <search />
      </el-col>
    </el-row>
  </div>
</template>
<script>
import top from "./top.vue";
import search from "./search.vue";
export default {
  components: {
    top,
    search
  }
};
</script>
<style lang="scss">
@import "@/assets/css/public/header/index.scss";
</style>