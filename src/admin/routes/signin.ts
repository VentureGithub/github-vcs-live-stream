import express, { response } from 'express';
import axios from 'axios';
// const axios = require('axios');

const router = express.Router();


const apiEndpoint = 'http://157.245.109.206:8083/auth/login-by-admin-super-admin';


router.get('/admin/signin', (req, res)=>{
  res.render('adminPages/signin');
});


router.post('/admin/signin',async (req, res)=>{
  // check if email and password match up if they do create a jwt
  // and store int in cookie
  const {email, password} = req.body;
  console.log(req.body)

  axios.post(apiEndpoint, {email:email,password:password})
  .then((getRes:any) => {
    res.redirect('../admin/stream');
    // Handle response data as needed
  })
  .catch((error:any) => {
    console.error('Error logging in:', error.response.data);
    alert("login failed");
    
  });
  // if ((email !== process.env.USERNAME) || (password !== process.env.PASSWORD)) {
  //   console.log('Invalid credentials:', { email, password });
  //   res.render('adminPages/signin', {error: 'Invalid credentials'});
  // }
  // console.log('Valid credentials:', { email },{ password } );
  // // generate JWT
  // const userJwt = jwt.sign({
  //   email: email,
  // },
  // process.env.JWT_KEY!,
  // { expiresIn: '1h' }
  // );
  // console.log('Generated JWT:', userJwt);

  // // store it on session object
  // req.session = {
  //   jwt: userJwt,
  // };
  // console.log('Session after setting JWT:', req.session);
  //   if(getRes=="Login successful"){
 
  //   }
  //   else{
  //     alert("login failed");
  //   }

});




export {router as signinRouter};
