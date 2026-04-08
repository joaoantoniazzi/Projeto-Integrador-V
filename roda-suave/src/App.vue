<script setup lang="ts">
import { useUserStore } from './stores/userStore';

const userStore = useUserStore();
userStore.init();
</script>

<template>
  <router-view />
</template>

<style scoped></style>
