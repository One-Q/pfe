import Promise from 'bluebird';
import mongoose from 'mongoose';
import httpStatus from 'http-status';
import APIError from '../helpers/APIError';

const equal = require('deep-equal');

/*
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
 * Methods
 */
PCSchema.method({
});

/**
 * Statics
 */
PCSchema.statics = {
  /**
   * Get PC
   * @param {ObjectId} id - The objectId of user.
   * @returns {Promise<User, APIError>}
   */
  get(name) {
    return this.findOne({Name:name},{Problem:0,_id:0})
      .exec()
      .then((user) => {
        if (user) {
          return user;
        }
        const err = new APIError('No such PC exists!', httpStatus.NOT_FOUND);
        return Promise.reject(err);
      });
  },

  /**
   * List pc
   * @param {number} skip - Number of pc to be skipped.
   * @param {number} limit - Limit number of pc to be returned.
   * @returns {Promise<PC[]>}
   */
  list({ skip = 0, limit = 50 } = {}) {
    return this.find({Active : true},{Problem:0,_id:0})
      //.distinct(["Name","Local","IP","MAC","Comment"])
      .sort({ Local:1, Name:1  })
      .skip(+skip)
      .limit(+limit)
      .exec()
      .then(val=>{
        //TODO : filter duplicate
        var ret = [];
        val.forEach(function(elementInVal) {
            var putInside = true;
            ret.forEach(function(elementInRet){
                if(equal(elementInRet, elementInVal)){
                    putInside = false;
                }
            });
            if(putInside){
                ret.push(elementInVal);
            }
        });
        console.log(ret);
        return ret;
      });
  }
};


/**
* @typedef PC
*/
export default mongoose.model('PC', PCSchema);
