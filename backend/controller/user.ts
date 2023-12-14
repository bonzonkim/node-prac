import { Request, Response } from "express";
import { User } from '../entity/User'
import {AppDataSource} from "../config/db";
import bcrypt from 'bcrypt';

class UserController {

    public static register =  async (req: Request, res: Response) => {
        let {userid, userpassword, username} = req.body;

        //비밀번호 암호화
        const salt = await bcrypt.genSalt(10)
        userpassword = await bcrypt.hash(userpassword, salt)

        const userRepo = AppDataSource.getRepository(User);
        const user = userRepo.create({userid, userpassword, username});

        await userRepo
            .save(user)
            .then((data) => {
                console.log(data)
                res.send('회원가입 성공');
                //res.json(data)
            })
            .catch((err) => console.log(err));
    }
}
    //회원가입
    // public static async register(req: Request, res:Response): Promise<void> {
    //     try {
    //         const { userid, userpassword, username } = req.body;
    //
    //         // db에 새 유저 생성
    //         const newUser = await User.create({ userid, userpassword, username })
    //
    //        //응답 메세지
    //         res.status(201).send('User registered successfully')
    //         console.log(newUser)
    //     } catch (error) {
    //         console.log('Error registering user', error)
    //         res.status(500).send('Internal Server Error')
    //     }
    // }

    // public static async register(req: Request, res: Response) {
    //     try {
    //         const {userid, userpassword, username } = req.body;
    //
    //         const userRepository = getRepository(User);
    //
    //         const newUser = userRepository.create({ userid, userpassword, username})
    //         await userRepository.save(newUser);
    //         res.send('회원가입 성공');
    //     } catch (e) {
    //         console.error(e);
    //         res.status(500).send("internal server error");
    //     }
    // }

export default UserController;
