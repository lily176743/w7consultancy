import Joi from "joi";

export const createLeadsSchema = Joi.object({
    name: Joi.string().required().messages({
        "any.required": "Please provide name.",
    }),
    email: Joi.string().email().required().messages({
        "any.required": "Please provide eamil.",
        "string.email": "Pleaes provide a valid email",
    }),
    phone: Joi.string().required().messages({
        "any.required": "Please provide phone.",
    }),
    car: Joi.string().required().messages({
        "any.required": "Please provide car.",
    }),
    year: Joi.number().required().messages({
        "any.required": "Please provide year.",
    }),
    fipe: Joi.string().required().messages({
        "any.required": "Please provide fipe.",
    }),
    mileage: Joi.number().required().messages({
        "any.required": "Please provide mileage.",
    }),
    entry: Joi.number().required().messages({
        "any.required": "Please provide entry.",
    }),
    installment: Joi.number().required().messages({
        "any.required": "Please provide installment.",
    }),
    paid: Joi.number().required().messages({
        "any.required": "Please provide paid.",
    }),
    times: Joi.number().required().messages({
        "any.required": "Please provide times.",
    }),
    attendant: Joi.string().required().messages({
        "any.required": "Please provide attendant.",
    }),
})