"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signinRouter = void 0;
const express_1 = __importDefault(require("express"));
const axios_1 = __importDefault(require("axios"));
// const axios = require('axios');
const router = express_1.default.Router();
exports.signinRouter = router;
const apiEndpoint = 'http://157.245.109.206:8083/auth/login-by-admin-super-admin';
router.get('/admin/signin', (req, res) => {
    res.render('adminPages/signin');
});
router.post('/admin/signin', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // check if email and password match up if they do create a jwt
    // and store int in cookie
    const { email, password } = req.body;
    console.log(req.body);
    axios_1.default.post(apiEndpoint, { email: email, password: password })
        .then((getRes) => {
        res.redirect('../admin/stream');
        // Handle response data as needed
    })
        .catch((error) => {
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
}));
