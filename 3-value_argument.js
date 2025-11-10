function ValueArgument(...args){
    if (args[0] === undefined) {
        return "No argument"
    }else {
            return args[0];        
    }
}

console.log((ValueArgument(...process.argv.slice(2))))