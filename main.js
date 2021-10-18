let form = document.getElementById("formulario");
form.addEventListener("submit", function(evento){
    evento.preventDefault(); // evita el comportamiento habitual del elemento

    let rgCard = /[0-9]{12}/;
    let rgCvc = /[0-9]{3}/;
    let rgMonto = /[0-9]{1,20}/;
    let rgNombre = /[a-zA-Z]/;
    let rgCod = /[0-9]/;
    let validado = true;

    if (form.card.value == '' || !(rgCard.test(form.card.value))) {
        let smallTag = document.querySelector('tarjeta');
        smallTag.style.color = "red";
        smallTag.style.display = 'block';
        smallTag.innerHTML = "Debe ingresar un número de tarjeta válido";
        validado = false;
    } else {
        let smallTag = document.querySelector('tarjeta');
        smallTag.innerHTML = ""}
        
    
     if ((form.cvc.value == '' || !(rgCvc.test(form.cvc.value)))) {
        let smallTag = document.querySelector('cvc');
        smallTag.style.color = "red";
        smallTag.style.display = 'block';
        smallTag.innerHTML = "Debe ingresar un número de CVC válido";
        validado = false;
     } else {
        let smallTag = document.querySelector('cvc'); 
        smallTag.innerHTML = "";}
    
    if ((form.monto.value == '' || !(rgMonto.test(form.monto.value)))) {
        let smallTag = document.querySelector('mont');
        smallTag.style.color = "red";
        smallTag.style.display = 'block';
        smallTag.innerHTML = "Debe ingresar solo caracteres válidos";
        validado = false;
    } else {
        let smallTag = document.querySelector('mont');
        smallTag.innerHTML = "";}

    if ((form.nombre.value == '' || !(rgNombre.test(form.nombre.value)))) {
        let smallTag = document.querySelector('nomb');
        smallTag.style.color = "red";
        smallTag.style.display = 'block';
        smallTag.innerHTML = "Debe ingresar solo caracteres válidos";
        validado = false;
    } else {
        let smallTag = document.querySelector('nomb');
        smallTag.innerHTML = "";}

    if ((form.apellido.value == '' || !(rgNombre.test(form.apellido.value)))) {
        let smallTag = document.querySelector('apell');
        smallTag.style.color = "red";
        smallTag.style.display = 'block';
        smallTag.innerHTML = "Debe ingresar solo caracteres válidos";
        validado = false;
    } else {
        let smallTag = document.querySelector('apell');
        smallTag.innerHTML = "";}

    if ((form.city.value == '' || !(rgNombre.test(form.city.value)))) {
        let smallTag = document.querySelector('ciud');
        smallTag.style.color = "red";
        smallTag.style.display = 'block';
        smallTag.innerHTML = "Debe ingresar solo caracteres válidos"; 
        validado = false;
    } else {
        let smallTag = document.querySelector('ciud');
        smallTag.innerHTML = "";}

    if (form.edo.value == 'Pick a state') {
        let smallTag = document.querySelector('edo');
        smallTag.style.color = "red";
        smallTag.style.display = 'block';
        smallTag.innerHTML = "Debe seleccionar un Estado";
        validado = false;
    } else {
        let smallTag = document.querySelector('edo');
        smallTag.innerHTML = "";}

    if ((form.cod.value == '' || !(rgCod.test(form.cod.value)))) {
        let smallTag = document.querySelector('cod');
        smallTag.style.color = "red";
        smallTag.style.display = 'block';
        smallTag.innerHTML = "Debe ingresar un código postal válido"; 
        validado = false;  
    } else {
        let smallTag = document.querySelector('cod')
        smallTag.innerHTML = "";}

     if (form.inlineRadioOptions.value == false) {
        let smallTag = document.querySelector('check');
        smallTag.style.color = "red";
        smallTag.style.display = 'block';
        smallTag.innerHTML = "Debe seleccionar su medio de pago"; 
        validado = false;
    } else {
        let smallTag = document.querySelector('check')
        smallTag.innerHTML = "";}

    if (validado == true) {
        evento.target.submit();
    } 

    
    
})