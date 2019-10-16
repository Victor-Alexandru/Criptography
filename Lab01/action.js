function main() {
    encription_function = {};

    var randomProperty = function (obj) {
        var keys = Object.keys(obj);
        return obj[keys[keys.length * Math.random() << 0]];
    };

    function generate_dict() {

        for (let i = 65; i <= 90; i++) {
            encription_function[String.fromCharCode(i)] = String.fromCharCode(i);
        }
        for (let i = 97; i <= 122; i++) {
            encription_function[String.fromCharCode(i)] = String.fromCharCode(i);
        }

        encription_function[' '] = ' '
    }

    function shuffleFunction() {
        for(let i=1;i<100;i++)
        {
            key1 = randomProperty(encription_function);
            key2 = randomProperty(encription_function);
            let aux = encription_function[key1];
            encription_function[key1] = encription_function[key2];
            encription_function[key2] = aux;

        }
    }

    function showTable() {
        list = '<ul>';
        for (var i in encription_function) {
            list += "<li> " + i.toString() + " ->" + encription_function[i].toString() + " </li>";
        }
        list += '</ul>';
        $(".encryp_func").html(list);
    }



    $( "#encrypt-btn" ).click(function() {
        let inputValue = $("#plainText").val();
        let rez=''te
        for (var i = 0; i < str.length; i++) {
            alert(str.charAt(i));
        }
    });


    generate_dict();
    shuffleFunction();
    showTable();


}


main();