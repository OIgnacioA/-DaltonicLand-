
var i = 0; 
var Vueltas = 0; 
var ok = true; 

var V = 500; //valor de repeticion (velocidad)

var salvar = true; //para evitar que -F(Salvador)- se ejecute de manera consecutiva.
var Sal = 0 ; 
var Pnts = 0; //puntaje
var Y = 0; 

var H = 100;  // valor de barra de vida.
var HE = 0; // valor de barra de vida Enemigo.
var NuevoEn = false; //cambio de cantidad de daño por cada cambio de enmigo
var Dif = 10; //valor de relleno de barra de enemigo
var Ene = 1; // numero de enemigo
var PntsCont = 0; //penalizacion de uso del break
var Penalizacion = 0; //penalizacion de turno
var velocidadMuerte = 0;
var death = false; 
var valorDeVuelta = 0;
var g = 0;


var oportunidad = true;
var contador_oportunidades = 0;
var forma; 




$(document).ready(function() {
    //sonido_TicTac_120.play(); 
    Imagenes_Espera(i);
    Cambiaformas(V);
    barradeVidaEnemigo(HE);
    

//----------------------- inconveniente a resolver; 

    //  var botones=document.querySelectorAll("div");   Estyo no termina de funcionar: -- querySelectorAll("--  no funciona con Funciones Declaradas (las que no se repiten varias veces en el llamado)

    //  for(var i=0; i<botones.length;i++){ 

    //      botones[i].addEventListener("click", OnClick, false); 
        
    //  }
//----------------------------- en vez de esto, con el bucle for, voy a  tener que hacer un llamado por cada ID... ¬_¬ ridiculo...   

    var boton1= document.getElementById('uno'); boton1.addEventListener("click", OnClick, false);

    var boton2= document.getElementById('dos'); boton2.addEventListener("click", OnClick, false);

    var boton3= document.getElementById('tres'); boton3.addEventListener("click", OnClick, false);

    var boton4= document.getElementById('cuatro'); boton4.addEventListener("click", OnClick, false);

    var boton5= document.getElementById('cinco'); boton5.addEventListener("click", OnClick, false);

    var boton6= document.getElementById('seis'); boton6.addEventListener("click", OnClick, false);

    var boton7= document.getElementById('siete'); boton7.addEventListener("click", OnClick, false);

    var boton8= document.getElementById('ocho'); boton8.addEventListener("click", OnClick, false);

    var boton9= document.getElementById('nueve'); boton9.addEventListener("click", OnClick, false);

    var boton10= document.getElementById('diez'); boton10.addEventListener("click", OnClick, false);

    var boton11= document.getElementById('once'); boton11.addEventListener("click", OnClick, false);

    var boton12= document.getElementById('doce'); boton12.addEventListener("click", OnClick, false);    

    var Bre= document.getElementById('Salva'); Bre.addEventListener("click", OnClick, false);    


})


//FUNCIONES:-------------------------

function Cambiaformas(val) { // INTERVALO DE REPETICION de Movimiento de reloj y Cambio de colores.
    //Nota 4: El clearInterval fue necesario para que el cambio de velocidad no generara un efecto "roto".

    clearInterval(forma);
    V = val; 
   forma = setInterval(shapes, val); 
   CinturonDeCuadrados();  // cambio en la primera vuelta :)
 
}

function Cambiaformas_2(val) { // INTERVALO DE REPETICION colores MYUY cambiantes en victoria. 

    clearInterval(forma);
   
  
   console.log("velocidad cambiaformas_2: " + V);
   forma = setInterval(CinturonDeCuadrados, val); 
   
 
}



//------------------------------------Generadores:

function rand_D(){// generador de numero aleatorio de 25 en 25, de 0 a 250
var aleatorio = (Math.round((Math.random()*10))*25);
return aleatorio;     
} 

function shapes(){ //Cambio de formas; simulacion de movimiento de relojeria. 
   
   

    
    if (i == 12){ 
        var beep = new Audio("beep.mp3");
        $(".cuadrado" + i).css ("border-radius", "15%");
        i = 1; 
        CinturonDeCuadrados(); // asi coincide finalmene cambio de formas y colores.
        Vueltas = Vueltas + 1 ; // ver : esta funcion esta teniendo en cuenta a los pares?
        salvador(Vueltas);
        //console.log("vuelta: " + Vueltas);
       beep.play();       
       
        

        if(death == false){ 
            H = H - 2; 
            barradeVida(H);
        } 
          
        //console.log("volteretas:  " + Vueltas);

    } else {
       i= i+1; 
      
    }    
    
    if(death == false){ 
        //console.log("shapes" + i);
        Imagenes_Espera(i);
    }

    $(".cuadrado" + (i - 1)).css ("border-radius", "15%");
    $(".cuadrado" + i).css ("border-radius", "50%");

   
}

//------------------------------------Principal:

function CinturonDeCuadrados(){ // Asignacion principal de colores a cada cuadrado. 

    aleatorio = (Math.round(Math.random()*12)); // el numero randon aqui va a ser el del que copie al cuadrado del medio.

  
    var r = rand_D(); var g = rand_D(); var b = rand_D();
    
    ColorCentro.Rojo = r; 
    ColorCentro.Verde = g; 
    ColorCentro.Azul = b; 

    $(".cuadradoCen").css ("background-color",  "rgb("+ r +","+ g + "," + b + ")");

    var r = rand_D(); var g = rand_D(); var b = rand_D();

       
    if ( aleatorio ==  0) {  //si el numero coincide con aleatorio carga los valortes de "centro" -Y- en el atributo del objeto dentro del if*, sino, carga rand_D() como siempre en el else*.
 
        r = ColorCentro.Rojo; 
        g = ColorCentro.Verde; 
        b = ColorCentro.Azul; 

        cuadrado1.Rojo = r; 
        cuadrado1.Verde = g; 
        cuadrado1.Azul = b; 
 
        //ComparaColores(r,g,b);

    } else {

        cuadrado1.Rojo = r; 
        cuadrado1.Verde = g; 
        cuadrado1.Azul = b; 

    }
    $(".cuadrado1").css ("background-color",  "rgb("+ r +","+ g + "," + b + ")");

    
    var r = rand_D(); var g = rand_D(); var b = rand_D();

    if ( aleatorio ==  1){ 

        r = ColorCentro.Rojo; g = ColorCentro.Verde; b = ColorCentro.Azul;  
        
        cuadrado2.Rojo = r; 
        cuadrado2.Verde = g; 
        cuadrado2.Azul = b; 

       //ComparaColores(r,g,b);
        
    } else {

        cuadrado2.Rojo = r; 
        cuadrado2.Verde = g; 
        cuadrado2.Azul = b; 
     
    }
    $(".cuadrado2").css ("background-color",  "rgb("+ r +","+ g + "," + b + ")");


    var r = rand_D(); var g = rand_D(); var b = rand_D();

    if ( aleatorio ==  2){ 

        r = ColorCentro.Rojo; g = ColorCentro.Verde; b = ColorCentro.Azul; 
        
        cuadrado3.Rojo = r; 
        cuadrado3.Verde = g; 
        cuadrado3.Azul = b; 

      
        //ComparaColores(r,g,b);
        
    } else {

        cuadrado3.Rojo = r; 
        cuadrado3.Verde = g; 
        cuadrado3.Azul = b; 
        
    }
    $(".cuadrado3").css ("background-color",  "rgb("+ r +","+ g + "," + b + ")");


    var r = rand_D(); var g = rand_D(); var b = rand_D();

    if ( aleatorio ==  3){ 

        r = ColorCentro.Rojo; g = ColorCentro.Verde;  b = ColorCentro.Azul;   

        cuadrado4.Rojo = r; 
        cuadrado4.Verde = g; 
        cuadrado4.Azul = b;

     
       //ComparaColores(r,g,b);

    } else {

        cuadrado4.Rojo = r; 
        cuadrado4.Verde = g; 
        cuadrado4.Azul = b;  

    }
    $(".cuadrado4").css ("background-color",  "rgb("+ r +","+ g + "," + b + ")");


    var r = rand_D(); var g = rand_D(); var b = rand_D();

    if ( aleatorio ==  4){ 

        r = ColorCentro.Rojo; g = ColorCentro.Verde; b = ColorCentro.Azul;   

        cuadrado5.Rojo = r; 
        cuadrado5.Verde = g; 
        cuadrado5.Azul = b; 

   
        //ComparaColores(r,g,b);

    } else {

        cuadrado5.Rojo = r; 
        cuadrado5.Verde = g; 
        cuadrado5.Azul = b; 

    }
    $(".cuadrado5").css ("background-color",  "rgb("+ r +","+ g + "," + b + ")");


    var r = rand_D(); var g = rand_D(); var b = rand_D();

    if ( aleatorio ==  5){ 

        r = ColorCentro.Rojo; g = ColorCentro.Verde; b = ColorCentro.Azul;   

        cuadrado6.Rojo = r; 
        cuadrado6.Verde = g; 
        cuadrado6.Azul = b;


        //ComparaColores(r,g,b);

    } else {

        cuadrado6.Rojo = r; cuadrado6.Verde = g; cuadrado6.Azul = b;

    }
    $(".cuadrado6").css ("background-color",  "rgb("+ r +","+ g + "," + b + ")");


    var r = rand_D(); var g = rand_D(); var b = rand_D();

    if ( aleatorio ==  6){ 

        r = ColorCentro.Rojo; g = ColorCentro.Verde; b = ColorCentro.Azul;   

        cuadrado7.Rojo = r; 
        cuadrado7.Verde = g; 
        cuadrado7.Azul = b; 


       // ComparaColores(r,g,b);

    } else {

        cuadrado7.Rojo = r; cuadrado7.Verde = g; cuadrado7.Azul = b; 

    }
    $(".cuadrado7").css ("background-color",  "rgb("+ r +","+ g + "," + b + ")");


    var r = rand_D(); var g = rand_D(); var b = rand_D();

    if ( aleatorio ==  7){ 

        r = ColorCentro.Rojo; g = ColorCentro.Verde; b = ColorCentro.Azul;   

        cuadrado8.Rojo = r; 
        cuadrado8.Verde = g; 
        cuadrado8.Azul = b; 

 
        //ComparaColores(r,g,b);

    } else {

        cuadrado8.Rojo = r; 
        cuadrado8.Verde = g; 
        cuadrado8.Azul = b;  

    }
    $(".cuadrado8").css ("background-color",  "rgb("+ r +","+ g + "," + b + ")");


    var r = rand_D(); var g = rand_D(); var b = rand_D();

    if ( aleatorio ==  8){ 

        r = ColorCentro.Rojo; g = ColorCentro.Verde; b = ColorCentro.Azul;   

        cuadrado9.Rojo = r; 
        cuadrado9.Verde = g; 
        cuadrado9.Azul = b;;


        //ComparaColores(r,g,b);

    } else {

        cuadrado9.Rojo = r; cuadrado9.Verde = g; cuadrado9.Azul = b;;  

    }
    $(".cuadrado9").css ("background-color",  "rgb("+ r +","+ g + "," + b + ")");


    var r = rand_D(); var g = rand_D(); var b = rand_D();

    if ( aleatorio ==  9){ 

        r = ColorCentro.Rojo; g = ColorCentro.Verde; b = ColorCentro.Azul;   

        cuadrado10.Rojo = r; 
        cuadrado10.Verde = g; 
        cuadrado10.Azul = b;  


        //ComparaColores(r,g,b);

    } else {

        cuadrado10.Rojo = r; 
        cuadrado10.Verde = g; 
        cuadrado10.Azul = b;  

    }
    $(".cuadrado10").css ("background-color",  "rgb("+ r +","+ g + "," + b + ")");


    var r = rand_D(); var g = rand_D(); var b = rand_D();

    if ( aleatorio ==  10){ 

        r = ColorCentro.Rojo; g = ColorCentro.Verde; b = ColorCentro.Azul;   

        cuadrado11.Rojo = r; 
        cuadrado11.Verde = g; 
        cuadrado11.Azul = b;

        //ComparaColores(r,g,b);

    } else {

        cuadrado11.Rojo = r; 
        cuadrado11.Verde = g; 
        cuadrado11.Azul = b;

    }
    $(".cuadrado11").css ("background-color",  "rgb("+ r +","+ g + "," + b + ")");
     

    var r = rand_D(); var g = rand_D(); var b = rand_D();

    if ( aleatorio ==  11){ 

        r = ColorCentro.Rojo; g = ColorCentro.Verde;  b = ColorCentro.Azul;  

        cuadrado12.Rojo = r; 
        cuadrado12.Verde = g; 
        cuadrado12.Azul = b;
        
       
        //ComparaColores(r,g,b);

    } else {

        cuadrado12.Rojo = r; 
        cuadrado12.Verde = g; 
        cuadrado12.Azul = b;

    }
    $(".cuadrado12").css ("background-color",  "rgb("+ r +","+ g + "," + b + ")");

}

//------------------------------------Acción:

const OnClick = function(e)  { // funcion Anonima vs Funcion Déclarada (Ver)... 

    //...asi se evita que la funcion se llame varias veces. (F.datacolor se llamaba varias veces, a su vez llamaba varias veces a "F.comparaColores" y daba -ganador- varias veces)

    dataColor(e); 

}

function dataColor(e){// Objetos a la escucha de un evento OnClick

    

    if (e.target==uno){ //Nota 5: el "uno" lo toma del ID. 

        r =  cuadrado1.Rojo;
        g =  cuadrado1.Verde;
        b =  cuadrado1.Azul;

        // console.log(r +", " + g  + ", " + b + " prueba"); 

        ComparaColores(r,g,b);
        ComparSalvador(r,g,b);
    
    }else if (e.target==dos){

        r =  cuadrado2.Rojo;
        g =  cuadrado2.Verde;
        b =  cuadrado2.Azul;

        // console.log(r +", " + g  + ", " + b + " prueba"); 

        ComparaColores(r,g,b);
        ComparSalvador(r,g,b);

    }else if (e.target==tres){

        r =  cuadrado3.Rojo;
        g =  cuadrado3.Verde;
        b =  cuadrado3.Azul;

        // console.log(r +", " + g  + ", " + b + " prueba"); 

        ComparaColores(r,g,b);
        ComparSalvador(r,g,b);

    }else if (e.target==cuatro){

        r =  cuadrado4.Rojo;
        g =  cuadrado4.Verde;
        b =  cuadrado4.Azul;

        // console.log(r +", " + g  + ", " + b + " prueba"); 

        ComparaColores(r,g,b);
        ComparSalvador(r,g,b);

    }else if (e.target==cinco){

        r =  cuadrado5.Rojo;
        g =  cuadrado5.Verde;
        b =  cuadrado5.Azul;

    //    console.log(r +", " + g  + ", " + b + " prueba"); 

        ComparaColores(r,g,b);
        ComparSalvador(r,g,b);

    }else if (e.target==seis){

        r =  cuadrado6.Rojo;
        g =  cuadrado6.Verde;
        b =  cuadrado6.Azul;

        // console.log(r +", " + g  + ", " + b + " prueba"); 

        ComparaColores(r,g,b);
        ComparSalvador(r,g,b);

    }else if (e.target==siete){

        r =  cuadrado7.Rojo;
        g =  cuadrado7.Verde;
        b =  cuadrado7.Azul;

        // console.log(r +", " + g  + ", " + b + " prueba"); 

        ComparaColores(r,g,b);
        ComparSalvador(r,g,b);

    }else if (e.target==ocho){

        r =  cuadrado8.Rojo;
        g =  cuadrado8.Verde;
        b =  cuadrado8.Azul;

    //    console.log(r +", " + g  + ", " + b + " prueba"); 

        ComparaColores(r,g,b);
        ComparSalvador(r,g,b);

    }else if (e.target==nueve){

        r =  cuadrado9.Rojo;
        g =  cuadrado9.Verde;
        b =  cuadrado9.Azul;

        // console.log(r +", " + g  + ", " + b + " prueba"); 

        ComparaColores(r,g,b);
        ComparSalvador(r,g,b);

    }else if (e.target==diez){

        r =  cuadrado10.Rojo;
        g =  cuadrado10.Verde;
        b =  cuadrado10.Azul;

        // console.log(r +", " + g  + ", " + b + " prueba"); 

        ComparaColores(r,g,b);
        ComparSalvador(r,g,b);

    }else if (e.target==once){

        r =  cuadrado11.Rojo;
        g =  cuadrado11.Verde;
        b =  cuadrado11.Azul;

    //console.log(r +", " + g  + ", " + b + " prueba"); 

        ComparaColores(r,g,b);
        ComparSalvador(r,g,b);

    }else if (e.target==doce){

        r =  cuadrado12.Rojo;
        g =  cuadrado12.Verde;
        b =  cuadrado12.Azul;

    //console.log(r +", " + g  + ", " + b + " prueba"); 

        ComparaColores(r,g,b);
        ComparSalvador(r,g,b);

    }else if (e.target==Salva){

      if ( Pnts >= 300){  

          var uff = new Audio("suspiro.mp3");  
          var clickeo = new Audio("sonidoBoton.mp3");

          clickeo.play();

          PntsCont += 25;

            Pnts -= 200 + PntsCont;
            PntsCont += 25;

            Puntaje(Pnts);

            V = (Math.round(V * 2));
            Cambiaformas(V);

            console.log("bajo velocidad a " + V);
  
            uff.play();

        }
    }

  
}


//------------------------------------Gestión y Resultados:

function ComparaColores(val1,val2,val3){ // si el color clickeado y el color del centro son o no el mismo. 

    var sonido_uno = new Audio("sonido1.mp3");var sonido_dos = new Audio("sonido2.mp3");


   var Rc = ColorCentro.Rojo; var Gc = ColorCentro.Verde; var Bc = ColorCentro.Azul; 
   var r = val1; var g = val2; var b = val3;


    if((Rc == r) && (Gc == g) && (Bc== b)){
        
        sonido_uno.play();
        var aleatorio_3 = (Math.round(Math.random()*4)); //Nota 6 aleatoriamente 5 numeros posibles de rostros de acierto.
        Imagenes_Acierto(aleatorio_3);

        ok = false; //hace esperar  al rostro de "espera".

        V = (Math.round(V - (V / 10)));
      console.log("Velocidad tras coincidir: " + V );
        Cambiaformas(V);

        if(H <= 100){  // Nota 3: importante que no pase de 100, aunque sume mas de 100, para que el máximo de la barra sea hasta 100 y no más.  

            if((H + 10)> 100){ // si sumado da mas de 100, da 95, y si no, da el numero que resultede la suma.
                H = 95;
            } else {
                H = H + 10;   
            }
        }
        barradeVida(H);
     
        if ( NuevoEn == true) { 
             
            Dif = (Dif / Ene);

            NuevoEn = false; 
        }
        //console.log(Dif + " Dificultad");


        Pnts += 50;
        Puntaje(Pnts);

        HE += Dif; // Mas chico el valor de dif. Mas duro el enemigo.
            barradeVidaEnemigo(HE);

    } else {
     
        sonido_dos.play();
        H = H - 2; 
        barradeVida(H);
        
        Imagenes_Reacciones(0);
    
    }; 

}

function barradeVida(val){ // (cambia valor de la barra de vida.)

    var barra= document.getElementById('meter5');
  if ( val <= 0 ){

    alert("You Lose!. Puntos = " + Pnts );

    location.reload();

  }else {barra.value = val ; 
    //console.log("vida: " + val);
    }
    
}

function barradeVidaEnemigo(val){ // (cambia valor de la barra de vida.)

    var barra= document.getElementById('meter_win');

   
    if(val >= 100){
        var hoyes = new Audio("hoyeh.mp3");

        barra.value = 0 ; 
        HE = 0;
        hoyes.play();

        // --cambio de enmigo y de dificultad: -----
        Ene += 1; 
        NuevoEn = true; 
       //-------------------------------------------¡

        Muerte();
        
    } else {barra.value = val; }
    
    //console.log("vida: " + val);

}


function Muerte(){
    death = true; //nota 10: asi la unica cara que se ejecuta es la de la muerte. (porque shapes() tambien llama a rostros de espera.)
    Cambiaformas(40); 
    Cambiaformas_2(20);
    Imagenes_Reacciones(3);

    const t = setInterval(function(){ //Nota 9. Este es un"retrasante", a diferencia de "cambiaFormas" donde se usa un intervalo de llamdo de repeticion. 

    velocidadMuerte = (450 - Penalizacion);
     console.log("velocidad de la muerte: " + velocidadMuerte);
    Cambiaformas(velocidadMuerte); 
    Penalizacion += 20;
    ok = true; 
    Imagenes_Espera(4); 
    clearInterval(t);
    death = false;
    
    $('.boton1Fake').removeClass("boton1Fake").addClass("boton1");

    if (Ene == 3){ //Nota 11: esta cantidad tambien debe modificarse en el IF de entrada al cuadro salvador, para que coordnen. 
        $('.cuadrado_salvadorFake').removeClass("cuadrado_salvadorFake").addClass("cuadrado_salvador");
    }
    
    document.getElementById('tituloEnemigo').innerText = 'Enemigo N: ' +  Ene;


    }, 1050 * 3);//espera esta cantidad de tiempo en ejecutarse. 
     

}



function Puntaje(val){

    var num= document.getElementById('puntaje'); 
    num.innerHTML = val;


}

//cuadrado "salvador":------------------

function salvador(val){ // El color del rombo y al menos uno de los colores del circulo deben ser el mismo cuando este aparece.


    if(salvar == false){ // esTE iF para que "salvador" se ejecute cada tres vueltas, y nunca de forma CONSECUTIVA
       Sal += 1; 

       if(Sal == 4){ //4= numero minimo de vueltas necesarias
         salvar = true;
         Sal = 0 ; 
       }
     
    }

   

if ((val % 2 == 0 ) && (rand_D() % 2 == 0)  && (V < 150) && ( salvar == true) && ( Ene == 3)){ //150 como numero a partir del cual hay salvate. 
    var Angeles = new Audio("Angeles.mp3");

    aleatorio_2 = (Math.round(Math.random()*12));
    Imagenes_Pistas(aleatorio_2); //Nota 7 : qué rostro debe aparecer mirando la zona de pistas. 
    ok = false;  // Nota 9 la funcion de rostros de "Espera" tiene que aguardar siempre, para dar lugar a otras acciones de rostro. 
    var r = rand_D(); var g = rand_D(); var b = rand_D();
    
    cuadrado_salvador.Rojo = r; 
    cuadrado_salvador.Verde = g; 
    cuadrado_salvador.Azul = b; 

    $(".cuadrado_salvador").css ("background-color",  "rgb("+ r +","+ g + "," + b + ")");

   Angeles.play();

       
    if ( aleatorio_2 ==  1) { 
       
        cuadrado1.Rojo = r; 
        cuadrado1.Verde = g; 
        cuadrado1.Azul = b; 

        $(".cuadrado1").css ("background-color",  "rgb("+ r +","+ g + "," + b + ")");
        //console.log("este!: 1");
    }

    if ( aleatorio_2 ==  2){ 

        cuadrado2.Rojo = r; 
        cuadrado2.Verde = g; 
        cuadrado2.Azul = b; 

        $(".cuadrado2").css ("background-color",  "rgb("+ r +","+ g + "," + b + ")");
       //console.log("este!: 2");
    } 

    if ( aleatorio_2 ==  3){ 

        cuadrado3.Rojo = r; 
        cuadrado3.Verde = g; 
        cuadrado3.Azul = b; 
    
        $(".cuadrado3").css ("background-color",  "rgb("+ r +","+ g + "," + b + ")");
        //console.log("este!: 3");

    } 

    if ( aleatorio_2 ==  4){ 

        cuadrado4.Rojo = r; 
        cuadrado4.Verde = g; 
        cuadrado4.Azul = b;

        $(".cuadrado4").css ("background-color",  "rgb("+ r +","+ g + "," + b + ")");
        //console.log("este!: 4");
 
    } 

    if ( aleatorio_2 ==  5){ 

        cuadrado5.Rojo = r; 
        cuadrado5.Verde = g; 
        cuadrado5.Azul = b; 

        $(".cuadrado5").css ("background-color",  "rgb("+ r +","+ g + "," + b + ")");
        //console.log("este!: 5");

    } 

    if ( aleatorio_2 ==  6){ 

        cuadrado6.Rojo = r; 
        cuadrado6.Verde = g; 
        cuadrado6.Azul = b;

        $(".cuadrado6").css ("background-color",  "rgb("+ r +","+ g + "," + b + ")");
        //console.log("este!: 6");

    } 

    if ( aleatorio_2 ==  7){ 

        cuadrado7.Rojo = r; 
        cuadrado7.Verde = g; 
        cuadrado7.Azul = b; 

        $(".cuadrado7").css ("background-color",  "rgb("+ r +","+ g + "," + b + ")");
        //console.log("este!: 7");
    } 

    if ( aleatorio_2 ==  8){ 

        cuadrado8.Rojo = r; 
        cuadrado8.Verde = g; 
        cuadrado8.Azul = b; 

        $(".cuadrado8").css ("background-color",  "rgb("+ r +","+ g + "," + b + ")");
        //console.log("este!: 8");
    }

  
    if ( aleatorio_2 ==  9){ 

        cuadrado9.Rojo = r; 
        cuadrado9.Verde = g; 
        cuadrado9.Azul = b;

        $(".cuadrado9").css ("background-color",  "rgb("+ r +","+ g + "," + b + ")");
        //console.log("este!: 9");

    } 

    if ( aleatorio_2 ==  10){ 

        cuadrado10.Rojo = r; 
        cuadrado10.Verde = g; 
        cuadrado10.Azul = b;  

        $(".cuadrado10").css ("background-color",  "rgb("+ r +","+ g + "," + b + ")");
        //console.log("este!: 10");

    } 

    if ( aleatorio_2 ==  11){ 

        cuadrado11.Rojo = r; 
        cuadrado11.Verde = g; 
        cuadrado11.Azul = b;

        $(".cuadrado11").css ("background-color",  "rgb("+ r +","+ g + "," + b + ")");
        //console.log("este!: 11");

    } 

    if ( aleatorio_2 ==  12){ 
  
        cuadrado12.Rojo = r; 
        cuadrado12.Verde = g; 
        cuadrado12.Azul = b;

        $(".cuadrado12").css ("background-color",  "rgb("+ r +","+ g + "," + b + ")");
        //console.log("este!: 12");

    } 
    
    salvar = false; 

}




}

function ComparSalvador(val1,val2,val3){ // si el color clickeado y el color del rombo son o no el mismo. 
  var yes = new Audio("yes.mp3");


  var Rs = cuadrado_salvador.Rojo; var Gs = cuadrado_salvador.Verde; var Bs = cuadrado_salvador.Azul; 
  var r = val1; var g = val2; var b = val3;

    if((Rs == r) && (Gs == g) && (Bs== b)){
 
        V = (Math.round(V + (V / 2))); // Nota 2:  velocidad de disminucion de revoluciones.(mas chico el divisor, mas lenta se vuelve la repetición)

      //160 es el numero ideal para volver al juego.
      // 95 aprox es la linea de no retorno - casi imposible de jugar-.
     
       //console.log("Velocidad:" + V );
       Cambiaformas(V);
       yes.play();

      
        if(H <= 100){ // Nota 1: importante que no pase de 100, aunque sume mas de 100.

            if((H + 40)> 100){

                H = 95;

            } else {

                H = H + 40;   
                
            }

        }
       barradeVida(H);
       ok = false;  // Nota 9 la funcion de rostros de "Espera" tiene que aguardar siempre, para dar lugar a otras acciones de rostro. 
       Imagenes_Reacciones(2);
    }

}


//cuadrado "Imágenes":------------------


function Imagenes_Acierto(val){
    
    var face = document.getElementById("rostro").src="img/Aciertos/f" + val + ".png";

}

function Imagenes_Espera(val){

    if (ok == true){ // Nota 8 este if, y su else, se aseguran de que el rostro de espera aguarde 4 vueltas antes de arrancar de nuevo, dejando la  cara de reaccion mas tiempo en pantalla.

        if(  val == 0 || val == 1 || val == 2 || val == 3  ){

            var face = document.getElementById("rostro").src="img/Espera/f" + 0 + ".png";

        }else if (  val == 4 || val == 5 || val == 6  ){

            var face = document.getElementById("rostro").src="img/Espera/f" + 1 + ".png";

        }else if(  val == 7 || val == 8  || val == 9 || val == 10  ){

            var face = document.getElementById("rostro").src="img/Espera/f" + 2 + ".png";

        }else if( val == 11 || val == 12 ){

            var face = document.getElementById("rostro").src="img/Espera/f" + 3 + ".png";

        }

    }else {
        Y += 1;
        if(Y >= 12){
            ok = true;
             Y = 0;
        }
    }
}

function Imagenes_Pistas(val){

    if(  val == 1 || val == 2 ||val == 3 || val == 4 ){

        var face = document.getElementById("rostro").src="img/Pistas/f" + 3 + ".png";


    }else if (  val == 5 || val == 6 ){

     var face = document.getElementById("rostro").src="img/Pistas/f" + 1 + ".png";

    }else if(  val == 7 || val == 8 ||val == 9 || val == 10 ){

      var face = document.getElementById("rostro").src="img/Pistas/f" + 2 + ".png";

    }else  if(  val == 11 || val == 12  ){

     var face = document.getElementById("rostro").src="img/Pistas/f" + 0 + ".png";


    }
}

function Imagenes_Reacciones(val){
    
    var face = document.getElementById("rostro").src="img/Reacciones/f" + val + ".png";

}

// OBJETOS -------------------------------

var ColorCentro = {

    r : 0,
    g : 0,
    b : 0, 

    // setters/////////////

    set Rojo(par){
        this.r = par;   
    },

    set Verde(par){
        this.g = par; 
    },

    set Azul(par){
        this.b = par; 
    },

    // getters///

    get Rojo(){
        return this.r; 
    },
    get Verde(){
        return this.g; 
    },
    get Azul(){
        return this.b; 
    },
}

var cuadrado1= {

r : 0,
g : 0,
b : 0, 

// setters/////////////

set Rojo(par){
    this.r = par;   
},

set Verde(par){
    this.g = par; 
},

set Azul(par){
    this.b = par; 
},

// getters///

get Rojo(){
    return this.r; 
},
get Verde(){
    return this.g; 
},
get Azul(){
    return this.b; 
},
}

var cuadrado2= {

r : 0,
g : 0,
b : 0, 

// setters/////////////

set Rojo(par){
    this.r = par;   
},

set Verde(par){
    this.g = par; 
},

set Azul(par){
    this.b = par; 
},

// getters///

get Rojo(){
    return this.r; 
},
get Verde(){
    return this.g; 
},
get Azul(){
    return this.b; 
},
}

var cuadrado3= {

r : 0,
g : 0,
b : 0, 

// setters/////////////

set Rojo(par){
    this.r = par;   
},

set Verde(par){
    this.g = par; 
},

set Azul(par){
    this.b = par; 
},

// getters///

get Rojo(){
    return this.r; 
},
get Verde(){
    return this.g; 
},
get Azul(){
    return this.b; 
},
}

var cuadrado4= {

r : 0,
g : 0,
b : 0, 

// setters/////////////

set Rojo(par){
    this.r = par;   
},

set Verde(par){
    this.g = par; 
},

set Azul(par){
    this.b = par; 
},

// getters///

get Rojo(){
    return this.r; 
},
get Verde(){
    return this.g; 
},
get Azul(){
    return this.b; 
},
}

var cuadrado5= {

r : 0,
g : 0,
b : 0, 

// setters/////////////

set Rojo(par){
    this.r = par;   
},

set Verde(par){
    this.g = par; 
},

set Azul(par){
    this.b = par; 
},

// getters///

get Rojo(){
    return this.r; 
},
get Verde(){
    return this.g; 
},
get Azul(){
    return this.b; 
},
}

var cuadrado6= {

r : 0,
g : 0,
b : 0, 

// setters/////////////

set Rojo(par){
    this.r = par;   
},

set Verde(par){
    this.g = par; 
},

set Azul(par){
    this.b = par; 
},

// getters///

get Rojo(){
    return this.r; 
},
get Verde(){
    return this.g; 
},
get Azul(){
    return this.b; 
},
}

var cuadrado7= {

r : 0,
g : 0,
b : 0, 

// setters/////////////

set Rojo(par){
    this.r = par;   
},

set Verde(par){
    this.g = par; 
},

set Azul(par){
    this.b = par; 
},

// getters///

get Rojo(){
    return this.r; 
},
get Verde(){
    return this.g; 
},
get Azul(){
    return this.b; 
},
}

var cuadrado8= {

r : 0,
g : 0,
b : 0, 

// setters/////////////

set Rojo(par){
    this.r = par;   
},

set Verde(par){
    this.g = par; 
},

set Azul(par){
    this.b = par; 
},

// getters///

get Rojo(){
    return this.r; 
},
get Verde(){
    return this.g; 
},
get Azul(){
    return this.b; 
},
}

var cuadrado9= {

r : 0,
g : 0,
b : 0, 

// setters/////////////

set Rojo(par){
    this.r = par;   
},

set Verde(par){
    this.g = par; 
},

set Azul(par){
    this.b = par; 
},

// getters///

get Rojo(){
    return this.r; 
},
get Verde(){
    return this.g; 
},
get Azul(){
    return this.b; 
},
}

var cuadrado10= {

r : 0,
g : 0,
b : 0, 

// setters/////////////

set Rojo(par){
    this.r = par;   
},

set Verde(par){
    this.g = par; 
},

set Azul(par){
    this.b = par; 
},

// getters///

get Rojo(){
    return this.r; 
},
get Verde(){
    return this.g; 
},
get Azul(){
    return this.b; 
},
}

var cuadrado11= {

r : 0,
g : 0,
b : 0, 

// setters/////////////

set Rojo(par){
    this.r = par;   
},

set Verde(par){
    this.g = par; 
},

set Azul(par){
    this.b = par; 
},

// getters///

get Rojo(){
    return this.r; 
},
get Verde(){
    return this.g; 
},
get Azul(){
    return this.b; 
},
}

var cuadrado12= {

r : 0,
g : 0,
b : 0, 

// setters/////////////

set Rojo(par){
    this.r = par;   
},

set Verde(par){
    this.g = par; 
},

set Azul(par){
    this.b = par; 
},

// getters///

get Rojo(){
    return this.r; 
},
get Verde(){
    return this.g; 
},
get Azul(){
    return this.b; 
},
}

var cuadrado_salvador= {

r : 0,
g : 0,
b : 0, 

// setters/////////////

set Rojo(par){
    this.r = par;   
},

set Verde(par){
    this.g = par; 
},

set Azul(par){
    this.b = par; 
},

// getters///

get Rojo(){
    return this.r; 
},
get Verde(){
    return this.g; 
},
get Azul(){
    return this.b; 
},
}


