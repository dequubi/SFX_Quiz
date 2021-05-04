$(function() {
  let answers = [
    ['HITMAN™', ['hitman', 'hitmund']],
    ['Jump King', ['jumpking', 'jump king']],
    ['Diablo 2', ['diablo 2']],
    ['TES IV: Oblivion', ['tes 4', 'tes iv', 'oblivion', 'the elder scrolls 4', 'the elder scrolls iv']],
    ['God of War (2005)', ['gow', 'god of war']],
    ['Worms Armageddon', ['worms armageddon', 'worms armaggedon', 'worms armagedon', 'worms armaggeddon']],
    ['VI VON ZULUL', ['gothic 3']],
    ['Subnautica', ['subnautica']],
    ['Dark Souls', ['ds', 'dark souls', 'darksouls']],
    ['The Last of Us', ['tlou', 'the last of us']],
    ['Bloodborne', ['bb', 'bloodborne']],
    ['Yakuza 0', ['yakuza']],
    ['Naruto: Ultimate Ninja Storm', ['nuns', 'naruto ultimate ninja storm', 'naruto: ultimate ninja storm']],
    ['DOOM (2016)', ['doom']],
    ['Devil May Cry 5', ['dmc5', 'dmc 5', 'devil may cry 5']],
    ['Deus Ex: Human Revolution', ['dehr', 'deus ex human revolution', 'deus ex: human revolution']],
    ['Among Us', ['amongus', 'among us', 'amogus']],
    ['NieR:Automata™', ['nier automata', 'nier: automata']],
    ['Noita', ['noita']],
    ['Fall Guys: Ultimate Knockout', ['fallguys', 'fall guys']]
  ];

  let area = $('.textarea');
  let counter = 0;
  let counterHTML = $('#counter');
  let spoiler = $('#reveal');

  spoiler
    .attr('unselectable', 'on')
    .css('user-select', 'none')
    .on('selectstart', false);

  area.each(function (index, item) {
    item.oninput = function() {
      if (answers[index][1].includes(item.value.toLowerCase()))
        unfold(index, item, 'correct');
    };
  });

  function unfold(index, item, status) {
    $(item).val(answers[index][0]);
    $(item).attr('disabled', true);
    $(item).addClass(status);
    $(counterHTML).html(status == 'correct' ? ++counter : counter);
    if (counter == 20)
      $(counterHTML).addClass('completed');
  }

  let timeoutd = 0;

  $(spoiler).on('mousedown', function() {
    timeoutd = setTimeout(reveal, 2000);
  }).on('mouseup mouseleave', function() {
    clearTimeout(timeoutd);
  });

  $(spoiler).on('taphold', function() {
    reveal();
  });

  function reveal() {
    area.each(function (index, item) {
      if (!$(item).hasClass('correct'))
        unfold(index, item, 'spoiler');
    });
  }
});