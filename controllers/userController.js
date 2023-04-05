import { validationResult } from "express-validator";
import userService from '../service/userService.js';


class userController{
    async registration(req,res, next){
        try {
            //error check
            const errors = validationResult(req);
            if(!errors.isEmpty()){
                console.log(errors);
                return next(ApiError.BadRequest(('Validation Error'), errors.array()))
            }
            //registration
            const {userId, password,firstName, lastName, roleId} = req.body;
            let userData = null;
            if(role.toLowerCase() == 'student'){
                const {major} = req.body;
                const lessonIds = generateRandomLessons();
                userData = await userService.registrationStudent(userId, password,firstName, lastName,major,lessonIds);
            }else{
                return next(ApiError.BadRequest(('Role is not student'), errors.array()))
            }            
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true});
            return res.json(userData);
        } catch (error) {
            next(error);
        }        
    }


    async login(req,res, next){
        try {
            const {email, password} = req.body;
            const userData = await userService.login(email, password);
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
            return res.json(userData);
        } catch (error) {
            next(error);
        }
    }
    async logout(req, res, next) {
        try {
            const {refreshToken} = req.cookies;
            const token = await userService.logout(refreshToken);
            res.clearCookie('refreshToken');
            return res.json(token);
        } catch (e) {
            next(e);
        }
    }

    async refresh(req, res, next) {
        try {
            const {refreshToken} = req.cookies;
            const userData = await userService.refresh(refreshToken);
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
            return res.json(userData);
        } catch (error) {
            next(error);
        }
    }
    async getUsers(req,res, next){
        try {
            const users = await userService.getAllUsers();
            return res.json(users);
        } catch (error) {
            next(error);
        }
    }

    generateRandomLessons(){
        const min = 1;
        const max = 14;
        let randomNum = 0;
        const lessons = []
        for(i=1;i<=8;i++){
            randomNum =  Math.floor(Math.random() * (max - min + 1) + min)
            lessons[i] = randomNum;
        } 

        return lessons;
    }




}


export  default new userController();