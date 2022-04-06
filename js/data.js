const projectDatas = [
	{
		name: 'Math-Magician',
		author: 'OKOROJI VICTOR',
		stack: 'Frontend Dev',
		year: 2022,
		description:
			'Math-Magician" is a web app for all lovers of mathematics. It is a Single Page Application that allows users to make simple calculations.',
		featuredImage: './assets/images/calculator.png',
		technologies: ['React', 'css'],
		liveVersion: 'https://math-magician-calculator.netlify.app/',
		source: 'https://github.com/vickymarz/math-magician',
	},
	{
		name: 'Todo-List ',
		author: 'OKOROJI VICTOR',
		stack: 'Frontend Dev',
		year: 2022,
		description:
			'"To-do list" is a tool that helps to organize your day. It simply lists the things that you need to do and allows you to mark them as complete.',
		featuredImage: './assets/images/todolist.png',
		technologies: ['html', 'css', 'javascript'],
		liveVersion: 'https://vickymarz.github.io/todo-list/dist/',
		source: 'https://github.com/vickymarz/todo-list',
	},
	{
		name: 'Tonic',
		author: 'FACEBOOK 360',
		stack: 'Full Stack Dev',
		year: 2015,
		description:
			"Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
		featuredImage: './assets/images/Snapshoot-Portfolio.png',
		technologies: ['html', 'css', 'javascript'],
		liveVersion: null,
		source: null,
	},
	{
		name: 'Uber Navigation',
		author: 'Uber',
		stack: 'Lead Developer',
		year: 2015,
		description:
			"Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
		featuredImage: './assets/images/Snapshoot-Portfolio-2.png',
		technologies: ['html', 'css', 'javascript'],
		liveVersion: null,
		source: null,
	},
]

document.querySelector('.works').innerHTML = projectDatas
	.map(
		data => `
    <section class="project">
<div class="project-img">
<img
src= ${data.featuredImage}
class="snapshoot"
alt="Tonic project image"
/>
</div>
<div class="project-description">
<h2 class="project-title">${data.name}</h2>
<ul class="project-author">
<li>${data.author}</li>
<li>${data.stack}</li>
<li>${data.year}</li>
</ul>
<p class="project-text"
>${data.description}</p
>
<ul class="project-tools">
<li>${data.technologies[0]}</li>
<li>${data.technologies[1]}</li>
<li>${data.technologies[2]}</li>
</ul>
<button type="button" class="btn">See Project</button>
</div>
</section>
    `,
	)
	.join('')

for (let i = 0; i <= projectDatas.length; i += 1) {
	if (i % 2 === 1) {
		document.querySelectorAll('.project')[i].classList.add('order')
	}
}

document.querySelector('.modals').innerHTML = projectDatas
	.map(
		data => `
<div class="modal">
<div class="modal-container"> 
  <div class="modal-title">
<h2 class="project-title">${data.name}</h2>
    <div class="close">
  <i class="fa fa-times fa-1x"></i>
    </div>
</div>
  <ul class="project-author">
    <li>${data.author}</li>
    <li>${data.stack}</li>
    <li>${data.year}</li>
  </ul>
  <div class="project-img">
    <img
      src= ${data.featuredImage}
      class="snapshoot"
      alt="Tonic project image"
    />
  </div>
  <div class="modal-description">
    <p class="project-text"
      >${data.description}</p
    >
    <div class="modal-tools">
      <ul class="project-tools">
        <li>${data.technologies[0]}</li>
        <li>${data.technologies[1]}</li>
        <li>${data.technologies[2]}</li>
      </ul>
      <span></span>
      <div class="buttons">
        <a href="${data.liveVersion}" class="modal-button" target="_blank" rel="noopener noreferrer">See Live <img
src="./assets/images/Icon.png"
alt="live site icon" class="modal-img"
/></a>
        <a href="${data.source}" class="modal-button" target="_blank" rel="noopener noreferrer">See Source <img
src="./assets/images/github.png"
alt="github icon" class="modal-img"
/></a>
      </div>
    </div>
  </div>
  </div>
  </div>`,
	)
	.join('')

// event listeners for opening modal on button click
const modalButtons = Array.from(document.querySelectorAll('.btn'))
const modals = Array.from(document.querySelectorAll('.modal'))

const modalButtonZip = modalButtons.map((button, i) => [button, modals[i]])

modalButtonZip.forEach(pair => {
	pair[0].addEventListener('click', () => {
		pair[1].style.display = 'block'
	})
})

// event listener for closing modal on button click
document.querySelectorAll('.close').forEach(close => {
	close.addEventListener('click', () => {
		document.querySelectorAll('.modal').forEach(modal => {
			modal.style.display = 'none'
		})
	})
})
