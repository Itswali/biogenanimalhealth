import React from "react";
import { useParams } from "react-router-dom";
import product1 from "../../assests/products/bromacid.jpeg";
import product2 from "../../assests/products/tribiotic.jpeg";

// import product3 from '../../assests/products/lions moxin-c.jpeg'
// import product4 from '../../assests/products/colistin.jpeg'
// import product5 from '../../assests/products/b-g aspro-c.jpeg'
// import product6 from '../../assests/products/bronco.jpeg'
// import product7 from '../../assests/products/floxicol.jpeg'
// import product8 from '../../assests/products/eco-man.jpeg'
// import product9 from '../../assests/products/ensol-ag.jpeg'
// import product13 from '../../assests/products/trisul.jpeg'
// import product14 from '../../assests/products/tylo.jpeg'
// import product10 from '../../assests/products/symodef.jpeg'
// import product11 from '../../assests/products/Biotak.jpeg'

const products = [
  {
    name: "Bromacid",
    composition:
      "Triclabendazole ......... 12%, Levamisole HCL ......... 7.5%, Trimithoprim ......... 05%, Albendazole ......... 9.5%",
    indication:
      "For the treatment and control of CRD, CCRD, E.Coli, Coryza, Fowl, Cholera, Fowl Typhoid, and Necrotic Enteritis.",
    recommendedUse:
      "Cow / Buffalo: Prevention: 250ml per body weight. Treatment: 300ml per body weight. Goat / Sheep: Prevention: 250ml per body weight. Treatment: 300ml per body weight.",
    instruction:
      "* Shake well before use. * Store in a cool & dry place. * Protect from heat & light. * Reach out of the children.",
    packing: "1 Kilogram",
    image: product1,
    type: "ORAL POWDER",
  },
  {
    name: "Tribiotic",
    ml: "15 ml",
    composition: "Triclabendazole 10%, Levamisole HCL 5%, Albendazole 8%",
    indication:
      "For the treatment and control of E.Coli, Coryza, Fowl Cholera, and Necrotic Enteritis.",
    recommendedUse:
      "Cow / Buffalo: Prevention: 200ml per body weight. Treatment: 250ml per body weight. Goat / Sheep: Prevention: 150ml per body weight. Treatment: 200ml per body weight.",
    instruction:
      "Shake well before use. Store in a cool & dry place. Protect from heat & light. Keep away from children.",
    packing: "500 grams",
    image: product2,
    type: "ORAL POWDER",
  },
];

const ProductDetailPage = () => {
  const { name } = useParams();

  const product = products.find((product) => product.name === name);

  if (!product) {
    return <div>Product not found</div>;
  }

  const {
    type,
    composition,
    indication,
    recommendedUse,
    instruction,
    packing,
    image,
  } = product;

  return (
    <>
      <div className="product-top">
        <h1>{name}</h1>
        <h3>{type}</h3>
      </div>
      <div className="product-detail-page">
        <div className="product-detail-left">
          <div className="heads">
            <h2>COMPOSITION:</h2>

            <p>Each ml contains:</p>
            <p className="gap">{composition}</p>
          </div>

          <div className="heads">
            <h2> Indication:</h2>
            <div className="line" />
            <p className="gap">{indication}</p>
          </div>

          <div className="heads">
            <h2> RECOMMENDED USE:</h2>
            <div className="line" />
            <p className="gap">{recommendedUse}</p>
          </div>

          <div className="heads">
            <h2> INSTRUCTION FOR USE:</h2>
            <div className="line" />
            <p className="gap">{instruction}</p>
          </div>

          <div className="heads">
            <h2> PACKING:</h2>
            <div className="line" />
            <p className="gap">{packing}</p>
          </div>
        </div>
        <div className="product-detail-right">
          <img src={image} alt={name} className="product-image" />
        </div>
      </div>
    </>
  );
};

export default ProductDetailPage;
