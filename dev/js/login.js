require.config({
    baseUrl: './lib/',
    paths: {
        'jquery': 'jquery/dist/jquery',
        'constant': '../js/common/constant'
    },
    shim: {}
});

require(['constant'], function (CONSTANT) {
    document.forms[0].onsubmit = function () {
        return login();
    }

    function login() {
        var userName = document.getElementById('username').value;
        var passWord = document.getElementById('password').value;

        var xmlhttp;
        if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else { // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                var response = eval('(' + xmlhttp.responseText + ')');
                console.log(response);
                if (!response.code) {
                    sessionStorage.setItem('userInfo', JSON.stringify(response.data));
                    location.href = '/index_bak.html';
                } else {
                    alert(response.msg);
                }
            }
        }
        xmlhttp.open('POST', CONSTANT.SERVICE.USER.LOGIN + '?username=' + userName + '&password=' + passWord, true);
        xmlhttp.send();

        return false;
    }
});