<template>
  <div class="m-menu">
    <dl class="nav" @mouseleave="mouseleave">
      <dt>All Album</dt>
      <dd v-for="(item,idx) in $store.state.home.menu" :key="idx" @mouseenter="mouseenter">
        <i :class="item.type" />
        {{ item.name }}
        <span class="arrow" />
      </dd>
    </dl>
    <div v-if="hover" class="detail" @mouseenter="sover" @mouseleave="sout">
      <template v-for="(item, idx) in curdetail.child">
        <h4 :key="idx">{{ item.title }}</h4>
        <span v-for="v in item.child" :key="v">{{ v }}</span>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      hover: "",
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
  },
  computed: {
    curdetail() {
      return this.$store.state.home.menu.filter(item => item.type === this.hover)[0];
    }
  },
  methods: {
    mouseleave() {
      const self = this;
      self._timer = setTimeout(function() {
        self.hover = "";
      }, 150);
    },
    mouseenter(e) {
      this.hover = e.target.querySelector("i").className;
    },
    sover() {
      clearTimeout(this._timer);
    },
    sout() {
      this.hover = "";
    }
  }
};
</script>
<style lang="scss" scoped>
</style>