const name = 'wei';
const age = 24;
const job = 'Web Developer';
const city = 'Miami';
let html;

//Without telplate strings (es5);
html = '<ul><li>Name: '+ name + ' </li><li>Age:' + age +'</li><li>Job'+job+' </li><li>City: '+ city +' </li></ul>';

html = '<ul>' +
        '<li>Name: '+ name + ' </li>' +
        '<li>Age: ' + age +' </li>' +
        '<li>Job' +job+' </li>' +
        '<li>City: '+ city +' </li>'+
        '</ul>'
function hello(){
    return 'hellodddd';
}
//With template strings (es6)
html = `
    <ul>
        <li>Name: ${name}</li>
        <li>Age: ${age}</li>
        <li>Job: ${job}</li>
        <li>City: ${city}</li>
        <li>City: ${2+2}</li>
        <li>City: ${hello()}</li>
        <li>City: ${age > 30 ? 'Over 30' : 'Under 30'}</li>

    </ul>

`;



document.body.innerHTML = html;
