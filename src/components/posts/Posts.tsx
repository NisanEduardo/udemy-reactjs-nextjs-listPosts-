import { PostCard } from "../post-card";

type PostProps = {
  id: number;
  title: string;
  body: string;
  cover: string;
};

type PostsProps = {
  posts?: PostProps[] | [];
};

export const Posts = ({ posts }: PostsProps) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
    {posts &&
      posts.map((post) => (
        <PostCard
          key={post.id}
          title={post.title}
          body={post.body}
          id={post.id}
          cover={post.cover}
        />
      ))}
  </div>
);
