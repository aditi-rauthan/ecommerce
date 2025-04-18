// export const navigation = {
//     categories: [
//       {
//         id: 'women',
//         name: 'Women',
//         featured: [
//           {
//             name: 'New Arrivals',
//             href: '/',
//             imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
//             imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
//           },
//           {
//             name: 'Basic Tees',
//             href: '/',
//             imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
//             imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
//           },
//         ],
//         sections: [
//           {
//             id: 'clothing',
//             name: 'Clothing',
//             items: [
//               { name: 'Tops', id:"top", href: `{women/clothing/tops}` },
//               { name: 'Dresses', id:"women_dress", href: '#' },
//               { name: 'Women Jeans', id: 'women_jeans' },
//               { name: 'Lengha Choli', id: 'lengha_choli' },
//               { name: 'Sweaters', id: 'sweater' },
//               { name: 'T-Shirts', id: 't-shirt' },
//               { name: 'Jackets', id: 'jacket' },
//               { name: 'Gouns', id: 'gouns' },
//               { name: 'Sarees', id: 'saree' },
//               { name: 'Kurtas', id: 'kurtas' },
//             ],
//           },
//           {
//             id: 'accessories',
//             name: 'Accessories',
//             items: [
//               { name: 'Watches', id: 'watch' },
//               { name: 'Wallets', id: 'wallet' },
//               { name: 'Bags', id: 'bag' },
//               { name: 'Sunglasses', id: 'sunglasse' },
//               { name: 'Hats', id: 'hat' },
//               { name: 'Belts', id: 'belt' },
//             ],
//           },
//           {
//             id: 'brands',
//             name: 'Brands',
//             items: [
//               { name: 'Full Nelson', id: '#' },
//               { name: 'My Way', id: '#' },
//               { name: 'Re-Arranged', id: '#' },
//               { name: 'Counterfeit', id: '#' },
//               { name: 'Significant Other', id: '#' },
//             ],
//           },
//         ],
//       },
//       {
//         id: 'men',
//         name: 'Men',
//         featured: [
//           {
//             name: 'New Arrivals',
//             id: '#',
//             imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
//             imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
//           },
//           {
//             name: 'Artwork Tees',
//             id: '#',
//             imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
//             imageAlt:
//               'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
//           },
//         ],
//         sections: [
//           {
//             id: 'clothing',
//             name: 'Clothing',
//             items: [
//               { name: 'Mens Kurtas', id: 'mens_kurta' },
//               { name: 'Shirt', id: 'shirt' },
//               { name: 'Men Jeans', id: 'men_jeans' },
//               { name: 'Sweaters', id: '#' },
//               { name: 'T-Shirts', id: 't-shirt' },
//               { name: 'Jackets', id: '#' },
//               { name: 'Activewear', id: '#' },
              
//             ],
//           },
//           {
//             id: 'accessories',
//             name: 'Accessories',
//             items: [
//               { name: 'Watches', id: '#' },
//               { name: 'Wallets', id: '#' },
//               { name: 'Bags', id: '#' },
//               { name: 'Sunglasses', id: '#' },
//               { name: 'Hats', id: '#' },
//               { name: 'Belts', id: '#' },
//             ],
//           },
//           {
//             id: 'brands',
//             name: 'Brands',
//             items: [
//               { name: 'Re-Arranged', id: '#' },
//               { name: 'Counterfeit', id: '#' },
//               { name: 'Full Nelson', id: '#' },
//               { name: 'My Way', id: '#' },
//             ],
//           },
//         ],
//       },
//     ],
//     pages: [
//       { name: 'Company', id: '/' },
//       { name: 'Stores', id: '/' },
//     ],
//   }


import Home from "../customer/Components/Home/HomeProductSection"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export const navigation = {
  categories: [
    {
      id: 'wedding',
      name: 'Wedding',
      featured: [
        {
          name: 'Bridal Wear',
          href: '/',
          imageSrc: 'https://media.istockphoto.com/id/1186214696/photo/hindu-wedding-ritual-wherein-bride-and-groom-hand.jpg?s=2048x2048&w=is&k=20&c=c_TdMvcNkJxGecvC8kpTLjTuvWXJUIy8AqvnKmyQvws=',
          imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
        {
          name: 'Decor & Venues',
          href: '/',
          imageSrc: 'https://images.unsplash.com/photo-1513278974582-3e1b4a4fa21e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        },
      ],
      sections: [
        {
          id: 'attire',
          name: 'Attire & Accessories',
          items: [
            { name: 'Bridal Wear', href: '#' },
            { name: 'Jewelry', href: '#' },
            { name: 'Makeup & Styling', href: '#' },
          ],
        },
        {
          id: 'planning',
          name: 'Planning & Services',
          items: [
            { name: 'Planners', href: '#' },
            { name: 'Invitations', href: '#' },
            { name: 'Wedding Gifts', href: '#' },
            { name: 'Honeymoon Packages', href: '#' },
          ],
        },
        {
          id: 'venue',
          name: 'Venue & Decor',
          items: [
            { name: 'Decor & Venues', href: '#' },
            { name: 'Catering', href: '#' },
          ],
        },
        {
          id: 'entertainment',
          name: 'Entertainment & Photography',
          items: [
            { name: 'Photography', href: '#' },
            { name: 'Entertainment', href: '#' },
            { name: 'Wedding Bands', href: '#' },
            { name: 'Choreographers', href: '#' },
            { name: 'Mehendi Artists', href: '#' },
          ],
        },
        {
          id: 'food',
          name: 'Food & Desserts',
          items: [
            { name: 'Wedding Cakes', href: '#' },
          ],
        },
      ],
    },
    {
      id: 'catering',
      name: 'Catering',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc:
            'https://images.unsplash.com/photo-1555244162-803834f70033?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2F0ZXJpbmd8ZW58MHx8MHx8fDA%3D',
          imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
        },
        {
          name: 'Artwork Tees',
          href: '#',
          imageSrc: 'https://media.istockphoto.com/id/1251770418/photo/food-on-the-plane-rice-and-kari-asian-cuisine.webp?a=1&b=1&s=612x612&w=0&k=20&c=028t_0ETYvSwoVSLNRM9yaOsF8dxaxkTskNlTWw77SY=',
          imageAlt:
            'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
        },
      ],
      sections: [
        {
          id: 'menu',
          name: 'Menu Options',
          items: [
            { name: 'Vegetarian', href: '#' },
            { name: 'Non-Vegetarian', href: '#' },
            { name: 'Buffet', href: '#' },
            { name: 'Custom Menus', href: '#' },
          ],
        },
        {
          id: 'special',
          name: 'Special Features',
          items: [
            { name: 'Live Counters', href: '#' },
            { name: 'Desserts & Beverages', href: '#' },
          ],
        },
        
      ],
    },
    {
      id: 'birthday',
      name: 'Birthday',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc:
            'https://images.unsplash.com/photo-1601268588577-319223ba7cb3?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmlydGhkYXklMjBwYXJ0eXxlbnwwfHwwfHx8MA%3D%3D',
          imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
        },
        {
          name: 'Artwork Tees',
          href: '#',
          imageSrc: 'https://images.unsplash.com/photo-1544155892-b2b6c64204fc?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          imageAlt:
            'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
        },
      ],
      sections: [
        {
          id: 'theme',
          name: 'Themes & Decor',
          items: [
            { name: 'Theme Parties', href: '#' },
            { name: 'Cake & Decorations', href: '#' },
          ],
        },
        {
          id: 'entertainment',
          name: 'Entertainment & Planning',
          items: [
            { name: 'Entertainment', href: '#' },
            { name: 'Party Planners', href: '#' },
            { name: 'Return Gifts', href: '#' },
            { name: 'Magicians & Clowns', href: '#' },
          ],
        },
        
      ],
    },
    {
      id: 'dj',
      name: 'DJ',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc:
            'https://plus.unsplash.com/premium_photo-1664457233868-d2a40c759998?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
        },
        {
          name: 'Artwork Tees',
          href: '#',
          imageSrc: 'https://images.unsplash.com/photo-1517814761483-6769dab4e9c0?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGp8ZW58MHx8MHx8fDA%3D',
          imageAlt:
            'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
        },
      ],
      sections: [
        {
          id: 'service',
          name: 'Services',
          items: [
            { name: 'Wedding DJs', id: '#' },
            { name: 'Party DJs', id: '#' },
            { name: 'Corporate Events', id: '#' },
          ],
        },
        {
          id: 'special',
          name: 'Setup & Equipment',
          items: [
            { name: 'Live Bands', id: '#' },
            { name: 'Sound & Lighting', id: '#' },
            { name: 'Dance Floors', id: '#' },
          ],
        },
        
      ],
    },
  ],
  // pages: [
  //   { name: 'Company', id: '/' },
  //   { name: 'Stores', href: '/' },
  // ]
}