var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function nameToUppercase(mentor) {
    return mentor.toUpperCase();
}

function greeting(mentor) {
    return "Hello" + " " + nameToUppercase(mentor);
}
const mentor1Message = console.log(greeting(mentor1));
const mentor2Message = console.log(greeting(mentor2));
const mentor3Message = console.log(greeting(mentor3));
const mentor4Message = console.log(greeting(mentor4));
const mentor5Message = console.log(greeting(mentor5));
