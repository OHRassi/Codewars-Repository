// Create a function that takes in a word and returns the word with the first letter 
// capitalized.

// Don't worry about numbers, special characters, or non-string types being passed to 
// the function. The string lengths will be from 1 character up to 10 characters, but 
// will never be empty.

function capitalizeWord(word) {
  return word[0].toUpperCase() + word.substring(1)
}

// examples

// "this is a test" → "This is a test"

console.log(capitalizeWord("this is a test"),"This is a test")

// "the Eiffel Tower" → "The Eiffel Tower"

console.log(capitalizeWord("the Eiffel Tower"),"The Eiffel Tower")

// "/index.html" → "/index.html"

console.log(capitalizeWord("/index.html"),"/index.html")