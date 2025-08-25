import { toastStore } from '@/stores/toastStore';

function createMessage(type, text, duration = 3000) {
  toastStore.addToast({
    id: Date.now(),
    type,
    text,
    duration
  });
}

export default {
  success(text, duration) {
    createMessage('success', text, duration);
  },
  error(text, duration) {
    createMessage('error', text, duration);
  },
  info(text, duration) {
    createMessage('info', text, duration);
  }
};
