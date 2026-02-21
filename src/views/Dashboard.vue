<script setup lang="ts">
import ColumnBoard from "../components/ColumnBoard.vue";
import AddJobModal from "../components/AddJobModal.vue";



</script>

<template>

  <div
    class="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 p-10"
  >
    <div class="flex justify-between items-center mb-10">
      <h1
        class="text-4xl font-extrabold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent"
      >
        Job Application Tracker
      </h1>

      <AddJobModal ref="modalRef">
        <template #trigger="{ open }">
          <button
            @click="open"
            class="bg-gradient-to-r from-primary to-primary-light text-white px-6 py-3 rounded-2xl shadow-lg hover:scale-105 transition"
          >
            + Add Job
          </button>
        </template>
      </AddJobModal>
    </div>

    <div class="flex justify-center gap-10 overflow-x-auto">
      <ColumnBoard status="applied" title="📌 Applied" />
      <ColumnBoard status="interview" title="📞 Interview" />
      <ColumnBoard status="technical" title="🧠 Technical Test" />
      <ColumnBoard status="offer" title="🎉 Offer" />
      <ColumnBoard status="rejected" title="❌ Rejected" />
    </div>
  </div>

</template>
