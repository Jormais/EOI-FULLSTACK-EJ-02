

////////////////////////////////////////
/////////// Zona ejercicio 1 ///////////
////////////////////////////////////////


function ejercicio01(email){
    if (email === "yunior.developer@hotmail.com" || email === "miguel@mrbug.es" || email === "imanol@mercadona.com") {
        return true;
    } else {
        return false;
    }
}



////////////////////////////////////////
//////// Final zona ejercicio 1 ////////
////////////////////////////////////////

////////////////////////////////////////
/////////// Zona ejercicio 2 ///////////
////////////////////////////////////////


function ejercicio02(email){
    if (email.includes("m")) {
        return `El correo ${email} tiene ${email.length} caracteres y en mayúsculas se quedaría así ${email.toUpperCase()}. Además contiene letras M`;
    } else { 
        return `El correo ${email} tiene ${email.length} caracteres y en mayúsculas se quedaría así ${email.toUpperCase()}. Además no contiene ninguna letras M`;
    }
}



////////////////////////////////////////
//////// Final zona ejercicio 2 ////////
////////////////////////////////////////

////////////////////////////////////////
/////////// Zona ejercicio 3 ///////////
////////////////////////////////////////


function ejercicio03(email){
    var emailSplit = email.split("");
    var emailSplitWithAr = email.split("@");
    for (let index = 0; index < email.length; index++) {
        if (isNaN(parseInt(emailSplit[index]))) {
            return `El correo ${email} pertenece al dominio ${emailSplitWithAr[1]} y tiene ${emailSplitWithAr[0].length} caracteres sin contar el dominio ni el @. Además, el correo contiene número/s`
        } else {
            return `El correo ${email} pertenece al dominio ${emailSplitWithAr[1]} y tiene ${emailSplitWithAr[0].length} caracteres sin contar el dominio ni el @. Además, el correo no contiene ningún número`
        }
    }
}



////////////////////////////////////////
//////// Final zona ejercicio 3 ////////
////////////////////////////////////////

////////////////////////////////////////
/////////// Zona ejercicio 4 ///////////
////////////////////////////////////////


function ejercicio04(user){
    if (user.edad < 18) {
        return `El usuario ${user.nombre} no es mayor de edad.`;
    } else {
        return `El usuario ${user.nombre} es mayor de edad. Por lo tanto, le he creado un usuario con el correo ${user.correo}`;
    }
}



////////////////////////////////////////
//////// Final zona ejercicio 4 ////////
////////////////////////////////////////

////////////////////////////////////////
/////////// Zona ejercicio 5 ///////////
////////////////////////////////////////


function ejercicio05(user){
    if( user.nombre.includes("Yunior") && user.correo === "yunior.developer@hotmail.com" && parseInt(user.edad) === 27){
        return "La persona introducida es Yunior";
    } else if (user.nombre.includes("Yunior") || user.correo === "yunior.developer@hotmail.com" || parseInt(user.edad) === 27) {
        if(user.nombre.includes("Yunior")) {
            return "La persona introducida pudiera ser Yunior. Ya que contiene el mismo nombre.";
        } else if (user.correo === "yunior.developer@hotmail.com"){
            return "La persona introducida pudiera ser Yunior. Ya que tiene el mismo correo.";
        } else if (parseInt(user.edad) === 27){
            return "La persona introducida pudiera ser Yunior. Ya que tiene la misma edad.";
        }
    } else { 
        return "La persona introducida no es Yunior";
    }
}



////////////////////////////////////////
//////// Final zona ejercicio 5 ////////
////////////////////////////////////////

////////////////////////////////////////
/////////// Zona ejercicio 6 ///////////
////////////////////////////////////////


function ejercicio06(user){
    var regExName = new RegExp('[a-zA-Z ]{5,60}', 'g');
    var arrayEmail = user.correo.split("@");
    var nameIsCorrect = false;
    var isValid = {
        valid : false,
        errors : [
            {
                code : 'email_invalid_min_length',
                text : 'El correo [correo] debe contener más de 7 caracteres.'
            }
        ]
    }

    if (
        regExName.test(user.nombre) && arrayEmail[0] !== "" && arrayEmail[1] !== "" 
        && user.correo.length > 7 && user.correo.length < 60 
        && user.edad > 5 && user.edad < 150
    ) {

        isValid.valid = true;
        isValid.errors[0].code = "";
        isValid.errors[0].text = "";

    } else if(regExName.test(user.nombre)){

        isValid.errors[0].code = 'name_invalid';
        isValid.errors[0].text = `El nombre ${user.nombre} dete tener entre 5 y 60 caracteres y solo puede contener letras o espacios`;

    } else if(arrayEmail[0] === "" || arrayEmail[1] === "" ) {

        isValid.errors[0].code = 'email_format_invalid';
        isValid.errors[0].text = `Email ${user.correo} con formato invalido, debe tener caracteres antes y despues del @`;

    } else if(user.correo.length < 7 || user.correo.length > 60){

        isValid.errors[0].code = 'email_invalid_min_length';
        isValid.errors[0].text = `El correo ${user.correo} debe contener más de 7 caracteres.`;

    } else if(user.edad < 5 || !user.edad > 150) {

        isValid.errors[0].code = 'age_invalid';
        isValid.errors[0].text = `La edad introducida no es correcta, ha de ser mayor de 5 y menor de 150`

    }

    return JSON.stringify(isValid);

}



////////////////////////////////////////
//////// Final zona ejercicio 6 ////////
////////////////////////////////////////

////////////////////////////////////////
/////////// Zona ejercicio 7 ///////////
////////////////////////////////////////


function ejercicio07(users){

    var objectInfo = {
        items_inserted  : 0,
        ids  : [],
        with_errors  : [],
        users_stored  : []
    }

    var usersValids = [];
    users.forEach(user => {

        var id = 0;
        var isValid = JSON.parse(ejercicio06(user));

        if(isValid.valid){

            id = usersValids.length + 1;
            user.id = id; 
            usersValids.push(user);
            objectInfo.items_inserted = id;
            objectInfo.ids.push(id);
            objectInfo.users_stored = usersValids;

        } else{

            objectInfo.with_errors.push(isValid.errors[0]);

        }
    });
    
    return JSON.stringify(objectInfo);
}



////////////////////////////////////////
//////// Final zona ejercicio 7 ////////
////////////////////////////////////////
