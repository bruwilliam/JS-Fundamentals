function IsArgumentPresent(...args){
if (args.length === 0) {
    return "No argument";
}
else if (args.length === 1 ) {
    return "Argument found";
}
else return "Arguments found";
}

console.log(IsArgumentPresent(...process.argv.slice(2)))



