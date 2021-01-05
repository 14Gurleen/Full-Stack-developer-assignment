const express = require('express') 
const bodyParser = require('body-parser') 
const {validationResult} = require('express-validator') 
const repo = require('./repository') 
const { validateDOB } = require('./validator') 
const formTemplet = require('./form') 
  
const app = express() 
const port = process.env.PORT || 3000 
  
// The body-parser middleware to parse form data 
app.use(bodyParser.urlencoded({extended : true})) 
  
// Get route to display HTML form 
app.get('/', (req, res) => { 
  res.send(formTemplet({})) 
}) 
  
// Post route to handle form submission logic and  
app.post( 
  '/info', 
  [validateDOB], 
  async (req, res) => { 
    const errors = validationResult(req) 
    if (!errors.isEmpty()) { 
      return res.send(formTemplet({errors})) 
    } 
  
    const {email, name, phn, dob} = req.body 
  
    // New record 
    await repo.create({ 
      email, 
      name, 
      'phone number':phn, 
      'Date of Birth':dob 
    }) 
res.send('<strong>Information is saved to '
   + 'the database successfully</strong>') 
}) 
  
// Server setup 
app.listen(port, () => { 
  console.log(`Server start on port ${port}`) 
})