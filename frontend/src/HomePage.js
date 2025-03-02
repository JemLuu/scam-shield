export default function HomePage() {
    return (
      <div className="home-container">
        <div className="hero-section">
          <h1 className="title">Scam-Shield</h1>
          <img src="/stickers/shield.png" className="shield-icon" alt="Shield Icon" />
        </div>
        
        {/* Stars placed around the sides of the page */}
        <img src="/stickers/star.png" className="sticker star-left" alt="Star Left" />
        <img src="/stickers/star.png" className="sticker star-right" alt="Star Right" />
        <img src="/stickers/star.png" className="sticker star-top-left" alt="Star Top Left" />
        <img src="/stickers/star.png" className="sticker star-top-right" alt="Star Top Right" />
        <img src="/stickers/star.png" className="sticker star-bottom-left" alt="Star Bottom Left" />
        <img src="/stickers/star.png" className="sticker star-bottom-right" alt="Star Bottom Right" />
      </div>
    );
  }