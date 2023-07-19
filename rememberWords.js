function rememberWords () {
    const words = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];    
    let mixedWords = words;

    let index = mixedWords.length,  randomIndex;
    while (index != 0) {
  
      randomIndex = Math.floor(Math.random() * index);
      index--;
  
      [mixedWords[index], mixedWords[randomIndex]] = [mixedWords[randomIndex], mixedWords[index]];
    }
    alert(mixedWords);

    let question1 = prompt(`Чему равнялся первый элемент массива?`)
    let question2 = prompt(`Чему равнялся последний элемент массива?`)
    let scores = 0;
    if (question1.toLowerCase() == mixedWords[0].toLowerCase()) {
        scores++
    };

    if (question2.toLowerCase() == mixedWords[6].toLowerCase()) {
        scores++
    };
    
    switch (scores) {
        case 2:
            alert(`Поздравляем вы угадали!`);
            break;
        case 1:
            alert(`Вы были близки к победе!`);
            break;
        case 0:
            alert(`Вы ответили неверно`);
            break;
    }
}

