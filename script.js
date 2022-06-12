// Exercício 01:

let age = 29;
console.log(age)

if (age >= 18) {
    console.log("Acesso liberado!");
} else{
    console.log("Acesso negado!");
}

// Exercício 02:

let minAge = 35;
console.log(minAge)

const genderMale = true;
console.log(genderMale)

if (minAge >= 18 && genderMale === true){
    console.log("Bem vindo à festa!")
}

// Exercício 03:

let monthBday = "Maio";
console.log(monthBday)

if (monthBday === "Janeiro" || monthBday === "Dezembro"){
    console.log("Feliz Ano Novo!")
} else{
    console.log("Força Guerreiro!")
}

// Exercício 04:

let initialName = "H";
console.log(initialName)

if (initialName === "R"){
    console.log("Rato roeu a roupa do rei de Roma")
} else{
    console.log("Tente de novo campeão!")
}

// Exercício 05:

let lastNameLetters = "8"
console.log(lastNameLetters)

let firstNameInitial = "H"
console.log(firstNameInitial)

if (lastNameLetters >= "6" || firstNameInitial === "E"){
    console.log("É melhor prevenir do que remediar.")
} else{
    console.log("Poxa, não foi dessa vez! :(")
}