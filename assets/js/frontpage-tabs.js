// eslint-disable-next-line no-unused-vars
function loadTab(tagSlug) {
  document.querySelectorAll('.posts').forEach((postList) => postList.classList.add('hidden'))
  document.querySelector(`#${tagSlug}-posts`).classList.remove('hidden')
  document.querySelectorAll('.nav-item').forEach((postList) => postList.classList.remove('active'))
  document.querySelector(`#${tagSlug}-nav-item`).classList.add('active')
}
