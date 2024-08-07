type PostCardProps = {
  title: string;
  cover: string;
  body: string;
  id: number;
};

export const PostCard = ({ title, cover, body, id }: PostCardProps) => (
  <div className="bg-gray-800 rounded-lg overflow-hidden">
    <img src={cover} alt={title} />
    <div className="p-4">
      <h2 className="text-gray-400 font-medium text-xl pb-5">
        {title} {id}
      </h2>
      <p className="text-gray-300">{body}</p>
    </div>
  </div>
);
