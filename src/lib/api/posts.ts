import {IPost, IPostResponse} from "@/types/posts";

export async function fetchPosts(): Promise<IPost[]> {
  try {
    const response = await fetch(`https://dummyjson.com/posts`);
    const json: IPostResponse = await response.json();
    return json.posts;
  } catch (err) {
    console.error(err);
    return [];
  }
}