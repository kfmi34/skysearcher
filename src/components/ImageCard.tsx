interface ImageCardProps {
  url: string;
  title: string;
}

const ImageCard = ({ url, title }: ImageCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-lg animate-fade-in">
      <div className="aspect-square overflow-hidden">
        <img
          src={url}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-white text-sm font-medium truncate">{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;