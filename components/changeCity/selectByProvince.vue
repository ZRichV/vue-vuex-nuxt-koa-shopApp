<template>
  <div class="m-iselect">
    <span class="name">按省份选择:</span>
    <el-select v-model="pvalue" placeholder="省份">
      <el-option
        v-for="item in province"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
    <el-select v-model="cvalue" :disabled="!city.length" placeholder="城市">
      <el-option v-for="item in city" :key="item.value" :label="item.label" :value="item.value" />
    </el-select>
    <span class="name">请输入城市：</span>
    <el-autocomplete
      v-model="input"
      :fetch-suggestions="querySearchAsync"
      placeholder="请输入城市中文或拼音"
      @select="handleSelect"
    />
  </div>
</template>
<script>
import _ from "lodash";
export default {
  data() {
    return {
      province: [],
      pvalue: "",
      city: [],
      cvalue: "",
      input: "",
      // 全国城市列表
      cities: []
    };
  },
  watch: {
    async pvalue(newPvalue) {
      const self = this;
      const {
        status,
        data: { city }
      } = await self.$axios.get(`/geo/province/${newPvalue}`);
      if (status === 200) {
        self.city = city.map(item => {
          return {
            value: item.id,
            label: item.name
          };
        });
        self.cvalue = "";
      }
    }
  },
  async mounted() {
    const self = this;
    const {
      status,
      data: { province }
    } = await self.$axios.get("/geo/province");
    if (status === 200) {
      self.province = province.map(item => {
        return {
          value: item.id,
          label: item.name
        };
      });
    }
  },
  methods: {
    // 加防抖；传入的第一个参数是要搜索的内容，
    // 第二个参数是回调（其参数是个对象数组，每一项的value值将显示在筛选框中/**
    // 当用户输入的时候，延时处理
    querySearchAsync: _.debounce(async function(query, cb) {
      const self = this;
      if (self.cities.length) {
        cb(self.cities.filter(item => item.value.includes(query)));
      } else {
        const {
          status,
          data: { city }
        } = await self.$axios.get("/geo/city");
        if (status === 200) {
          self.cities = city.map(item => {
            return {
              value: item.name
            };
          });
          cb(self.cities.filter(item => item.value.includes(query)));
        } else {
          const res = [];
          cb(res);
        }
      }
    }, 300),
    // 搜索框和联动筛选公用的切换store中城市的方法，没有实现跳到首页功能
    handleSelect(param) {
      let city = "";
      if (typeof param === "string") {
        city = this.city.filter(item => item.value === param)[0].label;
      } else {
        city = param.value;
      }
      this.$store.dispatch("geo/setPosition", {
        city
      });
    }
  }
};
</script>
<style lang="scss">
@import "@/assets/css/changeCity/iselect.scss";
</style>