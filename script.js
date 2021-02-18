let textoNombre = "julio";

function Mayuscula(textoNombre) {
    return textoNombre.charAt(0).toUpperCase() + textoNombre.slice(1);
}

console.log(Mayuscula(textoNombre.toLowerCase()));