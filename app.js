// Escribe tu código aquí.
//                  [1          2          3          4        5             6          7           8         9              10]
const myArray = ['insecto', 'bootcamp', 'mangos', 'reptil', 'mosca', 'escritorio','órganos', 'reptillia', 'moscow mule', 'escritorio',];


 //               [1          2          3          4        5             6          7           8         9              10]
const myArray2 = ['Elton John', 'David Bowie', 'Bach', 'Bad bunny', 'Lupe Fiasco', 'Moonbaby','Vengaboys', 'Armin Van Buuren', 'Alesso', 'Tomorrowland',];




//filtra el primer arreglo

arreglo_filtrado=filtra('aguas',myArray); 
console.log(arreglo_filtrado);
listaDePalabras=document.getElementsByTagName('ul')[0]; //get element es unaarreglo de tags, hay qye especificar cual de los tags de ul


//agregar elementos filtrados al HTMl
arreglo_filtrado.forEach(item=>{
    const li=document.createElement("li");
    li.textContent=item;
    listaDePalabras.appendChild(li); //obsolete
});

//dar espacio
const renglon=document.createElement("br"); 
listaDePalabras.insertAdjacentElement('afterend',renglon);

//crear nueva lista, ok
const lista2=document.createElement("ol"); 
renglon.insertAdjacentElement('afterend',lista2)

//filtra el segundo arreglo
arreglo_filtrado2=filtra('tenet',myArray2)

//agrega los elementos a la nueva lista
arreglo_filtrado2.forEach(item=>{
    lista2.innerHTML+=`<li>${item}</li>`;

});



//función para comparar
function filtra(bigWords,myArray) {
    
    l1=bigWords.length;
    a2=[];


    myArray.forEach(element => {
        if (element.length>l1) {
            a2.push(element);
        } else {
            
        }

    }); //foreach

    return a2;
}