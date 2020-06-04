const login = document.getElementById("login");
    
var password = "1234";
var getpass = prompt("비밀번호를 입력하세요.");

login.onclick = (event) => {
    if(pass == getpass) {
        alert("로그인 되었습니다.");
        location.href="1.html"
    } else {
        alert("비밀번호가 틀렸습니다.");
        location.href="index.html"
    }



}
