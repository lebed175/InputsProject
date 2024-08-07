let enterDigitBtn = document.querySelector('.sum__button')
let sumDigitsInInputsBtn = document.querySelector('.inputs__button')
let inputForCount = document.getElementById('summary')
let place = document.querySelector('.inputs__place')
let result = document.querySelector('.result__value')
let resetAll = document.querySelector('.reset__button')


enterDigitBtn.onclick = function () {
    let count = inputForCount.value

    if (place.childElementCount !== 0) {
        place.replaceChildren()
        for (let i = 0; i < count; i++) {
            let newInput = document.createElement('input')
            newInput.setAttribute('type', 'number')
            newInput.classList.add('input')
            newInput.id = `x${i}`
            place.insertAdjacentElement('beforeend', newInput)
        }
    } else {
        for (let i = 0; i < count; i++) {
            let newInput = document.createElement('input')
            newInput.setAttribute('type', 'number')
            newInput.classList.add('input')
            newInput.id = `x${i}`
            place.insertAdjacentElement('beforeend', newInput)
        }
    }
}

sumDigitsInInputsBtn.onclick = function () {
    let sum = 0

    for (let i = 0; i < place.childElementCount; i++) {
        sum += Number(document.getElementById(`x${i}`).value)
    }

    result.innerHTML = sum
}

resetAll.onclick = function () {
    let agreeToReset = confirm('Вы уверены, что хотите сбросить внесенные параметры?')

    if (agreeToReset) {
        place.replaceChildren()
        result.innerHTML = '-'
        inputForCount.value = 0
    } else {
        return
    }
}
