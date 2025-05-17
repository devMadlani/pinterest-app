import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Follow from "../models/follow.model.js";
export const registerUser = async (req, res) => {
  const { username, displayName, email, password } = req.body;
  if (!username || !displayName || !email || !password)
    return res.status(400).json({ message: "All fields are required" });
  const newHashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    username,
    displayName,
    email,
    hashedPassword: newHashedPassword,
  });
  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 30 * 24 * 60 * 60 * 1000,
  });

  const { hashedPassword, ...userWithoutPassword } = user.toObject();
  res.status(201).json(userWithoutPassword);
};
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const user = await User.findOne({ email });
  if (!user) return res.status(401).json({ message: "Invalid credentials" });

  const isPasswordCorrect = await bcrypt.compare(password, user.hashedPassword);
  if (!isPasswordCorrect) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);

  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 30 * 24 * 60 * 60 * 1000,
  });
  const { hashedPassword, ...userWithoutPassword } = user.toObject();

  res.status(200).json(userWithoutPassword);
};
export const logoutUser = async (req, res) => {
  res.clearCookie("token");
  res.status(200).json({ message: "Logged out successfully" });
};

export const getUser = async (req, res) => {
  const { username } = req.params;
  const user = await User.findOne({ username });
  const { hashedPassword, ...userWithoutPassword } = user.toObject();
  const followerCount = await Follow.countDocuments({
    following: userWithoutPassword._id,
  });
  const followingCount = await Follow.countDocuments({ followers: req.userId });
  const token = req.cookies.token;
  if (!token) {
    res.status(200).json({
      ...userWithoutPassword,
      followerCount,
      followingCount,
      isFollowing: false,
    });
  } else {
    jwt.verify(token, process.env.JWT_SECRET, async (err, payload) => {
      if (!err) {
        const isExists = await Follow.exists({
          followers: payload.userId,
          following: userWithoutPassword._id,
        });
        res.status(200).json({
          ...userWithoutPassword,
          followerCount,
          followingCount,
          isFollowing: isExists ? true : false,
        });
      }
    });
  }
};

export const folloUser = async (req, res) => {
  const { username } = req.params;
  const user = await User.findOne({ username });
  const isFollowing = await Follow.exists({
    followers: req.userId,
    following: user._id,
  });
  if (isFollowing) {
    await Follow.deleteOne({ followers: req.userId, following: user._id });
  } else {
    await Follow.create({ followers: req.userId, following: user._id });
  }
  res.status(200).json({ message: "Success" });
};
