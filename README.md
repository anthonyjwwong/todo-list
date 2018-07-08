# To-do List

## Functions
* Adding todos
* deleting todos
* Saving todo in the local Storage.

## Why?

I made this todo-list app to test out the usage of local Storage.
What I've learned so far, and for people who want to learn about local Storage.

localStorage.setItem("Key", "value);

// Key refers to the name that you want it to be saved under in your localStorage, where as value will the actual item itself.

// LocalStorage only accepts string as of now, so if you want to input an array into localStorage, you'll have to turn it into a string first.

Ex. 
let arr = [1,2,3];

localStorage.setItem("numbers", JSON.stringify(arr));

//JSON.stringify changes the arr we have here into a string. "[1,2,3]"

//and to get it out, JSON.parse changes it back into an array.

let storedArr = JSON.parse(localStorage.getItem("numbers");

storedArr //[1,2,3]

## How?
If you want to check my code out, you can either git clone it, or just download the folder to your computer.
click on index.html to load it up, or just click on the link below.
<br>
https://anthonyjwwong.github.io/todo-list/
