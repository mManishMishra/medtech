// // // src/pages/Login.tsx
// // import { useState } from "react";
// // import { useDispatch } from "react-redux";
// // import { login } from "../redux/slices/authSlice";
// // import { useNavigate, Link } from "react-router-dom";
// // import { motion } from "framer-motion";
// // import toast from "react-hot-toast";

// // const Login = () => {
// //   const dispatch = useDispatch();
// //   const navigate = useNavigate();
// //   const [form, setForm] = useState({ email: "", password: "" });

// //   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// //     setForm({ ...form, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = (e: React.FormEvent) => {
// //     e.preventDefault();
// //     setForm({ email: "", password: "" });
// //     // TODO: Replace with real auth logic
// //     if (form.email === "admin@admin.com" && form.password === "admin") {
// //       dispatch(login({ name: "Manish", email: form.email, role: "admin" }));
// //       toast.success("Welcome back,  👑");
// //       navigate("/");
// //     } else {
// //       toast.error("Oops. Invalid credentials, try again 🫠");
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen flex items-center justify-center bg-[var(--brand-bg)] px-4">
// //       <motion.div
// //         className="bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-xl max-w-md w-full"
// //         initial={{ opacity: 0, scale: 0.95 }}
// //         animate={{ opacity: 1, scale: 1 }}
// //         transition={{ duration: 0.5 }}
// //       >
// //         <h2 className="text-2xl font-bold text-center text-orange-500 mb-6">
// //           Log In 🔐
// //         </h2>
// //         <form onSubmit={handleSubmit} className="space-y-4">
// //           <div>
// //             <label className="block text-sm font-medium dark:text-white mb-1">
// //               Email
// //             </label>
// //             <input
// //               name="email"
// //               type="email"
// //               value={form.email}
// //               onChange={handleChange}
// //               placeholder="you@example.com"
// //               className="w-full px-4 py-2 border rounded-lg dark:bg-zinc-800 dark:border-zinc-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
// //               required
// //             />
// //           </div>
// //           <div>
// //             <label className="block text-sm font-medium dark:text-white mb-1">
// //               Password
// //             </label>
// //             <input
// //               name="password"
// //               type="password"
// //               value={form.password}
// //               onChange={handleChange}
// //               placeholder="********"
// //               className="w-full px-4 py-2 border rounded-lg dark:bg-zinc-800 dark:border-zinc-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
// //               required
// //             />
// //           </div>
// //           <motion.button
// //             whileHover={{ scale: 1.03 }}
// //             whileTap={{ scale: 0.97 }}
// //             type="submit"
// //             className="w-full bg-orange-500 text-white py-2 rounded-full font-semibold hover:bg-orange-600 transition"
// //           >
// //             Log In
// //           </motion.button>
// //         </form>
// //         <p className="mt-4 text-center text-sm text-gray-500 dark:text-gray-400">
// //           Don't have an account?{" "}
// //           <Link to="/sign-up" className="text-orange-500 hover:underline">
// //             Sign Up
// //           </Link>
// //         </p>
// //       </motion.div>
// //     </div>
// //   );
// // };

// // export default Login;

const LoginUsers = [
  {
    email: "admin@admin.com",
    password: "admin",
    payload: {
      name: "Admin User",
      email: "admin@admin.com",
      role: "admin",
      token: "admin-token-123",
    },
  },
  {
    email: "mentor@mentor.com",
    password: "mentor",
    payload: {
      name: "Mentor User",
      email: "mentor@mentor.com",
      role: "mentor",
      token: "mentor-token-456",
    },
  },
  {
    email: "student@student.com",
    password: "student",
    payload: {
      name: "Student User",
      email: "student@student.com",
      role: "student",
      token: "student-token-789",
    },
  },
];

// src/pages/Login.tsx
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/slices/authSlice";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const loginUrl = `${import.meta.env.VITE_PROD_URL}/api/login/`;
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const users = LoginUsers;

    const matchedUser = users.find(
      (user) => user.email === form.email && user.password === form.password
    );

    setForm({ email: "", password: "" });

    if (matchedUser) {
      dispatch(login(matchedUser.payload));
      toast.success(`Welcome back, ${matchedUser.payload.name}! 🎉`);
      navigate("/profile");
    } else {
      toast.error("Oops. Invalid credentials, try again 🫠");
    }
  };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();

  //   try {
  //     const res = await fetch(`${loginUrl}`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(form),
  //     });

  //     if (!res.ok) {
  //       throw new Error("Login failed");
  //     }

  //     const data = await res.json(); // assume backend returns { token: "...", user: {name, email, role} }

  //     // store token in localStorage (or cookie if you prefer)
  //     console.log(data);

  //     localStorage.setItem("token", data.access);

  //     // dispatch Redux login
  //     dispatch(
  //       login({
  //         name: data.user.name,
  //         email: data.user.email,
  //         role: data.user.role,
  //         token: data.token,
  //       })
  //     );

  //     toast.success(`Welcome back, ${data.user.name} 👋`);
  //     navigate("/profile");
  //   } catch (err) {
  //     console.error(err);
  //     toast.error("Invalid email or password 😶");
  //   } finally {
  //     setForm({ email: "", password: "" });
  //   }
  // };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--brand-bg)] px-4">
      <motion.div
        className="bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-xl max-w-md w-full"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold text-center text-orange-500 mb-6">
          Log In 🔐
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium dark:text-white mb-1">
              Email
            </label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full px-4 py-2 border rounded-lg dark:bg-zinc-800 dark:border-zinc-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium dark:text-white mb-1">
              Password
            </label>
            <input
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              placeholder="********"
              className="w-full px-4 py-2 border rounded-lg dark:bg-zinc-800 dark:border-zinc-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-full font-semibold hover:bg-orange-600 transition"
          >
            Log In
          </motion.button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-500 dark:text-gray-400">
          Don't have an account?{" "}
          <Link to="/sign-up" className="text-orange-500 hover:underline">
            Sign Up
          </Link>
        </p>
        <div className="mt-6 text-sm text-gray-600 dark:text-zinc-400">
          <p className="mb-1 font-semibold">🚀 Test Credentials:</p>
          <ul className="space-y-1 list-disc pl-5">
            <li>
              Admin – <strong>admin@admin.com / admin</strong>
            </li>
            <li>
              Mentor – <strong>mentor@mentor.com / mentor</strong>
            </li>
            <li>
              Student – <strong>student@student.com / student</strong>
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;

// // Login.tsx (Updated for API + mentor/student role support)
// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { login } from "../redux/slices/authSlice";
// import { useNavigate, Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import toast from "react-hot-toast";

// const Login = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [form, setForm] = useState({ email: "", password: "" });
//   const loginUrl = `${import.meta.env.VITE_SERVER_URL}/api/login/`;

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     try {
//       const res = await fetch(loginUrl, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(form),
//       });

//       if (!res.ok) {
//         throw new Error("Login failed");
//       }

//       const data = await res.json();

//       // store tokens
//       localStorage.setItem("token", data.access);
//       localStorage.setItem("refresh", data.refresh);

//       // Dispatch login with role-based payload
//       dispatch(
//         login({
//           name: data?.user?.name || "",
//           email: data?.user?.email || "",
//           role: data?.user?.is_mentor ? "mentor" : "student",
//           token: data?.access,
//         })
//       );

//       toast.success(`Welcome back, ${data?.user?.name} 👋`);
//       navigate("/profile");
//     } catch (err) {
//       console.error(err);
//       toast.error("Invalid email or password 😶");
//     } finally {
//       setForm({ email: "", password: "" });
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-[var(--brand-bg)] px-4">
//       <motion.div
//         className="bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-xl max-w-md w-full"
//         initial={{ opacity: 0, scale: 0.95 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.5 }}
//       >
//         <h2 className="text-2xl font-bold text-center text-orange-500 mb-6">
//           Log In 🔐
//         </h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block text-sm font-medium dark:text-white mb-1">
//               Email
//             </label>
//             <input
//               name="email"
//               type="email"
//               value={form.email}
//               onChange={handleChange}
//               placeholder="you@example.com"
//               className="w-full px-4 py-2 border rounded-lg dark:bg-zinc-800 dark:border-zinc-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium dark:text-white mb-1">
//               Password
//             </label>
//             <input
//               name="password"
//               type="password"
//               value={form.password}
//               onChange={handleChange}
//               placeholder="********"
//               className="w-full px-4 py-2 border rounded-lg dark:bg-zinc-800 dark:border-zinc-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
//               required
//             />
//           </div>
//           <motion.button
//             whileHover={{ scale: 1.03 }}
//             whileTap={{ scale: 0.97 }}
//             type="submit"
//             className="w-full bg-orange-500 text-white py-2 rounded-full font-semibold hover:bg-orange-600 transition"
//           >
//             Log In
//           </motion.button>
//         </form>

//         <p className="mt-4 text-center text-sm text-gray-500 dark:text-gray-400">
//           Don't have an account?{" "}
//           <Link to="/sign-up" className="text-orange-500 hover:underline">
//             Sign Up
//           </Link>
//         </p>
//         {/* <div className="mt-6 text-sm text-gray-600 dark:text-zinc-400">
//           <p className="mb-1 font-semibold">🚀 Test Credentials:</p>
//           <ul className="space-y-1 list-disc pl-5">
//             <li>
//               Mentor – <strong>mentor@mentor.com / mentor</strong>
//             </li>
//             <li>
//               Student – <strong>student@student.com / student</strong>
//             </li>
//           </ul>
//         </div> */}
//       </motion.div>
//     </div>
//   );
// };

// export default Login;
