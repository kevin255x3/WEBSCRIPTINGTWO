import React, { useState } from "react";
import Wardrobe from "./Wardrobe.jsx";
import Modelroom from "./Modelroom.jsx";
import InformationSection from "./InformationSection.jsx";

const CLOTHES_GALLERY = [
  {
    id: 1,
    title: "Appolonaire Jacket",
    designer: "Kiko Kostadinov",
    price: 2081.0,
    clothesSrc: "./images/kk-jacket.webp",
    description:
      "The Appolonaire Jacket by Kiko Kostadinov combines modern tailoring with functional design, showcasing clean lines and a sleek, avant-garde silhouette. Made from high-quality materials, it features intricate detailing and innovative construction, offering both versatility and a bold aesthetic. This jacket is a perfect blend of contemporary fashion and utility.",
  },
  {
    id: 2,
    title: "Goat Tibetan Fur Bomber",
    designer: "Sacai",
    price: 950.0,
    clothesSrc: "./images/sacaibomber.webp",
    description:
      "The Tibetan Goat Fur Bomber by Sacai blends luxury with streetwear in a bold, standout piece. Featuring vibrant, textured goat fur and a sleek, oversized silhouette, this jacket offers a striking balance between warmth and high fashion. Sacai’s signature hybrid design merges functionality with avant-garde style, making it a statement piece for any wardrobe.",
  },
  {
    id: 3,
    title: "Armor Hoodie",
    designer: "Thug Club",
    price: 178.0,
    clothesSrc: "./images/tc-armorhoodie.jpg",
    description:
      "The Armor Hoodie by Thug Club merges streetwear attitude with a bold, protective design. Featuring a structured, paneled construction that mimics body armor, this hoodie offers a unique, edgy silhouette. With its utilitarian details and oversized fit, it’s a striking blend of futuristic street style and everyday comfort.",
  },

  {
    id: 4,
    title: "Wide Bela Cotton Poplin Pants",
    designer: "Rick Owens",
    price: 1001.5,
    clothesSrc: "./images/ro-pants.jpg",
    description:
      "The wide Bela cotton poplin pants hoodie by Rick Owens features a unique fusion of oversized proportions and minimalist design. Made from crisp cotton poplin, this hoodie offers a relaxed fit with a structured silhouette, blending comfort and high-fashion aesthetics. Its avant-garde approach to streetwear adds a distinct edge to any look.",
  },

  {
    id: 5,
    title: "Hina Pleated Trousers",
    designer: "Kiko Kostandinov",
    price: 947.0,
    clothesSrc: "./images/kk-trousers.webp",
    description:
      "The Hina pleated trousers by Kiko Kostadinov embody a contemporary aesthetic with their distinctive pleating and tailored silhouette. Crafted from premium materials, these trousers offer a modern take on classic design, featuring a relaxed fit that effortlessly merges comfort and sophistication. The unique construction and attention to detail make them a versatile staple for both casual and elevated looks.",
  },
  {
    id: 6,
    title: "Safe Sex Forever Long Sleeve",
    designer: "Jean Paul Gaultier",
    price: 750.0,
    clothesSrc: "./images/jpg-ssf.webp",
    description:
      "The Safe Sex Forever long sleeve by Jean Paul Gaultier is a bold statement piece that combines provocative messaging with high-fashion flair. Made from soft, breathable fabric, this top features eye-catching graphics that celebrate individuality and self-expression. With its relaxed fit and unique design, it seamlessly blends comfort and edgy style, making it a standout addition to any wardrobe.",
  },
  {
    id: 7,
    title: "Skeleton Ring",
    designer: "Chrome Hearts",
    price: 800.0,
    clothesSrc: "./images/ch-skeletonring.webp",
    description:
      "The Skeleton Ring by Chrome Hearts showcases a striking design that merges gothic aesthetics with contemporary craftsmanship. This bold piece features intricate detailing, capturing the essence of skeletal forms and adding a touch of edge to any ensemble. Crafted from high-quality materials, it serves as a statement accessory that effortlessly blends art and fashion.",
  },
  {
    id: 8,
    title: "Tornado Spiral Boots",
    designer: "Carol Christian Poell",
    price: 2867.71,
    clothesSrc: "./images/ccp-boots.jpg",
    description:
      "The Tornado Spiral boots by Carol Christian Poell are a striking fusion of avant-garde design and craftsmanship. With their dynamic, spiraling silhouette and high-quality materials, these boots challenge traditional footwear aesthetics while ensuring a comfortable fit. Ideal for the fashion-forward individual, they elevate any outfit with their unique shape and bold presence, making a powerful statement with every step.",
  },
  {
    id: 9,
    title: "Danny Boots",
    designer: "Ann Demeulemeester",
    price: 1875.0,
    clothesSrc: "./images/adl-boots.webp",
    description:
      "The Danny boots by Ann Demeulemeester showcase a perfect blend of edgy sophistication and artisanal craftsmanship. Featuring a sleek, minimalist design with distinctive detailing, these boots are made from high-quality leather that molds to the foot for exceptional comfort. Their versatile silhouette makes them an essential addition to any wardrobe, effortlessly transitioning from casual to chic ensembles.",
  },
];

const MODEL_GALLERY = [
  {
    id: 1,
    title: "Balenciaga Defender",
    designer: "Balenciaga",
    price: 1580.0,
    modelSrc: "./models/balenciagadefender.glb",
    description:
      "The Balenciaga Defender is a bold and distinctive sneaker known for its exaggerated, oversized design and unconventional aesthetic. Featuring a chunky silhouette and tire-inspired sole, it reflects the brand’s avant-garde approach to fashion. The shoe often combines rugged materials with a futuristic edge, making it stand out as both a statement piece and a symbol of high fashion’s embrace of streetwear and industrial design influences.",
  },
  {
    id: 2,
    title: "Rick Owens Ramones",
    designer: "Rick Owens",
    price: 1200.0,
    modelSrc: "./models/rickowenramones.glb",
    description:
      "The Rick Owens Ramones are a bold fusion of avant-garde design and classic sneaker aesthetics, reflecting the designer’s signature dark, edgy style. With their chunky silhouette and high-top structure, these sneakers feature premium materials such as leather and suede, complemented by distinctive details like oversized laces and a reinforced toe cap. The Ramones seamlessly blend comfort and fashion, making them a versatile choice for both streetwear enthusiasts and high-fashion aficionados. Their unique design elevates any outfit, embodying a rebellious spirit that is synonymous with Rick Owens’ iconic brand.",
  },
  {
    id: 3,
    title: "CP Company Beanie",
    designer: "CP Company",
    price: 150.0,
    modelSrc: "./models/cpcompanybeanie.glb",
    description:
      "The CP Company beanie is a stylish and functional accessory known for its casual, utilitarian design. Crafted from high-quality materials, such as wool or cotton blends, it features the brand’s signature goggle lens embedded in the fold, adding a distinctive touch. This beanie perfectly combines warmth with CP Company’s innovative, military-inspired aesthetic, making it a popular choice for both fashion enthusiasts and those seeking practical, cold-weather wear.",
  },
];
const DESIGNER_GALLERY = [
  {
    id: 1,
    designer: "Kiko Kostadinov",
    description:
      "Kiko Kostadinov is a London-based Bulgarian fashion designer known for his innovative and utilitarian approach to menswear, blending technical functionality with unconventional silhouettes. Since launching his eponymous brand in 2016, Kostadinov has gained acclaim for his detailed craftsmanship and progressive designs, often inspired by workwear, sportswear, and geometric shapes. His collaborations with brands like ASICS have highlighted his skill in blending high-performance materials with avant-garde aesthetics, resulting in sneakers that combine utility with an artistic edge. Kostadinov’s brand explores fashion as a medium for experimentation, and his collections are known for their intricate layering, muted color palettes, and structured forms that challenge traditional boundaries of menswear and womenswear.",
    involvement: "ASICS, OTTO858, Kiko Kostadinov, AFFIX",
  },
  {
    id: 2,
    designer: "Yohji Yamamoto",
    description:
      "Yohji Yamamoto is a pioneering Japanese fashion designer celebrated for his avant-garde, deconstructed approach to fashion and his signature use of black. Since founding his label in the early 1980s, Yamamoto has crafted a distinctive aesthetic characterized by flowing, oversized silhouettes, asymmetry, and minimalist elegance that often subverts traditional fashion norms. Known for his philosophy that clothing should not simply adorn but create a sense of mystery around the wearer, Yamamoto’s designs blend elements of Japanese craftsmanship with Western tailoring. His work with luxurious, often textured fabrics emphasizes form over decoration, making each piece both wearable and artistic. Collaborations with brands like Adidas, through Y-3, have brought his innovative designs into the sportswear realm, marrying his high-fashion sensibilities with streetwear influences.",
    involvement:
      "Yohji Yamamoto, Y's, Y3 with adidas, Yohji Yamamoto Pour Homme, Yohji Yamamoto + Noir",
  },
  {
    id: 3,
    designer: "Rei Kawakubo",
    description:
      "Rei Kawakubo is a visionary Japanese fashion designer and the founder of Comme des Garçons, a brand celebrated for its radical approach to fashion and its defiance of conventional beauty standards. Since establishing Comme des Garçons in 1969, Kawakubo has consistently pushed the boundaries of design with her sculptural, often avant-garde pieces that challenge traditional ideas of shape, form, and gender in clothing. Known for her use of black, asymmetry, and experimental silhouettes, Kawakubo’s work often explores themes of deconstruction, imperfection, and abstract beauty, which have become hallmarks of her style.",
    involvement:
      "Founder of Dover Street Market, Comme des Garcons, Comme des Garcons Play, Comme des Garcons Shirt",
  },
];
const BRAND_GALLERY = [
  {
    id: 1,
    brand: "PAF, Post Archive Faction",
    description:
      "Post Archive Faction (PAF) is a South Korean fashion brand known for its experimental and forward-thinking approach to design, blending technical innovation with avant-garde aesthetics. Founded in 2018 by Dongjoon Lim and Sookyo Jeong, PAF explores the concept of “future heritage,” creating pieces that merge futuristic design elements with functionality and high-performance materials. The brand’s collections often feature deconstructed silhouettes, modular components, and architectural shapes that allow for unique forms of self-expression.",
    founder: "Dongjoon Lim, Sookyo Jeong",
  },
  {
    id: 2,
    brand: "Hyein Seo",
    description:
      "Hyein Seo is a South Korean fashion brand founded by designer Hyein Seo, known for its edgy, rebellious aesthetic that merges streetwear with high fashion. Since launching the brand in 2014, Seo has gained global recognition for her dark, dystopian-inspired designs that challenge traditional gender norms and embrace a youthful, anti-establishment attitude. Her collections often feature oversized silhouettes, bold graphics, and utilitarian details, such as straps, buckles, and tactical pockets, evoking themes of empowerment and self-expression.",
    founder: "Hyein Seo",
  },
  {
    id: 3,
    brand: "Basketcase Gallery",
    description:
      "Basketcase Gallery is a Los Angeles-based fashion brand and creative collective known for its playful, DIY-inspired approach to streetwear. Founded by artist Sean Pablo and creative director Nick Atkins, the brand merges skate culture with art and punk influences, creating pieces that feel both nostalgic and rebellious. Basketcase Gallery’s collections often feature hand-drawn graphics, bold typography, and references to underground subcultures, appealing to fans of alternative fashion who value authenticity and self-expression.",
    founder: "Sean Pablo, Nick Atkins",
  },
];

const RESOURCE_GALLERY = [
  {
    id: 1,
    title: "Outlander Magazine",
    description:
      "Outlander Magazine is a social media page with a niche in current trends in the fashion world. Outlander Magazine has trendy, current and easy to consume content for fashion enthusiasts.",
    link: "https://outlandermag.com/",
  },
  {
    id: 2,
    title: "Bliss Foster",
    description:
      "Bliss Foster is a YouTube creator known for his in-depth analysis and exploration of avant-garde fashion, particularly focusing on designers who push boundaries and challenge conventional aesthetics. With a unique approach to fashion criticism, Bliss dives deep into the conceptual and often philosophical aspects of collections from designers like Rei Kawakubo, Martin Margiela, and Rick Owens. His content is educational, often resembling a visual lecture, where he unpacks the historical, cultural, and artistic influences behind each designer’s work.",
    link: "https://www.youtube.com/@BlissFoster",
  },
  {
    id: 3,
    title: "Threaducation",
    description:
      "Threaducation is a YouTube channel dedicated to exploring the history, evolution, and cultural impact of fashion brands, designers, and trends. Known for its well-researched, documentary-style videos, Threaducation delves into the origins and influences behind some of the most iconic brands and designers in fashion, including names like Supreme, Ralph Lauren, and Off-White, as well as subcultures like streetwear, high fashion, and sneaker culture.",
    link: "https://www.youtube.com/@Threaducation",
  },
];

function App() {
  // Clothing/Model Section
  const [model, setModels] = useState(MODEL_GALLERY);
  const [garment, setGarments] = useState(CLOTHES_GALLERY);
  const [designer, setDesigner] = useState(DESIGNER_GALLERY);
  const [brand, setBrand] = useState(BRAND_GALLERY);
  const [resource, setResource] = useState(RESOURCE_GALLERY);
  const [favs, setFavs] = useState([]);
  const handleFavClick = (garmentID) => {
    if (favs.includes(garmentID)) {
      const newFavs = favs.filter((singleFav) => {
        return garmentID !== singleFav;
      });

      setFavs(newFavs);
    } else {
      setFavs([...favs, garmentID]);
    }
    // Model Section
  };

  return (
    <div className="bg-gradient-to-t from-blue-500 to-white-500 min-h-screen p-8 relative z-10">
      <h1 className="text-4xl font-Archivo text-yellow-500 text-center mb-8 ">
        {" "}
        Archive Showroom{" "}
      </h1>
      <div className="grid grid-cols-3 gap-6 ">
        {garment.map((singleGarment) => {
          return (
            <Wardrobe
              garment={singleGarment}
              favourites={favs}
              handleFavClick={handleFavClick}
            />
          );
        })}
      </div>
      <div className="bg-gradient-to-t from-blue-500 to-white-500 min-h-screen p-8 relative z-10">
        <h1 className="text-4xl font-Archivo text-yellow-500 text-center mb-8 ">
          {" "}
          3d Model Gallery{" "}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {model.map((singleModel) => {
            return <Modelroom model={singleModel} key={singleModel.modelSrc} />;
          })}
        </div>
        <div></div>
      </div>
      <div>
        <div>
          <InformationSection
            designer={designer}
            brand={brand}
            resource={resource}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
