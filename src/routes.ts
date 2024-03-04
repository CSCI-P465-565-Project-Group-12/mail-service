import express from "express";
import { forgotPasswordMail, eventRegistrationConfirmationMail } from "./controller/index";



const router = express.Router();

// Example route setup
// router.get('/', appController.someFunction);
router.post("/forgot-password-mail", forgotPasswordMail);
router.post("/event-registration-confirmation-mail", eventRegistrationConfirmationMail)

export default router;