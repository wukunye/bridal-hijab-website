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

const hijabImage = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1000&q=85`;

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
    sizes: ["XXS", "XS", "S", "M", "L", "XL"],
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
    sizes: ["XXS", "XS", "S", "M", "L", "XL"],
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
    sizes: ["XXS", "XS", "S", "M", "L", "XL"],
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
    sizes: ["XXS", "XS", "S", "M", "L", "XL"]
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
    images: [hijabImage("photo-1584184924103-e310d9dc82fc"), hijabImage("photo-1596755389378-c31d21fd1273")],
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
    images: [hijabImage("photo-1544005313-94ddf0286df2"), hijabImage("photo-1534528741775-53994a69daeb")],
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
    images: [hijabImage("photo-1524504388940-b1c1722653e1"), hijabImage("photo-1525507119028-ed4c629a60a3")],
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
    images: [hijabImage("photo-1515886657613-9f3515b0c78f"), hijabImage("photo-1506629905607-d9e2f1fd7c5d")],
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
    images: [hijabImage("photo-1485968579580-b6d095142e6e"), hijabImage("photo-1483985988355-763728e1935b")],
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
    images: [hijabImage("photo-1488426862026-3ee34a7d66df"), hijabImage("photo-1485230895905-ec40ba36b9bc")],
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
    images: [hijabImage("photo-1529139574466-a303027c1d8b"), hijabImage("photo-1515886657613-9f3515b0c78f")],
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
    images: [hijabImage("photo-1485230895905-ec40ba36b9bc"), hijabImage("photo-1509941943102-10c232535736")],
    material: "Premium chiffon",
    colors: ["Moonlight", "Silver taupe"],
    sizes: ["180 x 70 cm"]
  }
];

export const getProduct = (slug: string) => products.find((product) => product.slug === slug);
export const getCollectionProducts = (collection: Collection) => products.filter((product) => product.collection === collection);
