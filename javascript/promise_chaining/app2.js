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
//write the above call back function using Promise chaining
// remember we have changed the function definition by removing the extra piece of
// getNextData, as it is no longer needed in promise chaining
function getData(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data: ", id);
      resolve("success");
      // reject("Failed!!");
    }, 2000);
  });
}

// let p1 = promise(123);//i donot need this any more
//another chaining is at the last

// getData(11).then((res) => {
//   console.log(res);

//   getData(22).then((res) => {
//     console.log(res);

//     getData(33).then((res) => {
//       console.log(res);
//     });
//   });
// });

// lets change the upper sntax a litttle easier: doing it for catch method
// getData(11).catch((err) => {
//   getData(22).catch((err) => {
//     getData(33).catch((err) => {
//       console.log(err);
//     });
//   });
// });
//output: u will get a standard error, and further three statements that are logged to
// the console by each of these function calls in the promise chaining

//  a most effective and real promise chaining syntax is below
// real promise chaining looks like this:::....
// getData(1)
//   .then((res) => {
//     //getData(1) uppon success, returns the a PROMISE
//     return getData(2);
//   })
//   .then((res) => {
//     return getData(3);
//   })
//   .then((res) => {
//     console.log(res);
//   });

//practice works correctly
getData(89)
  .then((res) => {
    return getData(77);
  })
  .then((res) => {
    return getData(44);
  })
  .then((res) => {
    console.log(res);
  });
