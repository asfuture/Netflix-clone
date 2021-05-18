/* Carrosel dos filmes*/
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

//modal filme
function trailer(){
    document.getElementById('modal').style.display='block';
} 
function sair(){
    document.getElementById('modal').style.display='none';
}
/* controle dos botões */
function adicionar_filme(){
    document.querySelector('.plus').style.color='white';
    alert("OK! Adicionado com sucesso na sua lista de favorito.")
}
function like(){
    document.querySelector('.positive').style.color='white';
    document.querySelector('.negative').style.color='';
}
function dislike(){
    document.querySelector('.positive').style.color='';
    document.querySelector('.negative').style.color='white';
}
function com_audio(){
    document.querySelector('.volume').style.display='none';
    document.querySelector('.volume_baixo').style.display='inline-block';
}
function sem_audio(){
    document.querySelector('.volume').style.display='inline-block';
    document.querySelector('.volume_baixo').style.display='none';
}



