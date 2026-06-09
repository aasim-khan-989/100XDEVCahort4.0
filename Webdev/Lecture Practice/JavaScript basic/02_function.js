

// function is used to grouped a logic


// let sum =0

// for(let i=1;i<=100;i++)
// {

//     sum=sum+i
// }

// console.log(sum)


// // if we have to do this always it is good to write it in function

// //it is write to run a repetative task 

// function sumfunc (x)
// {
//     let nsum =0
// for(let i=1;i<=x;i++)
// {

//     nsum=nsum+i
// }

// console.log(nsum)


// }
// sumfunc(100)



// function islegal(age)
// {
//     if(age>=18)
//     {
//         console.log("yes allowed to vote" + age)
//     }
//     else{
//         console.log('not allowed to vote' + age)
//     }
// }

// islegal(19)


// let j=0
// while(j<5){
//     console.log(j)
//     j++;
// }



// arrow function and this

// const userName = 10
// const user = {
//     userName :"xyz",
//     age:29,
//     welcomeMessage:function(){
//         console.log(`${this.userName}, welcome` )
//     }
// }

// user.welcomeMessage()
// user.userName = "sam"
// user.welcomeMessage()

// console.log(userName)

// let name = "xyz"

// function Coffe(){

//     let name = 'aasim'
//     console.log(name)
//  //   console.log(this)
// }


// it willl give undefiend this works inside objects
// function Coffe(){

//     let name = 'aasim'
//     console.log(this.name)
//  //   console.log(this)
// }

// Coffe()

// const coffe = function(){
//     let name = "arrow function"
//     console.log(this.name)
// }

// coffe()

// const chai = ()=>{
//     let name = "arrow function"
//     console.log(this.name)
// }

// chai()




// Note: when we use normal function 


// const obj1 ={
//     name:"m1",
//     id:3,
//     defaultfunc : function (){
//  console.log(this.name)
//     }
// }


// obj1.defaultfunc()



// const obj2 ={
//     name:"m1",
//     id:3,
//     defaultfunc : ()=>{ console.log(this.name)
//     }
// }


// obj2.defaultfunc()


const addtwo = (num1,num2)=>{
    return num1+num2
}

console.log(addtwo(3,4))

const add3 =(num1,num2,num3) => num1+num2+num3

console.log(add3(2,3,4))

