import mongoose, { trusted } from "mongoose";

const TshirtSchema = new mongoose.Schema({
    size: {
        type: String,
        required: true  
    },
    color: {
        type: String,
        required: true,
        unique: true
    },
    style: {
        type: String,
        required: true
    }
});

const Tshirt = mongoose.model("tshirt", TshirtSchema);

export default Tshirt;