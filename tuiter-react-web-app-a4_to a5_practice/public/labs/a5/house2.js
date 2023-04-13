function renderMansion(mansion) {
    // const mansion = {
    //     rooms: 30,
    //     baths: 20,
    //     sqft: 15000
    // }
    
    const roomElement2 = document.getElementById('room');
    const bathsElement2 = document.getElementById('baths');
    const sqftElement2 = document.getElementById('sqft');
    
    roomElement2.innerHTML = mansion.rooms;
    bathsElement2.innerHTML = mansion.baths;
    sqftElement2.innerHTML = mansion.sqft;
}


function renderStudents(students) {
    // const students = ['Alice', 'Bob', 'Charlie'];
    const studentElement = document.getElementById('students');
    let lineItem = '';
    for (let j=0; j < students.length; j++) {
        lineItem += `<li> ${students[j].name}</li>`;
    }
    studentElement.innerHTML = lineItem;
}

function renderStudentsModern(students) {
    const studentElement = document.getElementById('students');
    // let lineItem = students.map(
    //     function (student) {
    //         return `<li>${student.name}</li>`;
    //     }
    // );
    let lineItem = students.map(student => `<li> ${student.name}</li>`).join('');
    studentElement.innerHTML = lineItem;
}

// call functions
renderMansion({
    rooms: 300,
    baths: 200,
    sqft: 150000
});

renderStudentsModern([
    {name: 'Alice'}, 
    {name: 'Bob'}, 
    {name: 'Charlie'}, 
    {name: 'Diana'},
    {name: 'Eve'}]);
    
// renderStudents([
//     {name: 'Alice'}, 
//     {name: 'Bob'}, 
//     {name: 'Charlie'}, 
//     {name: 'Diana'},
//     {name: 'Eve'}]);
