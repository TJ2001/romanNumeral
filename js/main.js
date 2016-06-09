var out = [];
var  i = input % 5;
var j = input / 5;


function creatI(input) {

for (var i = 0; i < input; i++) {
  (input <= 5){out.push("i")};

    for (var j = 0; j < parseInt(input)/5; j++)
    out.push("v");
    }
  return out;
  }
}








$(document).ready(function() {
  $("form#roman").submit(function(event) {
    event.preventDefault();
    var input = $("input#number").val();
    var numeral = roman(number);


    $("#result").text(result);
    });
  });
