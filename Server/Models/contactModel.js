import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
        unique: true,
    },
   
    message: {
        type: String,
        required: true,
    },
    Timestamp: {
        type: Date,
        default: Date.now,
    },
});

const Contact = mongoose.model('Contact', contactSchema);

export default Contact;