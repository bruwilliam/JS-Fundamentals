

function Multi(...args) {
    const first = args[0];
    if (isNaN(first)) {
        return "Missing number of occurrences";
    } else {
        let count = parseInt(first);
        while (count > 0) {
            console.log("C is fun");
            count--;
        }
    }
}

Multi(...process.argv.slice(2));

