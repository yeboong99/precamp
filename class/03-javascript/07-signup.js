const checkValidation = function(){

    let email = document.getElementById("email").value
    let pw1 = document.getElementById("pw1").value
    let pw2 = document.getElementById("pw2").value

    if(email !== "" && pw1 !== "" && pw2 !== ""){ //js는 거짓 같은 값만 아니면 전부 참. 따라서 if(email && pw1 && pw2)도 가능. 그 값이 0이라고 해도 int가 아닌 문자열 값이기에 참으로 인식함.
        //모든 input이 비어있지 않을 때
        document.getElementById("submit").disabled = false
    } else {
        //하나라도 비어있을 때
        document.getElementById("submit").disabled = true
    }
}