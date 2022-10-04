import type { NextApiRequest, NextApiResponse } from "next"

//

const newHandlerFcuntion = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const getDummyDataFromExternalApi = async () => {
    const req = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await req.json()
    return data
  }

  const data = await getDummyDataFromExternalApi()
  console.log("data", data)
  res.status(200).json(data)
}

export default newHandlerFcuntion
