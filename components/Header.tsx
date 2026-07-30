import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className="header">
        <div className="container headerRow">
          <Link href="/" className="logo">
            <span className="logoMark">M</span>
            <span>MIVO</span>
          </Link>
          <div className="search">
            <input placeholder="Search products, car model, brand or SKU" />
            <button>Search</button>
          </div>
          <div className="headerActions">
            <Link className="iconBtn" href="/sellers">Sell</Link>
            <Link className="iconBtn" href="/cart">Cart</Link>
            <Link className="iconBtn" href="/admin">Admin</Link>
          </div>
        </div>
      </header>
      <nav className="nav">
        <div className="container navRow">
          <Link href="/">Home</Link>
          <Link href="/products">All Products</Link>
          <Link href="/#vehicle">Shop by Vehicle</Link>
          <Link href="/#categories">Categories</Link>
          <Link href="/#sellers">Official Sellers</Link>
          <Link href="/sellers">Become a Seller</Link>
        </div>
      </nav>
    </>
  );
}
