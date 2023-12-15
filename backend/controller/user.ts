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
            })
            .catch((err) => console.log(err));
    }

    public static login = async (req: Request, res: Response) => {
        let {userid, userpassword} = req.body;

        const userRepo = AppDataSource.getRepository(User);
        const user = await userRepo.findOne( userid );

        if (!user) {
            res.status(404).send('사용자를 찾을 수 없습니다');
        }
        const passwordMatch = await bcrypt.compare(userpassword, <string>user?.userpassword);

        if (!passwordMatch) {
            return res.status(401).send('비밀번호가 일치하지 않습니다');
        }
        res.send('로그인 성공');
    }
}

export default UserController;
