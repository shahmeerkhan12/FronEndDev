// used for object
// for (const key in object) {
//    if (Object.prototype.hasOwnProperty.call(object, key)) {
//       const element = object[key];

//    }
// }

// used for string and arrays usually
//for-of
// for (const element of object) {

// }

let container = document.getElementsByTagName("main");
container.innerHtml = "hello";
// strings, str interpolation, template literals, string methods
let str = "<p>imported text";

container.innerText(`i can include variables like ${str}`);
//escape character are counted as a single char
let nameStr = `<p>my name is:\n Shahmir Khan`;
container.innerText(nameStr.length);
// putting tab in your text
container.innerText(`<p>my name is:\t Shahmir Khan`);
container.innerText(nameStr.toUpperCase());
// remember the  trim works only if there exists white spaces before and after the string
let spacedStr = " <p>   The Mnk and the boy";
container.innerText(spacedStr.trim());
// string replace method
container.innerText("<h3>replace method on string</h3>");
let replace = "<p>OneTwoOneOneThreeGo..";
container.innerText(`<h3>original string: </h3><h2>${replace}</h2>`);

// container.innerText(replace.replace("One", "1"));
//replace will replace all the existing occurrences of strin with value pased
container.innerText(replace.replaceAll("One", "1"));

// string slice method
container.innerText(`<h3>slice method on strings: </h3>`);
let slice = "slice1Slice2";
container.innerText(`<h3>original string: </h3><h2>${slice}</h2>`);
container.innerText("<p>", slice.slice(0, 6));
container.innerText("<p>", slice.slice(6, 13));
//charAt(index)
container.innerText("<p>", slice.charAt(1));

// concatenate strings by concat method
container.innerText(`<h3>string concatenation: </h3>`);
let string1 = "string1 for concatenation";
container.innerText("<p>", string1.concat(" string2"));
