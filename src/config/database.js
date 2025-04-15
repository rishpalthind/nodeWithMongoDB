// import mongoose from 'mongoose';
// import { MONGO_DB_URL } from './server-config.js';

// export const connect = async () => {
//   await mongoose.connect(MONGO_DB_URL);
// };
import mongoose from 'mongoose';
import { MONGO_DB_URL } from './server-config.js'; // Ensure this is correct

export const connect = async () => {
    try {
        await mongoose.connect(MONGO_DB_URL, {
            // useFindAndModify: false, // Add this if you're using a version of mongoose < 6.x
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};
