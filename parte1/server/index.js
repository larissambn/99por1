import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

// Import your elderly activity request route
import userReviewServiçoRouter from "./routes/userReviewServiceRoutes.js"
import tutorServiceRequestRouter from "./routes/tutorServiceRequestRoutes.js"
import tutorReviewRouter from "./routes/tutorReviewServiceRoutes.js"
import tutorDonationRequestRouter from "./routes/tutorDonationRequestRoutes.js"
import tutorActivityRequestRouter from "./routes/tutorActivityRequestRoutes.js"
import elderlyServiceRequestRouter from "./routes/elderlyServiceRequestRoutes.js"
import elderlyActivityRequestRouter from "./routes/elderlyActivityRequestRoutes.js"; 
import elderlyDonationRequestRouter from "./routes/elderlyDonationRequestRoutes.js"
import elderlyReviewrouter from "./routes/elderlyReviewServiceRoutes.js"

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', userReviewServiçoRouter); 
app.use('/api', tutorServiceRequestRouter); 
app.use('/api', tutorReviewRouter); 
app.use('/api', tutorDonationRequestRouter); 
app.use('/api', tutorActivityRequestRouter); 
app.use('/api', elderlyServiceRequestRouter); 
app.use('/api', elderlyDonationRequestRouter); 
app.use('/api', elderlyActivityRequestRouter); 
app.use('/api', elderlyReviewrouter); 

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
