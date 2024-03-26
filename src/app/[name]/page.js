"use client";
import Header from "@/components/Header";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Blog from "@/components/Blog";

export default async function InnerBlog() {
  const name = usePathname();
  console.log(name);

  async function getData() {
    const res = await fetch("https://vazilegal.com/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      cache: "no-store",
      body: JSON.stringify({
        query: `
           query post{
         posts(where: {name: "${name}"}){
           nodes{
            title
            content
            commentCount
            date
             comments{
              nodes{
                content
              }
            }
            featuredImage{
              node{
                sourceUrl
              }
            }
           }
          }
      }
          `,
      }),
    });

    const json = await res.json();

    return json.data.posts.nodes[0];
  }
  const data = await getData();

  return (
    <main>
      <div>
        <Header />
      </div>
      <Blog post={data} />
    </main>
  );
}
