// Unique Characters
// Given a string, determine if all the characters in the string are unique.

// Uppercase and lowercase letters should be considered different characters.

// Unique Characters
// Given a string, determine if all the characters in the string are unique.

// Uppercase and lowercase letters should be considered different characters.

function allUnique(str) {
  console.log(str);
  const arr = str.split('');
  const charsSet = new Set();

  arr.forEach((x) => charsSet.add(x));

  return arr.length === charsSet.size;
}
