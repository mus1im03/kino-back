const jwt = require('jsonwebtoken')

module.exports = async (req, res, next) => {
    try {
        const { authorization } = req.headers;

        console.log(authorization);

        if(!authorization) {
            return res.status(401).json({error: "Нет доступа (no authorization header)"})
        }
  
        const [type, token] = authorization.split(" ");
  
        if (type !== "Bearer") {
          return res.status(401).json({error: "неверный тип токена"});
        }
  
        req.user = await jwt.verify(token, process.env.SECRET_JWT_KEY);
  
        next()
      } catch (e) {
        return res.status(401).json({error: "Ошибка авторизации: " + e.toString()});
    }
}