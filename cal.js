/*its use to print value on input box that id is a result it will be declared....*/
function show(value){
    document.getElementById('result').value += value;
}
/*its is use to add value in input box in reult..*/
function solve(){
    document.getElementById('result').value=eval( document.getElementById('result').value)
}
/*clear result*/
function clr(){
    document.getElementById('result').value=" ";
}
/*erase*/
function eraseclick(){
    const dight=document.getElementById('result').value
    document.getElementById('result').value=dight.slice(0,-1);
}