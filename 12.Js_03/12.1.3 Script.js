alert('JS FILE ATTACHED')
var name = "Sahil Kumar";
var address = "123 Main St, City, Country";
console.log("Name:", name);
console.log("Address:", address);
console.table({ name: name, address: address });
console.log("Name:", name, "Address:", address);
console.log('Normal Text');
console.warn('This is a warning message');
console.error('This is an error message');
console.info('This is an informational message');
//console.assert(name === "Sahil Kumar", "Assertion failed: Name is not Sahil Kumar");
console.groupEnd();
//console.clear();

function greet(){
    console.log("Hello, " + name + "! Welcome to the JavaScript program.");
}
greet();