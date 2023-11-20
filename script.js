/* getElementById  --- pega o elemento do DOM pelo ID do elemento HTML e retorna
const animais = document.getElementById('animais'); */

/* getElementsByClassName --- pega o elemento do DOM pela CLASS do elemento HTML e retorna
const gridSection = document.getElementsByClassName('grid-section');
console.log(gridSection[0]) --- retorna o primeiro elemento com a classe 'grid-section' 

getElementsByTagName --- pega todos os elementos com essa TAG no documento
const gridUl = document.getElementsByTagName('ul'); ---retorna todas as ULs do documento*/

/* querySelector retorna o primeiro elementos que combina com o seletor CSS, como classes(.), ids(#), Tags, endereços[href]
 const primeiraLI = document.queryselector('li');
 console.log(primeiraLi) --- vai retorna a primeira 'li' do documento
*/

/* querySelectorAll --- segue o mesmo princípio do querySelector mas seleciona todos os elementos com o seletor usado
const animaisImg = document.querySelectorAll('.animais img') --- retorna todos os elementos que se identificam dessa forma
console.log(animaisImg[0]) --- retorna o primeiro elementos com o seletor*/ 

/* 
const paragrafos = document.querySelectorAll('p');
console.log(paragrafos);

paragrafos.forEach((item) => {
    console.log(item);
});

paragrafos.forEach((item) => {
    console.log(item.innerText); 
});
*/

/* classList --- retorna uma lista com as clases do elemento, permite adicionar, remover e verificar classes.

const menu = document.querySelector('.menu');

menu.className; --- string
menu.classList; --- lista de classes
menu.classList.add('ativo') --- adiciona a classe
menu.classList.add('ativo', 'mobile') --- adiciona duas classes
menu.classList.remove('ativo') --- remove a classe
menu.classList.toggle('ativo') --- adiciona se não tiver a classe e remove se tiver a classe
menu.classList.contains('ativo') --- se contém ou não a classe true/false
menu.classList.replace('ativo', 'inativo') ---- substitui a classe pela outra

*/

const imgs = document.querySelectorAll('img');
imgs.forEach((img)=>{
    const possuiAtributo = img.hasAttribute('alt');
    console.log(img, possuiAtributo);
})