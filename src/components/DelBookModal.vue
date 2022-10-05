<template>
  <el-dialog title="確認提示框" width="30%" center>
    <span>確定要將此書本刪除嗎? (刪除後將導轉回書本列表)</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="emit('close')">取消</el-button>
        <el-button @click="delBook" type="primary" class="text-black bg-blue-400">確定</el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script setup>
import { apiDelBook } from "@/api";
import { useRouter, useRoute } from "vue-router";
import { ElNotification } from "element-plus";

const router = useRouter();
const route = useRoute();
const emit = defineEmits(["close"]);

const delBook = () => {
  apiDelBook(route.params.id)
    .then((response) => {
      ElNotification({ message: "刪除成功", type: "success" });
      router.push({ name: "books" });
    })
    .catch(() => {
      ElNotification({ message: "刪除失敗", type: "error" });
    });
};
</script>
