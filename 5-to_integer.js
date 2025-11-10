

function ConvertToInt(...args) {
    const first = args[0];
    if (!isNaN(first)) {
        return `My number: ${parseInt(first)}`;
    } else {
        return "Not a number";
    }
}

console.log(ConvertToInt(...process.argv.slice(2)));

