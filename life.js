function userInput() {
    var sign = prompt("What do you want to do? Choose: +, -, /, *, %");
    var Num1 = parseFloat(prompt("Input Number 1: "));
    var Num2 = parseFloat(prompt("Input Number 2: "));
    var result = 0;
    
    if(sign === "+")
    {
        result = (Num1 + Num2);
    }
    else if(sign === "-")
    {
        result = (Num1 - Num2);
    }
    else if(sign === "/")
    {
        result = (Num1 / Num2);
    }
    else if(sign === "*")
    {
        result = (Num1 * Num2);
    }
    else if(sign === "%")
    {
        result = (Num1 % Num2);
    }
    else{
        alert('Invalid input, please try again');
    }
    
    alert('Your answer is ' + result);
    }
    userInput();