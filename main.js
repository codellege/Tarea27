let ta = document.getElementById('txtarea')
let b = document.getElementById('button')
let w = document.getElementById('warning')
let l = document.getElementById('list')

let mainArray = []
let i = 0
let latest = 0

events()



function events() {
    ta.addEventListener('keypress', saver)
    b.addEventListener('click', sumer)
}

function saver(e) {
    if (e.key == 'Enter') {

        latest = ta.value

        l.innerHTML = `<li class="list-group-item active">Sum: </li>
        <li class="list-group-item">Latest: ${ta.value}</li>
        <li class="list-group-item">Lenght: ${mainArray.length}</li>`

        if (!isNaN(Number(ta.value))) {
            mainArray[i] = Number(ta.value)
            i++

            console.log(mainArray)
        } else {
            w.innerText = 'Enter a valid number'
        }

        ta.value = ''

    }
}

function sumer() {
    let sum = 0;
    for (let z = 0; z < mainArray.length; z++) {
        sum += mainArray[z]
    }

    l.innerHTML = `<li class="list-group-item active">Sum: ${sum}</li>
        <li class="list-group-item">Latest: ${latest}</li>
        <li class="list-group-item">Lenght: ${mainArray.length}</li>`
}