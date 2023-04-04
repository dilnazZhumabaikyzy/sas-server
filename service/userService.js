
import bcrypt from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';
import tokenService from "./tokenService.js";
import UserDto from "../dtos/users-dto.js";
import ApiError from "../exeptions/api-error.js";
import Users from "../models/users.js";
import StudentDto from '../dtos/student-dto.js';
import Students from '../models/student.js';


class UserService {
    async registrationStudent(userId, password, firstName, lastName, major, lesson_ids){
        //checking if the id is busy.
        const candidate = await Users.findOne({where:{userId: userId}})
        if (candidate) {
           throw ApiError.BadRequest(`Пользователь с почтовым адресом ${userId} уже существует`)
           return;
        }        
       
        const user = await Users.create({
            userId: userId,
            password: password,
            firstName: firstName,
            lastName:lastName,
            role_id: 'student' 
          });
        const student = await Students.create({
            userId: userId,
            major: major,
            lesson_ids: lesson_ids
          });
               
        const userDto = new UserDto(user);
        const studentDto = new StudentDto(user,student);
        const tokens = tokenService.generateTokens({...userDto});

        await tokenService.saveToken(userDto.id, tokens.refreshToken);
        return {...tokens, user: studentDto}
    }


    async login(userId, password) {
        const user = await Users.findOne({where:{userId: userId}})
        if (!user) {
            throw ApiError.BadRequest('Пользователь с таким email не найден')
        }
        const student =  await Students.findOne({where:{student_id: userId}})
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
        const user = await Users.findOne({where:{userId: userId}})
        const student =  await Students.findOne({where:{student_id: userId}})
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