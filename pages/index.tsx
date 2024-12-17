import React from "react";
import Card from "@/components/common/Card";
const cardData = [
  {
    id:1,
    image: '/assets/property1.png',
    title: 'Villa Arrecife Beach House',
    location: 'Sidemen, Bali, Indonesia',
    price: '$2450/n',
    rating: 4.76,
    features: ['Top Villa','Self Check-In', 'Free Reschedule'],
    details: {
        beds: 4,
        baths: 2,
        capacity: '2-4'
    },
  },
    {
    id:2,
    image: '/assets/property2.png',
    title: 'Entire cabin ',
    location: 'Nova Friburgo, Brazil',
    price: '$62/n',
    rating: 4.76,
    features: ['Top Villa','Self Check-In', 'Free Reschedule'],
    details: {
        beds: 1,
        baths: 1,
        capacity: '3'
    },
  },
    {
    id:3,
    image: '/assets/property3.png',
    title: 'Earthen home',
    location: 'Santa Marta, Colombia',
    price: '$386/n',
    rating: 4.76,
    features: ['Top Villa','Self Check-In', 'Free Reschedule'],
    details: {
        beds: 4,
        baths: 2,
        capacity: '6'
    },
  },
    {
    id:4,
    image: '/assets/property4.png',
    title: 'Private room',
    location: 'Moeda, Brazil',
    price: '$134/n',
    rating: 4.76,
    features: ['Top Villa','Self Check-In', 'Free Reschedule'],
    details: {
        beds: 1,
        baths: 1,
        capacity: '2'
    },
  },
    {
    id:5, 
    image: '/assets/property5.png',
    title: 'Gokce Gemile Estate',
    location: 'Kayakay, Turkey',
    price: '$980/n',
    rating: 4.76,
    features: ['Top Villa','Self Check-In', 'Free Reschedule'],
    details: {
        beds: 6,
        baths: 6,
        capacity: '12'
    },
  },
    {
    id:6,
    image: '/assets/property6.png',
    title: 'Luxury 1000sqm Villa',
    location: 'Marrakech, Morocco',
    price: '$1430/n',
    rating: 4.76,
    features: ['Top Villa','Self Check-In', 'Free Reschedule'],
    details: {
        beds: 6,
        baths: 6,
        capacity: '12'
    },
  },
    {
    id:7,
    image: '/assets/property7.png',
    title: 'Palais Hassoun Marrakech',
    location: 'Marrakech, Morocco',
    price: '$3450/n',
    rating: 4.76,
    features: ['Top Villa','Self Check-In', 'Free Reschedule'],
    details: {
        beds: 13,
        baths: 13,
        capacity: '26'
    },
  },
    {
    id:8,
    image: '/assets/property8.png',
    title: 'Villa Lamp',
    location: 'Benahavis, Spain',
    price: '$2041/n',
    rating: 4.76,
    features: ['Top Villa','Self Check-In', 'Free Reschedule'],
    details: {
        beds: 7,
        baths: 7,
        capacity: '12'
    },
  },
    {
    id:9,
    image: '/assets/property9.png',
    title: `Villa 'Oui d' Or`,
    location: 'Marrakech, Morocco',
    price: '$1009/n',
    rating: 4.76,
    features: ['Top Villa','Self Check-In', 'Free Reschedule'],
    details: {
        beds: 8,
        baths: 7,
        capacity: '14'
    },
  },
    {
    id:10,
    image: '/assets/property10.png',
    title: 'Designer villa, pool not',
    location: 'Marrakech, Morocco',
    price: '$1289/n',
    rating: 4.76,
    features: ['Top Villa','Self Check-In', 'Free Reschedule'],
    details: {
        beds: 6,
        baths: 6,
        capacity: '12'
    },
  },
    {
    id:11,
    image: '/assets/property11.png',
    title: 'Royal Zephyr - Marrakech',
    location: 'Marrakech, Morocco',
    price: '$1692/n',
    rating: 4.76,
    features: ['Top Villa','Self Check-In', 'Free Reschedule'],
    details: {
        beds: 6,
        baths: 7,
        capacity: '12'
    },
  },
    {
    id:12,
    image: '/assets/property12.png',
    title: 'Riad Mayo & Bungalows',
    location: 'Sidi Abdallah Ghiat, Morocco',
    price: '$865/n',
    rating: 4.76,
    features: ['Top Villa','Self Check-In', 'Free Reschedule'],
    details: {
        beds: 21,
        baths: 18,
        capacity: '16+'
    },
  },
    {
    id:13,
    image: '/assets/property13.png',
    title: 'Casa de Carolina',
    location: 'Playas de Vera, Spain',
    price: '$215/n',
    rating: 4.76,
    features: ['Top Villa','Self Check-In', 'Free Reschedule'],
    details: {
        beds: 1,
        baths: 1,
        capacity: '4'
    },
  },
    {
    id:14,
    image: '/assets/property14.png',
    title: 'Happy Valley Villa Tuni...',
    location: 'Qaroun, Egypt',
    price: '$100/n',
    rating: 4.76,
    features: ['Top Villa','Self Check-In', 'Free Reschedule'],
    details: {
        beds: 7,
        baths: 3,
        capacity: '8'
    },
  },
    {
    id:15,
    image: '/assets/property15.png',
    title: 'Almyros Residence',
    location: 'Lasithi, Greece',
    price: '$747/n',
    rating: 4.76,
    features: ['Top Villa','Self Check-In', 'Free Reschedule'],
    details: {
        beds: 6,
        baths: 4,
        capacity: '10'
    },
  },
    {
    id:16,
    image: '/assets/property16.png',
    title: 'Villa White Stone mode...',
    location: 'Marrakech, Morocco',
    price: '$1798/n',
    rating: 4.76,
    features: ['Top Villa','Self Check-In', 'Free Reschedule'],
    details: {
        beds: 7,
        baths: 6,
        capacity: '12'
    },
  },
]
const Home:React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-8">
      {cardData.map((card, index) => (
        <Card 
          key={index}
          image={card.image}
          title={card.title}
          location={card.location}
          price={card.price}
          rating={card.rating}
          features={card.features}
          details={card.details}
        />
      ))}
    </div>
  )
}
export default Home