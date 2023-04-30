//your JS code here. If required.
let str = prompt("enter the string");
	function firstNonRepeatedCharacter(str) {
  for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i);
    if (str.indexOf(char) === i && str.indexOf(char, i + 1) === -1) {
      return char;
    }
  }
  return null;
}
