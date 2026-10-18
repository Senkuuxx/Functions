function logItems(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(`${i + 1} - ${array[i]}`);
  }
}


function calculateEngravingPrice(message, pricePerWord) {
  const words = message.split(" ");
  return words.length * pricePerWord;
}


function findLongestWord(string) {
  const words = string.split(" ");
  let longestWord = words[0];

  for (let i = 1; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }

  return longestWord;
}


function formatString(string) {
  if (string.length <= 40) {
    return string;
  }

  return string.slice(0, 40) + "...";
}


function checkForSpam(message) {
  const lowerMessage = message.toLowerCase();
  return lowerMessage.includes("spam") || lowerMessage.includes("sale");
}