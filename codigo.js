
    const usuarios = ["77160047", "75117634"];
    const claveCorrecta = "12345";

    document.getElementById("form-login").addEventListener("submit", function(e) {
      e.preventDefault();
      const usuario = document.getElementById("usuario").value;
      const clave = document.getElementById("clave").value;

      if (usuarios.includes(usuario) && clave === claveCorrecta) {
        alert("Usuario y clave correctos");
        document.getElementById("form-login").style.display = "none";
        document.getElementById("form-contacto").style.display = "block";
      } else {
        alert("Usuario y clave incorrectos");
      }
    });

    document.getElementById("form-contacto").addEventListener("submit", function(e) {
      e.preventDefault();
      const tipo = document.getElementById("tipo-doc").value;
      const numDoc = document.getElementById("num-doc").value;
      const nombre = document.getElementById("nombre").value;
      const telefono = document.getElementById("telefono").value;
      const correo = document.getElementById("correo").value;
      const sexo = document.getElementById("sexo").value;
      const fecha = document.getElementById("fecha").value;
      const estado = document.getElementById("estado").value;

      let errores = false;

      if ((tipo === "DNI" && (!/^\d{8}$/.test(numDoc))) ||
          (tipo === "RUC" && (!/^\d{10}$/.test(numDoc)))) {
        errores = true;
      }
      if (!/^[a-zA-Z\s]+$/.test(nombre)) errores = true;
      if (!/^\d{9}$/.test(telefono)) errores = true;
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) errores = true;
      if (!sexo || !fecha || !estado) errores = true;

      if (errores) {
        alert("Uno o más campos tienen un error. Por favor revisa e inténtalo de nuevo.");
      } else {
        alert("Datos enviados correctamente");
      }
    });
 