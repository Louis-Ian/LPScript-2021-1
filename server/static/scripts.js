var number = document.getElementById("number");

var button = document.getElementById("button");

var result = document.getElementById("res");

function reqListener() {
    res = this.responseText
    var lista = this.responseText.split(',');
    res = '';
    for (var i = 0; i < lista.length; i++)
    {
        res += `${lista[i]}<br>`;
    }
        
    result.innerHTML = res;
};

button.onclick = () => {
    rReq = new XMLHttpRequest();
    rReq.onload = reqListener;
    rReq.open("get", `collatz/${number.value}`, true);
    rReq.send();
}
