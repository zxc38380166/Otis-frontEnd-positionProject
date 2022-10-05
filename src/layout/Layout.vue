<template>
  <el-container class="layout_container">
    <el-header>
      <div class="flex justify-center items-center h-20 text-4xl relative">書本列表</div>
    </el-header>
    <el-main class="" style="height: 100%"><router-view></router-view></el-main>
  </el-container>
</template>
<style>
.layout_container {
  background-image: url("https://images.pexels.com/photos/4040654/pexels-photo-4040654.jpeg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
}
</style>
