import { type ReactNode, useEffect, useState } from 'react';
import { get } from './util/http';
import BlogPosts, { BlogPost } from './components/BlogPosts';
import fetchingImg from './assets/data-fetching.png';
import ErrorMessage from './components/ErrorMessage';

type RawDataBlogPost = {
  id: number;
  userid: number;
  title: string;
  body: string;
};

function App() {
  const [fetchedPosts, setFetchedPosts] = useState<BlogPost[]>();
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  useEffect(function () {
    async function getPosts() {
      setIsFetching(true);
      try {
        const posts = (await get(
          'https://jsonplaceholder.typicode.com/posts'
        )) as RawDataBlogPost[];

        const blogPosts: BlogPost[] = posts.map((rawPost) => {
          return { id: rawPost.id, title: rawPost.title, text: rawPost.body };
        });
        setFetchedPosts(blogPosts);
      } catch (error) {
        // if(error instanceof Error)
        // setError(error.message);
        setError((error as Error).message);
      }
      setIsFetching(false);
    }

    void getPosts();
  }, []);
  let content: ReactNode;
  if (error) {
    content = <ErrorMessage text={error}></ErrorMessage>;
  }

  if (fetchedPosts) content = <BlogPosts posts={fetchedPosts}></BlogPosts>;

  if (isFetching) content = <p id='loading-fallback'>Fetching posts..</p>;

  return (
    <main>
      <img src={fetchingImg} alt='Abstract IMAGE of fetching'></img>
      {content}
    </main>
  );
}

export default App;
