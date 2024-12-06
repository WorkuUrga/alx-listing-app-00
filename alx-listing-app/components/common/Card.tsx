import Image from "next/image";

interface CardProps {
    image: string;
    title: string;
    location: string;
    price: string;
    rating: number;
    type: string;
    features: string[];
}
const Card: React.FC<CardProps> =({
    image,
    title,
    location,
    price,
    rating,
    type,
    features,
}) => {
    return (
        <div className="bg-white rounded-lg overflow-hidden">
            <div className="relative w-full h-48">
                <Image 
                    src={image}
                    alt={title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                />
            </div>
            <div className="flex justify-between">
                <p className="text-sm text-gray-300">{type}</p>
                <div>{features.map((feature, index) => (
                    <span key={index}>{feature}</span>
                ))}</div>
            </div>
            <div className="pt-4">
                <div className="flex justify-between items-center">
                    <h3 className="text-lg font-bold">{title}</h3>
                    <span className="text-yellow-500">⭐{rating}</span>
                </div>
                <p className="text-gray-300">{location}</p>
                <p className="text-lg font-semibold">{price}</p>
            </div>
        </div>
    );
};
export default Card