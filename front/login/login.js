function login(){
    var u = document.getElementById("id-urn").value;
    var p = document.getElementById("id-pwd").value;
    if("wtl" == u && "wtl" == p){
        alsert("登录成功")
        return true;
    }
    else{
        alert("用户名或密码错误")
        return false;
    }

}