
import bcrypt from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';
import tokenService from "./tokenService.js";
import UserDto from "../dtos/users-dto.js";
import ApiError from "../exeptions/api-error.js";
import Users from "../models/users.js";
import StudentDto from '../dtos/student-dto.js';
import Students from '../models/student.js';


class UserService {
    async registrationStudent(user_id, password, first_name, last_name, major, lesson_ids){
        //checking if the id is busy.
        const candidate = await Users.findOne({where:{user_id: user_id}})
        if (candidate) {
           throw ApiError.BadRequest(`Пользователь с почтовым адресом ${user_id} уже существует`)
           return;
        }        
       
        const user = await Users.create({
            user_id: user_id,
            password: password,
            first_name: first_name,
            last_name:last_name,
            role_id: 'student' 
          });
        const student = await Students.create({
            user_id: user_id,
            major: major,
            lesson_ids: lesson_ids
          });
               
        const userDto = new UserDto(user);
        const studentDto = new StudentDto(user,student);
        const tokens = tokenService.generateTokens({...userDto});

        await tokenService.saveToken(userDto.id, tokens.refreshToken);
        return {...tokens, user: studentDto}
    }


    async login(user_id, password) {
        const user = await Users.findOne({where:{user_id: user_id}})
        if (!user) {
            throw ApiError.BadRequest('Пользователь с таким email не найден')
        }
        const student =  await Students.findOne({where:{student_id: user_id}})
        const isPassEquals = await bcrypt.compare(password, user.password);
        if (!isPassEquals) {
            throw ApiError.BadRequest('Неверный пароль');
        }
        const userDto = new UserDto(user);
        const studentDto = new StudentDto(user,student);
        const tokens = tokenService.generateTokens({...userDto});

        await tokenService.saveToken(userDto.id, tokens.refreshToken);
        return {...tokens, user: studentDto}
    }
    async logout(refreshToken) {
        const token = await tokenService.removeToken(refreshToken);
        return token;
    }

    async refresh(refreshToken) {
        if (!refreshToken) {
            throw ApiError.UnauthorizedError();
        }
        const userData = tokenService.validateRefreshToken(refreshToken);
        const tokenFromDb = await tokenService.findToken(refreshToken);
        if (!userData || !tokenFromDb) {
            throw ApiError.UnauthorizedError();
        }
        const user = await Users.findOne({where:{user_id: user_id}})
        const student =  await Students.findOne({where:{student_id: user_id}})
        const userDto = new UserDto(user);
        const studentDto = new StudentDto(user,student);
        const tokens = tokenService.generateTokens({...userDto});

        await tokenService.saveToken(userDto.id, tokens.refreshToken);
        return {...tokens, user: studentDto}
    }
    async getAllUsers() {
        
        const users = await Users.findAll();
        return users;
      }
}

export default new UserService();