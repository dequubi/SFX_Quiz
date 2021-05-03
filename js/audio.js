function playSound(clickedId) {
  let audio = new Audio(
    'assets/sounds/sound' + clickedId.parentNode.id + '.mp3').play();
}

let area = document.querySelectorAll('textarea');
let counter = 0;
let counterHTML = document.getElementById('counter');
let valid;
let spoiler = document.getElementById('reveal');

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
        valid = ['Deus Ex: Human Revolution', ['dehr', 'deus ex human revolution', 'deus ex: human revolution']];
        break;
      case '17':
        valid = ['Among Us', ['amongus', 'among us', 'amogus']];
        break;
      case '18':
        valid = ['NieR:Automata™', ['nier automata', 'nier: automata']];
        break;
      case '19':
        valid = ['Noita', ['noita']];
        break;
      case '20':
        valid = ['Fall Guys: Ultimate Knockout', ['fallguys', 'fall guys']];
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
    item.classList.add('correct');
    counter++;
    counterHTML.textContent = counter;
    if (counter==20) {
      counterHTML.classList.add('completed');
    }
  }
}

let start;
let end;

spoiler.onmousedown = function() {
  start = new Date();
}

spoiler.onmouseup = function() {
  end = new Date();
  let delta = end - start;
  if (delta > 2000)
    area.forEach(function(item, i, arr) {
      if (!item.classList.contains('correct')) {
        switch (item.parentNode.id) {
          case '1':
            valid = 'HITMAN™';
            break;
          case '2':
            valid = 'Jump King';
            break;
          case '3':
            valid = 'Diablo 2';
            break;
          case '4':
            valid = 'TES IV: Oblivion';
            break;
          case '5':
            valid = 'God of War (2005)';
            break;
          case '6':
            valid = 'Worms Armageddon';
            break;
          case '7':
            valid = 'Gothic 3';
            break;
          case '8':
            valid = 'Subnautica';
            break;
          case '9':
            valid = 'Dark Souls';
            break;
          case '10':
            valid = 'The Last of Us';
            break;
          case '11':
            valid = 'Bloodborne';
            break;
          case '12':
            valid = 'Yakuza 0';
            break;
          case '13':
            valid = 'Naruto: Ultimate Ninja Storm';
            break;
          case '14':
            valid = 'DOOM (2016)';
            break;
          case '15':
            valid = 'Devil May Cry 5';
            break;
          case '16':
            valid = 'Deus Ex: Human Revolution';
            break;
          case '17':
            valid = 'Among Us';
            break;
          case '18':
            valid = 'NieR:Automata™';
            break;
          case '19':
            valid = 'Noita';
            break;
          case '20':
            valid = 'Fall Guys: Ultimate Knockout';
            break;
          default:
            break;
        }
        setSpoilers(valid, item);
      }
    });
}

function setSpoilers(valid, item) {
  item.value = valid;
  item.disabled = true;
  item.classList.add('spoiler');
}