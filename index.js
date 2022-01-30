{
  document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('pre code').forEach((el) => {
      el.innerHTML = el.innerHTML
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;')
      hljs.highlightElement(el)
    })
  })
  const mobileMenuEl = document.getElementById('mobile-menu-btn')
  const sidebarBackdropEl = document.getElementById('sidebar-backdrop')
  const sidebarEl = document.getElementById('sidebar')

  mobileMenuEl.addEventListener('click', () => {
    const sidebarClass = 'sidebar-open'
    if (sidebarEl.classList.contains(sidebarClass)) {
      sidebarEl.classList.remove(sidebarClass)
    } else {
      sidebarEl.classList.add(sidebarClass)
    }
  })
}
