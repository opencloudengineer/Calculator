var keys = document.querySelectorAll('#calculator span');
var operators = [ '+' , '-' , '*' , '/' , 'nthRoot' , '(' , ')' ];
var decimalAdd = false;
function nthRoot(m,n)
{
        var z;
        //Replacement for Math.pow
        //aa**bb is calculated here
        function power(aa,bb){
                var cc=1;
                for(i=0;i<bb;i++){
                        cc*=aa
                }
                return cc
        }
  function repe(x)
  {
    var a,b;
    a=m/power(x,n-1);
    b=(a+(x*(n-1)))/n;
    if(x==(x+b)/2)
    {
      z=parseFloat(x.toString(10))
    }
    else
    {
      repe((x+b)/2);
    }
  }
  repe(1);
  return(z)
}
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
        }
}
