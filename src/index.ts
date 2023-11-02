// const fullName: string = 'Thanh Phương'

// console.log('>>> type: ', typeof fullName)

// const phone: number = 1233457392
// console.log('>>> type: ', typeof phone)

// const isMatch: boolean = false
// console.log('>>> type: ', typeof isMatch)

// const fish: null = null
// console.log('>>> type: ', typeof fish)

// const fish: undefined = undefined
// console.log('>>> type: ', typeof undefined)

// const birthDay: Date = new Date()
// console.log('>>> type: ', typeof birthDay)

//true
// const person: {
//   _id: string | number
//   name: string
//   gender: string
//   birthDay: Date
// } = {
//   _id: 'ID01',
//   name: 'Phuong',
//   gender: 'male',
//   birthDay: new Date()
// }

//false
// const person: {
//   _id: string | number
//   name: string
//   gender: string
//   birthDay: Date
// } = {
//   _id: true,
//   name: 1234,
//   gender: 123,
//   birthDay: '1323'
// }

//Object nested
// const person: {
//   _id: string | number
//   address: {
//     province: string
//     commune: string
//   }
// } = {
//   _id: 1,
//   address: {
//     province: 'Thái Bình',
//     commune: 'Đông Hưng'
//   }
// }

// person.address.province = 123

//Generic
// function person<S, T>(fullName: S, age: T): [S, T] {
//   return [fullName, age]
// }

// console.log('>>> person: ', person<string, number>('Thanh Phuong', 12))

//Generic agr object
// type TPerson<T, S, V> = {
//   name: T
//   address: S
//   age: V
// }

// let person: TPerson<string, string, number> = {
//   name: 'Thanh Phuong',
//   address: 'Ha Nam',
//   age: 12
// }

//declare array
// const name1: string[] = ['Phuong', 'Nam', 'Vu']
// const age: number[] = [12, 21, 22]
// const person: {
//   name: string
//   age: number
//   address: string
// }[] = [
//   {
//     name: 'Phuong',
//     age: 12,
//     address: 'Ha Noi'
//   },
//   {
//     name: "Hong",
//     age: 22,
//     address: "Tay Bac"
//   }
// ]

//Các function cơ bản của mảng (filter, find, …)

// const numbers: number[] = [1, 6, 3, 8, 9, 7]

// const evenNumbers = numbers.filter((number) => number % 2 === 0)
// const evenNumber = numbers.find((number) => number % 2 === 0)
// const doubleNumbers = numbers.map((number) => number * 2)
// const stringNumbers = numbers.join(' ,')
// console.log('>>> value: ', stringNumbers)

//Tìm hiểu về  global type

// const person: IPerson = {
//   name: 'Thanh Phuong',
//   age: 21,
//   address: 'Ha Noi'
// }

//Tìm hiểu về các type có sẵn (Partial, Pick, Omit, Return Type, ParameterType

// interface IPerson1 {
//   fullName: string
//   age: number
//   address: string
// }

// const person: Partial<IPerson> = {
//   fullName: 'Phuong',
//   age: 21
// }

// const person1: Pick<IPerson, 'address'> = {
//   address: 'Ha Noi'
// }

// const person2: Omit<IPerson1, 'fullName'> = {
//   address: 'Ha Noi',
//   age: 21
// }

// function add(a: number, b: number): number {
//   return a + b
// }

// console.log('>> value: ', add(1, 2))

//	Sử dụng typescript để viết các kiến thức cũ dùng javascript Variables	Function	Promise	Class

// class Person<T, K> {
//   private fullName: T
//   private age: K

//   constructor(fullName: T, age: K) {
//     ;(this.fullName = fullName), (this.age = age)
//   }

//   display(): string {
//     return `name = ${this.fullName}, age =${this.age}`
//   }
// }

// let person1 = new Person<string, number>('Phuong', 3)
// console.log('>>> display: ', person1.display())

// const promise: Promise<number> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(10)
//   }, 1000)
// })

// promise.then((value) => {
//   console.log('>>> promise: ', value)
// })
