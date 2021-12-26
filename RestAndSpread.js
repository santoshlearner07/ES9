// Rest 

const student = {
    name : 'Santosh',
    age : 22,
    favBook : 'Revolutoion 2020'
}
const {age,...other} = student;
console.log(age)
console.log(other)

// Spread

const obj1 = {a:10,b:20}
const obj2 = {c:30};

const clone_Obj = {...obj1}

console.log(clone_Obj)

const obj3 = {...obj1,...obj2}

console.log(obj3)
