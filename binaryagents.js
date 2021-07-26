function binaryAgent(str) {
  var answer = "";
  var stringArray = str.split(" ");
  for (var i=0; i < stringArray.length; i++) {
    var number = 0;
    for (var j = 0; j < 8; j++) {
      number += parseInt(stringArray[i][j]) * Math.pow(2,7-j);
    }
    answer += String.fromCharCode(number);
  }
  return answer;
}

console.log(binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001"));
