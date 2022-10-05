<template>
  <el-button
    @click="showPatchBookModal = true"
    style="position: absolute; top: 3%; right: 14%"
    class="absolute right-0 w-10 h-10 mr-6 text-slate-900"
    type="primary"
  >
    <el-icon><EditPen /></el-icon>
  </el-button>
  <el-button
    @click="showDelBookModal = true"
    style="position: absolute; top: 3%; right: 18%"
    class="absolute right-0 w-10 h-10 mr-6 text-slate-900"
    type="primary"
  >
    <el-icon><Delete /></el-icon>
  </el-button>
  <router-link :to="{ name: 'books' }">
    <el-button
    style="position: absolute; top: 3%; left: 15%"
    class="absolute right-0 w-10 h-10 mr-6 text-slate-900"
    type="primary"
  >
    <el-icon><Back /></el-icon>
  </el-button>
  </router-link>
  <div class="container mx-auto">
    <div class="flex flex-col justify-center items-center">
      <el-card style="width: 80%">
        <div class="flex flex-col justify-center items-center h-auto" style="min-height: 600px">
          <img
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            class="image"
          />
          <p class="pt-5 text-lg font-semibold">名稱: {{ bookData.title }}</p>
          <p class="pt-2 text-base">作者: {{ bookData.author }}</p>
          <p class="pt-2 px-5 text-base">備註: {{ bookData.description }}</p>
        </div>
      </el-card>
    </div>
  </div>
  <PatchBookModal
    :data="bookData"
    @close="handlePatchBookComplete"
    v-model="showPatchBookModal"
  ></PatchBookModal>
  <DelBookModal @close="showDelBookModal = false" v-model="showDelBookModal"></DelBookModal>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { apiGetBookDetail } from "@/api";
import PatchBookModal from "@/components/PatchBookModal.vue";
import DelBookModal from "@/components/DelBookModal.vue";

const route = useRoute();
const bookData = ref({});
const showPatchBookModal = ref(false);
const showDelBookModal = ref(false);

const handlePatchBookComplete = () => {
  showPatchBookModal.value = false;
  getBookDetail();
};

const getBookDetail = () => {
  apiGetBookDetail(route.params.id).then((response) => {
    bookData.value = response.data;
  });
};

onMounted(() => {
  getBookDetail();
});
</script>
