// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {

    const arr = moviesArray.map(arrDirectors=>arrDirectors.director)
    return arr
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(moviesArray) {
    //dentro del nested array de "moviesArray", filtramos todas las peliculas que tengan como array: director Steve
    const arr = moviesArray.filter((estevens)=>{
        if(estevens.director=="Steven Spielberg") return true
    })
    //console.log(arr)
    //arr2 guarda informacion de los generos de cada pelicula de Steven Spielberg
    const arr2 = arr.map(drama=>drama.genre)

    //Extraemos cada array que contenga Drama.
    const arr3 = arr2.filter((dramaticos)=>{
        //console.log(dramaticos,"Drama")
        const todoDrama = dramaticos.includes("Drama") 
        //console.log (todoDrama)
        return todoDrama
    }) 
    //console.log(arr3)
    //Regresamos la cantidad de arrays que contengan drama.
    return arr3.length;

}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    
    const arr = moviesArray.map(scores=>scores.score)
    //console.log(arr)
    if (arr==0) return 0

    const reduce = arr.reduce((a,b) => {
        return(a+b)
    })

    const promedio = reduce/arr.length
    const promedio2 = reduce/moviesArray.length
    const decimal10= Math.round(promedio*100)/100
    
    //console.log(promedio)
    //console.log(promedio2)
    //console.log(decimal10)
    return decimal10
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
//Array filtrado por genero
    const arr = moviesArray.filter((peliculasDramaticas)=>{
        if(peliculasDramaticas.genre=="Drama") return true
    })
   // console.log(arr);

    return scoresAverage(arr);
    // const arr2 = arr.map(puntuacion=>puntuacion.score)
    // console.log(arr2)

    // const arr3 = arr2.map((score)=>{
    //     if(score>0) return true
    // })

    //console.log(arr3)

    //scoresAverage(arr3)

    //return scoresAverage(arr3)

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    //
    const arr = moviesArray.map(moviePerYear=>moviePerYear)
    //console.log(arr)
    //return arr;

    const arr2 = arr.sort((a,b)=>{
    if(a.year>b.year) return 1;
    if(a.year<b.year) return -1
    })

   // console.log(arr2)

    const arr3 = arr2.sort((a,b)=>{
       
        if(a.year===b.year){
            
        if(a.title>b.title)return 1;
        
        if(a.title<b.title)return -1;
        }
    })

    return arr3
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

    //Creamos una itinerancia de moviesArray
    const arr = moviesArray.map(pelicula=>pelicula)
    // A esta itinerancia ordenamos alfabeticamente 
    const arr2 = arr.sort((a,b)=>{     
        console.log('sinordenar',a,b)       
        if(a.title>b.title)return 1; console.log('ordenando',a,b)
        if(a.title<b.title)return -1;
    })

    const arr3 = arr2.map(e=> e.title)

    

    // TENGO QUE MOSTRAR QUE ARR3 NO ME MUESTRE MAS DE 20 ELEMENTOS

    const newArray = []
    for (let i = 0; i < arr3.length; i++) {
        if (i<20) newArray.push(arr3[i])}

    return newArray
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
