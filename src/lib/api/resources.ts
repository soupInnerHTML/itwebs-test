import {IReqresResponse} from "@/types/api";
import {IResource} from "@/types/resources";

export async function fetchResources(): Promise<IResource[]> {
  try {
    const response = await fetch(`https://reqres.in/api/unkown?per_page=12`, {
      headers: {
        "x-api-key": process.env.NEXT_PUBLIC_REQRES_API_KEY,
      },
      cache: "force-cache", // SSG
    });
    const json: IReqresResponse<IResource> = await response.json();
    return json.data;
  } catch (err) {
    console.error(err);
    return [];
  }
}