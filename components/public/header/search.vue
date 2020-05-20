<template>
  <div class="search-panel">
    <el-row>
      <el-row class="m-header-searchbar">
        <el-col :span="3" class="left"></el-col>
        <el-col :span="15" class="center">
          <div class="wrapper">
            <el-input
              v-model="search"
              placeholder="Search Goods"
              @focus="focus"
              @blur="blur"
              @input="input"
            ></el-input>
            <button class="el-button el-button-Info">
              <i class="el-icon-search"></i>
            </button>
            <dl v-if="isHotPlace" class="hotPlace">
              <dt>Hot Search</dt>
              <dd v-for="(item,idx) in $store.state.home.hotPlace.slice(0, 5)" :key="idx">{{ item.name }}</dd>
            </dl>
            <dl v-if="isSearchList" class="searchList">
              <dd v-for="(item,idx) in searchList" :key="idx">{{ item.name }}</dd>
            </dl>
          </div>
          <p class="suggest">
            <a v-for="(item,idx) in $store.state.home.hotPlace.slice(0, 5)" :key="idx" href="#">{{ item.name }}</a>
          </p>
          <ul class="nav">
            <li>
              <nuxt-link to="/" class="takeout">杰伦</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/" class="movie">范特西</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/" class="hotel">八度空间</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/" class="apartment">叶惠美</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/" class="business">七里香</nuxt-link>
            </li>
          </ul>
        </el-col>
        <el-col :span="6" class="right"></el-col>
      </el-row>
    </el-row>
  </div>
</template>

<script>
import _ from "lodash";
export default {
  data() {
    return {
      search: "",
      isFocus: false,
      hotPlace: [],
      searchList: [],
      hotPlaceList: []
    };
  },
  computed: {
    isHotPlace() {
      return this.isFocus && !this.search;
    },
    isSearchList() {
      return this.isFocus && this.search;
    }
  },
  async mounted() {
    const that = this;
    const {
      status,
      data: { result }
    } = await that.$axios.get("search/hotPlace", {
      params: {
        city: that.$store.state.geo.position.city.replace("市", "")
      }
    });
    if (status === 200) {
      that.hotPlaceList = result.slice(0, 5);
    } else {
      console.log("error!!!");
    }
  },
  methods: {
    focus() {
      this.isFocus = true;
    },
    blur() {
      const self = this;
      setTimeout(function() {
        self.isFocus = false;
      }, 200);
    },
    input: _.debounce(async function() {
      const self = this;
      const city = self.$store.state.geo.position.city.replace("市", "");
      self.searchList = [];
      const {
        status,
        data: { top }
      } = await self.$axios.get("/search/top", {
        params: {
          input: self.search,
          city
        }
      });
      if (status === 200 && top) {
        self.searchList = top.slice(0, 10);
      }
    }, 300)
  }
};
</script>

<style lang="scss" scoped>
</style>