export default {
  scrollBehavior(to, from, savedPosition) {

    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }

    if (to.path !== from.path) return { top: 0 }
    return false
  }
}