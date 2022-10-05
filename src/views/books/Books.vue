<template>
  <el-button
    style="position: absolute; top: 2%; right: 7%"
    @click="showAddBookModal = true"
    class="absolute right-0 w-10 h-10 mr-6 text-slate-900"
    type="primary"
  >
    <el-icon><Plus /></el-icon>
  </el-button>
  <div class="container mx-auto">
    <div class="grid grid-cols-2 gap-4 pt-3 pb-5">
      <el-card
        @contextmenu.prevent.native="openDelMenu($event)"
        class="card_bookList mt-1"
        v-for="(item, index) in bookListData"
        :class="[index % 2 === 0 ? 'ml-4' : 'mr-4']"
      >
        <router-link :to="{ path: `/books/${item.id}` }">
          <div class="flex flex-col justify-center items-center">
            <img
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              class="image"
              width="100"
              height="100"
            />
            <p class="pt-5 text-sm font-semibold">{{ item.title }}</p>
            <p class="pt-2 text-xs">{{ item.author }}</p>
            <p class="pt-2 px-5 text-xs">{{ item.description }}</p>
          </div>
        </router-link>
      </el-card>
    </div>
  </div>
  <AddBookModal @close="handleAddBookComplete" v-model="showAddBookModal"></AddBookModal>
</template>

<script setup>
import AddBookModal from "@/components/AddBookModal.vue";
import { apiGetBooks } from "@/api";
import { onMounted, ref } from "vue";

const showAddBookModal = ref(false);
const bookListData = ref([]);

const handleAddBookComplete = () => {
  showAddBookModal.value = false;
  getBooks();
};

const getBooks = () => {
  apiGetBooks().then((response) => {
    bookListData.value = response.data;
  });
};

onMounted(() => {
  getBooks();
});

</script>
<style>
.card_bookList:hover {
  box-shadow: 3px 3px 5px 6px #cccccc;
}
</style>
