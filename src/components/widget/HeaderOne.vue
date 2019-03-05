<template>
<div v-bind:style="{ position: 'absolute', left: `${x}px`, top: `${y}px` }">
  <h1>{{ text }}</h1>
</div>
</template>

<script>

export default {
  name: 'HeaderOne',
  components: {
  },
  props: {
    x: Number,
    y: Number,
    text: String,
  },
  data() {
    return {
    };
  },
  computed: {
  },
  methods: {
  },
};
</script>

<style scoped>

</style>
