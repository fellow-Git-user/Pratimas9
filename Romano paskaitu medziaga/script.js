console.groupCollapsed('Arrays')

// Masyvo sukūrimas
let people = ['John', 'Steve', 'Peter']

console.log(people)
// Masyvo narių pasiekimas
console.log(people[0])
console.log(people[1])
console.log(people[2])

console.log('for ciklas:')
for (let i = 0; i < people.length; i++) {
    console.log(people[i])
}

console.log('while ciklas:')
let n = 0
while (n < people.length) {
    console.log(people[n])
    n++
}

console.log('do..while ciklas:')
let m = 0

do {
    console.log(people[m])
    m++
} while (m < people.length)

console.log('map ciklas:')
people.map(person => {
    console.log(person)
})

console.log('forEach ciklas:')
people.forEach(person => {
    console.log(person)
})

console.log('for...of ciklas:')
for (let person of people) {
    console.log(person)
}

let student = ['John', 'Doe', 25, 'Vilnius', 'TYPE25', 'Kaunas']

console.log(student)
console.log(student[0]) // Vardas
console.log(student[1]) // Pavarde
console.log(student[2]) // Amzius
console.log(student[3]) // Miestas
console.log(student[4]) // Grupe
console.log(student[5]) // Gimtasis miestas

console.groupEnd()

/*

Studentas 1:
    - Vardas: John,
    - Pavardė: Doe,
    - Miestas: Vilnius,
    - Amžius: 25,
    - Grupe: TYPE25

*/

let studentObj = {
    name: 'John', // property (key: value)
    surname: "Doe",
    city: `Vilnius`,
    age: 25,
    group: 'TYPE25',
    'middle name': 'Steve',
    isActive: false,
    grades: [8, 9, 7, 5],
    address: {
        city: 'Vilnius',
        street: 'Vilniaus st.', // trailing comma
    },
    getInfo: function() {
        return `${this.name} ${this.surname}.`
    },
    setStudentActive: function() {
        this.isActive = true
    },
    setStudentNotActive: function() {
        this.isActive = false
    },
    addGrade: function(newGrade) {
        if (newGrade >= 1 && newGrade <= 10) {
            this.grades.push(newGrade)
        } else {
            console.error('Balas turi būti nuo 1 iki 10')
        }

        return this.grades
    }
}

console.log(studentObj)
// Objekto properties pasiekimas
console.log(studentObj['name'])
console.log(studentObj['surname'])
console.log(studentObj['city'])
console.log(studentObj['age'])
console.log(studentObj['group'])
console.log(studentObj['middle name'])
console.log(studentObj['isActive'])
console.log(studentObj['grades'])
console.log(studentObj['grades'][0])
console.log(studentObj['grades'][1])
console.log(studentObj['grades'][2])
console.log(studentObj['grades'][3])

studentObj['grades'].forEach(grade => console.log(grade))

console.log(studentObj['address'])
console.log(studentObj['address']['city'])
console.log(studentObj['address']['street'])
console.log(studentObj['address'].city)
console.log(studentObj['address'].street)

let propertyName = 'city'
console.log(studentObj[propertyName])

// DOT notation
console.log(studentObj.name)
console.log(studentObj.surname)
console.log(studentObj.city)
console.log(studentObj.age)
console.log(studentObj.group)
console.log(studentObj.isActive)
console.log(studentObj.grades)
console.log(studentObj.grades[0])
console.log(studentObj.grades[1])
console.log(studentObj.grades[2])
console.log(studentObj.grades[3])
studentObj.grades.forEach(grade => console.log(grade))

console.log(studentObj.address)
console.log(studentObj.address.city)
console.log(studentObj.address.street)

// Objekto property sukūrimas
console.log(studentObj.isEmployed)
studentObj.isEmployed = true
console.log(studentObj.isEmployed)

console.log(studentObj['birth city'])
studentObj['birth city'] = 'Klaipėda'
console.log(studentObj['birth city'])

// Objekto properties reikšmių pakeitimas
console.log(studentObj.isActive)
studentObj.isActive = true
console.log(studentObj.isActive)

console.log(studentObj['middle name'])
studentObj['middle name'] = 'Peter'
console.log(studentObj['middle name'])

// Objekto properties ištrynimas
console.log(studentObj.isEmployed)
delete studentObj.isEmployed
console.log(studentObj.isEmployed)

console.log(studentObj['middle name'])
delete studentObj['middle name']
console.log(studentObj['middle name'])


console.log(studentObj.lectures) // undefined

studentObj.lectures = ['React', 'HTML', 'CSS']
console.log(studentObj.lectures) // ['React', 'HTML', 'CSS']

studentObj.lectures.push('Typescript')
console.log(studentObj.lectures) // ['React', 'HTML', 'CSS', 'Typescript]

console.log(studentObj.grades)
// let goodGrades = studentObj.grades.filter(grade => grade >= 8)
let goodGrades = studentObj.grades.filter(function(grade){
    return grade >= 8
})

console.log(goodGrades)
console.log(studentObj.grades)

// Pirmas būdas pridėti objektą
// let studentContacts = {
//     email: 'student@gmail.com',
//     phone: '+370454641321',
// }
// studentObj.contacts = studentContacts

// Antras būdas pridėti objektą
// studentObj.contacts = {
//     email: 'student@gmail.com',
//     phone: '+370454641321',
// }

// Trečias būdas pridėti objektą - kuriant tuščia objektą
// studentObj.contacts = Object()
studentObj.contacts = {}
studentObj.contacts.email = 'student@gmail.com'
studentObj.contacts.phone = '+370454641321'

console.log(studentObj.getInfo())
console.log(studentObj.isActive)
studentObj.setStudentNotActive()
console.log(studentObj.isActive)
studentObj.setStudentActive()
console.log(studentObj.isActive)
studentObj.isActive = false
console.log(studentObj.isActive)
studentObj.isActive = true
console.log(studentObj.isActive)

console.log(studentObj.grades)
console.log(studentObj.addGrade(10))
console.log(studentObj.grades)