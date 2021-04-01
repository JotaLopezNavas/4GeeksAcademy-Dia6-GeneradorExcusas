let quien = ["El perro","Mi jefe","Mi abuela","Un pájaro","Un marciano","Freddy Kruger"];
let que = ["comenzó a llorar","le dió un infarto","cantaba rock a todo volumén","se emborrachó","se suicidó", "se suicidó"];
let cuando = ["ayer", "antes de ayer", "durante la noche", "en la tarde", "luego de salir de clase","cuando estudiaba"];

function aleatorio() {
    
    var numero = Math.floor((Math.random() * (6-1)));
  
return numero;
};

function concatena() {
     var indice = {
        uno: aleatorio(),
        dos:  aleatorio(),
        tres:  aleatorio(),
     };

     var historia = quien[indice.uno]+" "+que[indice.dos]+" "+cuando[indice.tres];
     
     document.getElementById('resultado').innerHTML = historia;
   //  return  historia;
}




