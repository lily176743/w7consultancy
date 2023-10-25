import mongoose from "mongoose";

const Schema = mongoose.Schema;
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
});

const Leads = mongoose.model('leads', leadsSchema);
export default Leads;