
let num = Number(prompt(`Ingresa tu numero`))

for (let i =1 ; i <= num; i++) {

    if(i % 2 ==0 ) {
        console.log(` ${i} - Este numero es par`)
    } else {
        console.log(`${i} - Este numero es impar`)
    }
}
