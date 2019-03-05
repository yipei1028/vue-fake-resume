<template>
<div v-bind:style="{ position: 'absolute', left: `${x}px`, top: `${y}px` }">
  <ul>
    <li v-for="(desc, index) in descriptions" :key="index">{{ desc }}</li>
  </ul>
</div>
</template>

<script>

export default {
  name: 'List',
  components: {
  },
  props: {
    x: Number,
    y: Number,
    descriptions: Array,
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
