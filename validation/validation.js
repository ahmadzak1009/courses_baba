const Joi = require("@hapi/joi");

const addCourseValidation = data => {
  const schema = Joi.object({
    title: Joi.string().required(),
    price: Joi.number().required(),
    description: Joi.string().required()
  });
  return schema.validate(data);
};

module.exports.addCourseValidation = addCourseValidation;
