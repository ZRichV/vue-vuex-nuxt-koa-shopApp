<template>
  <div class></div>
</template>
<script>
export default {
  layout: "blank",
  // 到达页面时自动执行
  middleware: async ctx => {
    const { status, data } = await ctx.$axios.get("/users/exit");
    if (status === 200 && data && data.code === 0) {
      window.location.href = "/";
    }
  }
};
</script>