function calcular(){

    console.log(document.getElementById('a'));
    equacao(document.getElementById('a').value,document.getElementById('b').value,document.getElementById('c').value);
    document.getElementById('id01').style.display='flex';
}

function equacao(a, b, c){
    
    if(delta(a,b,c)>0){
        console.log(delta(a,b,c));
        document.getElementById('x1').innerHTML = "X1 é igual: "+x1(a,b,delta(a,b,c))
        document.getElementById('x2').innerHTML = "X2 é igual: "+x2(a,b,delta(a,b,c))
    }else{
        console.log("O valor de Delta é negativo"+delta(a,b,c))
    }
}
function delta(a, b, c){
    return (b**2)-(4*a*c)
}
function x1(a, b, valordelta){
    return (-b - Math.sqrt(valordelta))/(2*a)  ;
}
function x2(a, b, valordelta){
    return (-b + Math.sqrt(valordelta))/(2*a);
}

function modalfechar(){

    document.getElementById('id01').style.display='none';
    document.getElementById('a').value = '';
    document.getElementById('b').value = '';
    document.getElementById('c').value = '';
}