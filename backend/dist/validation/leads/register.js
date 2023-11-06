"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createLeadsSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.createLeadsSchema = joi_1.default.object({
    name: joi_1.default.string().required().messages({
        "any.required": "Please provide name.",
    }),
    email: joi_1.default.string().email().required().messages({
        "any.required": "Please provide eamil.",
        "string.email": "Pleaes provide a valid email",
    }),
    phone: joi_1.default.string().required().messages({
        "any.required": "Please provide phone.",
    }),
    car: joi_1.default.string().required().messages({
        "any.required": "Please provide car.",
    }),
    year: joi_1.default.number().required().messages({
        "any.required": "Please provide year.",
    }),
    fipe: joi_1.default.string().required().messages({
        "any.required": "Please provide fipe.",
    }),
    mileage: joi_1.default.number().required().messages({
        "any.required": "Please provide mileage.",
    }),
    entry: joi_1.default.number().required().messages({
        "any.required": "Please provide entry.",
    }),
    installment: joi_1.default.number().required().messages({
        "any.required": "Please provide installment.",
    }),
    paid: joi_1.default.number().required().messages({
        "any.required": "Please provide paid.",
    }),
    times: joi_1.default.number().required().messages({
        "any.required": "Please provide times.",
    }),
    attendant: joi_1.default.string().required().messages({
        "any.required": "Please provide attendant.",
    }),
});
//# sourceMappingURL=register.js.map