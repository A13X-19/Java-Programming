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

///

const user = {
    name: 'Xan',
    age: 20,
    relatioship: false,
    purchases: ["phone", "pc", "coffee"],
    name: function() {
        return this.name + " " + this.age;
    }
};

console.log(user.purchases);
console.log(this);

///

const daily = ["Wake up", "Brush teeth", "Eat", "Write JS", "Play games", "Sleep"]

console.log(daily);
console.log(daily[4]);

daily.push("I lied I don't sleep");


document.write("Loop stopped! ");