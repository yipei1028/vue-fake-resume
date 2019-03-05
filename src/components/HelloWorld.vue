<template>
  <div id="main-container">
    <div id="target-container"
      data-role="drag-drop-container"
      v-on:drop="drop($event)"
      v-on:dragenter="dragenter($event)"
      v-on:dragover="dragover($event.currentTarget, $event)">
      <DraggedGroup/>
    </div>
    <div
      data-role="drag-drop-container"
      id="source-container">
      <div
        v-for="(elem, index) in eleLibrary"
        :key="index"
        v-bind="eleLibrary"
        draggable="true"
        v-on:dragstart="dragstart(elem)">
        {{ elem.textContent }}
      </div>
    </div>
  </div>
</template>

<script>

import DraggedGroup from './DraggedGroup.vue';

export default {
  name: 'HelloWorld',
  components: {
    DraggedGroup,
  },
  props: {
  },
  data() {
    return {
      eleLibrary: this.$store.state.elementLibrary,
      selectingItem: null,
      index: 0,
    };
  },
  computed: {
  },
  methods: {
    drop(e) {
      e.preventDefault();
      e.stopPropagation();
      if (this.selectingItem !== null) {
        this.index = this.index + 1;
        this.$store.dispatch('triggerDragFn', {
          name: this.selectingItem.name,
          props: {
            x: e.clientX,
            y: e.clientY,
            ...this.selectingItem.props,
          },
          index: this.index,
        });
      }
    },
    dragenter(e) {
      e.preventDefault();
      e.stopPropagation();
    },
    dragover(item, e) {
      e.preventDefault();
      e.stopPropagation();
    },
    dragstart(item) {
      this.selectingItem = item;
    },
  },
};
</script>

<style scoped>
#main-container {
  display: flex;
  position: relative;
}
#target-container {
  width: 595px;
  height: 842px;
  border: 1px solid pink;
}

#source-container {
  flex: 1;
  border: 1px solid red;
  position: relative;
}

.tag-item {
  position: absolute;
  border: 1px solid blue;
}
</style>
