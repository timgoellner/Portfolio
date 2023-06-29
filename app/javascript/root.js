addEventListener('turbo:load', (event) => changePageLocation())
addEventListener('scroll', (event) => changePageLocation())

function changePageLocation() {
  const aboutMeLocation = document.querySelector('.about_me').getBoundingClientRect().bottom
  const projectsLocation = document.querySelector('.projects').getBoundingClientRect().bottom

  let pageLocationNodes = document.querySelector('.page_location').childNodes
  pageLocationNodes = [pageLocationNodes[1], pageLocationNodes[5], pageLocationNodes[9]]

  if (aboutMeLocation < 150 && projectsLocation < 150) var activeNodeId = 2
  else if (aboutMeLocation < 150) var activeNodeId = 1
  else var activeNodeId = 0

  if (pageLocationNodes[activeNodeId].classList.contains('active')) return

  for (const node of pageLocationNodes) node.classList.remove('active')
  pageLocationNodes[activeNodeId].classList.add('active')
}