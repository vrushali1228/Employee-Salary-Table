var schema = new Schema({
    range: {
        type: String,
        enum: ["Less than", "Greater Than", "Less than Equal to", "Greater Than Equal to", "Is equal"]
    },
    amount: {
        type: Number,
        required: true
    },
    pfAmount: {
        type: Number,
        required: true
    }

});

schema.plugin(deepPopulate, {});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);
module.exports = mongoose.model('ProvidentFund', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema));
var model = {};
module.exports = _.assign(module.exports, exports, model);