<script setup lang="ts">
import { ref, reactive } from "vue";
import { useJobStore } from "../stores/jobStore";
import type { JobStatus } from "../types/job";

const store = useJobStore();

const isOpen = ref(false);

const form = reactive({
  company: "",
  position: "",
  salary: 0,
  status: "applied" as JobStatus,
});

const open = () => (isOpen.value = true);
const close = () => (isOpen.value = false);

const handleSubmit = () => {
  if (!form.company || !form.position) return;

  store.addJob({
    company: form.company,
    position: form.position,
    salary: form.salary,
    status: form.status,
  });

  form.company = "";
  form.position = "";
  form.salary = 0;
  form.status = "applied";

  close();
};

defineExpose({ open });
</script>

<template>
  <!-- Trigger slot -->
  <slot name="trigger" :open="open"></slot>

  <!-- Modal -->
  <div
    v-if="isOpen"
    class="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
  >
    <div
      class="bg-white rounded-3xl p-8 w-[420px] shadow-2xl border border-purple-100"
    >
      <h2 class="text-xl font-bold mb-4">Add Job Application</h2>

      <div class="space-y-3">
        <input
          v-model="form.company"
          placeholder="Company"
          class="w-full border border-purple-100 focus:border-primary focus:ring-2 focus:ring-primary-light rounded-xl p-2 outline-none transition"
        />

        <input
          v-model="form.position"
          placeholder="Position"
          class="w-full border border-purple-100 focus:border-primary focus:ring-2 focus:ring-primary-light rounded-xl p-2 outline-none transition"
        />

        <input
          type="number"
          v-model="form.salary"
          placeholder="Salary"
          class="w-full border border-purple-100 focus:border-primary focus:ring-2 focus:ring-primary-light rounded-xl p-2 outline-none transition"
        />

        <select
          v-model="form.status"
          class="w-full border border-purple-100 focus:border-primary focus:ring-2 focus:ring-primary-light rounded-xl p-2 outline-none transition"
        >
          <option value="applied">Applied</option>
          <option value="interview">Interview</option>
          <option value="technical">Technical</option>
          <option value="offer">Offer</option>
          <option value="rejected">Rejected</option>
        </select>
      </div>

      <div class="flex justify-end gap-2 mt-6">
        <button @click="close" 
         class="px-5 py-2 rounded-xl bg-black text-white hover:opacity-90 transition">
          Cancel
        </button>

        <button
          @click="handleSubmit"
          class="px-5 py-2 rounded-xl bg-gradient-to-r from-primary to-primary-light text-white hover:opacity-90 transition"
        >
          Save
        </button>
      </div>
    </div>
  </div>
</template>
