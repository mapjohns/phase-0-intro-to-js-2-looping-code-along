// Code your solutions in this file

let giftMessage = []

function writeCards(array, message) {
    for (let i =0; i<array.length; i++) {
        console.log(`Thank you, ${array[i]}, for the wonderful ${message} gift!`)
        giftMessage[i] = `Thank you, ${array[i]}, for the wonderful ${message} gift!`

    }
    return giftMessage
}

function countDown(num) {
    for (let i = num; i >= 0; i--) {
        console.log(i);
    }
}

countDown(10)