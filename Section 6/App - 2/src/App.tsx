import { type ReactNode, useEffect, useState } from 'react';
import { get } from './util/http';
import BlogPosts, { BlogPost } from './components/BlogPosts';
import fetchingImg from './assets/data-fetching.png';

type RawDataBlogPost = {
  id: number;
  userid: number;
  title: string;
  body: string;
};

function App() {
  const [fetchedPosts, setFetchedPosts] = useState<BlogPost[]>();

  useEffect(function () {
    async function getPosts() {
      const posts = (await get(
        'https://jsonplaceholder.typicode.com/posts'
      )) as RawDataBlogPost[];

      const blogPosts: BlogPost[] = posts.map((rawPost) => {
        return { id: rawPost.id, title: rawPost.title, text: rawPost.body };
      });
      setFetchedPosts(blogPosts);
    }
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    getPosts();
  }, []);
  let content: ReactNode;
  if (fetchedPosts) content = <BlogPosts posts={fetchedPosts}></BlogPosts>;

  return (
    <main>
      <img src={fetchingImg} alt='Abstract IMAGE of fetching'></img>
      {content}
    </main>
  );
}

export default App;
