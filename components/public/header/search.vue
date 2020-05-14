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
              <dd v-for="(item,idx) in hotPlace" :key="idx">{{ item }}</dd>
            </dl>
            <dl v-if="isSearchList" class="searchList">
              <dd v-for="(item,idx) in searchList" :key="idx">{{ item }}</dd>
            </dl>
          </div>
          <p class="suggset">
            <a href="#">土耳其冰淇淋</a>
            <a href="#">告白气球</a>
            <a href="#">爱情废材</a>
          </p>
          <ul class="nav">
            <li>
              <nuxt-link to="/" class="takeout">阴阳山</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/" class="movie">窃爱</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/" class="hotel">算什么男人</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/" class="apartment">天涯过客</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/" class="business">天涯过客</nuxt-link>
            </li>
          </ul>
        </el-col>
        <el-col :span="6" class="right"></el-col>
      </el-row>
    </el-row>
  </div>
</template>

<script>
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
    input() {
      console.log("jjj");
    }
  }
};
</script>

<style lang="scss" scoped>
</style>