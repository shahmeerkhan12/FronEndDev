//concept : whenever we make a request to a server through an api it actually returns a promise, and the normal flow execution
// continues. ther are two possibilities of a promise, one is that it will return what we have requested for and the other
// is its opposite, something like an error or due to network issues the data requested is not returned at all.
// A Promise has three different states
//1. pending
//2. resolve(success)
//3. rejected

// method promises
// Promise spelling P is capital
// let promise = new Promise((resolve, reject) => {
//   console.log("promises");
//   // resolve("success!"); // at one time a promise can return either resolve or reject but not both
//   reject("some error has occurred");
// });

//note that the promises are not created
// by programmer or develepor

// suppose if we have a call to api
// it responses by using promises
// for example

// function getData(id, getNextData) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data: ", id);
//       resolve("fetched data successfully");
//       if (getNextData) {
//         getNextData();
//       }
//     }, 5000);
//   });
// }

// // async working and the power of call back functions
// function getData(id, getNextData) {
//   setTimeout(() => {
//     console.log("data: ", id);
//     if (getNextData) {
//       getNextData();
//     }
//   }, 2000);
// }
// //callback hell
// getData(1, () => {
//   document.write("1");
//   getData(3, () => {
//     document.write("  2");

//     getData(4, () => {
//       document.write("  3");

//       getData(5, () => {
//         document.write("  4");

//         getData(6);
//         document.write("  5");
//       });
//     });
//   });
// });

//part 3
// the real use of promises in programming?
// promise.then((res))=>{.....} and promise.catch((err)) = {....}

// what if a promise is successfull
// const getPromise = () => {
//   return new Promise((resolve, reject) => {
//     console.log("working on promise>>>");
//     resolve("success the data has been fetched!");
//     //  reject(
//     //    "some error has occurred, check your internet connection and try again"
//     //  );
//   });
// };

// // //executes only if the promise has been resolved, promise is fulfilled
// let promise = getPromise();
// promise.then((resolved) => {
//   console.log(resolved);
// });
// //execute only if the promise has been rejected, there is an error, or issue
// promise.catch((error) => {
//   console.log(error);
// });

// what is promise chaining >>>>important

function asyncFun() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data of students");
      resolve("Success! Promise Fulfilled.");
      // reject("Failure! Data cannot be fectched");
    }, 2000);
  });
}
function asyncFun2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data of Teachers");
      resolve("Teachers data fetched");
      // reject("Failure! Data cannot be fectched");
    }, 4000);
  });
}
//chaining promises complex syntax
console.log("fetching data......");
let promise1 = asyncFun();
promise1.then((res) => {
  console.log("fetching teachers data!");
  let promise2 = asyncFun2();
  promise2.then((res) => {});
});
// for rejected promise we have
// console.log("An Error Occurred");
promise1.catch((err) => {
  // console.log(err);
  let promise2 = asyncFun2();
  promise2.catch(err);
  // console.log(err);
});
//chaining promises easy syntax
// console.log("fetching students data......");

// asyncFun().then((res) => {
//   console.log("fetching teachers data......");
//   asyncFun2().then((res) => {});
// });
