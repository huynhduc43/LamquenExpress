//Kiểm tra dữ liệu có phải là số thực hay không
function isNumber(str_id){
    var str_num = document.getElementById(str_id).value;
    var id_label = "label-" + str_id;
    var check = true;
    var notify = "Giá trị nhập ở ô ";
    var label = document.getElementById(id_label).innerText;

    if (isNaN(str_num)){
        document.getElementById("txt-notify1").innerText = notify;
   
        var span_label = document.getElementById("txt-notify2");
        span_label.innerText = label;

        var span_detail = document.getElementById("txt-notify3");
        span_detail.innerText = " không phải là số";

        check = false;
        return false;
    }
    
    //Xóa số 0 thừa.

    //Xóa thông báo nếu dữ liệu là số thực
    if (check){
        var ntf1 = document.getElementById("txt-notify1");
        var ntf2 = document.getElementById("txt-notify2");
        var ntf3 = document.getElementById("txt-notify3");

        if (ntf1.innerText === notify && ntf2.innerText === label && ntf3.innerText === " không phải là số" || ntf1.innerText === "Không hợp lệ!" ){
            ntf1.innerText = "";
            ntf2.innerText = "";
            ntf3.innerText = "";
        }

        return true;
    }

}

//Kiểm tra đã điền đủ hai số hợp lệ (hai số thực khác null) hay chưa
function isValid(str_num1, str_num2){
    var notify = document.getElementById("txt-notify1");
    notify.innerText = "";
    

    if (str_num1 === "" || str_num2 === "" ){
        notify.innerText= "Bạn chưa điền đủ hai số hợp lệ!";
        document.getElementById("txt-notify2").innerText = "";
        document.getElementById("txt-notify3").innerText = "";
        return false;
    } 
    else if (!isNumber("num1") || !isNumber("num2")){
        notify.innerText = "Bạn chưa điền đủ hai số hợp lệ!";
        document.getElementById("txt-notify2").innerText = "";
        document.getElementById("txt-notify3").innerText = "";
        return false;
    }

    return true
}

//Thực hiện tính toán, xuất kết quả
function checkCondition(){
    //alert("Bạn đã gửi thông tin từ form đi");
    var num1 = document.getElementById("num1");
    var num2 = document.getElementById("num2");
    var checked = false;
    var pheptinh = document.getElementsByName("tyle_calc");
    notify = document.getElementById("txt-notify1");

    for(var i = 0; i < pheptinh.length; i++) {

        if(pheptinh[i].checked){

            if(isValid(num1.value, num2.value)){    
                checked = true;
                break;
            } else{
                return false;
            }
            
        } 
    }

    if(!checked) {
        notify.innerHTML = "Bạn chưa chọn phép tính!";
        document.getElementById("txt-notify2").innerText= "";
        document.getElementById("txt-notify3").innerText = "";
        return false;
    }

    return true;
}

//Đổi màu khi button radio được chọn
function changeColor(){
    var color = document.getElementsByClassName("btn-type-calc")
    var pheptinh = document.getElementsByName("tyle-calc");

    for(var i = 0; i < pheptinh.length; i++) {

        if(pheptinh[i].checked){
            color[i].style.backgroundColor = "rgb(16, 199, 71)";
        } 
        else {
            color[i].style.backgroundColor = " rgb(15, 226, 241)";
        }
    }
}