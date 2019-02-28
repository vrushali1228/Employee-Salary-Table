module.exports = _.cloneDeep(require("sails-wohlig-controller"));
var controller = {
    paginatedEmployee: function (req, res) {
        Employee.paginatedEmployee(req.body, res.callback);
    },

};
module.exports = _.assign(module.exports, controller);