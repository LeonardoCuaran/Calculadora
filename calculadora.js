var Botones = ["7","8","9","+","4","5","6","-","1","2","3","*","0",".","=","/","clear"];

function renderizarGUI(){

    //crear elemento
    const divCalculadora = document.createElement("div");
    //Agregar atributos
    divCalculadora.setAttribute("id","calculadora");
    divCalculadora.setAttribute("class","text-center");
    divCalculadora.setAttribute("style","width:40%; margin:0 auto");
    //Insertar el elemento DOM
    document.body.appendChild(divCalculadora);

//divPantalla

    const divPantalla = document.createElement("div");
    divPantalla.setAttribute("id","divPantalla");

    divCalculadora.appendChild(divPantalla);


//INPUT EN PANTALLA

    const pantalla = document.createElement("input");
    pantalla.setAttribute("id","pantalla");
    pantalla.setAttribute("type","text");
    pantalla.setAttribute("value","0");
    pantalla.setAttribute("disabled","true");
    pantalla.setAttribute("class","form-control text-right");
    divCalculadora.appendChild(pantalla);

//divBotones

const divBotones = document.createElement("div");
divBotones.setAttribute("id","Botones");
divCalculadora.appendChild(divBotones);

//division de Botones:

    for(let i=0;i<Botones.length;i++){

        //crear fila:

        if(i%4==0){
            const divFila = document.createElement("div");
            divFila.setAttribute("class","row");
            divBotones.appendChild(divFila);
        }
        let boton = document.createElement("button");
        boton.setAttribute("id","boton"+ Botones[i]);
        boton.setAttribute("class","btn btn-info col-3 border-white");
        boton.innerHTML = Botones [i];
        
        //Agregar un escuchador de eventos 

        boton.addEventListener("click", function (){
            procesarEvento(boton);
        });

        divBotones.lastChild.appendChild(boton);

    }

function procesarEvento (boton){
    let miPantalla = document.getElementById("pantalla");
    
    if(miPantalla.value==0){
        miPantalla.value="";
    }

    if(boton.innerHTML != "="){
        miPantalla.value = miPantalla.value+boton.innerHTML;
    }
    else{
        let resultado = math.evaluate(miPantalla.value);
        miPantalla.value=resultado;
    }
    if(boton.innerHTML == "clear"){
        miPantalla.value=0;
    }
}


}
renderizarGUI();

