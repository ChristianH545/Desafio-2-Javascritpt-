var usuario = prompt(" ¿Cuàl es tù peso terrìcola? ");
var planeta = parseInt(
  prompt(
    " elije tu planeta:\n 1)- marte.\n 2)- jupiter.\n 3)- Mercurio.\n 4)- Venus.\n 5)- Saturno.\n 6)- Urano.\n 7)- Neptuno.\n  "
  )
);
var Peso = parseInt(usuario);
var G_Tierra = 9.8;
var G_Marte = 3.7;
var G_Jupiter = 24.8;
var G_Mercurio = 3.7;
var G_Venus = 8.87;
var G_Saturno = 10.44;
var G_Urano = 8.87;
var G_Neptuno = 11.15;
var Peso_final;
var nombre;
if (planeta == 1) {
  peso_final = (Peso * G_Marte) / G_Tierra;
  nombre = " Marte ";
} else if (planeta == 2) {
  peso_final = (Peso * G_Jupiter) / G_Tierra;
  nombre = " Jupiter ";
} else if (planeta == 3) {
  peso_final = (Peso * G_Mercurio) / G_Tierra;
  nombre = " Mercurio ";
} else if (planeta == 4) {
  peso_final = (Peso * G_Venus) / G_Tierra;
  nombre = " Venus ";
} else if (planeta == 5) {
  peso_final = (Peso * G_Saturno) / G_Tierra;
  nombre = " Saturno ";
} else if (planeta == 6) {
  peso_final = (Peso * G_Urano) / G_Tierra;
  nombre = " Urano ";
} else if (planeta == 7) {
  peso_final = (Peso * G_Neptuno) / G_Tierra;
  nombre = " Neptuno";
} else {
  peso_final = 1000000;
  nombre = " Krypton ";
console.log('inserto un valor no invalido o no lleno los campos ')}
peso_final = parseInt(peso_final);
alert(
  ` Tu Peso en ${nombre} es: ${peso_final} kilogramos`
);
