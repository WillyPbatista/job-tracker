<script setup lang="ts">
import type { Job } from "../types/job";
import { useJobStore } from "../stores/jobStore";
import { Trash2 } from "lucide-vue-next";

const props = defineProps<{
  job: Job;
}>();

const store = useJobStore();

const handleDelete = () => {
  store.deleteJob(props.job.id);
};

const handleDragStart = (e: DragEvent) => {
  if (!e.dataTransfer) return;
  e.dataTransfer.setData("jobId", props.job.id);
};
</script>

<template>
  <div
    draggable="true"
    @dragstart="handleDragStart"
    class="bg-white dark:bg-gray-800 rounded-2xl shadow-md dark:shadow-lg p-4 mb-4 cursor-grab active:cursor-grabbing border-l-4 border-primary hover:shadow-xl hover:-translate-y-1 transition-all duration-200 relative"
  >
    <button
      @click.stop="handleDelete"
      class="absolute top-2 right-2 text-gray-300 dark:text-gray-500 hover:text-red-500 transition"
    >
      <Trash2 class="w-4 h-4" />
    </button>

<h3 class="font-semibold text-lg text-gray-800 dark:text-gray-100">
  {{ job.company }}
</h3>

    <p class="text-sm font-medium mt-2 text-primary">💰 ${{ job.salary }}</p>
  </div>
</template>
