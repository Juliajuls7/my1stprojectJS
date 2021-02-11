/*
// Дается строка с текстом. Определить наличие мата по произвольному словарю.
const text = 'Привет, мой  че мне мозг выносишь?'
const text2 = 'Привет, Женя! Как дела?'
const dict = ['одуванчик', 'мозг', 'травка', 'ухо']

const searchWord = (text, mass) => {
    const lowerText = text.toLowerCase()
    for (word of mass) {
        if (lowerText.includes(word)) {
            return word
        }
    }
    return null
}

function obsceneWords(text, dictionary = dict) {
    const result = searchWord(text, dictionary)
    if (result) {
        // console.log(`Обнаружен мат: ${result}`)
        return `Обнаружен мат: ${result}`
    }
    // console.log('Текст прошел цензуру')
    return 'Текст прошел цензуру'
}
console.log(obsceneWords(text))
console.log(obsceneWords('Привет Леха ухо'))
console.log(obsceneWords('Путин молодец вор', ['навальный', 'вор']))


// Написать функцию сложения всех чисел в массиве. Принимает массив, возвращает сумму.

array1 = [1, 1, 2, 3, 5, 8, 13, 21]

function sumArray(array) {
    const res = array.reduce(function(a, b) {
        return a + b
    })
    return res
}

console.log(sumArray(array1))
console.log(sumArray([0, 2, 4, 10]))
console.log(sumArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 13]))

// Дается массив чисел. Вывести на экран только четные и числа от 0 до 9 включительно.

array2 = [1, 1, 2, 4, 5, 0, 8, 13, 21]

function evenSmallNumbers(value) {
    return (value < 10 && value % 2 === 0 && value >= 0)
}

function filtered(arr) {
    return arr.filter(evenSmallNumbers)
}

console.log(filtered(array2))
console.log(filtered([0, 20, 21, 3, 4, -4, 8, 15, 13, 9, 5, 2]))

/*
Есть два типа объектов:
    репозиторий пользователей
    пользователь

В репозитории хранятся все пользователи
Репозиторий должен иметь следующие методы:
    метод добавления нового пользователя
    метод удаления пользователя по id
    метод возвращающий всех совершенолетних пользователей
    метод возвращающий всех пользователей с датой регистрации позже указанной

Каждый пользователь имеет поля:
    id (уникальный идентификатор)
    name
    age
    дата регистрации
*/

const user1 = {
    id: 0,
    name: 'Evgen',
    age: 25,
    registrationDate: new Date(2020, 01, 01)
}

const user2 = {
    id: 1,
    name: 'Julia',
    age: 26,
    registrationDate: new Date(2020, 07, 01)
}


const repository = {
    users: [user1, user2],

    addUser(name, age = 18) {
        registrationDate = new Date()
        const id = new Date().getTime().toString() + Math.floor(Math.random() * 1000)
        const newUser = { id, name, age, registrationDate }
        this.users.push(newUser)
    },

    deleteUser(userId) {
        this.users = this.users.filter(person => person.id !== userId)
    },
    adultUsers() {
        const adult = this.users.filter(user => user.age >= 18)
        return adult
    },

    registUsers(date) {
        let date1 = new Date(date)
        const users = this.users.filter(user => user.registrationDate < date1)
        return users
    }

}
console.log({...repository.users })
repository.addUser('Mia', 20)
repository.addUser('Caroline', 17)
repository.addUser('James', 44)
console.log({...repository.users })


repository.deleteUser(2)
console.log({...repository.users })
console.log(repository.adultUsers())
console.log(repository.registUsers('2020, 11, 01'))