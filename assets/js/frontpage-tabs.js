// eslint-disable-next-line no-unused-vars
function loadTab(tagSlug) {
  document.querySelectorAll('.front-page-post').forEach((postList) => postList.classList.add('hidden'))
  document.querySelector(`#${tagSlug}-posts`).classList.remove('hidden')
  document.querySelectorAll('.front-page-tab').forEach((postList) => postList.classList.remove('active'))
  document.querySelector(`#${tagSlug}-front-page-tab`).classList.add('active')
}
