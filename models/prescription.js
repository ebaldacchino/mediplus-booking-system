import mongoose, { Schema } from 'mongoose'; 

const prescriptionSchema = new Schema({
	symptoms: [String],
	doctor: {
		type: Schema.Types.ObjectId,
		ref: 'Doctor',
        required: true
	},
	date: {
        type: Date,
        default: Date.now()
    },
	medicines: [String],
});

const Prescription =
	mongoose.models.Prescription ||
	mongoose.model('Prescription', prescriptionSchema);

export default Prescription;
