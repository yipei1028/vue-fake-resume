<template>
<div v-bind:style="{ position: 'absolute', left: `${x}px`, top: `${y}px` }">
  <div v-for="(item, index) in items" :key="index">
    <h4>{{ item.title }}</h4>
    <span>{{ item.content }}</span>
  </div>
</div>
</template>

<script>

export default {
  name: 'LabelList',
  components: {
  },
  props: {
    x: Number,
    y: Number,
    items: Array,
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
