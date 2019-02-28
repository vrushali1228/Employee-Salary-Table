var imgurl = adminurl + "upload/";

var imgpath = imgurl + "readFile";
var uploadurl = imgurl;



myApp.factory('NavigationService', function ($http) {
    var navigation = [{
            name: "Employee",
            classis: "active",
            sref: "#!/employee",
            icon: "phone"
        },
        {
            name: "Salary",
            classis: "active",
            sref: "#!/salary",
            icon: "phone"
        },
        {
            name: "ProvidentFund",
            classis: "active",
            sref: "#!/providentfund",
            icon: "phone"
        },
        {
            name: "Designation",
            classis: "active",
            sref: "#!/designation",
            icon: "phone"
        }
    ];

    return {
        getnav: function () {
            return navigation;
        },
        getemployees: function (callback) {
            $http.post(adminurl + "Employee/search").then(function (data) {
                callback(data.data);
            });
        },

        empsave: function (formData, callback) {
            $http.post(adminurl + "Employee/save", formData).then(function (data) {
                data = data.data;
                callback(data);
            });
        },
        empdelete: function (formData, callback) {
            $http.post(adminurl + "Employee/delete", formData).then(function (data) {
                data = data.data;
                callback(data);
            });
        },
        getOneEmployee: function (formData, callback) {
            $http.post(adminurl + "Employee/getOne", formData).then(function (data) {
                callback(data.data);
            });
        },

        getsalary: function (callback) {
            $http.post(adminurl + "salary/search").then(function (data) {
                callback(data.data);
            });
        },
        salarysave: function (formData, callback) {
            $http.post(adminurl + "salary/save", formData).then(function (data) {
                data = data.data;
                callback(data);
            });
        },
        salarydelete: function (formData, callback) {
            $http.post(adminurl + "salary/delete", formData).then(function (data) {
                data = data.data;
                callback(data);
            });
        },
        getOneSalary: function (formData, callback) {
            $http.post(adminurl + "salary/getOne", formData).then(function (data) {
                callback(data.data);
            });
        },
        getprovidentfund: function (callback) {
            $http.post(adminurl + "ProvidentFund/search").then(function (data) {
                callback(data.data);
            });
        },
        pfSave: function (formData, callback) {
            $http.post(adminurl + "ProvidentFund/save", formData).then(function (data) {
                data = data.data;
                callback(data);
            });
        },
        pfdelete: function (formData, callback) {
            $http.post(adminurl + "ProvidentFund/delete", formData).then(function (data) {
                data = data.data;
                callback(data);
            });
        },
        getOnepf: function (formData, callback) {
            $http.post(adminurl + "ProvidentFund/getOne", formData).then(function (data) {
                callback(data.data);
            });
        },

        employeePagination: function (data, callback) {
            $http
                .post(adminurl + "Employee/paginatedEmployee", {
                    page: data.page,
                    firstName: data.firstName,
                    lastName: data.lastName
                })
                .then(function (data) {
                    data = data.data;
                    callback(data);
                });
        },

        designationsave: function (formData, callback) {
            $http.post(adminurl + "designation/save", formData).then(function (data) {
                data = data.data;
                callback(data);
            });
        },
        getdesignation: function (callback) {
            $http.post(adminurl + "designation/search").then(function (data) {
                callback(data.data);
            });
        },
        deletedesignation: function (formData, callback) {
            $http.post(adminurl + "designation/delete", formData).then(function (data) {
                data = data.data;
                callback(data);
            });
        },


        parseAccessToken: function (data, callback) {
            if (data) {
                $.jStorage.set("accessToken", data);
                callback();
            }
        },
        removeAccessToken: function (data, callback) {
            $.jStorage.flush();
        },
        profile: function (callback, errorCallback) {
            var data = {
                accessToken: $.jStorage.get("accessToken")
            };
            $http.post(adminurl + 'user/profile', data).then(function (data) {
                data = data.data;
                if (data.value === true) {
                    $.jStorage.set("profile", data.data);
                    callback();
                } else {
                    errorCallback(data.error);
                }
            });
        },
        makeactive: function (menuname) {
            for (var i = 0; i < navigation.length; i++) {
                if (navigation[i].name == menuname) {
                    navigation[i].classis = "active";
                } else {
                    navigation[i].classis = "";
                }
            }
            return menuname;
        },

        search: function (url, formData, i, callback) {
            $http.post(adminurl + url, formData).then(function (data) {
                data = data.data;
                callback(data, i);
            });
        },
        delete: function (url, formData, callback) {
            $http.post(adminurl + url, formData).then(function (data) {
                data = data.data;
                callback(data);
            });
        },
        countrySave: function (formData, callback) {
            $http.post(adminurl + 'country/save', formData).then(function (data) {
                data = data.data;
                callback(data);

            });
        },

        apiCall: function (url, formData, callback) {
            $http.post(adminurl + url, formData).then(function (data) {
                data = data.data;
                callback(data);

            });
        },
        searchCall: function (url, formData, i, callback) {
            $http.post(adminurl + url, formData).then(function (data) {
                data = data.data;
                callback(data, i);
            });
        },

        getOneCountry: function (id, callback) {
            $http.post(adminurl + 'country/getOne', {
                _id: id
            }).then(function (data) {
                data = data.data;
                callback(data);

            });
        },
        getLatLng: function (address, i, callback) {
            $http({
                url: "https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "&key=AIzaSyC62zlixVsjaq4zDaL4cefNCubjCgxkte4",
                method: 'GET',
                withCredentials: false,
            }).then(function (data) {
                data = data.data;
                callback(data, i);
            });
        },
        uploadExcel: function (form, callback) {
            $http.post(adminurl + form.model + '/import', {
                file: form.file
            }).then(function (data) {
                data = data.data;
                callback(data);

            });

        },

    };
});