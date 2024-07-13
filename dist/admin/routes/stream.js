"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminStreamRouter = void 0;
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.adminStreamRouter = router;
router.get('/admin/stream', (req, res) => {
    // if haslegit cookie render else redirect to login
    // if (!req.session?.jwt) {
    //   res.redirect('../admin/signin');
    // }
    // try {
    //   jwt.verify(
    //           req.session!.jwt,
    //           process.env.JWT_KEY!,
    //   );
    res.render('adminPages/stream');
    // } catch (error) {
    //   console.error('Invalid Token:', error); // Log the error for debugging
    //   res.redirect('../admin/signin');
    // }
});
