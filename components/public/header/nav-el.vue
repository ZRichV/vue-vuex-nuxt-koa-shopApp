<template>
  <el-menu class="el-menu-demo" background-color="#F5F7FA" text-color="#606266" mode="horizontal">
    <el-submenu index="1">
      <template slot="title">
        <nuxt-link to="/my">My Goods</nuxt-link>
      </template>
      <el-menu-item index="1-1">
        <nuxt-link to="/order">Orders</nuxt-link>
      </el-menu-item>
      <el-menu-item index="1-2">
        <nuxt-link to="/order">Collections</nuxt-link>
      </el-menu-item>
      <el-menu-item index="1-3">
        <nuxt-link to="/order">Voucher</nuxt-link>
      </el-menu-item>
      <el-menu-item index="1-4">
        <nuxt-link to="/order">Setting</nuxt-link>
      </el-menu-item>
    </el-submenu>
    <el-menu-item index="2" disabled>
      <nuxt-link to="/order">App</nuxt-link>
    </el-menu-item>
    <el-submenu index="3">
      <template slot="title">
        <nuxt-link to="/center">User Center</nuxt-link>
      </template>
      <el-menu-item index="3-1">
        <nuxt-link to="/userCenter">Login Center</nuxt-link>
      </el-menu-item>
      <el-menu-item index="3-2">
        <nuxt-link to="/coop">Cooperation</nuxt-link>
      </el-menu-item>
      <el-menu-item index="3-3">
        <nuxt-link to="/wap">Free Open Shop</nuxt-link>
      </el-menu-item>
      <el-menu-item index="3-4">
        <nuxt-link to="/kaipiao">Apply Invoice</nuxt-link>
      </el-menu-item>
    </el-submenu>
    <el-submenu index="4">
      <template slot="title">
        <nuxt-link to="/site">Web Nav</nuxt-link>
      </template>
      <el-submenu index="4-1">
        <template slot="title">Travel</template>
        <el-menu-item index="4-1-1">Flight Ticket</el-menu-item>
        <el-menu-item index="4-1-2">Hotel</el-menu-item>
      </el-submenu>
      <el-submenu index="4-2">
        <template slot="title">Food</template>
        <el-menu-item index="4-2-1">Meet</el-menu-item>
        <el-menu-item index="4-2-2">Fish</el-menu-item>
      </el-submenu>
      <el-submenu index="4-3">
        <template slot="title">Amusement</template>
        <el-menu-item index="4-2-1">Movie</el-menu-item>
        <el-menu-item index="4-2-2">Singing</el-menu-item>
      </el-submenu>
      <el-submenu index="4-4">
        <template slot="title">Phone App</template>
        <el-menu-item index="4-4-1">
          <a href="#">
            <img
              src="//s0.meituan.net/bs/fe-web-meituan/2d53095/img/appicons/meituan.png"
              alt="美团app"
            />
          </a>
        </el-menu-item>
        <el-menu-item index="4-4-2">
          <a href="#">
            <img
              src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/waimai.png"
              alt="外卖app"
            />
          </a>
        </el-menu-item>
        <el-menu-item index="4-4-3">
          <a href="#">
            <img
              src="https://p0.meituan.net/travelcube/162c3308d9622f6d9cfaa49e60be4dca8573.png"
              alt="民宿app"
            />
          </a>
        </el-menu-item>
        <el-menu-item index="4-4-4">
          <a href="#">
            <img
              src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/dianping.png"
              alt="点评app"
            />
          </a>
        </el-menu-item>
        <el-menu-item index="4-4-4">
          <a href="#">
            <img
              src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/maoyan.png"
              alt="猫眼app"
            />
          </a>
        </el-menu-item>
      </el-submenu>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {};
</script>
<style scoped>
.el-menu {
    height:10px;
    font-size: 12px;
}
.el-submenu__title{
    font-size: 12px;
}
.el-menu-item {
  background-color: #f5f7fa !important;
  font-size: 12px;
}
.el-menu-item:hover {
  outline: 0 !important;
  color: #ff8d02 !important;
}
.el-menu-item.is-active {
  color: #f5f7fa !important;
  background: #f5f7fa !important;
}
.el-submenu__title:focus,
.el-submenu__title:hover {
  outline: 0 !important;
  color: #ff8d02 !important;
  background: none !important;
}
</style>