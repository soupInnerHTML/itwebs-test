import {IUser} from "@/types/user";
import {IReqresResponse} from "@/types/api";

export async function fetchUsers(): Promise<IUser[]> {
  try {
    const response = await fetch(`https://reqres.in/api/users?per_page=11`, {
      headers: {
        "x-api-key": process.env.NEXT_PUBLIC_REQRES_API_KEY,
      },
      cache: "no-store", // ssr
    });
    const json: IReqresResponse<IUser> = await response.json();
    return json.data;
  } catch (err) {
    console.error(err);
    return [];
  }
}