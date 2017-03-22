function somar(a, b){
  return a + b;
}


document.getElementById("btn-calcular").onclick = function(){
  var valueA = document.getElementById("value-a").value;
  var valueB = document.getElementById("value-b").value;
  console.log(somar(parseInt(valueA),parseInt(valueB)));

}
