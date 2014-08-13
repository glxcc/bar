/**
 * Created by xuejiaowang on 13/08/2014.
 */

'use strict';


function getPrice(num) {
    return (num / 100).toFixed();
}

function setPrice(num) {
    return num * 100;
}

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * product schema
 * @type {Schema}
 */
var ProductSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        get: getPrice,
        set: setPrice
    }

});

ProductSchema.path('name').validate(function(name){
    return !!name;
}, 'Invalidate name');

mongoose.model('Product', ProductSchema);
