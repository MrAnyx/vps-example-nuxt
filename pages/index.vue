<template>
  <p>{{ data1 }}</p>
</template>

<script setup lang="ts">
const {data: data1} = useFetch("https://api.codeon.fr/hello", {
  server: false
});
</script>
