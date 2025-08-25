import { reactive } from 'vue';

export const toastStore = reactive({
  messages: [],
  addToast(message) {
    this.messages.push(message);
  },
  removeToast(id) {
    this.messages = this.messages.filter(msg => msg.id !== id);
  },
  push({ type = 'info', text }) {
    this.addToast({
      id: crypto?.randomUUID?.() || Date.now(),
      type,
      text,
    })
  },
});
