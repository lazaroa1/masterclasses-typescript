import {Request, Response} from "express"
import EmailService from "../services/EmailService";

const users = [
    {id: 1, name: 'Lázaro', email: "lazaro@email.com"}
];

interface IExpressCall {
    req: Request;
    res: Response;
}

export default {
    async index({req, res}: IExpressCall) {
        return res.json(users)
    },

    async create({req, res}: IExpressCall) {
        const emailService = new EmailService();

        emailService.sendEmail({
           to: {
               name: 'Lázaro Alves',
               email: 'lazaro@email.com'
            },
           message: {
               subject: 'Bem-vindo ao sistema',
               body: 'Seja bem-vindo'
            }    
        });
    
    return res.send("Email sent and registered user")
    },
}