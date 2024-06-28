import { Router } from "express";
import data from "../database.json";
import { SearchRequest, User } from "../types";

const router = Router();

router.post("/users", async (req, res) => {
  const { email, number }: SearchRequest = req.body;

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).send({ success: false, error: 'Invalid email format' });
  }

  if (number && !/^\d{6}$/.test(number)) {
    return res.status(400).send({ success: false, error: 'Invalid number format' });
  }

  try {
    setTimeout(() => {
      const filteredUsers = data.filter((user: User) => {
        return user.email === email && (!number || user.number === number);
      });
  
      res.send({
        success: true,
        users: filteredUsers
      });
    }, 5000);
  } catch (error) {
    res.status(500).send({ success: false, error: 'Internal server error' });
  }
})


export default router