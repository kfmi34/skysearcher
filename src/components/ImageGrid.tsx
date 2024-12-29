import ImageCard from "./ImageCard";

const fashionItems = [
  {
    id: "1",
    url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    title: "Premium White Shirt",
    price: "$89.99"
  },
  {
    id: "2",
    url: "https://images.unsplash.com/photo-1581092795360-662d53c6d0c8",
    title: "Classic Black Shirt",
    price: "$69.99"
  },
  {
    id: "3",
    url: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f",
    title: "Casual Denim Jacket",
    price: "$129.99"
  },
  {
    id: "4",
    url: "https://images.unsplash.com/photo-1554412933-514a83d2f3c8",
    title: "Designer Blazer",
    price: "$199.99"
  }
];

interface Image {
  id: string;
  url: string;
  title: string;
  price?: string;
}

interface ImageGridProps {
  images?: Image[];
}

const ImageGrid = ({ images = fashionItems }: ImageGridProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {images.map((image) => (
        <ImageCard key={image.id} url={image.url} title={image.title} price={image.price} />
      ))}
    </div>
  );
};

export default ImageGrid;