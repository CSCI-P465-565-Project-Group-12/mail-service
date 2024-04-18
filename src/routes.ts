import express from "express";
import { forgotPasswordMail, eventRegistrationConfirmationMail, sendMailController, healthCheck } from "./controller/index";



const router = express.Router();

// Example route setup
// router.get('/', appController.someFunction);
router.post("/forgot-password-mail", forgotPasswordMail);
router.post("/event-registration-confirmation-mail", eventRegistrationConfirmationMail)
router.post("/send-mail", sendMailController);
router.get("/health-check", healthCheck)

export default router;