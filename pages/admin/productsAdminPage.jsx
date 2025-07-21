import { BiPlus } from "react-icons/bi";//+ button
import { Link } from "react-router-dom";
import { useState } from "react";

const sampleProducts=[
    {
    productId: "COS001",
    name: "Hydrating Face Cream",
    altNames: ["Moisturizer", "Daily Cream"],
    labelledPrice: 3500,
    price: 2990,
    image: ["/images/face-cream.jpg"],
    description: "A deeply hydrating face cream suitable for all skin types. Enriched with aloe vera and vitamin E.",
    stock: 50,
    isAvailable: true,
    category: "cosmetics"
  },
  {
    productId: "COS002",
    name: "Matte Lipstick - Ruby Red",
    altNames: ["Lip Color", "Lip Paint"],
    labelledPrice: 1500,
    price: 1250,
    image: ["/images/lipstick-red.jpg"],
    description: "Long-lasting matte lipstick in bold ruby red shade. Smudge-proof and enriched with jojoba oil.",
    stock: 120,
    isAvailable: true,
    category: "cosmetics"
  },
  {
    productId: "COS003",
    name: "Volumizing Mascara",
    altNames: ["Eye Makeup", "Lash Booster"],
    labelledPrice: 2200,
    price: 1980,
    image: ["/images/mascara.jpg"],
    description: "Volumizing and waterproof mascara to give your lashes the perfect lift and curl.",
    stock: 80,
    isAvailable: true,
    category: "cosmetics"
  },
  {
    productId: "COS004",
    name: "Nude Eyeshadow Palette",
    altNames: ["Eye Palette", "Natural Tones"],
    labelledPrice: 4500,
    price: 3990,
    image: ["/images/eyeshadow-palette.jpg"],
    description: "12-shade eyeshadow palette featuring warm nude tones for day and night looks.",
    stock: 40,
    isAvailable: true,
    category: "cosmetics"
  },
  {
    productId: "COS005",
    name: "BB Cream SPF 30",
    altNames: ["Beauty Balm", "Tinted Moisturizer"],
    labelledPrice: 2800,
    price: 2400,
    image: ["/images/bb-cream.jpg"],
    description: "Lightweight BB cream that evens skin tone, moisturizes, and provides sun protection with SPF 30.",
    stock: 100,
    isAvailable: true,
    category: "cosmetics"
  }
]

export default function ProductsAdminPage() {

    const[products, setProducts] = useState(sampleProducts); //prodcuts can change all the time

    return (
        <div className="w-full h-screen border-[2px]">
            <span className="text-3xl font-bold my-[20px] p-[20px]">Products</span>
            {
                 <div> 
                            <table>
                                 <thead> 
                                    <tr>
                                        <th className="p-[10px]">Images</th>
                                        <th className="p-[10px] " >Product ID</th> 
                                        <th className="p-[10px]">Name</th>
                                        <th className="p-[10px]">Price</th>
                                        <th className="p-[10px]">Labelled Price</th>
                                        <th className="p-[10px]">Category</th>
                                        <th className="p-[10px]">Stock</th>
                                    </tr>
                                 </thead>

                                 <tbody>{
                                    products.map((product, index) => { //map sample array
                                        return(
                                            <tr key={index}>
                                                <td>
                                                    <img src={product.image[0]} alt={product.name} className="w-[100px] h-[100px] object-cover" />
                                                </td>
                                                <td className="p-[10px]">{product.productId}</td>
                                                <td className="p-[10px]">{product.name}</td>
                                                <td className="p-[10px]">{product.price}</td>
                                                <td className="p-[10px]">{product.labelledPrice}</td>
                                                <td className="p-[10px]">{product.category}</td>
                                                <td className="p-[10px]">{product.stock}</td>
                                            </tr>
                                        )
                                    })
                                    }


                                </tbody>
                            </table>
                        </div>
                    }
             
            <Link to="/admin/addproduct" className="fixed right-[50px] bottom-[50px] p-[20px] text-white bg-black rounded-full shadow-2xl cursor-pointer">    
                <BiPlus className="text-2xl font-bold "/>
            </Link>
        </div>
    );
}