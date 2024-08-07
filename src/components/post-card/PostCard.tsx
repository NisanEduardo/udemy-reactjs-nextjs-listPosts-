type PostCardProps = {
  title: string;
  cover: string;
  body: string;
  id: number;
};

export const PostCard = ({ title, cover, body, id }: PostCardProps) => (
  <div className="post">
    <img src={cover} alt={title} />
    <div className="post-content">
      <h2>
        {title} {id}
      </h2>
      <p>{body}</p>
    </div>
  </div>
);
