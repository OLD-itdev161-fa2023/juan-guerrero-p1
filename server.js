import express from 'express';
import connectDatabase from './config/db';
import { check, validationResult } from 'express-validator';
import cors from 'cors';
import bcrypt from 'bcryptjs/dist/bcrypt';
import Tshirt from './models/Tshirt';
// Initialize express application 
const app = express();

//Connect database
connectDatabase();

// Configure Middleware 
app.use(express.json({ extended: false}));
app.use(
    cors({
        origin: 'http://localhost:3000'
    })
);

// API endpoints 
/**
 *   @route GET /
 *   @desc  Test endpoint   
 */
app.get('/', (req,res) =>
    res.send('http get request sent to root api endpoint')
);

/**
 *   @route POST api/users 
 *   @desc  Register user 
 */
app.post('/api/tshirt', 
[
    check('size', 'Please enter Tshirt size')
    .not()
    .isEmpty(),
    check('color', 'Please enter Tshirt color').not().isEmpty(),
    check(
        'style',
        'Please enter a Tshirt style'
    ).not().isEmpty()
],
(req,res) => {
    const errors = validationResult(req);
    if (!errrors.isEmpty()) {
        return res.status(422).json({ errors: errors.array()});
    } else {
        return res.send(req.body);
    }
    }
);
// Connection listener 
const port = 5000;
app.listen(port, () => console.log(`Express server running on port ${port}`));
