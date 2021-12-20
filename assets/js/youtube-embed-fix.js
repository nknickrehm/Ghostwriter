const potentialYoutubeEmbeds = document.querySelectorAll('.kg-embed-card iframe')

potentialYoutubeEmbeds.forEach((iframe) => {
  if (iframe.src && iframe.src.includes('youtube.com')) {
    iframe.parentElement.classList.add('ghostwriter-youtube-card')
  }
})
