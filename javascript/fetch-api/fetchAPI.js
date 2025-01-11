const URL = "https://cat-fact.herokuapp.com/facts";
const factsPara = document.querySelector("#facts");
const btn = document.querySelector("#getFacts");

let getData = async () => {
  console.log("getting your data . . .");
  let response = await fetch(URL);
  console.log(response);
  //   turn into json format
  let data = await response.json();
  factsPara.innerText = data[0].text;
};
btn.addEventListener("click", getData);

// a more useful way to do it

// const URL = "https://cat-fact.herokuapp.com/facts";

// let getData = async () => {
//   try {
//     console.log("getting your data . . .");
//     let response = await fetch(URL);

//     // Check if the response is OK (status code 200-299)
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }

//     // Turn into JSON format
//     let data = await response.json();
//     console.log(data); // Successfully parsed JSON data
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// };

// getData();
