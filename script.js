var input = document.getElementById("userinput");

var button = document.getElementById("clicker");



function inputLength() {
    	return input.value.length;
    }


button.addEventListener("click",function(){
    if(inputLength() > 0 && input.value < 10){
       
        if(input.value < 11 && input.value >= 7){
            alert(input.value + ":-) " + " I am glad you like the website!")
            }
        else if(input.value <= 6 && input.value >= 4){
            alert("The rank is: " + input.value + " Thank you, for the honesty")
        }
        else if(input.value <= 3 && input.value > 0){
            var answer = prompt("What is in need of improvement?:")
            if(answer.length == 0){
                alert(":-'(")
            }
            else{
            alert("Thank you!")
            }
        }
        else{
                alert("Incorrect value")
            }
    }
})

input.addEventListener("keypress",function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.key === "Enter") {
        
        if(input.value <= 10 && input.value >= 7){
        alert(input.value + ":-)" + " I am glad you like the website!")
        }
        else if(input.value <= 6 && input.value >= 4){
            alert("The rank is: " + input.value + " Thank you for the honesty")
        }
        else if(input.value <= 3 && input.value > 0){
            var answer = prompt("What is in need of improvement?:")
            if(answer.length == 0){
                alert(":-'(")
            }
            else{
            alert("Thank you!")
            }
        }
        else{
            alert("Incorrect value")
        }

    }
})