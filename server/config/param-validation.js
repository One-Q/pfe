import Joi from 'joi';

export default {
  // POST /api/users
  createUser: {
    body: {
      username: Joi.string().required(),
      mobileNumber: Joi.string().regex(/^[1-9][0-9]{9}$/).required()
    }
  },
  // POST /api/posts
  createPost: {
    body: {
      title: Joi.string().required(),
    }
  },

  // UPDATE /api/users/:userId
  updateUser: {
    body: {
      username: Joi.string().required(),
      mobileNumber: Joi.string().regex(/^[1-9][0-9]{9}$/).required()
    },
    params: {
      userId: Joi.string().hex().required()
    }
  },

  // UPDATE /api/posts/:postId
  updatePost: {
    body: {
      title: Joi.string().required(),
    },
    params: {
      postId: Joi.string().hex().required()
    }
  },

  // POST /api/auth/login
  login: {
    body: {
      username: Joi.string().required(),
      password: Joi.string().required()
    }
  },

  //POST /api/pc
  importPCList: {
    body: {
      import : Joi.array().items(Joi.object().keys({
        Name: Joi.string().required(),
        IP: Joi.string().required(),
        MAC: Joi.string().required()
      })).min(0).required(),
      Local : Joi.string().required()
    }
  },

  //POST /api/problems
  problem : {
    body : {
      Name : Joi.string().required(),
      User : Joi.string().email().required(),
      Description : Joi.string().required()
    }
  }
};
