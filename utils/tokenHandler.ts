import  jwt  from "jsonwebtoken";
import { NewUser } from "../services/User.services";

export const createToken = (user: NewUser) => {
  const payload = {
    email: user.email,
    _id: user._id,
    username: user.username
  }
  const token = jwt.sign(payload, process.env.TOKEN_SECRET!)

  return token
}