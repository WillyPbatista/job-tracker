<script setup lang="ts">
import ColumnBoard from "../components/ColumnBoard.vue";
import AddJobModal from "../components/AddJobModal.vue";
import { useThemeStore } from "../stores/themeStore";
import {
  Sun,
  Moon,
  Send,
  Phone,
  Brain,
  PartyPopper,
  XCircle,
} from "lucide-vue-next";

const theme = useThemeStore();
</script>

<template>
  <div
    class="min-h-screen transition-colors duration-300 bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:bg-gray-900 dark:bg-none p-10"
  >
    <div class="flex justify-between items-center mb-10">
      <h1
        class="text-4xl font-extrabold bg-primary bg-clip-text text-transparent"
      >
        Job Application Tracker
      </h1>

      <div class="flex items-center gap-4">
        <button
          @click="theme.toggleTheme"
          class="p-2 rounded-xl border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
          title="Toggle theme"
        >
          <Sun v-if="theme.isDark" class="w-5 h-5 text-yellow-400" />
          <Moon v-else class="w-5 h-5 text-primary" />
        </button>
        <AddJobModal ref="modalRef">
          <template #trigger="{ open }">
            <button
              @click="open"
              class="bg-primary text-white px-6 py-3 rounded-2xl shadow-lg hover:scale-105 transition"
            >
              + Add Job
            </button>
          </template>
        </AddJobModal>
      </div>
    </div>

    <div class="flex justify-center gap-10 overflow-x-auto">
      <ColumnBoard status="applied" title="Applied">
        <template #icon>
          <Send class="w-4 h-4 text-primary" />
        </template>
      </ColumnBoard>

      <ColumnBoard status="interview" title="Interview">
        <template #icon>
          <Phone class="w-4 h-4 text-primary" />
        </template>
      </ColumnBoard>

      <ColumnBoard status="technical" title="Technical Test">
        <template #icon>
          <Brain class="w-4 h-4 text-primary" />
        </template>
      </ColumnBoard>

      <ColumnBoard status="offer" title="Offer">
        <template #icon>
          <PartyPopper class="w-4 h-4 text-green-500" />
        </template>
      </ColumnBoard>

      <ColumnBoard status="rejected" title="Rejected">
        <template #icon>
          <XCircle class="w-4 h-4 text-red-500" />
        </template>
      </ColumnBoard>
    </div>
  </div>
</template>
