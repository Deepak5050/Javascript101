/*Solution to Problem 1*/
function answer(){
var inputValue = document.getElementById("input1").value;
var myAnswer = document.getElementById("answer1");
var add = 0;

for (var counter = 0;counter <= inputValue; counter++){
if (counter % 3 === 0 || counter % 5 === 0){
add += counter;
}	
}

myAnswer.value = add;	
};

/*Solution to Problem 2*/
function answer2(inputValue) {
	var inputValue = document.getElementById("input2").value;
	var myAnswer = document.getElementById("answer2");
    var temp, sum = 0, a = 0, b = 1;
    while (b < inputValue) {
        temp = a;
        a = b;
        b += temp;
        if ((b & 1) === 0) {
            sum += b;
        }
    }
  
    myAnswer.value = sum;
}

/*Solution to Problem 3*/
function answer3(inputValue) {
	var inputValue = document.getElementById("input3").value;
	var myAnswer = document.getElementById("answer3");
    var d = Math.ceil(Math.sqrt(inputValue));

    function isPrime(inputValue) { 
        var i, limit = Math.ceil(Math.sqrt(inputValue));
        for (i = 3; i <= limit; i += 2) {
            if (inputValue % i === 0) {
                return false;
            }
        }
        return true;
    }


    d = (d & 1) === 0 ? d - 1 : d;


    while (!(inputValue % d === 0 && isPrime(d))) {
        d -= 2;
    }
    myAnswer.value = d;
}