var button = document.getElementsByClassName("button");
var display = document.getElementById("display");
var operand1 = 0;
var operand2 = null;
var operator = null;

var count = 0;
for(var i = 0; i < button.length; i++){
    button[i].addEventListener('click', function(){
        var value = this.getAttribute('data-value');
        if(value == '+' || value == '-' || value == '*' || value == '/' || value == '%' || value == 'rem'){
            operator = value;
            operand1 = parseFloat(display.textContent);
            display.innerText = '';
        }
        else if(value == '='){
            operand2 = parseFloat(display.textContent);
            if(operator == '+'){
                var eval = operand1 + operand2;
            }
            else if(operator == '-'){
                var eval = operand1 - operand2;
            }
            else if(operator == '*'){
                var eval = operand1 * operand2;
            }
            else if(operator == '/'){
                var eval = operand1 / operand2;
            }
            else if(operator == '%'){
                var eval = (operand1 / operand2)*100 + '%';
            }
            else if(operator == 'rem'){
                var eval = operand1 % operand2;
            }
            display.innerText = eval;
            count = 1;
        }
        else if(value == 'AC'){
            display.innerText = '';
        }
        else{
            if(count == 1){
                display.innerText = '';
            }
            count = 0;
            display.innerText += value;
        }
    });
}