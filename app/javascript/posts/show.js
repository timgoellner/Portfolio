addEventListener('turbo:load', (event) => {
  const link_element = document.querySelector('.copy_post')

  link_element.addEventListener('click', (event) => {
    event.preventDefault()
    navigator.clipboard.writeText(link_element.getAttribute('copy_text'))
  })
})