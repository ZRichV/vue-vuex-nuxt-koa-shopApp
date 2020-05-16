<template>
  <div class="slide">
    <el-carousel :interval="4000" type="card" height="240px">
      <el-carousel-item v-for="item in list" :key="item.img">
        <img :src="item.img" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        {
          url: "#1",
          img:
            "http://img3.imgtn.bdimg.com/it/u=1703982555,712914228&fm=26&gp=0.jpg"
        },
        {
          url: "#2",
          img:
            "http://img0.imgtn.bdimg.com/it/u=1213740030,82626414&fm=26&gp=0.jpg"
        },
        {
          url: "#3",
          img: "http://img1.imgtn.bdimg.com/it/u=3761237455,2008394104&fm=26&gp=0.jpg"
        },
        {
          url: "#4",
          img: "http://img5.imgtn.bdimg.com/it/u=889570531,4175031920&fm=11&gp=0.jpg"
        },
        {
          url: "#5",
          img: "http://img1.imgtn.bdimg.com/it/u=3874134491,1582708806&fm=11&gp=0.jpg"
        },
        {
          url: "#6",
          img: "http://img3.imgtn.bdimg.com/it/u=3519849174,4136043709&fm=11&gp=0.jpg"
        }
      ]
    };
  }
};
</script>
