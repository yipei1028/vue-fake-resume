<template>
  <div id="drag-container">
    <component
      v-for="item in selectedGroup"
      :is="item.name"
      :key="item.index"
      v-bind="item.props"
      draggable="true"
      v-on:dragstart="dragstart(item)">
    </component>
  </div>
</template>

<script>

export default {
  name: 'DraggedGroup',
  components: {
  },
  props: {
  },
  data() {
    return {
      selectedGroup: this.$store.state.selectedGroup,
      selectingItem: null,
    };
  },
  computed: {
  },
  methods: {
    dragstart(item) {
      this.selectingItem = item;
    },
  },
};
</script>

<style scoped>

</style>
