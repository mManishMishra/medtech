import { User } from "../types/User";
import DummyPic from "../assets/mentor2.jpg";

export const LoginUsers: {
  email: string;
  password: string;
  payload: User;
}[] = [
  {
    email: "admin@admin.com",
    password: "admin",
    payload: {
      name: "Admin",
      email: "admin@admin.com",
      role: "admin",
      token: "",
    },
  },
  {
    email: "student@student.com",
    password: "student",
    payload: {
      name: "Sarthak Student",
      email: "student@student.com",
      role: "student",
      token: "",
      mobile: "9123456780",
      coursesEnrolled: ["React Basics", "Git Pro Max"],
      profilePic: DummyPic,
    },
  },
];
