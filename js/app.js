let btn = document.querySelector('.burger svg')
let burger =document.querySelector('.burger')
let nav = document.querySelector('nav')
let navber = document.querySelector('ul')
let li = document.querySelectorAll('li a')
let planetImg = document.querySelectorAll('.planets > svg')
let planetName = document.querySelectorAll('.tab_planet_name')
let planetsInfo = document.querySelectorAll('.tab_planet_info')
let planetsDay = document.querySelectorAll('.planet_day')
let planetRev = document.querySelectorAll('.planets_rev')
let planetsRds = document.querySelectorAll('.planet_rds')
let planetsAve = document.querySelectorAll('.tab_average')
let colors = ['rgba(177, 213, 226, 1)', 'rgba(226, 159, 88, 1)', 'rgba(84, 91, 254, 1)', 'rgba(255, 155, 107, 1)', 'rgba(216, 101, 52, 1)', 'rgba(252, 203, 107, 1)', 'rgba(80, 222, 205, 1)', 'rgba(73, 126, 250, 1)']
btn.addEventListener('click', ()=>{
   burger.classList.toggle('active')
    nav.classList.toggle('active')
})
li.forEach((item) =>{
   item.addEventListener('click', ()=>{
      nav.classList.remove('active')
   })
})
function hideAll() {
    planetImg.forEach((planetImg)=>{
        planetImg.classList.remove('active')
    })
   li.forEach((li) => {
      li.classList.remove('active')
      li.style.color = 'white'
   })
    planetName.forEach((planetName)=>{
        planetName.classList.remove('show')
    })
    planetsInfo.forEach((planetsInfo)=>{
        planetsInfo.classList.remove('seek')
    })
   planetsDay.forEach((planetsDay)=>{
        planetsDay.classList.remove('active')
    })
   planetRev.forEach((planetRev)=>{
        planetRev.classList.remove('active')
    })
   planetsRds.forEach((planetsRds)=>{
        planetsRds.classList.remove('active')
    }) 
   planetsAve.forEach((planetsAve)=>{
        planetsAve.classList.remove('active')
    }) 
}
function showAll( i = 0 ) {
    planetImg[i].classList.add('active')
    planetName[i].classList.add('show')
    planetsInfo[i].classList.add('seek')
    planetsDay[i].classList.add('active')
    planetRev[i].classList.add('active')
    planetsRds[i].classList.add('active')
    planetsAve[i].classList.add('active')
    li[i].classList.add('active')
    li[i].style.color = colors[i]
}
nav.addEventListener('click', (e)=>{
    li.forEach((item, i)=>{
      if(e.target === item){
         hideAll()
         showAll(i)
      }
    })
})
hideAll()
showAll()
