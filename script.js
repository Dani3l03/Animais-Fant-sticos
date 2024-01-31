// navegação por TAB, criei uma navegação que ao clicar em uma imagem ele adiciona uma classe ao respectivo texto da posição(index) da imagem e do texto, se o index da imagem é 1 ele vai encontrar o texto de index igual a 1.

function tabNav(){
const tabMenu = document.querySelectorAll('.js-tabmenu li');
const tabContent = document.querySelectorAll('.js-tabcontent section');

if(tabContent.length && tabMenu.length){
    
tabContent[0].classList.add('ativo-tab');

function activeTab(index){
    tabContent.forEach((section)=>{
        section.classList.remove('ativo-tab');
    })
    tabContent[index].classList.add('ativo-tab');
};

tabMenu.forEach((item, index)=>{
    item.addEventListener('click', () =>{
        activeTab(index);
    })
})
}
}
tabNav();


// lista acordeão (accordion list), clica em um item e revela seu conteúdo.

function accordionNav(){
const accordionList = document.querySelectorAll('.js-accordion dt');

accordionList[0].classList.add('ativo');
accordionList[0].nextElementSibling.classList.add('ativo');

function activeAccordion(){
    this.classList.toggle('ativo');
    this.nextElementSibling.classList.toggle('ativo');
}

accordionList.forEach((item)=> {
    item.addEventListener('click', activeAccordion);
})
}
accordionNav();


// fazer um scroll que seja mais bonito e lento ao clicar em items do menu, um SCROLL SUAVE.

function scrollSuave(){
const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

function scrollToItem(event){
    event.preventDefault();
    const link = event.currentTarget.getAttribute('href');
    const section = document.querySelector(link);
    
    section.scrollIntoView({
        behavior: "smooth",
        block: "start",
    });
}

linksInternos.forEach((link)=> {
    link.addEventListener('click', scrollToItem);
});

}
scrollSuave();


// animação ao scroll , pegamos a distância do elemento do topo da janela, quando o elemento estiver a 50 px do topo ele adiciona a classe ativo no elemento, que faz aparecer a section na tela do usuário.

function janelaScroll(){

const section = document.querySelectorAll('.js-scroll');
const windowMetade = window.innerHeight * 0.5;

function animaScroll(){
    section.forEach((section)=>{
        const sectionTop = section.getBoundingClientRect().top - windowMetade; // vai dar as distancias da página na direção do topo até o elemento
        if(sectionTop <= 0){
            section.classList.add('ativo');
        }

    })
}
animaScroll();
window.addEventListener('scroll', animaScroll);
}
janelaScroll();