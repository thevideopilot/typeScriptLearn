function getSum(num1:number, num2:number):number{
    return num1 + num2
}


let mySum = function (num1:any, num2:any):number{
    if (typeof num1 == 'string') {
        num1 = parseInt(num1)
        
    }

    if (typeof num2 == 'string') {
        num2 = parseInt(num2)
        
    }
    return num1 + num2
}

// function getName(firstName:string, lastName:string):string{
//     return firstName + ' ' + lastName
// }

// optional
function getName(firstName:string, lastName?:string):string{
    if (lastName == undefined){
        return firstName
    }
    return firstName + ' ' + lastName
}

// console.log(mySum('4',2));
console.log(getName("john"));

function myVoid():void {
    return
}