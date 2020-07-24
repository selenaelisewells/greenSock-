//this is an anonymous self invoking function
////also colled an IIFE (immediately invoked function expression)
(() => {
    console.log('fired');

    //these are examples of fuctions
    // debugger;
    // let theButton = document.querySelector('button'),
    //     theHeading = document.querySelector('h1');
    // //this is a function
    // //inside the brakets is the argument
    // function sayHello(message) {
    //     console.log(message);
    // }

    // function sumNums(x, y) {


    //     console.log(x + y);
    // }
    // //get the id of any element
    // function retrieveId() {
    //     console.log(this.id);
    //     displayTheId(this.id);
    // }
    // //display the id of any clicked element on the page.
    // function displayTheId(theID) {
    //     document.querySelector('p').textContent = `You clicked on the element with the id of ${theID}`;
    // }


    // //pass an argument to the function, here we are invoking the function
    // sayHello("hi, I am an argument.");

    // sayHello("I am another argument");

    // sayHello("these are dynamic functions");

    // sumNums(5, 6);


    // //event handling here
    // theButton.addEventListener("click", retrieveId);
    // theHeading.addEventListener("click", retrieveId);

    //jc objects

    let person = {
        name: "tervor",
        role: "troll",
        height: "180",
        hair: "fabulous",
        eyeColor: "blue",
        textLabel: document.querySelector('p')
    }

    let car = {
        wheels: 4,
        make: "Honda",
        model: "Pilot",
        mileage: 400,
        year: 2012,
        fuel: 20,
    }


    document.querySelector('p').textContent = `My name is ${person.name}
    and I am a ${person.role}`


})();