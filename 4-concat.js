
function Concat(...args) {
    const first = args[0];
    const second = args[1];
    return `${first} is ${second}`;
}

console.log(Concat(...process.argv.slice(2)));
