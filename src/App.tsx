import { FormEvent, useCallback, useEffect, useState } from "react";
import "./App.css";
import { Posts } from "./components/posts";
import { TextInput } from "./components/text-input";
import { loadPosts } from "./utils/load-posts";
import { Button } from "./components/button";

function App() {
  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [postsPerPage] = useState(12);
  const [searchValue, setSearchValue] = useState("");

  const handleLoadPosts = useCallback(
    async (page: number, postsPerPage: number) => {
      const postsAndPhotos = await loadPosts();

      setPosts(postsAndPhotos.slice(page, postsPerPage));
      setAllPosts(postsAndPhotos);
    },
    []
  );

  useEffect(() => {
    handleLoadPosts(0, postsPerPage);
  }, [handleLoadPosts, postsPerPage]);

  const loadMorePosts = () => {
    const nextPage = page + postsPerPage;

    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);

    setPosts(posts);
    setPage(nextPage);
  };

  const handleChange = (e: FormEvent) => {
    const { value } = e.target as HTMLInputElement;
    setSearchValue(value);
  };

  const noMorePosts = page + postsPerPage >= allPosts.length;
  const filteredPosts = searchValue
    ? allPosts.filter((post: { title: string }) => {
        return post.title.toLowerCase().includes(searchValue.toLowerCase());
      })
    : posts;

  return (
    <div className="bg-[#282c34] p-8 min-h-[100vh]">
      <section className="">
        <div className="search-container">
          {!!searchValue && (
            <h1 className="text-lg text-gray-200">
              Search value: {searchValue}
            </h1>
          )}

          <TextInput searchValue={searchValue} handleChange={handleChange} />
        </div>

        {filteredPosts.length > 0 && <Posts posts={filteredPosts} />}

        {filteredPosts.length === 0 && (
          <p className="text-gray-200">Não existem posts =(</p>
        )}

        <div className="text-center p-5">
          {!searchValue && (
            <Button
              text="Load more posts"
              onClick={loadMorePosts}
              disabled={noMorePosts}
            />
          )}
        </div>
      </section>
    </div>
  );
}

export default App;
