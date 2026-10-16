function greet(name, callback) {
  console.log('Hello ' + name);
  callback();
}

function callMe() {
  console.log('I am a callback function');
}

greet('Alice', callMe);