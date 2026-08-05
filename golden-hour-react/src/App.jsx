import React from 'react'

function App() {
  return (
    <div>
      {/* Navigation Bar */}
      <header className="header">
        <a href="#" className="logo">
          <h2>Golden Hour Candles</h2>
        </a>
        <nav className="navbar">
          <a href="#">Home</a>
          <a href="#">Shop</a>
          <a href="#">About Us</a>
          <a href="#">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Handcrafted Candles for Every Moment</h1>
          <p>Bring warmth and serenity into your space with our premium soy wax candles.</p>
          <button className="btn">Shop Collection</button>
        </div>
      </section>

      {/* Product Section */}
      <section className="products" style={{ padding: '40px 20px', textAlign: 'center' }}>
        <h2>Featured Collection</h2>
        <div className="product-grid" style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap', marginTop: '20px' }}>
          
          <div className="product-card" style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px', width: '200px' }}>
            <img src="/images/Warm Vanilla.png" alt="Warm Vanilla" style={{ width: '100%', borderRadius: '5px' }} />
            <h3>Warm Vanilla</h3>
            <p>PKR 1,200</p>
            <button className="btn" style={{ marginTop: '10px' }}>Add to Cart</button>
          </div>

          <div className="product-card" style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px', width: '200px' }}>
            <img src="/images/Vintage Rose.png" alt="Vintage Rose" style={{ width: '100%', borderRadius: '5px' }} />
            <h3>Vintage Rose</h3>
            <p>PKR 1,350</p>
            <button className="btn" style={{ marginTop: '10px' }}>Add to Cart</button>
          </div>

          <div className="product-card" style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px', width: '200px' }}>
            <img src="/images/Sandalwood Forest.png" alt="Sandalwood Forest" style={{ width: '100%', borderRadius: '5px' }} />
            <h3>Sandalwood Forest</h3>
            <p>PKR 1,500</p>
            <button className="btn" style={{ marginTop: '10px' }}>Add to Cart</button>
          </div>

        </div>
      </section>
    </div>
  )
}

export default App