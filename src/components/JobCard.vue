<script setup lang="ts">
import type { Job } from '../types/job'

const props = defineProps<{
  job: Job
}>()

const handleDragStart = (e: DragEvent) => {
  if (!e.dataTransfer) return
  e.dataTransfer.setData('jobId', props.job.id)
  e.dataTransfer.effectAllowed = 'move'
}
</script>

<template>
  <div
    draggable="true"
    @dragstart="handleDragStart"
    class="bg-white rounded-xl shadow p-4 mb-4 cursor-grab active:cursor-grabbing"
  >
    <h3 class="font-semibold text-lg">
      {{ job.company }}
    </h3>

    <p class="text-sm text-gray-600">
      {{ job.position }}
    </p>

    <p class="text-sm font-medium mt-2">
      💰 ${{ job.salary }}
    </p>
  </div>
</template>
