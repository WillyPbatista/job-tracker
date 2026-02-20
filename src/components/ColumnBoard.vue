<script setup lang="ts">
import { useJobStore } from '../stores/jobStore'
import type { JobStatus } from '../types/job'
import JobCard from './JobCard.vue'
import { computed } from 'vue'

const props = defineProps<{
  status: JobStatus
  title: string
}>()

const store = useJobStore()

const jobs = computed(() =>
  store.jobs.filter(j => j.status === props.status)
)

const handleDrop = (e: DragEvent) => {
  if (!e.dataTransfer) return

  const jobId = e.dataTransfer.getData('jobId')
  store.updateStatus(jobId, props.status)
}

const allowDrop = (e: DragEvent) => {
  e.preventDefault()
}
</script>

<template>
  <div
    class="bg-gray-100 rounded-2xl p-4 w-72 min-h-[400px]"
    @dragover="allowDrop"
    @drop="handleDrop"
  >
    <h2 class="font-bold mb-4 text-center">
      {{ title }}
    </h2>

    <JobCard
      v-for="job in jobs"
      :key="job.id"
      :job="job"
    />
  </div>
</template>
