import Link from "next/link";

const categories = [
  ["🚗","Car Parts"],["🛞","Tyres"],["🧴","Fluids"],["🔧","Tools"],
  ["📱","Electronics"],["🏠","Home"],["👕","Fashion"],["🎁","More"]
];

const products = [
  {icon:"🧴", title:"NIKKEN Long Life Coolant Premixed 2L", price:"RM 18.90", sold:"2.4k sold", shop:"Direct Parts MY", badge:"HOT"},
  {icon:"🔩", title:"Heavy Duty Shock Absorber Front Pair", price:"RM 168.00", sold:"956 sold", shop:"sparepartku malaysia", badge:"-12%"},
  {icon:"⚙️", title:"Drive Shaft Assembly LH + RH", price:"RM 239.00", sold:"721 sold", shop:"Autolaju Spare Parts", badge:"BEST"},
  {icon:"🛢️", title:"CVT Fluid FE Fully Synthetic 4L", price:"RM 89.90", sold:"1.1k sold", shop:"LU KERETA STORE", badge:"HOT"},
  {icon:"🧰", title:"Complete Lower Arm Set With Ball Joint", price:"RM 149.00", sold:"634 sold", shop:"Direct Parts MY", badge:"NEW"},
  {icon:"💡", title:"LED Headlamp Conversion Kit 6000K", price:"RM 45.90", sold:"380 sold", shop:"MIVO Official", badge:"NEW"},
  {icon:"📷", title:"Smart Dash Cam Full HD Night Vision", price:"RM 129.00", sold:"218 sold", shop:"MIVO Tech", badge:"-8%"},
  {icon:"🧽", title:"Premium Car Care Cleaning Bundle", price:"RM 39.90", sold:"514 sold", shop:"MIVO Official", badge:"SET"},
  {icon:"🔋", title:"Portable Jump Starter 12000mAh", price:"RM 159.00", sold:"276 sold", shop:"MIVO Tech", badge:"HOT"},
  {icon:"🛞", title:"Sport Disc Rotor Front Pair", price:"RM 299.00", sold:"184 sold", shop:"Vortex Performance", badge:"NEW"}
];

const sellers = [
  {name:"Direct Parts MY", desc:"Automotive parts specialist", rating:"4.9", products:"1.2k", followers:"38k"},
  {name:"sparepartku malaysia", desc:"Reliable replacement parts", rating:"4.8", products:"980", followers:"24k"},
  {name:"Autolaju Spare Parts", desc:"Suspension and steering", rating:"4.9", products:"743", followers:"19k"},
  {name:"LU KERETA STORE", desc:"Fluids and maintenance", rating:"4.8", products:"534", followers:"12k"}
];

export default function HomePage() {
  return (
    <main>
      <section className="container hero">
        <div className="heroMain">
          <span className="kicker">MIVO MARKETPLACE V1</span>
          <h1>Find it fast. Buy with confidence.</h1>
          <p>Discover products from trusted Malaysian sellers. Search by product, brand, vehicle model or SKU.</p>
          <div className="ctaRow">
            <Link className="primaryBtn" href="/products">Shop Now</Link>
            <Link className="secondaryBtn" href="/sellers">Start Selling</Link>
          </div>
        </div>
        <div className="heroSide">
          <div className="promo orange"><span>New Seller Deal</span><strong>0% commission<br/>for 30 days</strong></div>
          <div className="promo"><span>Buyer Protection</span><strong>Secure checkout</strong><span>Verified sellers · Order tracking</span></div>
        </div>
      </section>

      <section id="vehicle" className="container section">
        <div className="sectionHead"><div><h2>Shop by Vehicle</h2><p>Select your car to see compatible products.</p></div></div>
        <div className="vehiclePicker">
          <div className="field"><label>Brand</label><select defaultValue=""><option value="" disabled>Select brand</option><option>Perodua</option><option>Proton</option><option>Toyota</option><option>Honda</option></select></div>
          <div className="field"><label>Model</label><select defaultValue=""><option value="" disabled>Select model</option><option>Myvi</option><option>Axia</option><option>Bezza</option><option>Alza</option></select></div>
          <div className="field"><label>Year</label><select defaultValue=""><option value="" disabled>Select year</option><option>2026</option><option>2025</option><option>2024</option><option>2023</option></select></div>
          <button className="vehicleButton">Find Compatible Products</button>
        </div>
      </section>

      <section id="categories" className="container section">
        <div className="sectionHead"><div><h2>Popular Categories</h2><p>Browse everything MIVO offers.</p></div><Link className="link" href="/products">View all</Link></div>
        <div className="categoryGrid">{categories.map(([icon,name]) => <Link className="category" href="/products" key={name}><span className="categoryIcon">{icon}</span><span className="categoryName">{name}</span></Link>)}</div>
      </section>

      <section className="container section">
        <div className="sectionHead"><div><h2>Trending Now</h2><p>Products buyers are viewing today.</p></div><Link className="link" href="/products">See more</Link></div>
        <div className="productGrid">{products.map((p) => <article className="productCard" key={p.title}><div className="productImage"><span className="badge">{p.badge}</span>{p.icon}</div><div className="productBody"><div className="productTitle">{p.title}</div><div className="productMeta">{p.shop}</div><div className="price">{p.price}</div><div className="productFoot"><span className="sold">⭐ 4.9</span><span className="sold">{p.sold}</span></div></div></article>)}</div>
      </section>

      <section id="sellers" className="container section">
        <div className="sectionHead"><div><h2>Featured Sellers</h2><p>Trusted stores joining MIVO.</p></div><Link className="link" href="/sellers">Seller Centre</Link></div>
        <div className="sellerGrid">{sellers.map((s) => <div className="sellerCard" key={s.name}><div className="sellerTop"><div className="avatar">{s.name[0]}</div><div><h3>{s.name}</h3><p>{s.desc}</p></div></div><div className="sellerStats"><div><strong>{s.rating}</strong><span>Rating</span></div><div><strong>{s.products}</strong><span>Products</span></div><div><strong>{s.followers}</strong><span>Followers</span></div></div></div>)}</div>
      </section>
    </main>
  );
}
