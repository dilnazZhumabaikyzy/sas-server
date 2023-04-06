import jwt  from "jsonwebtoken";
import Token from "../models/token.js";

class TokenService{
    generateTokens(payload){
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET,{expiresIn: '7d'});
        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET,{expiresIn: '30d'});
        return {
            accessToken,
            refreshToken
        }
    }
    validateAccessToken(token) {
        try {
            const userData = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
            return userData;
        } catch (e) {
            return null;
        }
    }

    validateRefreshToken(token) {
        try {
            const userData = jwt.verify(token, process.env.JWT_REFRESH_SECRET);
            return userData;
        } catch (e) {
            return null;
        }
    }
    async saveToken(userId, refreshToken) {
        let token = await Token.findOne({ where: { userId: userId } });
        if (token) {
          token.refreshToken = refreshToken;
          await token.save();
        } else {
          token = await Token.create({ user: userId, refreshToken });
        }
        return token;
      }
      async removeToken(refreshToken) {
        const result = await Token.destroy({ where: { refreshToken } });
        return result === 1; // Return true if one row was deleted
      }
      
      async findToken(refreshToken) {
        const tokenData = await Token.findOne({ where: { refreshToken } });
        return tokenData;
      }
      

}

export default new TokenService();