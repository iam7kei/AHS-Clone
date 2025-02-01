import axios from "@/lib/axios";

export const getBankList = async () => {
  try {
    return await axios.get("bank/list")
  } catch (e) {
    console.error(e)
  }
}

export const addBank = async (requestOptions) => {
  try {
    return await axios.post("bank/add", requestOptions)
  } catch (e) {
    console.error(e)
  }
}
