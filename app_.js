const som = document.querySelector('#som')
const usd = document.querySelector('#usd')
const euro = document.querySelector('#euro')

const convert = (elem, target1, target2 ,isTrue,) => {
    elem.oninput = () => {
        const request = new XMLHttpRequest()
        request.open("GET", "data.json")
        request.setRequestHeader("Content-type", "application/json")
        request.send()
        request.onload = () => {
            const response = JSON.parse(request.response)

            if (isTrue){
                target1.value = ( elem.value / response.usd ).toFixed(2)
                target2.value = ( elem.value / response.euro ).toFixed(2)
            }
            else {
                target1.value = ( elem.value * response.usd ).toFixed(2)
                target2.value = ( elem.value * response.euro ).toFixed(2)
            }

            elem.value === '' && (target1.value = '')
            elem.value === '' && (target2.value = '')
            // elem.value === '' ? target.value = '' : null
        }
    }
}
function startTime() {
    var today = new Date();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();
    document.getElementById('time').innerHTML =
        hours + ":" + minutes + ":" + seconds;
    var t = setTimeout(startTime, 1000);
}
startTime()

// 0, '', false, undefined, null, NaN
convert(som, usd, euro, true)
// convert(usd, som,euro,)



