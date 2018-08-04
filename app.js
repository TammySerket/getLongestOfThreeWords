function getLongestOfThreeWords(word1, word2, word3) {
    let arr = [word1, word2, word3]; //se declara variable arr con tres arrays
    let longestWord = ''; //se indica que la variable longestWord este vacia
    
    for (let i = 0; i < arr.length; i++) { //se itera el largo del array
      if (arr[i].length > longestWord.length) { //se compara cual de las palabras dentro del arr es la mas larga
        longestWord = arr[i]; //se indica que ahora el valor de longestword es la palabra más larga 
      } 
    }
    return longestWord;
  }

  //ejemplo
let output = getLongestOfThreeWords("everything", "is", "chaos");
console.log(output);