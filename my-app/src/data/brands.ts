// src/data/brands.ts

interface Brand {
  name: string;
  url: string;
  imageUrl: string;
  altText: string;
}

export const brands: Brand[] = [
  {
    name: "Samsung",
    url: "https://tuenlace.com/samsung",
    imageUrl: "https://static.vecteezy.com/system/resources/previews/020/975/547/non_2x/samsung-logo-samsung-icon-transparent-free-png.png",
    altText: "Samsung categoria"
  },
  {
    name: "Apple",
    url: "https://tuenlace.com/iphone",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2jQZWa_tY5btzxuniasKP1ch-REklhkNtxUbSLYZ95cjeSrXfZI0NV2Tn&s=10$",
    altText: "Iphone categoria"
  },
  {
    name: "Amazon",
    url: "https://tuenlace.com/iphone",
    imageUrl: "https://wiemx.com/wp-content/uploads/2026/04/1-400x133.png",
    altText: "Amazon logo"
  },
  {
    name: "Mercado libre",
    url: "https://tuenlace.com/iphone",
    imageUrl: "https://wiemx.com/wp-content/uploads/2026/04/2-400x133.png",
    altText: "Mercado libre logo"
  },
  {
    name: "Movistar",
    url: "https://tuenlace.com/iphone",
    imageUrl: "https://wiemx.com/wp-content/uploads/2026/04/4-400x133.png",
    altText: "Movistar logo"
  },
];