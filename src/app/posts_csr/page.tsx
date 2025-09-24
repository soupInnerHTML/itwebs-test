'use client'

import {useEffect, useState} from "react";
import {fetchPosts} from "@/lib/api/posts";
import {Header} from "@/components/Header/Header";
import {IPost} from "@/types/posts";
import {Post} from "@/components/Post/Post";
import loadingAnimation from "@/assets/animations/loading.json";
import Lottie from "lottie-react";
import {Animation} from "@/components/Animation/Animation";

export default function Page() {
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    fetchPosts().then(posts => setPosts(posts));
  }, []);

  return (
    <section className="py-6 container m-auto">
      <Header>📄️ Posts (CSR)</Header>

      {posts.length ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {posts.map(({id, ...post}, index) => (
            <Animation index={index} key={id}>
              <Post {...post} />
            </Animation>
          ))}
        </div>
      ) : (
        <div className="w-128 h-128 mx-auto">
          <Lottie animationData={loadingAnimation} loop />
        </div>
      )}
    </section>
  );
}
