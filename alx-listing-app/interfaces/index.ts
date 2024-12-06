export interface CardProps {
    image: string;
    title: string;
    location: string;
    price: string;
    rating: number;
    type: string;
    features: string[];
}
export interface ButtonProps {
    label: string;
    onClick: ()=> void;
}