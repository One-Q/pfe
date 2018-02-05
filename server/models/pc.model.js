import Promise from 'bluebird';
import mongoose from 'mongoose';
import httpStatus from 'http-status';
import APIError from '../helpers/APIError';

/**
 * PC Schema
 */
const PCSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Local: {
        type: String,
        required: true
    },
    IP: {
        type: String,
        required: true
    },
    MAC: {
        type: String,
        required: true
    },
    Comment: {
        type: String,
        required: true
    },
    Active: {
        type: Boolean,
        required: true
    },
    Problem: {
        type: {
            User: {
                type: String,
                required: true
            },
            Description: {
                type: String,
                required: true
            },
            DateCreated: {
                type: Date,
                required: true,
                default: Date.now
            },
            Image: {
                type: String
            }
        },
        required: false
    }
});

/**
* @typedef PC
*/
export default mongoose.model('PC', PCSchema);