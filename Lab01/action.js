function main() {
    encription_function = {};
    decription_function = {};


    var randomProperty = function (obj) {
        // function to take random some keys from an object
        var keys = Object.keys(obj);
        return obj[keys[keys.length * Math.random() << 0]];
    };

    function validateOnlySmallAndSpace(value) {
        // validate if the string contains only small letters and space
        for (var i = 0; i < value.length; i++) {
            if ((value[i].charCodeAt(0) < 97 || value[i].charCodeAt(0) > 122) && value[i].charCodeAt(0) !== 32) {
                //we return false if it is not good
                return false
            }

        }
        return true;

    }

    function validateOnlyBigAndSpace(value) {
        // validate if the string contains only small letters and space
        for (var i = 0; i < value.length; i++) {
            if ((value[i].charCodeAt(0) < 65 || value[i].charCodeAt(0) > 90) && value[i].charCodeAt(0) !== 32) {
                //we return false if it is not good
                return false
            }

        }
        return true;

    }

    function generate_dict() {
        //we generate the dictionary ,which is the encryption key for substitution cipher
        for (let i = 97; i <= 122; i++) {
            //at first we will have the keys matching the values
            encription_function[String.fromCharCode(i)] = String.fromCharCode(i);
        }

        encription_function[' '] = ' ';

    }

    function shuffleFunction() {
        //this function takes two random keys and swaps between their values
        for (let i = 1; i < 100; i++) {
            //taking the random keys
            key1 = randomProperty(encription_function);
            key2 = randomProperty(encription_function);
            //swapping values
            let aux = encription_function[key1];
            encription_function[key1] = encription_function[key2];
            encription_function[key2] = aux;

        }

        //calculating the decription function in which we invert the keys with the values
        for (let i in encription_function) {
            decription_function[encription_function[i].toUpperCase()] = i;
        }
        return decription_function;
    }

    function showTable() {
        //we create a list with the dict and show it with jQuerry
        list = '<ul>';
        for (var i in encription_function) {
            list += "<li> " + i.toString() + " ->" + encription_function[i].toString() + " </li>";
        }
        list += '</ul>';

        listTwo = '<ul>';
        for (var i in decription_function) {
            listTwo += "<li> " + i.toString() + " ->" + decription_function[i].toString() + " </li>";
        }
        list += '</ul>';
        listTwo += '</ul>';
        $(".encryp_func").html(list + listTwo);
    }


    generate_dict();


    $("#encrypt-btn").click(function () {
        //the callback which takes the value from the input ,validates it and encripts if its the case
        let inputValue = $("#plainText").val();
        if (validateOnlySmallAndSpace(inputValue) === false) {
            alert("Invalid terms")
        } else {
            //we iterate through all the letters and transfrom the letters by the encryption rule
            let rez = '';
            for (var i = 0; i < inputValue.length; i++) {

                if (encription_function[inputValue.charAt(i)] === ' ') {
                    rez += '\xa0';
                } else {
                    rez += encription_function[inputValue.charAt(i)].toUpperCase();
                }
            }

            $(".res-ii").html(rez);
        }
    });

    $("#decrypt-btn").click(() => {
        //the callback which takes the value from the input ,validates it and decrypts if its the case ,also shows the table
        let inputValue = $("#cipherText").val();
        if (validateOnlyBigAndSpace(inputValue) === false) {
            alert("Invalid terms")
        } else {
            //apply the same algorithm but with the decription function
            let rez = '';
            for (var i = 0; i < inputValue.length; i++) {

                if (decription_function[inputValue.charAt(i)] === ' ') {
                    rez += '\xa0';
                } else {
                    rez += decription_function[inputValue.charAt(i)];
                }
            }

            $(".res-iii").html(rez);
        }
    });

    shuffleFunction();
    showTable();


}


main();