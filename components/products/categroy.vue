<template>
  <div class="m-product-categroy">
    <dl class="classic">
      <dt>分类</dt>
      <dt>全部</dt>
      <dd v-for="(item, idx) in types" :key="idx">
        <my-select :name="item.type" :list="item.module" />
      </dd>
    </dl>
    <dl class="classic">
      <dt>分类</dt>
      <dt>全部</dt>
      <dd v-for="(item, idx) in areas" :key="idx">
        <my-select :name="item.type" :list="item.module" />
      </dd>
    </dl>
  </div>
</template>
<script>
import MySelect from "./myselect.vue";
export default {
  components: {
    MySelect
  },
  props: {
    types: {
      type: Array,
      default() {
        return [];
      }
    },
    areas: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>
<style lang="scss">
</style>