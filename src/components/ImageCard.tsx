interface ImageCardProps {
  url: string;
  title: string;
  price?: string;
}

const ImageCard = ({ url, title, price }: ImageCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-xl animate-fade-in">
      <div className="aspect-[3/4] overflow-hidden bg-gray-100">
        <img
          src={url}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <h3 className="text-sm font-medium mb-1">{title}</h3>
          {price && <p className="text-sm font-semibold">{price}</p>}
        </div>
      </div>
    </div>
  );
};

export default ImageCard;