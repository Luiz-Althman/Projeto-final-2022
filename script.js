gsap.registerPlugin(ScrollTrigger)

gsap.from(".animacao_txt", {
    duration: 1,
    opacity: 0,
    y: -150,
    delay: 0.8
})
// gsap.from(".animacao_destaques", {
//     scrollTrigger: ".animacao_destaques",
//     duration: 0.5,
//     opacity: 0.5,
//     x: 100,
//     delay: 1
// })
new Glider(document.querySelector('.glider'), {
    // items que vão aparecer por página
    slidesToShow: 3,
    // quantidade de itens que vão ser passados por vez
    slidesToScroll: 1,
    // são os pontinhos em baixo do carrosel
    dots: '.dots',
    // as setinha de passar pra frente e para trás
    arrows: {
        prev: '.glider-prev',
        next: '.glider-next'
    },
    // serve p/ deixar um loop nas setinhas, quando chegar no elemento final e você clicar pra continuar passando, ele volta para o primeiro elemento
    rewind: true
});
