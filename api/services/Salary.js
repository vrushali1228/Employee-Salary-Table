var schema = new Schema({
    basicSalary: {
        type: Number
    },
    hra: {
        type: Number
    },
    conveyance: {
        type: Number
    },
    providentFund: {
        type: Number
    },
    esi: {
        type: Number
    },
    loan: {
        type: Number
    },
    professionalTax: {
        type: Number
    },
    tsd: {
        type: Number
    },
    lateMark: {
        type: Number
    },
    holidays: {
        type: Number
    },
    extraWork: {
        type: Number
    },
    totalAddition: {
        type: Number
    },
    totalDeductions: {
        type: Number
    },
    netSalary: {
        type: Number
    },
    employee: {
        type: Schema.Types.ObjectId,
        ref: 'Employee'
    },



});
schema.plugin(deepPopulate, {});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);
module.exports = mongoose.model('Salary', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema));
var model = {};
module.exports = _.assign(module.exports, exports, model);