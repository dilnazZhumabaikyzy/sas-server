import { validationResult } from "express-validator";
import userService from '../service/userService.js';
import ApiError from "../exeptions/api-error.js";


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
            if(roleId.toLowerCase() == 'student'){
                const {major} = req.body;
               
                userData = await userService.registrationStudent(userId, password,firstName, lastName,major);
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
            const {userId, password} = req.body;
            const userData = await userService.login(userId, password);
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
    async searchStudent(req,res, next){
        try {
            const {key} = req.body;
            const result = await userService.searchStudent(key);
            return res.json(result);
        } catch (error) {
            next(error);
        }
    }
    async searchTeacher(req,res, next){
        try {
            const {key} = req.body;
            const result = await userService.searchTeacher(key);
            return res.json(result);
        } catch (error) {
            next(error);
        }
    }

}


export  default new userController();