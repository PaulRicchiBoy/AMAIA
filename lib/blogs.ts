// lib/blogs.ts

export interface BlogPost {
  id: string;
  slug: string;
  title: { es: string; en: string };
  excerpt: { es: string; en: string };
  author: { es: string; en: string };
  authorRole: { es: string; en: string };
  date: string;
  readTime: number;
  image: string;
  category: { es: string; en: string };
  categorySlug: string;
  tags: { es: string[]; en: string[] };
  views: number;
  likes: number;
  comments: number;
  featured: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'machu-picchu-guia-completa',
    title: {
      es: 'Machu Picchu: Guía Completa para tu Visita 2024',
      en: 'Machu Picchu: Complete Guide for Your Visit 2024'
    },
    excerpt: {
      es: 'Todo lo que necesitas saber antes de visitar la maravilla del mundo: boletos, horarios, mejores épocas, cómo llegar y consejos útiles.',
      en: 'Everything you need to know before visiting the world wonder: tickets, schedules, best times, how to get there and useful tips.'
    },
    author: { es: 'María Gonzales', en: 'Maria Gonzales' },
    authorRole: { es: 'Guía Oficial de Machu Picchu', en: 'Official Machu Picchu Guide' },
    date: '2024-01-15',
    readTime: 8,
    image: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    category: { es: 'Machu Picchu', en: 'Machu Picchu' },
    categorySlug: 'machu-picchu',
    tags: {
      es: ['Machu Picchu', 'Guía de Viaje', 'Consejos', 'Perú'],
      en: ['Machu Picchu', 'Travel Guide', 'Tips', 'Peru']
    },
    views: 15420,
    likes: 892,
    comments: 124,
    featured: true
  },
  {
    id: '2',
    slug: 'camino-inca-experiencia',
    title: {
      es: 'Camino Inca: Una Experiencia de Vida',
      en: 'Inca Trail: A Life Experience'
    },
    excerpt: {
      es: 'Descubre por qué el Camino Inca es considerado uno de los mejores treks del mundo. Día a día, consejos y qué llevar.',
      en: 'Discover why the Inca Trail is considered one of the best treks in the world. Day by day, tips and what to bring.'
    },
    author: { es: 'Carlos Mendoza', en: 'Carlos Mendoza' },
    authorRole: { es: 'Guía de Montaña', en: 'Mountain Guide' },
    date: '2024-01-10',
    readTime: 10,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    category: { es: 'Trekking', en: 'Trekking' },
    categorySlug: 'trekking',
    tags: {
      es: ['Camino Inca', 'Trekking', 'Aventura', 'Machu Picchu'],
      en: ['Inca Trail', 'Trekking', 'Adventure', 'Machu Picchu']
    },
    views: 12350,
    likes: 745,
    comments: 98,
    featured: true
  },
  {
    id: '3',
    slug: 'gastronomia-peruana-platos',
    title: {
      es: 'Gastronomía Peruana: 10 Platos que Debes Probar',
      en: 'Peruvian Cuisine: 10 Dishes You Must Try'
    },
    excerpt: {
      es: 'La cocina peruana es una de las más diversas del mundo. Te presentamos los platos imperdibles en tu viaje.',
      en: 'Peruvian cuisine is one of the most diverse in the world. We present the must-try dishes on your trip.'
    },
    author: { es: 'Lucía Vargas', en: 'Lucia Vargas' },
    authorRole: { es: 'Chef Peruana', en: 'Peruvian Chef' },
    date: '2024-01-05',
    readTime: 6,
    image: 'https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    category: { es: 'Gastronomía', en: 'Gastronomy' },
    categorySlug: 'gastronomia',
    tags: {
      es: ['Ceviche', 'Lomo Saltado', 'Comida Peruana', 'Gastronomía'],
      en: ['Ceviche', 'Lomo Saltado', 'Peruvian Food', 'Gastronomy']
    },
    views: 9870,
    likes: 623,
    comments: 87,
    featured: false
  },
  {
    id: '4',
    slug: 'montana-7-colores-guia',
    title: {
      es: 'Montaña de 7 Colores: Guía Completa',
      en: 'Rainbow Mountain: Complete Guide'
    },
    excerpt: {
      es: 'Cómo llegar, qué llevar, mejores épocas y consejos para disfrutar la Montaña de Colores sin sufrir la altura.',
      en: 'How to get there, what to bring, best times and tips to enjoy Rainbow Mountain without suffering from altitude.'
    },
    author: { es: 'Diego Torres', en: 'Diego Torres' },
    authorRole: { es: 'Guía de Montaña', en: 'Mountain Guide' },
    date: '2023-12-28',
    readTime: 7,
    image: 'https://images.unsplash.com/photo-1598977123118-4e30ba3a0134?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    category: { es: 'Aventura', en: 'Adventure' },
    categorySlug: 'aventura',
    tags: {
      es: ['Montaña de Colores', 'Vinicunca', 'Trekking', 'Altura'],
      en: ['Rainbow Mountain', 'Vinicunca', 'Trekking', 'Altitude']
    },
    views: 11230,
    likes: 678,
    comments: 92,
    featured: true
  },
  {
    id: '5',
    slug: 'valle-sagrado-que-ver',
    title: {
      es: 'Valle Sagrado: Qué Ver y Hacer',
      en: 'Sacred Valley: What to See and Do'
    },
    excerpt: {
      es: 'Explora Pisac, Ollantaytambo, Maras, Moray y más. Guía completa del corazón del Imperio Inca.',
      en: 'Explore Pisac, Ollantaytambo, Maras, Moray and more. Complete guide to the heart of the Inca Empire.'
    },
    author: { es: 'Ana María Flores', en: 'Ana Maria Flores' },
    authorRole: { es: 'Arqueóloga', en: 'Archaeologist' },
    date: '2023-12-20',
    readTime: 8,
    image: 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    category: { es: 'Cusco', en: 'Cusco' },
    categorySlug: 'cusco',
    tags: {
      es: ['Valle Sagrado', 'Pisac', 'Ollantaytambo', 'Incas'],
      en: ['Sacred Valley', 'Pisac', 'Ollantaytambo', 'Incas']
    },
    views: 8760,
    likes: 543,
    comments: 76,
    featured: false
  },
  {
    id: '6',
    slug: 'mejor-epoca-viajar-peru',
    title: {
      es: 'Mejor Época para Viajar a Perú',
      en: 'Best Time to Travel to Peru'
    },
    excerpt: {
      es: 'Clima en costa, sierra y selva. Cuándo viajar a cada destino según tus preferencias.',
      en: 'Climate on the coast, highlands and jungle. When to travel to each destination according to your preferences.'
    },
    author: { es: 'Roberto Sánchez', en: 'Roberto Sanchez' },
    authorRole: { es: 'Experto en Viajes', en: 'Travel Expert' },
    date: '2023-12-15',
    readTime: 6,
    image: 'https://images.unsplash.com/photo-1526392060935-9d621c5c46b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    category: { es: 'Consejos', en: 'Tips' },
    categorySlug: 'consejos',
    tags: {
      es: ['Clima', 'Mejor Época', 'Viajar a Perú', 'Consejos'],
      en: ['Weather', 'Best Time', 'Travel to Peru', 'Tips']
    },
    views: 15430,
    likes: 912,
    comments: 134,
    featured: true
  }
];

// Exportar blogCategories - ¡ESTO ES LO QUE FALTABA!
export const blogCategories = [
  { id: 'todos', name: { es: 'Todos', en: 'All' }, count: blogPosts.length },
  { id: 'machu-picchu', name: { es: 'Machu Picchu', en: 'Machu Picchu' }, count: blogPosts.filter(p => p.categorySlug === 'machu-picchu').length },
  { id: 'trekking', name: { es: 'Trekking', en: 'Trekking' }, count: blogPosts.filter(p => p.categorySlug === 'trekking').length },
  { id: 'gastronomia', name: { es: 'Gastronomía', en: 'Gastronomy' }, count: blogPosts.filter(p => p.categorySlug === 'gastronomia').length },
  { id: 'cusco', name: { es: 'Cusco', en: 'Cusco' }, count: blogPosts.filter(p => p.categorySlug === 'cusco').length },
  { id: 'aventura', name: { es: 'Aventura', en: 'Adventure' }, count: blogPosts.filter(p => p.categorySlug === 'aventura').length },
  { id: 'consejos', name: { es: 'Consejos', en: 'Tips' }, count: blogPosts.filter(p => p.categorySlug === 'consejos').length }
];

// También puedes exportar funciones útiles
export const getFeaturedPosts = () => blogPosts.filter(post => post.featured);
export const getPopularPosts = (limit: number = 3) => [...blogPosts].sort((a, b) => b.views - a.views).slice(0, limit);
export const getRecentPosts = (limit: number = 3) => [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, limit);