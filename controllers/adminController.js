import SpecialReasons from "../models/specialReason.js";
import userService from "../service/userService.js";

class adminController {
    async getReasons(req, res, next) {
        try {
            const reasons = await userService.getReasons();
            console.log(reasons)
            return res.json(reasons);
        } catch (error) {
            next(error)
        }
    }
}

export default new adminController();