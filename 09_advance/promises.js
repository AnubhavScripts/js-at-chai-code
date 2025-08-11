// const promiseOne = new Promise(function(resolve,reject){
//     setTimeout(function () {
//         console.log("async task one");
//         resolve()

//     },2000)
// })
// promiseOne.then(function(){
// console.log("promise is consumed");

// })

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("async task two");
    resolve();
  }, 1000);
}).then(function () {
  console.log("task completed");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "anubhav", email: "abc@sg.com" });
  }, 1000);
});
promiseThree.then((user) => {
  console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "anubhav", age: "21" });
    } else {
      console.log("error: unknown error occured");
    }
  }, 1000);
});

promiseFour
  .then(function (user) {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  });

  const promiseFive = new Promise (function(resolve,reject){
    setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "exonova", age: "22" });
    } else {
      console.log("error: unknown error occured");
    }
  }, 1000);
  })

  async function promiseFiveResponse(){
    try {
        const response = await promiseFive
        console.log(response);
        
    } catch (error) {
        console.log(error);
        
        
    }
  }
  promiseFiveResponse()


//   async function jsonreq(){
//     try{
//         const response = await fetch ('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);

//     }
//     catch(error){
//         console.log("E;",error)

//     }

//   }
//   jsonreq()


  fetch('https://jsonplaceholder.typicode.com/users')
  .then((response)=>{
    return response.json()
  })
  .then((data)=>{
    console.log(data);
    
  })
  .catch((error)=>{
    console.log(error);
  })