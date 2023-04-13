
// alert("Hello World");
const a = 12;
const b = 23;
const c = a + b;
// use backtipcs only when needed e.g.breaking lines
document.write(`
        <h2>Arithmetics</h2>
        a = ${a}<br/>
        b = ${b}<br/>
        c = ${c}<br/>
        `);

document.write('<h2>For Loops</h2>');
const people = ['Alice', 'Bob', 'Charlie'];
document.write('<ul>');
for (let i = 0; i < 3; i++) {
    document.write(`<li>Item ${i}: ${people[i]}</li>`);
}
document.write('</ul>');

document.write('<h2>JSON Objects</h2>');
const house = {
    address: '123 Main St',
    city: 'Boston',
    state: 'MA',
    zip: '02134',
    rooms: [
        {
            name: 'Living Room',
            size: 200
        },
        {
            name: 'Kitchen',
            size: 100
        },
        {
            name: 'Bedroom',
            size: 150
        }
    ]
};
document.write(`Address: ${house.address}<br/>
                City: ${house.city}<br/>
                State: ${house.state}<br/>
                Zip: ${house.zip}<br/>
                `);
for (let i = 0; i < house.rooms.length; i++) {
    document.write(`<li> ${house.rooms[i].name} Size: ${house.rooms[i].size} sqft</li>
                    `);
}


