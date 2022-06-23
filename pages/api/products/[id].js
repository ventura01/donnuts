import dbConnect from "../../../util/mongo";
import Product from "../../../models/Product";

const handler = async (req, res) => {
  const {
    method,
    query: { id },
  } = req;

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
    try {
      await Product.findByIdAndDelete(id);
      res.status(200).json("The product was deleted successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  }
};
export default handler;
