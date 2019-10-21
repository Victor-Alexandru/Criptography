function main() {
    encription_function = {};
    decription_function = {};

    isEncryptionGenerated = false;

    validateLetter = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'X', 'Y', 'Z', 'space'];

    var randomProperty = function (obj) {
        // function to take random some keys from an object
        var keys = Object.keys(obj);
        return obj[keys[keys.length * Math.random() << 0]];
    };

    function validateEncryptionFunction() {
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
        inputValues.push(aValue, bValue, cValue, dValue, eValue, fValue, gValue, hValue, iValue, jValue, kValue, lValue, mValue, nValue, oValue, pValue, qValue, rValue, spaceValue, sValue, tValue, uValue, vValue, wValue, xValue, yValue, zValue);
        for (value of inputValues)
        {
            if(!validateLetter.includes(value))
            {
                alert("Invalid Encryption function input");
                return
            }
        }
    }

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

    $("#encryptionFunction").click(()=> {
        //the callback which takes the value from the input ,validates it and encripts if its the case
        validateEncryptionFunction();
    });


    $("#encrypt-btn").click(function () {
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