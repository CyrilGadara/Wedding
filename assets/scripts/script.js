const modal = document.querySelector('.modal')
const previews = document.querySelectorAll('.image_container img')
const original = document.querySelector('.full-img')


const nav = document.querySelector('nav');
const topOfNav = nav.offsetTop;

function fixNav(){
    if(window.scrollY >= topOfNav){
        document.body.style.paddingTop = nav.offsetHeight + 'px';
        nav.classList.add('fixed-nav')
    }else{
        document.body.style.paddingTop = 0;
        nav.classList.remove('fixed-nav')
    }
}


window.addEventListener('scroll', fixNav);

previews.forEach(preview => {
    preview.addEventListener('click', ()=>{
        modal.classList.add('open')
        original.classList.add('open')
        const imageSrc = preview.getAttribute('src')
        original.src = `${imageSrc}`
        console.log(imageSrc)
    })
})

modal.addEventListener('click', (e) =>{
    if(e.target.classList.contains('modal')){
        modal.classList.remove('open')
        original.classList.remove('open')
    }
})

fixNav();