let btn = document.querySelector('.burger svg')
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
btn.addEventListener('click', ()=>{
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
