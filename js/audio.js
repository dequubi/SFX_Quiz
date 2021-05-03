function playSound(clickedId) {
  let audio = new Audio(
    'assets/sounds/sound' + clickedId.parentNode.id + '.mp3').play();
}

let area = document.querySelectorAll('textarea');
let counter = 0;
let counterHTML = document.getElementById('counter');
let valid;

area.forEach(function(item, i, arr) {
  item.addEventListener('input', function() {
    switch (item.parentNode.id) {
      case '1':
        valid = ['HITMAN™', ['hitman', 'hitmund']];
        break;
      case '2':
        valid = ['Jump King', ['jumpking', 'jump king']];
        break;
      case '3':
        valid = ['Diablo 2', ['diablo 2']];
        break;
      case '4':
        valid = ['TES IV: Oblivion', ['tes 4', 'tes iv', 'oblivion', 'the elder scrolls 4', 'the elder scrolls iv']];
        break;
      case '5':
        valid = ['God of War (2005)', ['gow', 'god of war']];
        break;
      case '6':
        valid = ['Worms Armageddon', ['worms armageddon', 'worms armaggedon', 'worms armagedon', 'worms armaggeddon']];
        break;
      case '7':
        valid = ['VI VON ZULUL', ['gothic 3']];
        break;
      case '8':
        valid = ['Subnautica', ['subnautica']];
        break;
      case '9':
        valid = ['Dark Souls', ['ds', 'dark souls', 'darksouls']];
        break;
      case '10':
        valid = ['The Last of Us', ['tlou', 'the last of us']];
        break;
      case '11':
        valid = ['Bloodborne', ['bb', 'bloodborne']];
        break;
      case '12':
        valid = ['Yakuza 0', ['yakuza']];
        break;
      case '13':
        valid = ['Naruto: Ultimate Ninja Storm', ['nuns', 'naruto ultimate ninja storm', 'naruto: ultimate ninja storm']];
        break;
      case '14':
        valid = ['DOOM (2016)', ['doom']];
        break;
      case '15':
        valid = ['Devil May Cry 5', ['dmc5', 'dmc 5', 'devil may cry 5']];
        break;
      case '16':
        valid = ['placeh', ['placeh']];
        break;
      case '17':
        valid = ['placeh', ['placeh']];
        break;
      case '18':
        valid = ['placeh', ['placeh']];
        break;
      case '19':
        valid = ['placeh', ['placeh']];
        break;
      case '20':
        valid = ['placeh', ['placeh']];
        break;
      default:
        break;
    }
    checkAndSet(valid, item);
  })
});

function checkAndSet(validArray, item, correctName) {
  if (validArray[1].some(v => item.value.includes(v))) {
    item.value = validArray[0];
    item.disabled = true;
    counter++;
    counterHTML.textContent = counter;
  }
}