<script setup lang="ts">
import ColumnBoard from '../components/ColumnBoard.vue';
import { onMounted } from 'vue';
import { useJobStore } from '../stores/jobStore';

const store = useJobStore()

onMounted(() => {
  store.addJob({
  company: 'Google',
  position: 'Frontend Dev',
  salary: 5000,
  status: 'applied'
})

})

</script>

<template>
  <div class="p-8">
    <h1 class="text-3xl font-bold mb-8 text-center">
      Job Application Tracker
    </h1>

    <div class="flex gap-6 overflow-x-auto">
      <ColumnBoard status="applied" title="📌 Applied" />
      <ColumnBoard status="interview" title="📞 Interview" />
      <ColumnBoard status="technical" title="🧠 Technical Test" />
      <ColumnBoard status="offer" title="🎉 Offer" />
      <ColumnBoard status="rejected" title="❌ Rejected" />
    </div>
  </div>
</template>
