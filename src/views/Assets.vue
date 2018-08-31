<template>
  <div class="assets">
    <h1>This is a list of assets</h1>
    <p>{{ $store.state.count }}</p>
    <button @click="increment">click</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  methods: mapActions([
    'increment'
  ])  
}
</script>
