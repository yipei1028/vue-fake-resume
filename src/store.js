import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    elementLibrary: [
      {
        tagName: 'h1', name: 'HeaderOne', textContent: '大標題', props: { text: 'text here.' },
      },
      {
        tagName: 'li', name: 'List', textContent: '清單', props: { descriptions: ['小標題', '小標題'] },
      },
      {
        tagName: 'label', name: 'LabelList', textContent: 'LabelList', props: { items: [{ title: 'wwww', content: '5555678ikjhgf' }] },
      },
    ],
    selectedGroup: [
      { name: 'HeaderOne', props: { x: 1, y: 2, text: '123' }, index: 0 },
    ],
  },
  getters: {
  },
  mutations: {
    triggerDragFn(state, payload) {
      state.selectedGroup.push(payload);
    },
  },
  actions: {
    triggerDragFn(context, payload) {
      context.commit('triggerDragFn', payload);
    },
  },
});
