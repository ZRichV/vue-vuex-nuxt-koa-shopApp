<template>
  <div class="m-menu">
    <dl class="nav">
      <dt>All</dt>
      <dd v-for="(item,idx) in menu" :key="idx">
        <i :class="item.type" />
        {{ item.name }}
        <span class="arrow" />
      </dd>
    </dl>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menu: [
        {
          type: "food",
          name: "美食",
          child: [
            {
              title: "美食",
              child: ["代金卷", "甜点", "饮品", "火锅", "自助餐"]
            }
          ]
        },
        {
          type: "takeout",
          name: "外卖",
          child: [
            {
              title: "外卖",
              child: ["美团外卖"]
            }
          ]
        },
        {
          type: "hotel",
          name: "酒店",
          child: [
            {
              title: "酒店星级",
              child: ["经济型", "舒适/三星", "高档/四星", "豪华/五星"]
            }
          ]
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
</style>