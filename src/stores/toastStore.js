import { reactive } from 'vue';

export const toastStore = reactive({
  messages: [],
  addToast(message) {
    this.messages.push(message);
    setTimeout(() => {
      this.removeToast(message.id);
    }, message.duration || 3000);
  },
  removeToast(id) {
    this.messages = this.messages.filter(msg => msg.id !== id);
  }
});
