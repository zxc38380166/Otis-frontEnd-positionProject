<template>
  <el-dialog title="新增書本" width="70%" align-center style="height: 600px">
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
        <el-button @click="addBook" type="primary" class="text-black bg-blue-400">新增</el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script setup>
import { reactive } from "vue";
import { apiAddBook } from "@/api";
import { ElNotification } from "element-plus";

const emit = defineEmits(["close"]);

const bookData = reactive({
  title: "",
  author: "",
  description: "",
});

const addBook = () => {
  const verifyData = ["title", "author"];
  const verifySuccess = verifyData.every((item) => bookData[item].length > 0);
  if (!verifySuccess) {
    ElNotification({ message: "名稱與作者欄位為必填", type: "error" });
    return;
  } else {
    apiAddBook(bookData)
      .then((response) => {
        ElNotification({ message: "新增成功", type: "success" });
        emit("close");
      })
      .catch(() => {
        ElNotification({ message: "新增失敗", type: "error" });
      });
  }
};
</script>
