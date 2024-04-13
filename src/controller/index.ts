import { sendMail, sendMailController } from "./sendmail";
import { forgotPasswordMail } from "./forgotpasswordmail";
import { eventRegistrationConfirmationMail } from "./eventRegistrationConfirmation";

const healthCheck = (req: any, res: any) => {
    res.status(200).send("Health check passed");
};

export { 
	sendMail,
    forgotPasswordMail,
    eventRegistrationConfirmationMail,
    sendMailController,
    healthCheck
};