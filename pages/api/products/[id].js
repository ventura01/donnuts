import dbConnect from "../../../util/mongo";
import Product from "../../../models/Product";

const handler = async (req, res) => {
  const {
    method,
    query: { id },
    cookies,
  } = req;

  const token = cookies.token;
  await dbConnect();

  if (method === "GET") {
    try {
      const product = await Product.findById(id);
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  if (method === "PUT") {
    if (!token || token !== process.env.token) {
      return res.status(401).json("You are not authenticated");
    }
    try {
      const product = await Product.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  if (method === "DELETE") {
    if (!token || token !== process.env.token) {
      return res.status(401).json("You are not authenticated");
    }
    try {
      await Product.findByIdAndDelete(id);
      res.status(200).json("The product was deleted successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  }
};
export default handler;
