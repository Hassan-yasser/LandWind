/// <reference types="./jquery" />

const darkMode =  document.querySelector('html')
const changeTheme =  document.querySelector('.toggle')
let theme = localStorage.getItem('theme')
if (theme == 'dark') {
    darkMode.classList.add('dark') 
    changeTheme.setAttribute('checked',true)
}
else {
    darkMode.classList.remove('dark') 
    changeTheme.removeAttribute('checked',true)
}
changeTheme.addEventListener('change',()=>{
    if (darkMode.classList.contains('dark') == false) {
        darkMode.classList.add('dark') 
        theme = 'dark'
        localStorage.setItem('theme',theme)
    }
    else {
        theme = 'light'
        localStorage.setItem('theme',theme)
        darkMode.classList.remove('dark') 
    }
    
    
})
$('.commender').on('click',function(){
    $(this).next().slideToggle(250)
    $('.text').not($(this).next()).slideUp(250)
})

const slideNavSmall = document.querySelector('.slideNavSmall')
const smallNave = document.querySelector('.smallNave')
$('.slideNavSmall').on('click',()=> {
    $('.smallNave').animate({top:'56px'})
    $('.slideNavSmall').hide(300)
    $('.fa-xmark').show(300)
})
$('.fa-xmark').on('click',()=>{
    $('.smallNave').animate({top:'-100%'})
    $('.slideNavSmall').show(300)
    $('.closeNave').hide(300)
})
$('.Ploader').fadeOut(1000)




