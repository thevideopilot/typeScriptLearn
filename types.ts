let myString: string;
let myNum: number;
let myBool: boolean;
let myVar: any

// let strArr: string[]
// let numArr: number[]
// let boolArr: boolean[]

let strArr: Array<string>
let numArr: Array<number>
let boolArr: Array<boolean>

let strNumTuple: [string, number]

myString = "Hello from TS"
myNum = 10
myVar = 5
myBool = false
strArr = ['Hello', 'WOrld']
numArr = [1,2]
boolArr = [true, false]

strNumTuple = ["hello", 4]
// strNumTuple = ['hello',4,1,2]

let myVoid: void = undefined
let myNull: null = undefined
let myUndefined: undefined = null

console.log(myVoid)