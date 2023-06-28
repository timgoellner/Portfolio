// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

addEventListener("turbo:load", (event) => appearAnimations())
addEventListener("scroll", (event) => appearAnimations())

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

