const string = "Привет! Как дела?";

const vowels = ["а", "е", "о", "у", "и", "ы", "э", "я", "ё"];

const getVowels = stringToFilter => {
  let extra = "";
  
  for (let i = 0; i < stringToFilter.length; i++ ) {
    const letter = stringToFilter[i].toLowerCase();

    if (vowels.includes(letter)) {
      extra += letter;
    }
  }

  return extra;
}

console.log(getVowels(string));