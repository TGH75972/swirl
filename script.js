function playAudio() {
    const sound = document.querySelector('.kitty');
    sound.play();
}
function playRock() {
    const sound = document.querySelector('.rock');
    sound.play();
}
function surprise() {
    const sound = document.querySelector('.roll');
    sound.play();
}
function scrollToBottom() {
    const bodyHeight = document.body.scrollHeight;
    window.scrollTo({
      top: bodyHeight,
      behavior: 'smooth'
    });
  }