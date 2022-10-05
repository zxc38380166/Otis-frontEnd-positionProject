<template>
  <el-dialog title="編輯書本" width="70%" align-center style="height: 600px">
    <el-form :label-position="'top'" label-width="50px" :model="bookData" style="max-width: 100%">
      <el-form-item label="名稱 :">
        <el-input v-model="bookData.title" />
      </el-form-item>
      <el-form-item label="作者 :">
        <el-input v-model="bookData.author" />
      </el-form-item>
      <el-form-item label="備註 :" prop="desc">
        <el-input cols="100" rows="10" v-model="bookData.description" type="textarea" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="emit('close')">取消</el-button>
        <el-button @click="patchBook" type="primary" class="text-black bg-blue-400">編輯</el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script setup>
import { ref, watch } from "vue";
import { apiPatchBook } from "@/api";
import { ElNotification } from "element-plus";
import { useRoute } from "vue-router";

const emit = defineEmits(["close"]);
const props = defineProps(["data"]);
const route = useRoute();

const bookData = ref({
  title: "",
  author: "",
  description: "",
});

const patchBook = () => {
  const verifyData = ["title", "author"];
  const verifySuccess = verifyData.every((item) => bookData.value[item].length > 0);
  if (!verifySuccess) {
    ElNotification({ message: "名稱與作者欄位為必填", type: "error" });
    return;
  } else {
    apiPatchBook(route.params.id, bookData.value)
      .then((response) => {
        ElNotification({ message: "編輯成功", type: "success" });
        emit("close");
      })
      .catch(() => {
        ElNotification({ message: "編輯失敗", type: "error" });
      });
  }
};

watch(
  () => props.data,
  (value) => {
    bookData.value = { ...value };
  }
);
</script>
