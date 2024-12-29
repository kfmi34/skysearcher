import ImageCard from "./ImageCard";

interface Image {
  id: string;
  url: string;
  title: string;
}

interface ImageGridProps {
  images: Image[];
}

const ImageGrid = ({ images }: ImageGridProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {images.map((image) => (
        <ImageCard key={image.id} url={image.url} title={image.title} />
      ))}
    </div>
  );
};

export default ImageGrid;