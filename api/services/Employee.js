var schema = new Schema({
    employeeId: {
        type: String,
    },
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    address: {
        type: String
    },
    email: {
        type: String,
        unique: true
    },
    personalEmail: {
        type: String,
        unique: true
    },
    dob: {
        type: Date
    },
    contactNo: {
        type: Number
    },
    joiningDate: {
        type: Date
    },

    // designation: {
    //     type: String,
    //     enum: ["Manager", "Software Developer", "Tester", "UI Developer", "Designer"]
    // },
    monthlySalary: {
        type: Number
    },
    annualSalary: {
        type: Number

    },
    note: {
        type: String
    },
    designation: {
        type: Schema.Types.ObjectId,
        ref: 'Designation'
    }
});

// schema.plugin(deepPopulate, {});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);
module.exports = mongoose.model('Employee', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema, '', 'designation'));
var model = {

    paginatedEmployee: function (data, callback) {
        async.parallel({
                employeeDetailName: function (callback) {
                    var maxRow = Config.maxRow;

                    var start = (data.page - 1) * maxRow;
                    Employee.find({
                            firstName: {
                                $regex: data.firstName,
                                $options: "i"
                            },
                            lastName: {
                                $regex: data.lastName,
                                $options: "i"
                            }
                        })
                        .skip(start)
                        .limit(maxRow)
                        // .populate('designation')
                        .exec(function (err, data) {
                            console.log(data);
                            if (err) {
                                callback(err);
                            } else {
                                if (data) {
                                    var obj = {};
                                    var option = {
                                        start: start,
                                        count: maxRow
                                    };
                                    obj = {
                                        options: option,
                                        results: data
                                    };
                                    callback(err, obj);
                                    console.log("obj", obj);
                                } else {
                                    callback(err, "No data Found");
                                }
                            }
                        });
                },
                totals: function (callback) {
                    Employee.countDocuments({
                        firstName: {
                            $regex: data.firstName
                        },
                        lastName: {
                            $regex: data.lastName
                        }
                    }).exec(callback);
                }
            },

            function (err, result) {
                if (err) {
                    callback(err);
                } else {
                    if (result) {
                        console.log(result.employeeDetailName);
                        var obj = result.employeeDetailName;
                        obj.totals = result.totals;
                        callback(err, obj);
                    } else {
                        callback(err, "No data found");
                    }
                }
            }
        );
    }


};
module.exports = _.assign(module.exports, exports, model);