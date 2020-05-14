<template>
  <el-row :gutter="0" class="m-header">
    <el-col :span="9">
      <navbar />
    </el-col>
    <el-col :span="10" :offset="5">
        <geo />
        <!-- <user /> -->
    </el-col>
  </el-row>
</template>
<script>
import Geo from "./geo.vue";
import Navbar from "./nav.vue";
export default {
  components: {
    Geo,
    Navbar
  }
};
</script>
<style lang="scss">
@import "@/assets/css/public/layout.scss";
@import "@/assets/css/public/header/index.scss";
</style>