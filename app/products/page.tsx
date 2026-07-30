const items = Array.from({ length: 15 }, (_, i) => ({
  title: ["Shock Absorber Set", "Drive Shaft Assembly", "Long Life Coolant", "Steering Rack", "Lower Arm Set"][i % 5],
  price: ["RM 168.00", "RM 239.00", "RM 18.90", "RM 399.00", "RM 149.00"][i % 5],
  icon: ["🔩","⚙️","🧴","🛠️","🧰"][i % 5]
}));

export default function ProductsPage() {
  return <main className="container pageShell"><div className="sectionHead"><div><h2>All Products</h2><p>Marketplace product catalogue.</p></div></div><div className="productGrid">{items.map((p,i)=><article className="productCard" key={i}><div className="productImage">{p.icon}</div><div className="productBody"><div className="productTitle">{p.title}</div><div className="productMeta">Verified MIVO Seller</div><div className="price">{p.price}</div><div className="productFoot"><span className="sold">⭐ 4.9</span><span className="sold">{100+i*17} sold</span></div></div></article>)}</div></main>;
}
