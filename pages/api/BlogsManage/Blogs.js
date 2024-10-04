const sql = require("mssql");
import { connectToDatabase } from "../Config";
import { loadSqlQueries } from "../Utill";

const getAllBlog = async () => {
  try {
    let pool = await connectToDatabase();
    const sqlQueries = await loadSqlQueries("api/BlogsManage");
    const GetReviews = await pool.request().query(sqlQueries.GetallBlog);
    // console.log("Reviews Fetched: ", GetReviews.recordset);
    return GetReviews.recordset;
  } catch (err) {
    console.error("SQL error", err);
  }
};

const GetOneBlog = async (req, res) => {
  try {
    let pool = await connectToDatabase();
    const sqlQueries = await loadSqlQueries("api/BlogsManage");
    const GetOneData = await pool
      .request()
      .input("BlogID", sql.BigInt, req.body.BlogID)
      .query(sqlQueries.GetoneBlog);
    console.log("Reviews Fetched: ", GetOneData.recordset);
    return GetOneData.recordset;
  } catch (err) {
    console.error("SQL error", err);
  }
};

export default async function handler(req, res) {
  if (req.method === "GET") {
    const data = await getAllBlog();
    res.status(200).json(data);
  }
  if (req.method === "POST") {
    const data = await GetOneBlog(req, res);
    res.status(200).json(data);
  }
}
