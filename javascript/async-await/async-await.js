//part1 call back hell
// you have to modify the function like this

//
// }//call using call back hell
// getDataCallBackHell(33, () => {
//   getDataCallBackHell(55, () => {
//     getDataCallBackHell(88, () => {
//       console.log("Result Successfull");
//     });
//   });
// });
//async and await
//async function will always return a promise
//putting await keyword before calling async function will pause the exe of the surronding sync fun
//until the promise is settled
function api() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("1Bitcoin = USD $50000");
      resolve("hello i resolved it");
    }, 2000);
  });
}
//function 2
function api2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("1ETH = USD $5000");
    }, 2000);
  });
}

// let call the api function

// async function getData() {
//   await api();
//   await api2();
// }

/* IMportant:
   one issue in async-await is that we need an extra async function to call the required funtion
   and then also we have call explicitly that async fun in the console:
   so to handle this problem we have IEFE (immediately invoked function expressions)
   these functions have no names
   syntax: 
   (function)();
   function is a valid function; () are added to execute the funciton directly
*/
(async function getData() {
  await api();
  await api2();
})();

// lets practice
// function getData(id) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("DATA: ", id);
//       resolve("success");
//     }, 2000);
//   });
// }

// async function getAllData() {
//   await getData(1);
//   await getData(2);
//   await getData(3);
// }
