function checkUser() {
  var mauKT = /^[a-zA-Z]\w*/;
  if (mauKT.test(document.getElementById("txtUser").value.trim()) == true) {
    tendn.innerHTML = "";
    return true;
  } else {
    tendn.innerHTML = "Nhập sai, vui lòng nhập lại";
    return false;
  }
}

function checkPassword() {
  var re = /(?=.*\d).{6,}/;
  if (re.test(document.getElementById('txtPassword').value.trim()) == false) {
    mk.innerText = "Phải có chữ, số, ít nhất 6 kí tự";
    return false;
  }
  else {
    mk.innerText = "";
    return true;
  }
}

function checkPasswordx() {
  if (document.getElementById('txtXNPassword').value != document.getElementById('txtPassword').value) {
    nlmk.innerText = "Nhập sai, khác mật khẩu";
    return false;
  }
  else {
    nlmk.innerText = "";
    return true;
  }
}

function checkMail() {
  var re = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if (re.test(document.getElementById('txtEmail').value.trim()) == false) {
    mail.innerText = "Nhập sai, vui lòng nhập lại theo mẫu you@example.com";
    return false;
  }
  else {
    mail.innerText = "";
    return true;
  }
}

// function SubmitForm() {
//   if (checkUser() == false || checkPassword() == false || checkPasswordx() == false || checkEmail() == false) {
//    alert('Bạn chưa nhập đầy đủ thông tin!');
//   }
//   else {
//     var tt1 = document.getElementById('checkUser').value;
//     var tt2 = document.getElementById('checkEmail').value;
//     var w = open("formvalidation_info.html", "Ketqua");
//     w.document.write("<b>THÔNG TIN ĐĂNG NHẬP</b");
//      w.document.write("Tài Khoản: " + tt1 + "<br>");
//      w.document.write("Email: " + tt2 + "<br>");

//   }
// }