const stats = [["Total Orders","1,284"],["GMV","RM 248,930"],["Active Sellers","18"],["Products","4,592"]];
export default function AdminPage() {
  return <main className="container pageShell"><div className="sectionHead"><div><h2>MIVO Admin Dashboard</h2><p>Platform overview and marketplace management.</p></div></div><div className="adminGrid">{stats.map(([label,value])=><div className="stat" key={label}><span>{label}</span><strong>{value}</strong></div>)}</div><div className="panel" style={{marginTop:16}}><h3>Admin modules</h3><p>Orders · Products · Sellers · Customers · Payments · Shipping · Commission · Disputes · Reports</p></div></main>;
}
