import { onMounted } from 'vue'

export function useSeo({ title, description, keywords }) {
  onMounted(() => {
    if (title) document.title = title

    updateOrCreateMeta('description', description)
    updateOrCreateMeta('keywords', keywords)
  })
}

function updateOrCreateMeta(name, content) {
  if (!content) return
  let tag = document.querySelector(`meta[name="${name}"]`)
  if (tag) {
    tag.setAttribute('content', content)
  } else {
    tag = document.createElement('meta')
    tag.setAttribute('name', name)
    tag.setAttribute('content', content)
    document.head.appendChild(tag)
  }
}