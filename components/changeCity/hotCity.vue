<template>
  <div class="m-hcity">
    <dl>
      <dt>热门城市：</dt>

      <dd v-for="item in list" :key="item.id" @click="selectCity">
        <nuxt-link to="/">{{ item.name==='市辖区'?item.province:item.name }}</nuxt-link>
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: []
    };
  },
  async mounted() {
    const {
      status,
      data: { hots }
    } = await this.$axios.get("/geo/hotCity");
    if (status === 200) {
      this.list = hots;
    }
  },
  methods: {
    async selectCity(e) {
      this.$store.dispatch('geo/setPosition', {
        city: e.target.textContent
      });
      const {
        status,
        data: { result }
      } = await this.$axios.get("/search/hotPlace", {
        params: {
          city: e.target.textContent.replace('市', '')
        }
      });
      this.$store.dispatch("home/setHotPlace", status === 200 ? result : []);
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/changeCity/hot.scss";
</style>
