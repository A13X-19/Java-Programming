document.write("Have I taken Web Design 1 before?");

const name = "Xan";

function spearhead() {
    console.log("Note-Entry 01 - Global Scope ACTIVE");
    console.log("I THINK I did it right??");
    console.log("A.J R 2023");
    console.log("Creator name displayed");
    console.log("BOOLEAN Gemini");
    console.log("OBJECT WORD NULL");
}

spearhead();

function adder(edg1, edg2) {
    console.log(edg1 + edg2)
}

adder (10,12);

function edgetransit(){
    console.log("NULL OBJECT WORD ACCEPTED");
    console.log("Scanning system...");
    console.log("FOUND");
    console.log("VARIABLE Null LOCATED");
    console.log("PROCEED?");
}

edgetransit();

const towering = () => {
    console.log("CONFIRMED");
}

towering();

const ship = {
    type:"Destroyer",
    model: "1270",
    class: "Wayning",
    size: "13,000",
    color:"Grey"
};

document.getElementById("demo").innerHTML = ship.class + " is a " + ship.type + " type air carrier.";