// import Doctor from '../models/doctor';
import doctors from '../constants/doctors';
const getDoctors = () => {
    try {
        return doctors
        // const doctors = await Doctor.find()
        // return doctors || []
    }
    catch(err) {
        console.log(err)
    }
};

export { getDoctors };
