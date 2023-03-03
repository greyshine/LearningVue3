// Import stylesheets
import './style.css';


// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;


let r = 1 || 'IsItMe?'; console.log(r); // 1
r = 0 || 'IsItMe?'; console.log(r); // IsItMe?
r = true || 'IsItMe?'; console.log(r); // true
r = false || 'IsItMe?'; console.log(r); // IsItMe?
r = "" || 'IsItMe?'; console.log(r); // IsItMe?
r = null || 'IsItMe?'; console.log(r); // IsItMe?
r = undefined || 'IsItMe?'; console.log(r); // IsItMe?
r = NaN || 'IsItMe?'; console.log(r); // IsItMe?



