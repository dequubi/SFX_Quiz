function playSound(clickedId) {
  let audio = new Audio(
    'assets/sounds/sound' + clickedId.parentNode.id + '.mp3').play();
}

