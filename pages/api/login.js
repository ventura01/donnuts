// import cookie from "cookie";

// const handler = (req, res) => {
//   if (req.method === "POST") {
//! Error aqui: en la variable 'userName'
//     const { userName, password } = req.body;
//   }
//   if (
//     userName === process.env.ADMIN_USERNAME &&
//     password === process.env.ADMIN_PASSWORD
//   ) {
//     res.setHeader(
//       "Set-Cookie",
//       cookie.serialize("token", process.env.ADMIN_TOKEN, {
//         maxAge: 60 * 60,
//         sameSite: "strict",
//         path: "/",
//       })
//     );
//     res.status(200).json("Successfull");
//   } else {
//     res.status(400).json("Wrong credentiasl");
//   }
// };

// export default handler;
import cookie from "cookie";

const handler = (req, res) => {
  if (req.method === "POST") {
    const { username, password } = req.body;
    if (
      username === process.env.ADMIN_USERNAME &&
      password === process.env.ADMIN_PASSWORD
    ) {
      res.setHeader(
        "Set-Cookie",
        cookie.serialize("token", process.env.TOKEN, {
          maxAge: 60 * 60,
          sameSite: "strict",
          path: "/",
        })
      );
      res.status(200).json("Succesfull");
    } else {
      res.status(400).json("Wrong Credentials!");
    }
  }
};

export default handler;
