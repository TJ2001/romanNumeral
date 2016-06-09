var number = "";
var numeral = [];
var output = "";

function convert(number) {
  number = parseInt(number);
  debugger;
  for (var i = 0; i <= number; i=number) {

    if (number >= 1000) {
      numeral.push("M");
      number = number-1000;
    }
     else if (number >= 500) {
        numeral.push("D");
        number = number-500;
      } else if (number >= 100) {
        numeral.push("C");
        number = number-100;
      } else if (number >= 50) {
        numeral.push("L");
        number = number-50;
      }else if (number >= 10) {
      numeral.push("X");
      number = number-10;
    } else if (number >= 5) {
      numeral.push("V");
      number = number-5;
    } else if (number < 5) {
      numeral.push("I");
      number = number-1;
    } if (number === 0) {
      break;
    }
  }
  output = numeral.join("");
}


























// var out = [];
// var  i = input % 5;
// var j = input / 5;
//
//
// function creatI(input) {
//
// for (var i = 0; i < input; i++) {
//   (input <= 5){out.push("i")};
//
//     for (var j = 0; j < parseInt(input)/5; j++)
//     out.push("v");
//     }
//   return out;
//   }
// }
//
// $(document).ready(function() {
//   $("form#roman").submit(function(event) {
//     event.preventDefault();
//     var input = $("input#number").val();
//     var numeral = roman(number);
//
//
//     $("#result").text(result);
//     });
//   });
