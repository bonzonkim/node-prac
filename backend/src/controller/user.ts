import { Request, Response } from "express";
import { User } from '../entity/User'
import {AppDataSource} from "../config/db";
import bcrypt from 'bcrypt';
import { Repository } from "typeorm";

class UserController {
  userRepo: Repository<User>;

  constructor() {
   this.userRepo = AppDataSource.getRepository(User);
  }


  async register(req: Request, res: Response) {
      try {
          let {userid, userpassword, username} = req.body;

          // 비밀번호 암호화
          const salt = await bcrypt.genSalt(10)
          userpassword = await bcrypt.hash(userpassword, salt)

          const user = this.userRepo.create({userid, userpassword, username});
          const data = await this.userRepo.save(user);
          console.log(data);
          res.json({msg: '회원가입완료'});
      } catch (e) {
          // handle errors
      }
  }


    async login (req: Request, res: Response)  {
      try{
        let {userid, userpassword} = req.body;
        console.log(userid);

        const userRepo = AppDataSource.getRepository(User);

        // findOneBy 함수의 첫번째 매개변수는 where절
        const user = await userRepo.findOneBy({userid: userid})

        if (!user) {
            return res.status(404).send('사용자를 찾을 수 없습니다');
        }
        // 암호화된 비밀번호 확인
        const passwordMatch = await bcrypt.compare(userpassword, <string>user?.userpassword);

        if (!passwordMatch) {
            return res.status(401).send('비밀번호가 일치하지 않습니다');
        }
        res.send('로그인 성공');
    } catch (e) {
      console.log(e);
    }
    } 
    
}
export default UserController;
