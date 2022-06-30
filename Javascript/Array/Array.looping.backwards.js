const jonas = ['Jonas', 'Schemdtmann', 2303 - 1991, 'teacher', ['Michael', 'Peter', 'Steven']]

// for (let i = jonas.length - 1; i >= 0; i--){
//     console.log(jonas[i])
// }

// for (let exercis = 1; exercis < 4; exercis++){
//     console.log('--- start exercise ' + exercis)
//     for (let rep = 1; rep < 6; rep++){
//         console.log(`Lifting weight  ${rep}`)
//     }
// }

// let rep = 1
// while (rep <= 10) {
//     console.log(rep);
//     rep ++
// }


let dice = Math.trunc(Math.random() * 6)
//console.log(dice)

while (dice !== 6) {
    console.log(`You rolled a ${dice}`)
    dice = Math.trunc(Math.random() * 6) + 1;
    if(dice === 6) console.log(`Loop is about to end...`)
}