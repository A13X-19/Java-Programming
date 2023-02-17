const names = ['Xan', 'Seer', 'Reyna', 'Shison', 'Toza']
const age = '20';
const job = 'mercenary';
const extra = 'collecting';
document.body.style.backgroundColor = "#fefbe9";

console.log(`I didn't know the key by 1 was actually used, heh. Anyway my name is ${name}`);
console.log(`My physical age is ${age} and I am currently a ${job} for my government. I specialize in ${extra} swords from people of interest.`);


for (name of names) {
    console.log(name);
    if(name === 'Shison') {
        console.log('I know a person called Shison');
        break;
    }
}

//

var count = 10;
document.write("Starting Loop ");

while (count < 20){
   document.write("Current Count : " + count + "<br />");
   count++;
}

document.write("Loop stopped! ");

document.write("Try a different value for something interesting.")