const Joi = require("@hapi/joi");

const addCourseValidation = data => {
  const schema = Joi.object({
    title: Joi.string().required(),
    price: Joi.number().required(),
    duration: Joi.string().required(),
    description: Joi.string().required(),
    file: Joi.any(),
    image: Joi.string()
  });
  return schema.validate(data);
};

const loginValidation = data => {
  const schema = Joi.object({
    username: Joi.string()
      .required()
      .min(4),
    password: Joi.string()
      .required()
      .min(4)
  });
  return schema.validate(data);
};

module.exports.addCourseValidation = addCourseValidation;
module.exports.loginValidation = loginValidation;
