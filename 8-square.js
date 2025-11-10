
function Square(...args) {
    const size = parseInt(args[0]);
    if (isNaN(size)) {
        console.log("Missing size");
    } else {
        for (let index = 0; index < size; index++) {
            console.log("X".repeat(size));
        }
    }
}

Square(...process.argv.slice(2));
