"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const leadsSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    car: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    fipe: {
        type: String,
        required: true,
    },
    mileage: {
        type: Number,
        required: true,
    },
    entry: {
        type: Number,
        required: true,
    },
    installment: {
        type: Number,
        required: true,
    },
    paid: {
        type: Number,
        required: true,
    },
    times: {
        type: Number,
        required: true,
    },
    attendant: {
        type: String,
        required: true,
    },
});
const Leads = mongoose_1.default.model('leads', leadsSchema);
exports.default = Leads;
//# sourceMappingURL=leads.js.map