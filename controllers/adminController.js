import SpecialReasons from "../models/specialReason.js";
import userService from "../service/userService.js";

class adminController {
    async getReasons(req, res, next) {
        try {
            const reasons = await userService.getReasons();
            return res.json(reasons);
        } catch (error) {
            next(error)
        }
    }

    async updateReason(req, res, next) {
        try {
            const { reasonId } = req.params;
            const { status } = req.body
            const updatedReason = await SpecialReasons.update(
                { status: status },
                { where: { reasonId: reasonId } }
            );
            res.status(200).json(updatedReason);
        } catch (error) {
            next(error);
        }
    }
}

export default new adminController();