function main() {
    //dictionary for the encryption function
    encription_function = {};

    //dictionary for the description function
    decription_function = {};

    //flag to see if the encryption is generated
    isEncryptionGenerated = false;

    //array with the valid letters of the alphabet
    validateLetter = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'X', 'Y', 'Z', 'W', 'space'];

    var randomProperty = function (obj) {
        // function to take random some keys from an object
        var keys = Object.keys(obj);
        return obj[keys[keys.length * Math.random() << 0]];
    };

    function hasDuplicates(array) {
        return (new Set(array)).size !== array.length;
    }

    function validateEncryptionFunction() {
        //function thath checks if encription function is valid
        //tacking all hard coded values
        let aValue = $("#a").val();
        let bValue = $("#b").val();
        let cValue = $("#c").val();
        let dValue = $("#d").val();
        let eValue = $("#e").val();
        let fValue = $("#f").val();
        let gValue = $("#g").val();
        let hValue = $("#h").val();
        let iValue = $("#i").val();
        let jValue = $("#j").val();
        let kValue = $("#k").val();
        let lValue = $("#l").val();
        let mValue = $("#m").val();
        let nValue = $("#n").val();
        let oValue = $("#o").val();
        let pValue = $("#p").val();
        let qValue = $("#q").val();
        let rValue = $("#r").val();
        let sValue = $("#s").val();
        let tValue = $("#t").val();
        let uValue = $("#u").val();
        let vValue = $("#v").val();
        let xValue = $("#x").val();
        let yValue = $("#y").val();
        let zValue = $("#z").val();
        let wValue = $("#w").val();
        let spaceValue = $("#space").val();
        inputValues = [];
        //putting the values into an array
        inputValues.push(aValue, bValue, cValue, dValue, eValue, fValue, gValue, hValue, iValue, jValue, kValue, lValue, mValue, nValue, oValue, pValue, qValue, rValue, sValue, tValue, uValue, vValue, wValue, xValue, yValue, zValue, spaceValue,);
        for (value of inputValues) {
            //validating every input
            if (!validateLetter.includes(value)) {
                //check if the letters are in the validation array
                alert("Invalid Encryption function input");
                return false
            }
        }
        if (hasDuplicates(inputValues) === true) {
            //check if you write a letter twice
            alert("Encryption function has duplicate keys");
            return false
        }
        return inputValues;
    }

    function validateOnlySmallAndSpace(value) {
        // validate if the string contains only small letters and space with the ascii code
        for (var i = 0; i < value.length; i++) {
            if ((value[i].charCodeAt(0) < 97 || value[i].charCodeAt(0) > 122) && value[i].charCodeAt(0) !== 32) {
                //we return false if it is not good
                return false
            }

        }
        return true;

    }

    function validateOnlyBigAndSpace(value) {
        // validate if the string contains only small letters and space with ascii code
        for (var i = 0; i < value.length; i++) {
            if ((value[i].charCodeAt(0) < 65 || value[i].charCodeAt(0) > 90) && value[i].charCodeAt(0) !== 32) {
                //we return false if it is not good
                return false
            }

        }
        return true;

    }

    function showTable() {
        //we create a list with the dict and show it with jQuerry
        //generate the table
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

    $("#encryptionFunction").click(() => {
        //the callback which takes the value from the input ,validates it and encripts if its the case
        if (validateEncryptionFunction() !== false) {
            isEncryptionGenerated = true;
            encription_function = {};
            decription_function = {};
            //we start with the ascii code of a (the value of the left side of the dict)
            var i = 97;
            //generating the encryption function from the input array starting with the ascii code of a
            //we generate the decryption function in the same time with the encryption one
            for (elem of validateEncryptionFunction()) {
                //elem represents every letter in the array of the input values
                if (elem === 'space') {
                    //decription dictionaryi is made exactly in the inverse of the encryption dictionary
                    if (i === 123) {
                        //when we get to the last element(it is the key of space) - the ascii code of 123
                        //it is not valid, so we hard coded /space
                        encription_function[' '] = ' ';
                        decription_function[' '] = ' ';

                    } else {
                        encription_function[String.fromCharCode(i)] = ' ';
                        decription_function[' '] = String.fromCharCode(i);
                    }
                } else {
                    if (i === 123) {
                        encription_function[' '] = elem;
                        decription_function[elem] = ' ';

                    } else {
                        encription_function[String.fromCharCode(i)] = elem;
                        decription_function[elem] = String.fromCharCode(i);
                    }
                }
                i = i + 1;

            }
            showTable();
        }

    });


    $("#encrypt-btn").click(function () {
        //checking if we have ecnryption and decription generated
        if (!isEncryptionGenerated) {
            alert("Encryption not generated");
            return
        }
        //the callback which takes the value from the input ,validates it and encripts if its the case
        let inputValue = $("#plainText").val();
        if (validateOnlySmallAndSpace(inputValue) === false) {
            alert("Invalid terms")
        } else {
            //we iterate through all the letters and transfrom the letters by the encryption rule
            let rez = '';
            for (var i = 0; i < inputValue.length; i++) {
                //if its space we append a special character
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
        if (!isEncryptionGenerated) {
            alert("Encryption not generated")
            return
        }
        //the callback which takes the value from the input ,validates it and decrypts if its the case ,also shows the table
        let inputValue = $("#cipherText").val();
        if (validateOnlyBigAndSpace(inputValue) === false) {
            alert("Invalid terms")
        } else {
            //apply the same algorithm but with the decription function
            let rez = '';
            for (var i = 0; i < inputValue.length; i++) {
                //if its space we append a special character (code of space)
                if (decription_function[inputValue.charAt(i)] === ' ') {
                    rez += '\xa0';
                } else {
                    rez += decription_function[inputValue.charAt(i)];
                }
            }

            $(".res-iii").html(rez);
        }
    });


}


main();