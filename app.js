let data = [
    {
        name: 'Seer Imperium,',
        age: '34'
    },
    {
        name: 'Heir Reina,',
        age: '31'
    },
    {
        name: 'Xan Mischief,',
        age: '20'
    },
    {
        name: 'TOZA Shison,',
        age: '19'
    },
    {
        name: 'Capt. Archith,',
        age: '27'
    },
    {
        name: 'Lt. Kivut,',
        age: '38'
    }
];

const info = document.querySelector('#info')

let details = data.map(function(item) {
    return '<div>' + item.name + ' ' + 'Age: ' + item.age + '</div>';
});

info.innerHTML = details.join('\n');
