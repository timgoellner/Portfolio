// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import '@hotwired/turbo-rails'
import 'controllers'

addEventListener('turbo:load', (event) => {
  appearAnimations()
  copyToClipboard()
})
addEventListener('scroll', (event) => appearAnimations())


function copyToClipboard() {
  const link_elements = document.querySelectorAll('.copy_to_clipboard')

  link_elements.forEach(link_element => {
    link_element.addEventListener('click', (event) => {
      event.preventDefault()
      navigator.clipboard.writeText(link_element.getAttribute('copy_text'))

      link_element.classList.remove('copy')
      link_element.offsetWidth
      link_element.classList.add('copy')
    })
  })
}

function appearAnimations() {
  const appearElements = document.querySelectorAll('.animation_appear')
  const fadeInElements = document.querySelectorAll('.animation_fadeIn')

  appearElements.forEach(element => {
    const elementRect = element.getBoundingClientRect()

    if (elementRect.top >= 0 && elementRect.left >= 0 && elementRect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && elementRect.right <= (window.innerWidth || document.documentElement.clientWidth)) {
      element.classList.remove('animation_appear')
      element.classList.add('appear')
    }
  })

  fadeInElements.forEach(element => {
    const elementRect = element.getBoundingClientRect()

    if (elementRect.top >= 0 && elementRect.left >= 0 && elementRect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && elementRect.right <= (window.innerWidth || document.documentElement.clientWidth)) {
      element.classList.remove('animation_fadeIn')
      element.classList.add('fadeIn')
    }
  })
}

