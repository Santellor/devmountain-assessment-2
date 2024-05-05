// Unit 2 Assessment: further-study.js

// Return a sequence of words arranged according to the rules below.
//
// The sequence starts with the first word in the given array. The next word
// will start with the last letter of the preceding word. For example, these
// are all valid sequences of words:
//
//   king, goblin, nose, eat
//   cute, etcetera, antsy, yak, karat
//
// Sometimes, you'll get a word where there are mutliple candidates for the
// next word. For example, if the words are:
//
//   noon, naan, nun
//
// Then the first word in the sequence is 'noon'.
//
//   noon
//
// And the word after that should be the *first* word that starts with 'n'. So,
// even though both 'naan' and 'nun' start with 'n', the next word should be
// 'naan' because 'naan' appears before 'nun'. The final sequence of words will
// be:
//
//   noon, naan, nun
//
// The sequence will continue in this fashion until it runs out of words or it
// can't find words that'll fit the pattern.
//
// Ex.:
//   buildWordChain(['zoo', 'sour', 'racket', 'octos']);
//   => ['zoo', 'octos', 'sour', 'racket']

const buildWordChain = (words) => {

    // empty arrays are not my friend, and neither is an empty argument
    if (words === undefined || words[0] === undefined) {
    return words
    }

    // Create an object that will store letter matches for each given element
    const codex = {}
    // { 
    // zoo: [ 'octos' ], 
    // sour: [ 'racket' ], 
    // racket: [], 
    // octos: [ 'sour' ] 
    // }
        
    // Loop through words to fill codex
    for (let word of words) {
        //takes the last letter of each word
        let finalLetter = word.slice(word.length - 1)
        //populates the codex: key = word, value = array of words that start with finalLetter
        //avoid any loop problems by preventing the word from being added to its own codex
        codex[word] = words.filter((element) => element.startsWith(finalLetter) && element !== word)
    }
        
    //declares the start of the chain as the first word in the given array
    const chainArray = [words[0]]
    
    //loop through chain to place the correct next word from the codex
    for (let word of chainArray) {

        //defines the next word by searching the codex and returning the first value
        nextWord = codex[word][0]

        //checks if the next word is undefined, and pushes it if not
        if (nextWord !== undefined) {
        chainArray.push(nextWord)

        //removes any items from the codex that are present in the chain
        codex[nextWord] = codex[nextWord].filter((element) => !chainArray.includes(element))
        delete codex[word]
        }
    }

    return chainArray

}
export { buildWordChain };
