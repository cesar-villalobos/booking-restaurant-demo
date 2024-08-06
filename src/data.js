//SOCIAL ICONS
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

//SPECIALS FOOD
import greekSalad from './assets/specials/greekSalad.jpg';
import bruschetta from './assets/specials/bruschetta.jpg';
import lemonDessert from './assets/specials/lemonDessert.jpg';

// TESTIMONIALS

import sara from './assets/testimonials/sara.jpeg';
import laura from './assets/testimonials/laura.jpeg';
import john from './assets/testimonials/john.jpeg';
import peter from './assets/testimonials/peter.jpeg';

// LINKS FOR NAVBAR
export const links = [
  {
    id: 1,
    link: 'about',
  },
  {
    id: 2,
    link: 'menu',
  },
  {
    id: 3,
    link: 'testimonials',
  },
  {
    id: 4,
    link: 'contact',
  },
];

export const specials = [
  {
    id: 1,
    image: greekSalad,
    name: 'Greek Salad',
    price: '$ 11.59',
    description:
      'The famous greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
  },
  {
    id: 2,
    image: bruschetta,
    name: 'Bruschetta',
    price: '$ 5.99',
    description:
      'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive.',
  },
  {
    id: 3,
    image: lemonDessert,
    name: 'Lemon Dessert',
    price: '$ 5.00',
    description:
      'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
  },
];

// TESTIMONIALS
export const testimonials = [
  {
    id: 1,
    image: sara,
    name: 'Sara Brown',
  },
  {
    id: 2,
    image: laura,
    name: 'Laura Miller',
  },
  {
    id: 3,
    image: john,
    name: 'John Smith',
  },

  {
    id: 4,
    image: peter,
    name: 'Peter Wilson',
  },
];

// FOOTER CONTACT
export const contacts = [
  {
    id: 1,
    link: 'mailto:lemon@littlelem.com',
    title: 'lemon@littlelem.com',
  },
  {
    id: 2,
    link: 'tel:+12161234567',
    title: '(216) 123-4567',
  },
  {
    id: 3,
    link: 'mailto:littlemon@chicago.com',
    title: 'littlemon@chicago.com',
  },
];

// FOOTER SOCIAL LINKS
export const socials = [
  {
    id: 1,
    child: <FaFacebook size={30} />,
    link: 'https://facebook.com',
  },
  {
    id: 2,
    child: <FaInstagram size={30} />,
    link: 'https://instagram.com/',
  },
  {
    id: 4,
    child: <FaTwitter size={30} />,
    link: 'https://twitter.com/',
  },
];
