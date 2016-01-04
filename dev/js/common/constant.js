define(function () {
    var server_host = 'http://127.0.0.1:3000';
    return {
        //接口服务
        SERVER_HOST: server_host,
        //登录页面
        LOGIN_PAGE: '/login.html',
        //业务接口
        SERVICE: {
            USER: {
                LOGIN: server_host + '/user/login'
            }
        }
    }
});