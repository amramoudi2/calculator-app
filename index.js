let eque = ""
let disEque = 0
const res = document.getElementById("result")

function displayText(dis){
    res.textContent = dis
}

function calcolate(){
    try{
        const result = eval(eque)
        if (result === Infinity || result === -Infinity) {
            throw new Error("Infinity");
        }
        disEque = `${result}`
        eque = `${result}`
        displayText(disEque)

    }catch{
        disEque = 'error'
        eque = ""
        displayText(disEque)
    }
}

function deleteCharicter(){
    if(eque.length <= 1){
        disEque = 0
        eque = ""
    }else{
        disEque = disEque.slice(0, -1)
        eque = eque.slice(0, -1)
        displayText(disEque)
    }
}

document.getElementById("rem").addEventListener("click",deleteCharicter)

document.addEventListener("click",(e) => {
    if(e.target.localName === "button"){
        if(e.target.dataset.type){
            eque += e.target.dataset.type
        }
        if(e.target.dataset.display){
            if(disEque === "error"){
                disEque = e.target.dataset.display
            }else if(!disEque){
                disEque = e.target.dataset.display
            }else{
                disEque += e.target.dataset.display
            }
        }
        displayText(disEque)
    }
})

document.getElementById("eq").addEventListener("click",calcolate)

document.getElementById("c").addEventListener("click",() => {
    eque = ""
    disEque = 0
    displayText(disEque)
})
