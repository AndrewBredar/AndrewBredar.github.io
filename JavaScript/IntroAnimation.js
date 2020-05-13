var textWrapper = document.querySelector('.intro-animation .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letters'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.intro-animation .letters',
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 750,
    delay: (el, i) => 50 * i
  }).add({
    targets: '.intro-animation',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });