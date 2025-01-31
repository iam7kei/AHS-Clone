import axios from "@/lib/axios";

export const getBankList = async () => {
  try {
    return await axios.get("bank/list")
  } catch (e) {
    console.error(e)
  }
}