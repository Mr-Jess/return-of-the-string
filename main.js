function capitalize(str) {
  return str.toUpperCase();
}

function exclaim(str) {
  return str + '!';
}

function firstCharacter(str) {
  return str[0];
}

function lastCharacter(str) {
  return str[str.length -1];
}

function oneCharacter(str) {
  return str[8];
}

function twoCharacters(str) {
  const answer = str[2] + str[11];
  return answer;
}

function initials(str) {
  return firstCharacter(str) + '.' + str[str.indexOf(' ') + 1] + '.';
}

function yeller(str) {
  // return capitalize(str) + '!!!';

  const capitalized = capitalize(str);
  const pun1 = exclaim(capitalized)
  const pun2 = exclaim(pun1);
  const pun3 = exclaim(pun2);
  return pun3;
}


module.exports = {
  capitalize,
  exclaim,
  firstCharacter,
  lastCharacter,
  oneCharacter,
  twoCharacters,
  initials,
  yeller,
};