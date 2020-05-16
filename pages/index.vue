<template>
  <div class="page-index">
    <el-row>
      <el-col :span="5">
        <emenu />
      </el-col>
      <el-col :span="19">
        <my-picture/>
      </el-col>
    </el-row>
    <el-row :span="24">
      <album/>
    </el-row>
  </div>
</template>

<script>
import Emenu from "@/components/index/menu.vue";
import MyPicture from "@/components/index/picture.vue";
import Album from "@/components/index/Album.vue";
export default {
  components: {
    Emenu,
    MyPicture,
    Album
  }
};
</script>

<style lang="scss">
@import "@/assets/css/index/index.scss";
</style>
