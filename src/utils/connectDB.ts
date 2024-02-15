import mongoose from 'mongoose';
import { CONFIG } from '../config/environment';

mongoose.connect(`${CONFIG.mongodb_url}`)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.log(error);
        process.exit(1);
    })