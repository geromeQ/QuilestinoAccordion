const a = document.getElementsByClassName('deez')
const transition = document.getElementsByClassName('bruh')


let first = a[0];

let line = document.createElement('div');
first.append(line);
line.className = 'line';
let para = document.createElement('p');
line.append(para);
para.innerText = 'Information management is an emerging field that is concerned with: The infrastructure used to collect, manage, preserve, store and deliver information.'
line.style.display = "none"

let second = a[1];
let line1 = document.createElement('div');
second.append(line1);
line1.className = 'line';
let para1 = document.createElement('p');
line1.append(para1);
para1.innerText = 'Computer networking refers to interconnected computing devices that can exchange data and share resources with each other. These networked devices use a system of rules, called communications protocols, to transmit information over physical or wireless technologies.'
line1.style.display = "none"

let third = a[2];
let line2 = document.createElement('div');
third.append(line2);
line2.className = 'line';
let para2 = document.createElement('p');
line2.append(para2);
para2.innerText = 'Web information system, or web-based information system, is an information system that uses Internet web technologies to deliver information and services, to users or other information systems/applications.'
line2.style.display = "none"

let fourth = a[3];
let line3 = document.createElement('div');
fourth.append(line3);
line3.className = 'line';
let para3 = document.createElement('p');
line3.append(para3);
para3.innerText = 'The Systems Integration Architecture provides a bridge between the heterogeneous operational applications and platforms. This architecture ties together the mix of platforms, operating systems, transports, and applications.'
line3.style.display = "none"

function a0(){
    if(line.style.display == "none") {
        transition[0].innerText = "~";
        line.style.display = "block";
    }
    else {
        transition[0].innerText = "+";
        line.style.display = "none"
    }
}
function a1(){
    if(line1.style.display == "none") {
        transition[1].innerText = "~";
        line1.style.display = "block";
    }
    else {
        transition[1].innerText = "+";
        line1.style.display = "none"
    }
}
function a2(){
    if(line2.style.display == "none") {
        transition[2].innerText = "~";
        line2.style.display = "block";
    }
    else {
        transition[2].innerText = "+";
        line2.style.display = "none"
    }
}
function a3(){
    if(line3.style.display == "none") {
        transition[3].innerText = "~";
        line3.style.display = "block";
    }
    else {
        transition[3].innerText = "+";
        line3.style.display = "none"
    }
}