let modal1=document.querySelector('.about')
let show=document.querySelector('.model1')
let show1=document.querySelector('.model2')
let show2=document.querySelector('.model3')
let show3=document.querySelector('.model4')
let con=document.querySelector('.kilo')
let ema=document.querySelector('.Milo')
let deta=document.querySelector('.lilo')
let ham=document.querySelector('.ul')
let bar=document.querySelector('.class')



let close=function () {
    show.classList.add('hidden')
    
    
}
let close1=function () {
    show1.classList.add('hidden')
    
    
}
let close2=function () {
    show2.classList.add('hidden')
    
    
}
let close3=function () {
    show3.classList.add('hidden')
    
    
}

let open=function () {
show.classList.remove('hidden')
show1.classList.add('hidden')
show2.classList.add('hidden')
show3.classList.add('hidden')
    
    
}
let open1=function () {
show1.classList.remove('hidden')
show2.classList.add('hidden')
show3.classList.add('hidden')
show.classList.add('hidden')
}
let open2=function () {
show2.classList.remove('hidden')
show3.classList.add('hidden')
show.classList.add('hidden')  
show1.classList.add('hidden')  
}
let open3=function () {
show3.classList.remove('hidden')
show.classList.add('hidden')  
show1.classList.add('hidden') 
show2.classList.add('hidden') 
}
modal1.addEventListener('click',open)
con.addEventListener('click',open1)
ema.addEventListener('click',open2)
deta.addEventListener('click',open3)

show.addEventListener('click',close)
show1.addEventListener('click',close1)
show2.addEventListener('click',close2)
show3.addEventListener('click',close3)

document.addEventListener('keydown',close)

bar.addEventListener('click',function () {
    ham.classList.add('wide')
    
})
