export type Collection = "bridal" | "hijab";

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: string;
  collection: Collection;
  subtitle?: string;
  description: string;
  images: string[];
  material?: string;
  colors?: string[];
  sizes?: string[];
  featured?: boolean;
};

export const products: Product[] = [
  {
    id: "bridal-aurora",
    slug: "aurora",
    name: "Aurora",
    category: "Wedding Dress",
    collection: "bridal",
    subtitle: "A-line lace gown",
    description: "A light-catching silhouette with a softly sculpted bodice and hand-finished lace that moves with quiet grace.",
    images: ["/images/bridal/aurora-front.jpg"],
    material: "Silk satin, French lace",
    colors: ["Ivory", "Pearl"],
    sizes: ["4", "6", "8", "10", "12", "14", "16", "18", "20", "22", "24", "26", "28", "30"],
    featured: true
  },
  {
    id: "bridal-celeste",
    slug: "celeste",
    name: "Celeste",
    category: "Wedding Dress",
    collection: "bridal",
    subtitle: "Beaded gown with overskirt",
    description: "A sculpted, hand-beaded silhouette framed by a sweeping satin overskirt for a refined, dramatic entrance.",
    images: ["/images/bridal/celeste-front.jpg"],
    material: "Beaded tulle, duchess satin",
    colors: ["Ivory", "Soft white"],
    sizes: ["4", "6", "8", "10", "12", "14", "16", "18", "20", "22", "24", "26", "28", "30"],
    featured: true
  },
  {
    id: "bridal-serena",
    slug: "serena",
    name: "Serena",
    category: "Wedding Dress",
    collection: "bridal",
    subtitle: "Soft tulle ball gown",
    description: "Layers of airy tulle frame a clean neckline and a gently romantic volume for an unforgettable entrance.",
    images: ["/images/bridal/serena-front.jpg", "/images/bridal/serena-back.jpg"],
    material: "Italian tulle, silk organza",
    colors: ["Ivory", "Warm white"],
    sizes: ["4", "6", "8", "10", "12", "14", "16", "18", "20", "22", "24", "26", "28", "30"],
    featured: true
  },
  {
    id: "bridal-elise",
    slug: "elise",
    name: "Elise",
    category: "Veil",
    collection: "bridal",
    subtitle: "Cathedral silk veil",
    description: "A sweeping cathedral veil finished with a whisper of embroidered edge for a poised, ethereal finish.",
    images: ["/images/bridal/elise-veil.jpg"],
    material: "Silk tulle, tonal embroidery",
    colors: ["Ivory", "Pearl"],
    sizes: ["2.5 m", "3 m"],
    featured: true
  },
  {
    id: "bridal-luna",
    slug: "luna",
    name: "Luna",
    category: "Evening Dress",
    collection: "bridal",
    subtitle: "Embellished evening gown",
    description: "A deep plum evening gown with a luminous beaded bodice and fluid full skirt, designed for elegant celebrations.",
    images: ["/images/bridal/luna-evening.jpg"],
    material: "Embellished satin, crystal beading",
    colors: ["Deep plum", "Amethyst"],
    sizes: ["4", "6", "8", "10", "12", "14", "16", "18", "20", "22", "24", "26", "28", "30"]
  },
  {
    id: "bridal-amelie",
    slug: "amelie",
    name: "Amelie",
    category: "Veil",
    collection: "bridal",
    subtitle: "Fingertip lace veil",
    description: "A delicate fingertip veil with hand-placed floral lace that catches the light in every photograph.",
    images: ["/images/bridal/amelie-veil.jpg"],
    material: "French lace, soft tulle",
    colors: ["Ivory", "Soft white"],
    sizes: ["1.2 m", "1.5 m"]
  },
  {
    id: "hijab-soft-taupe",
    slug: "soft-taupe-modal",
    name: "Soft Taupe Modal",
    category: "Modal",
    collection: "hijab",
    subtitle: "Everyday modal scarf",
    description: "A breathable modal scarf with a brushed hand-feel and relaxed drape for effortless everyday styling.",
    images: ["/images/hijab/soft-taupe-modal.jpg"],
    material: "Modal",
    colors: ["Soft taupe", "Mushroom"],
    sizes: ["180 x 70 cm"],
    featured: true
  },
  {
    id: "hijab-ivory-chiffon",
    slug: "ivory-chiffon",
    name: "Ivory Chiffon",
    category: "Chiffon",
    collection: "hijab",
    subtitle: "Lightweight chiffon scarf",
    description: "A softly translucent chiffon with a refined finish, made for elegant layering and occasion dressing.",
    images: ["/images/hijab/ivory-chiffon.jpg"],
    material: "Premium chiffon",
    colors: ["Ivory", "Cream"],
    sizes: ["180 x 70 cm"],
    featured: true
  },
  {
    id: "hijab-midnight-jersey",
    slug: "midnight-jersey",
    name: "Midnight Jersey",
    category: "Jersey",
    collection: "hijab",
    subtitle: "Soft stretch jersey",
    description: "A softly structured jersey that stays in place while retaining a polished, fluid silhouette.",
    images: ["/images/hijab/midnight-jersey.jpg"],
    material: "Viscose jersey",
    colors: ["Midnight", "Charcoal"],
    sizes: ["180 x 75 cm"]
  },
  {
    id: "hijab-pearl-bridal",
    slug: "pearl-bridal-hijab",
    name: "Pearl Bridal Hijab",
    category: "Bridal",
    collection: "hijab",
    subtitle: "Silk-blend bridal wrap",
    description: "A luminous silk-blend wrap with a calm, graceful drape for bridal looks and special occasions.",
    images: ["/images/hijab/pearl-bridal-hijab.jpg"],
    material: "Silk blend",
    colors: ["Pearl", "Champagne"],
    sizes: ["200 x 75 cm"],
    featured: true
  },
  {
    id: "hijab-sand-modal",
    slug: "sand-modal",
    name: "Sand Modal",
    category: "Modal",
    collection: "hijab",
    subtitle: "Warm neutral modal",
    description: "A warm, versatile neutral designed to bring softness and ease to a considered wardrobe.",
    images: ["/images/hijab/sand-modal.jpg"],
    material: "Modal",
    colors: ["Sand", "Warm beige"],
    sizes: ["180 x 70 cm"]
  },
  {
    id: "hijab-rosewood-chiffon",
    slug: "rosewood-chiffon",
    name: "Rosewood Chiffon",
    category: "Chiffon",
    collection: "hijab",
    subtitle: "Muted rose chiffon",
    description: "A muted rosewood tone in an airy chiffon, adding quiet depth to day-to-evening dressing.",
    images: ["/images/hijab/rosewood-chiffon.jpg"],
    material: "Premium chiffon",
    colors: ["Rosewood", "Dusty rose"],
    sizes: ["180 x 70 cm"]
  },
  {
    id: "hijab-stone-jersey",
    slug: "stone-jersey",
    name: "Stone Jersey",
    category: "Jersey",
    collection: "hijab",
    subtitle: "Everyday jersey wrap",
    description: "A smooth, softly weighted jersey wrap that makes everyday elegance feel effortless.",
    images: ["/images/hijab/stone-jersey.jpg"],
    material: "Viscose jersey",
    colors: ["Stone", "Warm grey"],
    sizes: ["180 x 75 cm"]
  },
  {
    id: "hijab-moonlight-chiffon",
    slug: "moonlight-chiffon",
    name: "Moonlight Chiffon",
    category: "Chiffon",
    collection: "hijab",
    subtitle: "Evening chiffon scarf",
    description: "A cool, luminous chiffon with subtle movement for evening looks and intimate celebrations.",
    images: ["/images/hijab/moonlight-chiffon.jpg"],
    material: "Premium chiffon",
    colors: ["Moonlight", "Silver taupe"],
    sizes: ["180 x 70 cm"]
  }
];

export const getProduct = (slug: string) => products.find((product) => product.slug === slug);
export const getCollectionProducts = (collection: Collection) => products.filter((product) => product.collection === collection);
