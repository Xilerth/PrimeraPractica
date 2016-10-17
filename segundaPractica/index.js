var filtros = ['sin animacion','magic'];

var filtro = document.getElementById("filtro");
for(var i = 0; i<filtros.length; i++){
  var x = document.createElement("OPTION");
      x.setAttribute("value", filtros[i]);
  x.appendChild(document.createTextNode(filtros[i]));
  document.getElementById("filtro").appendChild(x);
}
function cambio(e){
  document.getElementById("imagen1").className = "magictime";
  document.getElementById("imagen1").classList.add(e.value);
}
