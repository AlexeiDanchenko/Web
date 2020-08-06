var sUsername = prompt('Please, enter your username');

var sResCheckUsername = checkUsername(sUsername);


alert(sResCheckUsername);

function checkUsername(name){
    if(name.search(/\d/) == -1)
        return name.split("").reverse().join("");
    else
    {
        if(confirm('Username "' + name +  '" contains number(s). Translate username into UpperCase?'))
            return name.toUpperCase();
        else
            return name.toLowerCase();
    }
        

}
/*
function getUpperCase(name){

}

function getLowerCase(name){

}
*/