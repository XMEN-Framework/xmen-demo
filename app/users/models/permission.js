/**
 * Permission Model
 */
"use strict";

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PermissionSchema = new Schema({
    key: {
        type: String,
        default: ''
    },
    value: {
        type: String,
        default: ''
    }
});

mongoose.model('Permission', PermissionSchema);
