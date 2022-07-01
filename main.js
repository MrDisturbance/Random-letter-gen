const LowAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const HighAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
const HighOrLow = Math.floor(Math.random() * 2) + 1
import boxen from 'boxen';

function charCount(x) {
    let y = []
    for (let i = 0; i < x; i++) {
        if (Math.floor(Math.random() * 2) + 1 == 1) {
            y.push(HighAlphabet[Math.floor(Math.random() * 26)])
        } else {
            y.push(LowAlphabet[Math.floor(Math.random() * 26)])

        }
    }
    console.log(boxen(y.join(''), {
        title: 'Random Letters',
        titleAlignment: 'center',
        textAlignment: 'center',
        borderColor: 'green'
    }))

}
const args = process.argv.slice(2)
charCount(args[0])