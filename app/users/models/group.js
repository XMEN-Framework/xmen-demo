/**
 * Group Model
 */
"use strict";

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var GroupSchema = new Schema({
    name: {
        type: String,
        default: ''
    },
    permissions: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Permission'
        }
    ]
});

mongoose.model('Group', GroupSchema);
