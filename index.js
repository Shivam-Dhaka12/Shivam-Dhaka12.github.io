
    // const form = document.getElementById("form")
    // const number = form.elements['number']
    // let num = number.value
    // console.log(num)


function calculate() {


    const number = document.getElementById("number")
    let num = number.value
    let inputs = document.querySelectorAll(".input")
    
    for( let i = 0; i < inputs.length; i++)
    {
        inputs[i].textContent = num;
    }

    document.getElementById("meterstofeet").textContent = (num*3.2808399).toFixed(3)
    document.getElementById("feettometers").textContent = (num / 3.2808399).toFixed(3)
    document.getElementById("literstogallons").textContent = (num / 4.546092).toFixed(3)
    document.getElementById("gallonstoliters").textContent = (num * 4.546092).toFixed(3)
    document.getElementById("kilostopounds").textContent = (num * 2.20462262).toFixed(3)
    document.getElementById("poundstokilos").textContent = (num / 2.20462262).toFixed(3)
}