<template>
  <div class="pages">
    <h1>This is a list of pages</h1>
    <ul>
      <li 
        v-for="page in $store.state.pages.pages"
        v-bind:key="page.id">
        <h4>{{ page.title }}</h4>
        <button @click="destroy(page.id)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: mapActions('pages', [
    'destroy'
  ])
}
</script>

