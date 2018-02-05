import Promise from 'bluebird';
import mongoose from 'mongoose';
import httpStatus from 'http-status';
import APIError from '../helpers/APIError';

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
    return this.findOne({Name:name})
      .exec()
      .then((user) => {
        if (user) {
          return user;
        }
        const err = new APIError('No such user exists!', httpStatus.NOT_FOUND);
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
    console.log("list has been called");
    console.log(this);
    return this.find({Active : true})
      .distinct("Name")
      //.skip(+skip)
      //.limit(+limit)
      .exec();
  }
};

/**
* @typedef PC
*/
export default mongoose.model('PC', PCSchema);
