const getError = (errors, prop) => { 
  try { 
    return errors.mapped()[prop].msg 
  } catch (error) { 
    return ''
  }  
} 
  
module.exports = ({errors}) => { 
  return ` 
    <!DOCTYPE html> 
    <html> 
      <head> 
        <link rel='stylesheet' 
href='https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.0/css/bulma.min.css'> 
        <style> 
          div.columns{ 
            margin-top: 100px; 
          } 
          .button{ 
            margin-top : 10px 
          } 
        </style> 
      </head> 
      <body> 
        <div class='container'> 
          <div class='columns is-centered'> 
            <div class='column is-5'> 
              <form action='/info' method='POST'> 
                <div> 
                  <div> 
                    <label class='label' id='email'>Email</label> 
                  </div> 
                  <input class='input' type='text' name='email' 
                  placeholder='Email' for='email'> 
                </div>           
                <div> 
                  <div> 
                    <label class='label' id='name'>Name</label> 
                  </div> 
                  <input class='input' type='text' name='name' 
                  placeholder='Name' for='name'> 
                </div> 
                <div> 
                  <div> 
                    <label class='label' id='phn'>Phone Number</label> 
                  </div> 
                  <input class='input' type='text' name='phn'
                  placeholder='Phone Number' for='phn'> 
                </div> 
                <div> 
                  <div> 
                    <label class='label' id='dob'>Date Of Birth</label> 
                  </div> 
                  <input class='input' type='date' name='dob' 
                  placeholder='DOB' for='dob'> 
                  <p class="help is-danger">${getError(errors, 'dob')}</p> 
                </div> 
                <div> 
                  <button class='button is-primary'>Submit</button> 
                </div> 
              </form> 
            </div> 
          </div> 
        </div> 
      </body> 
    </html>    
  ` 
}