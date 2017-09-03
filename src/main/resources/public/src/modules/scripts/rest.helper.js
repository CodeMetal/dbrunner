
angular
    .module('app.tapi')
    .factory('RestHelper', RestHelper);

RestHelper.$inject = ['$http', '$q'];

function RestHelper($http, $q) {

    return {
        get: httpGet,
        post: httpPost,
        put: httpPut,
        delete: httpDelete
    };

    function httpGet(serviceKey, url) {
        var deferred = $q.defer();
        url = prepareRestServiceURL(serviceKey, url);

        $http({
            method: 'GET',
            url: url

        }).
        success(function (data, status) {
            var response = {
                data: data,
                status: status
            };
            deferred.resolve(response);
        }).
        error(function (data, status) {
            var response = {
                data: data,
                status: status
            };
            deferred.reject(response);
        });
        return deferred.promise;
    }

    function httpPost(serviceKey, url, data) {
        var deferred = $q.defer();
        url = prepareRestServiceURL(serviceKey, url);

        $http({
            method: 'POST',
            url: url,
            data: data,
            dataType: "json"
        }).
        success(function (data, status) {
            var response = {
                data: data,
                status: status
            };
            deferred.resolve(response);
        }).
        error(function (data, status) {
            var response = {
                data: data,
                status: status
            };
            deferred.reject(response);
        });
        return deferred.promise;
    }

    function httpPut(serviceKey, url, data) {
        var deferred = $q.defer();
        url = prepareRestServiceURL(serviceKey, url);

        $http({
            method: 'PUT',
            url: url,
            data: data,
            dataType: "json"
        }).
        success(function (data, status) {
            var response = {
                data: data,
                status: status
            };
            deferred.resolve(response);
        }).
        error(function (data, status) {
            var response = {
                data: data,
                status: status
            };
            deferred.reject(response);
        });
        return deferred.promise;
    }

    function httpDelete(serviceKey, url, data) {
        var deferred = $q.defer();
        url = prepareRestServiceURL(serviceKey, url);

        $http({
            method: 'DELETE',
            url: url,
            data: data
        }).
        success(function (data, status) {
            var response = {
                data: data,
                status: status
            };
            deferred.resolve(response);
        }).
        error(function (data, status) {
            var response = {
                data: data,
                status: status
            };
            deferred.reject(response);
        });
        return deferred.promise;
    }

    function prepareRestServiceURL(serviceKey, url) {
        return url;
    }

}