const {check} = require('express-validator') 
const repo = require('./repository') 
module.exports = { 
    
  validateDOB : check('dob') 
  
    // To delete leading and triling space 
    .trim() 
  
    // Validate DOB to be a valid date 
    .isDate() 
  
    // Custom message 
    .withMessage('Must be a valid date')    
}