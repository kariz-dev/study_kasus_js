function buat_login() {
    // menghapus element dengan id="x"
    var elem = document.getElementById("x"); // id="x"
    elem.parentElement.removeChild(elem); // hapus element "x" pada variabel "elem"

    // membuat/menambahkan element <p> dengan class="tulisan_login", berisi tulisan "silahkan login"
    var p = document.createElement("p"); // element "p atau <p></p>" (paragraf)
    p.className = "tulisan_login"; // class
    p.innerHTML = "Silahkan Login"; // isi element <p>

    var element = document.getElementsByTagName("div")[0]; // memanggil element div dengan isi index ke 0
    element.appendChild(p); // membuat element <p> didalam element <div>
    var form = document.createElement("form"); // membuat element <form>
    element.appendChild(form); // membuat element <form> didalam element <div>

    // membuat label Username
    var label1 = document.createElement("label"); // membuat element <label>
    label1.innerHTML = "Username"; // isi label, <label>Username</label>
    form.appendChild(label1); // artinya, memngaplikasikan element yang ada pada veriabel label1 pada element form
    // element input username
    var input_username = document.createElement("input"); // pada variabel input_username kita membuat element <input>
    input_username.type = "text"; // type="text"
    input_username.className = "form_login"; // class="form_login"
    input_username.name = "username"; // name="username"
    form.appendChild(input_username); // memasukan isi dari variabel input_username kedalam element form,

    // membuat label Password
    var label2 = document.createElement("label");
    label2.innerHTML = "Password";
    form.appendChild(label2);
    // element input password
    var input_password =  document.createElement("input");
    input_password.type = "password";
    input_password.className = "form_login";
    input_password.name = "password";
    form.appendChild(input_password);

    // tombol submit
    var tombol = document.createElement("input");
    tombol.type = "submit";
    tombol.className = "tombol_login";
    tombol.value = "Login";
    form.appendChild(tombol);

}