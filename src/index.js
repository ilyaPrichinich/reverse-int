module.exports = function reverse (n) {
    let arr = n.toString().split('');
    let rezult = parseInt(arr.reverse().join(''));
    return rezult;
}
