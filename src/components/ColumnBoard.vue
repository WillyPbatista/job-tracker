<script setup lang="ts">
import { useJobStore } from "../stores/jobStore";
import type { JobStatus } from "../types/job";
import JobCard from "./JobCard.vue";
import { computed } from "vue";

const props = defineProps<{
  status: JobStatus;
  title: string;
}>();

const store = useJobStore();

const jobs = computed(() =>
  store.jobs.filter((j) => j.status === props.status),
);

const handleDrop = (e: DragEvent) => {
  if (!e.dataTransfer) return;

  const jobId = e.dataTransfer.getData("jobId");
  store.updateStatus(jobId, props.status);
};

const allowDrop = (e: DragEvent) => {
  e.preventDefault();
};
</script>

<template>
  <div
    class="bg-white/70 backdrop-blur-md border border-purple-100 rounded-3xl p-5 w-80 min-h-[450px] shadow-xl transition"
    @dragover="allowDrop"
    @drop="handleDrop"
  >
<h2 class="font-bold mb-5 text-center text-primary text-lg tracking-wide">
  {{ title }}
</h2>

    <JobCard v-for="job in jobs" :key="job.id" :job="job" />
  </div>
</template>
