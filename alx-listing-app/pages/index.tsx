import React from "react";
import Card from "@/components/common/Card";
import { features } from "process";
const cardData = [
  {
    id:1,
    image: '/assets/property1.png',
    title: 'Villa Arrecife Beach House',
    location: 'Sidemen, Bali, Indonesia',
    price: '$2450',
    rating: 4.76,
    type: 'Top Villa',
    features: ['Self Check-In', 'Free Reschedule']
  },
    {
    id:2,
    image: '/assets/property2.png',
    title: 'Entire cabin ',
    location: 'Nova Friburgo, Brazil',
    price: '$62',
    rating: 4.76,
    type: 'Top Villa',
    features: ['Self Check-In', 'Free Reschedule']
  },
    {
    id:3,
    image: '/assets/property3.png',
    title: 'Earthen home',
    location: 'Santa Marta, Colombia',
    price: '$386',
    rating: 4.76,
    type: 'Top Villa',
    features: ['Self Check-In', 'Free Reschedule']
  },
    {
    id:4,
    image: '/assets/property4.png',
    title: 'Private room',
    location: 'Moeda, Brazil',
    price: '$134',
    rating: 4.76,
    type: 'Top Villa',
    features: ['Self Check-In', 'Free Reschedule']
  },
    {
    id:5, 
    image: '/assets/property5.png',
    title: 'Gokce Gemile Estate',
    location: 'Kayakay, Turkey',
    price: '$980',
    rating: 4.76,
    type: 'Top Villa',
    features: ['Self Check-In', 'Free Reschedule']
  },
    {
    id:6,
    image: '/assets/property6.png',
    title: 'Luxury 1000sqm Villa',
    location: 'Marrakech, Morocco',
    price: '$1430',
    rating: 4.76,
    type: 'Top Villa',
    features: ['Self Check-In', 'Free Reschedule']
  },
    {
    id:7,
    image: '/assets/property7.png',
    title: 'Palais Hassoun Marrakech',
    location: 'Marrakech, Morocco',
    price: '$3450',
    rating: 4.76,
    type: 'Top Villa',
    features: ['Self Check-In', 'Free Reschedule']
  },
    {
    id:8,
    image: '/assets/property8.png',
    title: 'Villa Lamp',
    location: 'Benahavis, Spain',
    price: '$2041',
    rating: 4.76,
    type: 'Top Villa',
    features: ['Self Check-In', 'Free Reschedule']
  },
    {
    id:9,
    image: '/assets/property9.png',
    title: `Villa 'Oui d' Or`,
    location: 'Marrakech, Morocco',
    price: '$1009',
    rating: 4.76,
    type: 'Top Villa',
    features: ['Self Check-In', 'Free Reschedule']
  },
    {
    id:10,
    image: '/assets/property10.png',
    title: 'Designer villa, pool not',
    location: 'Marrakech, Morocco',
    price: '$1289',
    rating: 4.76,
    type: 'Top Villa',
    features: ['Self Check-In', 'Free Reschedule']
  },
    {
    id:11,
    image: '/assets/property11.png',
    title: 'Royal Zephyr - Marrakech',
    location: 'Marrakech, Morocco',
    price: '$1692',
    rating: 4.76,
    type: 'Top Villa',
    features: ['Self Check-In', 'Free Reschedule']
  },
    {
    id:12,
    image: '/assets/property12.png',
    title: 'Riad Mayo & Bungalows',
    location: 'Sidi Abdallah Ghiat, Morocco',
    price: '$865',
    rating: 4.76,
    type: 'Top Villa',
    features: ['Self Check-In', 'Free Reschedule']
  },
    {
    id:13,
    image: '/assets/property13.png',
    title: 'Casa de Carolina',
    location: 'Playas de Vera, Spain',
    price: '$215',
    rating: 4.76,
    type: 'Top Villa',
    features: ['Self Check-In', 'Free Reschedule']
  },
    {
    id:14,
    image: '/assets/property14.png',
    title: 'Happy Valley Villa Tuni...',
    location: 'Qaroun, Egypt',
    price: '$100',
    rating: 4.76,
    type: 'Top Villa',
    features: ['Self Check-In', 'Free Reschedule']
  },
    {
    id:15,
    image: '/assets/property15.png',
    title: 'Almyros Residence',
    location: 'Lasithi, Greece',
    price: '$747',
    rating: 4.76,
    type: 'Top Villa',
    features: ['Self Check-In', 'Free Reschedule']
  },
    {
    id:16,
    image: '/assets/property16.png',
    title: 'Villa White Stone mode...',
    location: 'Marrakech, Morocco',
    price: '$1798',
    rating: 4.76,
    type: 'Top Villa',
    features: ['Self Check-In', 'Free Reschedule']
  },
]
const Home:React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {cardData.map((card, index) => (
        <Card 
          key={index}
          image={card.image}
          title={card.title}
          location={card.location}
          price={card.price}
          rating={card.rating}
          type={card.type}
          features={card.features}
        />
      ))}
    </div>
  )
}
export default Home