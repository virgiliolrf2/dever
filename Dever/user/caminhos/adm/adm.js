function logar(){

    var login = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;

    if(login == "admin" && senha == "123456"){
        alert('Sucesso');
        location.href = "home.html";
    }else{
        alert('Usuario ou senha incorretos');
    }

}