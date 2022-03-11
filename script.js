function evaluate(equation) {
    if (equation[1] == '+') {
        return parseFloat(equation[0]) + parseFloat(equation[2]);
    } else if (equation[1] == '-') {
        return parseFloat(equation[0]) - parseFloat(equation[2]);
    } else if (equation[1] == '*') {
        return (parseFloat(equation[0]) * 10) * (parseFloat(equation[2]) * 10) / 100;
    } else if (equation[1] == '/') {
        if (equation[2] == '0') {
            window.open("https://www.youtube.com/watch?v=iik25wqIuFo", "_blank");
            return 'rick rolled';
        }
        return ((parseFloat(equation[0]) * 10) / (parseFloat(equation[2]) * 10));
    } else if (equation[1] == '^') {
        return Math.pow(parseFloat(equation[0]), parseFloat(equation[2]));
    } 
}

function factorialize(num) {
    if (num < 0) 
        return -1;
  else if (num == 0) 
      return 1;
  else {
      return (num * factorialize(num - 1));
  }
}

function main() {
    let btns = document.querySelectorAll('button');
    let upperDisplay = document.getElementById('upper-display');
    let lowerDisplay = document.getElementById('lower-display')

    lowerDisplay.innerHTML = '0';
    upperDisplay.innerHTML = '';

    for (i of btns) {
    i.addEventListener('click', function() {
        if (this.id == 'all-clear') {
            lowerDisplay.innerHTML = '0';
            upperDisplay.innerHTML = '';
        } else if (this.id == 'clear') {
            lowerDisplay.innerHTML = '0';
        } else if (this.id == '1' ||
                   this.id == '2' ||
                   this.id == '3' ||
                   this.id == '4' ||
                   this.id == '5' ||
                   this.id == '6' ||
                   this.id == '7' ||
                   this.id == '8' ||
                   this.id == '9' ||
                   this.id == '0') {
            if (lowerDisplay.innerHTML == '0') {
                lowerDisplay.innerHTML = '';
            }
            lowerDisplay.innerHTML += this.id;
        } else if (this.id == 'divide' || 
                   this.id == 'multiply' || 
                   this.id == 'subtract' || 
                   this.id == 'plus') {
                    if (upperDisplay.innerHTML[upperDisplay.innerHTML.length - 1] == '+' ||
                        upperDisplay.innerHTML[upperDisplay.innerHTML.length - 1] == '-' ||
                        upperDisplay.innerHTML[upperDisplay.innerHTML.length - 1] == '*' ||
                        upperDisplay.innerHTML[upperDisplay.innerHTML.length - 1] == '/') {
                            upperDisplay.innerHTML = upperDisplay.innerHTML.substring(0, upperDisplay.innerHTML.length - 1);
                            upperDisplay.innerHTML += this.innerHTML;
                    } else {
                        upperDisplay.innerHTML = lowerDisplay.innerHTML + ' ' + this.innerHTML;
                        lowerDisplay.innerHTML = '0';
                    }
        } else if (this.id == 'backspace') {
            let stringToSlice = lowerDisplay.innerHTML;
            lowerDisplay.innerHTML = stringToSlice.substring(0, stringToSlice.length - 1);
        } else if (this.id == 'power') {
            upperDisplay.innerHTML = lowerDisplay.innerHTML + ' ^';
            lowerDisplay.innerHTML = '0';
        } else if (this.id == 'equals') {
            let checkPreReqs = ((upperDisplay.innerHTML + ' ' + lowerDisplay.innerHTML).split(" ")).length;
            if (checkPreReqs != 3) {}
            else {
                upperDisplay.innerHTML += ' ' + lowerDisplay.innerHTML + ' = ';
                let solution = evaluate(upperDisplay.innerHTML.split(" "));
                upperDisplay.innerHTML += solution;
                lowerDisplay.innerHTML = evaluate(upperDisplay.innerHTML.split(" "));
            }
        } else if (this.id == 'square-root') {
            let toSquareRoot = lowerDisplay.innerHTML; 
            if ((lowerDisplay.innerHTML)[0] != '-') {
                upperDisplay.innerHTML = '√' + toSquareRoot.toString() + ' = ' + (Math.sqrt(toSquareRoot)).toString();
                lowerDisplay.innerHTML = (Math.sqrt(toSquareRoot)).toString();
            } else {
                upperDisplay.innerHTML = '√' + toSquareRoot.toString() + ' = impossible'
                lowerDisplay.innerHTML = '0';
            }
        } else if (this.id == 'posneg') {
              if (lowerDisplay.innerHTML == '0') {}
              else if ((lowerDisplay.innerHTML)[0] == '-') {
                lowerDisplay.innerHTML = (lowerDisplay.innerHTML).substring(1, lowerDisplay.innerHTML.length);
            } else {
                lowerDisplay.innerHTML = '-' + lowerDisplay.innerHTML;
            }
        } else if (this.id == 'decimal') {
            let decimal = '.';
            if (lowerDisplay.innerHTML.includes(decimal)) {}
            else {
                lowerDisplay.innerHTML += '.';
            }
        } else if (this.id == 'one-over-x') {
            if (lowerDisplay.innerHTML == '0') {
                window.open("https://www.youtube.com/watch?v=iik25wqIuFo", "_blank");
                upperDisplay.innerHTML = '1 / 0 = rick rolled';
                lowerDisplay.innerHTML =  'rick rolled';
            } else {
                let toDivide = lowerDisplay.innerHTML;
                upperDisplay.innerHTML = '1 / ' + toDivide + ' = ' + (1/toDivide);
                lowerDisplay.innerHTML = 1 / toDivide;
            }
        } else if (this.id == 'factorial') {
            let decimal = '.'
            if (lowerDisplay.innerHTML.includes(decimal)) {}
            else {
                let toFactorial = lowerDisplay.innerHTML;
                let hasBeenFactorialed = factorialize(toFactorial);
                upperDisplay.innerHTML = toFactorial + '! = ' + hasBeenFactorialed;
                lowerDisplay.innerHTML = hasBeenFactorialed;
            }
        } else if (this.id == 'percent') {
            lowerDisplay.innerHTML = lowerDisplay.innerHTML / 100;
        }
    });
    }
}

main();