let input = document.getElementById('input');
let qrImg = document.getElementById('img');
let imgBox = document.getElementById('imgBox');
let btn = document.getElementById('btn');

function generateQR(){
    if(input.value !== "")
    {
        qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + input.value;
        imgBox.classList.add("show-img");
    }
    else{
        input.classList.add("error");
        setTimeout(() =>{
            input.classList.remove("error");
        }, 1000);
    }
}

btn.addEventListener("click", generateQR)