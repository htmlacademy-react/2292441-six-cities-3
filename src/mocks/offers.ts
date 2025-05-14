import { Offers } from '../types/offer';

type ImageSize = {
  width: number;
  height: number;
}

const AVATAR_SIZE = {
  width: 100,
  height: 100,
};

const OFFER_PHOTO_SIZE = {
  width: 260,
  height: 200,
};

const PLACEHOLDER_URL = 'https://picsum.photos/';

const getPlaceholderUrl = (size: ImageSize) => `${PLACEHOLDER_URL}${size.width}/${size.height}?random=${Math.random()}`;

const getPlaceholderArray = (length: number, size: ImageSize) => Array.from({ length }, () => getPlaceholderUrl(size));

export const offers: Offers = [
  {
    id: 1,
    city: 'Amsterdam',
    images: getPlaceholderArray(6, OFFER_PHOTO_SIZE),
    title: 'Charming 1-bedroom in the heart of Oud-Zuid',
    rating: {
      stars: 5,
      value: 4.5
    },
    type: 'Apartment',
    bedrooms: 2,
    capacity: 3,
    price: 220,
    premium: true,
    features: {
      wiFi: true,
      heating: true,
      kitchen: true,
      fridge: true,
      washingMachine: true,
      coffeeMachine: true,
      dishwasher: true,
      towels: true,
      babySeat: true,
      cabelTV: true,
    },
    host: {
      name: 'Michel',
      avatar: getPlaceholderUrl(AVATAR_SIZE),
      pro: true,
    },
    description: ['This cozy, fully furnished apartment offers modern amenities and a stylish interior.', 'Located in the vibrant Oud-Zuid neighborhood, you\'re just steps away from cafes, shops, and historic landmarks. Available for immediate move-in.'],
    reviews: [
      {
        user: {
          name: 'Louis',
          avatar: getPlaceholderUrl(AVATAR_SIZE),
        },
        stars: 4,
        comment: 'The space is stylish and comfortable, though a little tight. The location is fantastic, with everything within walking distance. Overall, a great stay in a lovely neighborhood.',
        date: 'March 2025'
      },
      {
        user: {
          name: 'Sophie',
          avatar: getPlaceholderUrl(AVATAR_SIZE),
        },
        stars: 5,
        comment: 'Beautifully decorated, incredibly cozy, and perfectly located near top cafes, boutiques, and museums. Every detail is thoughtfully designed, making it a perfect retreat after a day of exploring Amsterdam. Highly recommend for an unforgettable stay!',
        date: 'January 2025'
      }
    ],
    location: {
      lat: 52.3909553943508,
      lng: 4.85309666406198,
    },
  },
  {
    id: 2,
    city: 'Amsterdam',
    images: getPlaceholderArray(6, OFFER_PHOTO_SIZE),
    title: 'Cozy studio with balcony in Amsterdam-Noord',
    rating: {
      stars: 3,
      value: 3
    },
    type: 'Apartment',
    bedrooms: 1,
    capacity: 2,
    price: 120,
    premium: false,
    features: {
      wiFi: true,
      heating: true,
      kitchen: true,
      fridge: true,
      washingMachine: true,
      coffeeMachine: false,
      dishwasher: false,
      towels: true,
      babySeat: false,
      cabelTV: true,
    },
    host: {
      name: 'Eva',
      avatar: getPlaceholderUrl(AVATAR_SIZE),
      pro: false,
    },
    description: ['The open-plan layout includes a modern kitchen, a stylish bathroom, and hardwood floors. Located in a quiet area with great transport connections, just 10 minutes to central Amsterdam.'],
    reviews: [
      {
        user: {
          name: 'Mick',
          avatar: getPlaceholderUrl(AVATAR_SIZE),
        },
        stars: 3,
        comment: 'The studio is small but cozy with a nice balcony. Amsterdam-Noord is quiet, but it’s a bit removed from the city center, making transportation a bit of a hassle. The apartment is simple and functional, though it could benefit from more storage space.',
        date: 'April 2025'
      }
    ],
    location: {
      lat: 52.3609553943508,
      lng: 4.85309666406198,
    },
  },
  {
    id: 3,
    city: 'Amsterdam',
    images: getPlaceholderArray(6, OFFER_PHOTO_SIZE),
    title: 'Spacious 2-bedroom apartment in Oosterparkbuurt',
    rating: {
      stars: 4,
      value: 4.2
    },
    type: 'Apartment',
    bedrooms: 3,
    capacity: 4,
    price: 160,
    premium: true,
    features: {
      wiFi: true,
      heating: true,
      kitchen: true,
      fridge: true,
      washingMachine: true,
      coffeeMachine: true,
      dishwasher: false,
      towels: false,
      babySeat: true,
      cabelTV: true,
    },
    host: {
      name: 'Camille',
      avatar: getPlaceholderUrl(AVATAR_SIZE),
      pro: false,
    },
    description: ['Enjoy a spacious 2-bedroom apartment featuring a well-designed living area, fully equipped kitchen, and sleek bathroom.', 'Situated in the vibrant Oosterparkbuurt neighborhood, close to public transport, shops, and dining spots.'],
    reviews: [
      {
        user: {
          name: 'Mohamed',
          avatar: getPlaceholderUrl(AVATAR_SIZE),
        },
        stars: 5,
        comment: 'Spacious, comfortable, and well-equipped, it had everything we needed for a long stay. The location is perfect, with plenty of restaurants and shops within walking distance. The host was also incredibly helpful. Highly recommend this spot for anyone visiting Amsterdam!',
        date: 'April 2025'
      },
      {
        user: {
          name: 'Lucas',
          avatar: getPlaceholderUrl(AVATAR_SIZE),
        },
        stars: 3,
        comment: 'The apartment needs some maintenance, as a few things weren’t working properly. It was functional for our stay, but I expected a bit more given the price. Still, a decent option for budget-conscious travelers.',
        date: 'December 2024'
      }
    ],
    location: {
      lat: 52.3909553943508,
      lng: 4.929309666406198,
    },
  },
  {
    id: 4,
    city: 'Amsterdam',
    images: getPlaceholderArray(6, OFFER_PHOTO_SIZE),
    title: 'Cozy room in shared flat near Westerpark',
    rating: {
      stars: 2,
      value: 2
    },
    type: 'Room',
    bedrooms: 4,
    capacity: 6,
    price: 90,
    premium: false,
    features: {
      wiFi: true,
      heating: true,
      kitchen: true,
      fridge: true,
      washingMachine: true,
      coffeeMachine: true,
      dishwasher: false,
      towels: false,
      babySeat: false,
      cabelTV: false,
    },
    host: {
      name: 'David',
      avatar: getPlaceholderUrl(AVATAR_SIZE),
      pro: false,
    },
    description: ['This cozy room in a shared flat offers a comfortable living space with access to a shared kitchen and bathroom.', 'Located just minutes from Westerpark, you\'ll enjoy a vibrant neighborhood with shops, cafes, and excellent transport links. Perfect for students or young professionals.'],
    reviews: [
      {
        user: {
          name: 'Emilia',
          avatar: getPlaceholderUrl(AVATAR_SIZE),
        },
        stars: 3,
        comment: 'Good location near Westerpark with plenty of restaurants and bars nearby. The room itself is comfortable, though a bit small. The shared living space can get crowded at times. Overall, it’s a fair choice if you\'re on a budget, but not ideal for those seeking more comfort.',
        date: 'April 2025'
      },
      {
        user: {
          name: 'Mia',
          avatar: getPlaceholderUrl(AVATAR_SIZE),
        },
        stars: 2,
        comment: 'The location near Westerpark is great, but the room was smaller than expected. The shared flat was quite noisy, and I had issues with cleanliness in the common areas. Not a great experience overall, and I wouldn\'t stay here again.',
        date: 'April 2025',
      },
      {
        user: {
          name: 'Jonas',
          avatar: getPlaceholderUrl(AVATAR_SIZE),
        },
        stars: 1,
        comment: 'The room was small and uncomfortable, and the shared flat was a mess. There was no privacy, and the noise from other tenants was unbearable. I had issues with cleanliness, and the place didn’t match the description. I regretted booking here and wouldn\'t recommend it to anyone.',
        date: 'March 2025'
      }
    ],
    location: {
      lat: 52.3809553943508,
      lng: 4.939309666406198,
    },
  }
];
