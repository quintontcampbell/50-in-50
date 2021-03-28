const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData() {
  header.innerHTML = "<img src='https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.anime-evo.net%2Fwp-content%2Fuploads%2F2019%2F01%2Fgolden-kamui-review-02.jpg&f=1&nofb=1' alt='Golden Kamuy Squad'/>"
  title.innerHTML = "Lorem ipsum dolor sit amet."
  excerpt.innerHTML = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui, magnam?"
  profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/women/45.jpg" alt="" />'
  name.innerHTML = "Jane Doe"
  date.innerHTML = "March 28, 2021"

  animated_bgs.forEach(bg => {
    bg.classList.remove('animated-bg')
  })
  animated_bg_texts.forEach(text => {
    text.classList.remove('animated-bg-text')
  })
}