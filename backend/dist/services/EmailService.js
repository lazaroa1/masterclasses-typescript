"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
class EmailService {
    sendEmail({ to, message }) {
        console.log(`Email enviado para ${to.name}: ${message.subject}`);
    }
}
exports.default = EmailService;
