import { Request, Response } from "express";
import User from '../model/User'

class UserController {

    //회원가입
    public static async register(req: Request, res:Response): Promise<void> {
        try {
            const { userid, userpassword, username } = req.body;

            // db에 새 유저 생성
            const newUser = await User.create({ userid, userpassword, username })

           //응답 메세지
            res.status(201).send('User registered successfully')
            console.log(newUser)
        } catch (error) {
            console.log('Error registering user', error)
            res.status(500).send('Internal Server Error')
        }
    }
}

export default UserController;