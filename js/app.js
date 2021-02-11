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
    // console.log({...repository.users })
    // repository.addUser('Mia', 20)
    // repository.addUser('Caroline', 17)
    // repository.addUser('James', 44)
    // console.log({...repository.users })


// repository.deleteUser(2)
// console.log({...repository.users })
// console.log(repository.adultUsers())
// console.log(repository.registUsers('2020, 11, 01'))

const headding = document.querySelector('.wrapper__header')
headding.style.textAlign = 'center'
console.log(headding.textContent)