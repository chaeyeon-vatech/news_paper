import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async (
  req: NextApiRequest,
  res: NextApiResponse,
  page: number,
) => {
  try {
    // const page=useSelector((state:StateType)=>state.page);
    // console.log("page",page)
    const apiKey = "cqbldKeTzGlqBzfele5tcN5BiBoOeeGk"; // 자신의 뉴욕 타임스 API 키로 바꿔주세요.
    const beginDate = "20230101";
    const endDate = "20231025";

    const response = await axios.get(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?page=${page}&begin_date=${beginDate}&end_date=${endDate}&api-key=${apiKey}`,
    );

    console.log("response", response.data.response.docs);
    res.json(response.data.response.docs);
  } catch (error) {
    console.log("API request error:", error);
    res.status(500).json({ error: "API request error" });
  }
};
