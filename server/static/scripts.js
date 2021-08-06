var number = document.getElementById("number")

var button = document.getElementById("button")

var result = document.getElementById("res") 

function reqListener () {
    result.innerHTML = `${this.responseText}`;
};

button.onclick = () => {
    rReq = new XMLHttpRequest();
    rReq.onload = reqListener;
    rReq.open("get", `collatz/${number.value}`, true);
    rReq.send();
}
