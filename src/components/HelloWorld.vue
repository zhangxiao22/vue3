<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(10)
</script>
<template>
  <div class="card">
    <button type="button"
            adasf="asdfadsfasdf"
            adsfasdfsdaf="dasfasdfsadfdsaf"
            @click="count++">
      count is
      {{ count }}
    </button>
    <a-button type="primary">Primary Button</a-button>
  </div>
</template>

<style scoped lang="less">
.card {
  background: red;
  button {
    background: blue;
  }
}
</style>
