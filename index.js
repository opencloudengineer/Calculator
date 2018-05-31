var keys = document.querySelectorAll('#calculator span');
var operators = [ '+' , '-' , '*' , '/' ];
var decimalAdd = false;

for (var i = 0; i < keys.length; i++){
        keys[i].onclick = function(e){
                var input = document.querySelector('.screen');
                var inputVal = input.innerHTML;
                var btnVal = this.innerHTML;
                if(btnVal == 'C'){
                        input.innerHTML = '';
                        decimalAdd = false;
                }
                else if(btnVal == '='){
                        var equation = inputVal;
                        var lasChar = equation[equation.length - 1];
//                      equation = equation.replace(/x/g, '*').replace(/+/g, '/');

                        if((operators.indexOf(lasChar) > -1) || (lasChar == '.'))
                        {
                        equation = equation.replace(/.$/,'');
                        }
                        if(equation)
                        {
                                if(eval(equation)%1 == 0)
                                        input.innerHTML = eval(equation);
                                else{
                                        t=eval(equation);
                                        input.innerHTML = t.toFixed(3);
                                }
                        }

                        decimalAdd = false;
                }
                else
                {
                        input.innerHTML += btnVal;
                }

        //      e.preventDefault();

        }
}
