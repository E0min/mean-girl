"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import "../collections.css";

export default function CollectionsItem() {
  const column1 = [
    { name: "Starlet", img: "/images/page/collections/sean_baker/Starlet.png", type: "portrait-tall" },
    { name: "Left-Handed Girl", img: "/images/page/collections/sean_baker/Left-handed-girl2.png", type: "landscape" },
  ];

  const column2 = [
    { name: "The Florida Project", img: "/images/page/collections/sean_baker/TheFloridaProject1.png", type: "landscape" },
    { name: "The Florida Project", img: "/images/page/collections/sean_baker/TheFloridaProject2.png", type: "landscape" },
    { name: "Anora", img: "/images/page/collections/sean_baker/Anora.png", type: "landscape" },
  ];

  const column3 = [
    { name: "Tangerine", img: "/images/page/collections/sean_baker/Tangerine.png", type: "portrait-tall" },
    { name: "Left-Handed Girl", img: "/images/page/collections/sean_baker/Left-handed-girl1.png", type: "portrait-tall" },
  ];

  return (
    <main className="theme-green">
      <header className="section-header">
        <div className="top-nav">
          <Link href="/" className="site-title" style={{ color: "#90FC82" }}>
            Mean girls
          </Link>
          <nav className="mini-nav">
            <Link href="/all-films" style={{ color: "#90FC82" }}>All Films</Link>
            <Link href="/collections" className="active" style={{ color: "#90FC82" }}>
              Collections
            </Link>
            <Link href="/docs" style={{ color: "#90FC82" }}>Docs</Link>
            <a href="#" style={{ color: "#90FC82" }}>About</a>
          </nav>
        </div>

        <div className="header-main">
          <img
            src="/images/page/collections/collections.svg"
            alt="COLLECTIONS"
            className="page-title-svg-collections"
          />
        </div>
      </header>

      <div className="content-wrapper">
        <h2 className="section-subtitle" style={{ color: "#EB3DF7" }}>DIRECTOR</h2>

        <section className="sb-content">
          <div className="sb-header-title">
            <img
              src="/images/page/collections/sean_baker/Sean-baker.svg"
              alt="Collections Director Sean Baker"
              className="sb-header-svg"
            />
          </div>

          <div className="hotgirls-three-columns">
            <div className="hg-col">
              {column1.map((f, i) => (
                <div key={i} className="sb-grid-item" style={{ marginBottom: "2vw" }}>
                  <div className={`hg-item ${f.type}`}>
                    <img src={f.img} alt={f.name} style={{ borderRadius: "9px" }} />
                  </div>
                  <span className="sb-grid-caption" style={{ 
                    fontFamily: "var(--font-oswald), sans-serif",
                    fontSize: "1.6667vw",
                    fontWeight: 300,
                    color: "#000",
                    marginTop: "0.5vw",
                    display: "block"
                  }}>{f.name}</span>
                </div>
              ))}
            </div>

            <div className="hg-col center">
              {column2.map((f, i) => (
                <div key={i} className="sb-grid-item" style={{ marginBottom: "2vw" }}>
                  <div className={`hg-item ${f.type}`}>
                    <img src={f.img} alt={f.name} style={{ borderRadius: "9px" }} />
                  </div>
                  <span className="sb-grid-caption" style={{ 
                    fontFamily: "var(--font-oswald), sans-serif",
                    fontSize: "1.6667vw",
                    fontWeight: 300,
                    color: "#000",
                    marginTop: "0.5vw",
                    display: "block"
                  }}>{f.name}</span>
                </div>
              ))}
            </div>

            <div className="hg-col">
              {column3.map((f, i) => (
                <div key={i} className="sb-grid-item" style={{ marginBottom: "2vw" }}>
                  <div className={`hg-item ${f.type}`}>
                    <img src={f.img} alt={f.name} style={{ borderRadius: "9px" }} />
                  </div>
                  <span className="sb-grid-caption" style={{ 
                    fontFamily: "var(--font-oswald), sans-serif",
                    fontSize: "1.6667vw",
                    fontWeight: 300,
                    color: "#000",
                    marginTop: "0.5vw",
                    display: "block"
                  }}>{f.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <AboutSection />
        
        <footer className="main-footer">
          <div className="footer-logo">
            <div className="footer-logo-wrapper">
              <img src="/images/svg/me n.svg" alt="ME N" className="men-svg" />
              <div className="footer-pill">
                <img src="/images/image 1446.png" alt="Anatomy of a Fall" className="footer-img-bg" />
              </div>
            </div>
          </div>
        </footer>
      </div>
      <Footer />
    </main>
  );
}

function AboutSection() {
  return (
    <section className="section about">
      <h2 className="section-title">ABOUT</h2>
      <div className="about-grid">
        <div className="about-card">
          <h4>FILMS</h4>
          <div className="card-bottom">
            <Link href="/all-films">All</Link>
          </div>
        </div>
        <div className="about-card">
          <h4>EDITS</h4>
          <div className="card-bottom vertical-links">
            <Link href="/">Home</Link>
            <Link href="/editors-note/anora">Editor's Note</Link>
            <Link href="/collections">Collections</Link>
          </div>
        </div>
        <div className="about-card">
          <h4>MEAN</h4>
          <div className="mean-content">
            <p className="en-desc"><strong>MEAN</strong> is an editorial platform<br />built around selection, interpretation, and record.</p>
            <p className="en-desc"><strong>Films</strong> are not listed, but curated.<br /><strong>Texts</strong> are not reviews, but positions.<br /><strong>Collections</strong> are not categories, but perspectives.</p>
            <p className="kr-desc"><strong>MEAN</strong>은 선택, 해석, 기록을 중심으로<br />영화를 다루는 에디토리얼 플랫폼입니다.</p>
            <p className="kr-desc">영화는 나열되지 않고 선별되며,<br />텍스트는 리뷰가 아닌 관점으로,<br />컬렉션은 분류가 아닌 시선으로 구성됩니다.</p>
          </div>
        </div>
        <div className="social-wrapper">
          <div className="social-row top">
            <div className="social-card"><i className="fab fa-instagram"></i></div>
            <div className="social-card"><i className="fab fa-tiktok"></i></div>
          </div>
          <div className="social-row bottom">
            <div className="social-card"><i className="fa-brands fa-x-twitter"></i></div>
            <div className="social-card"><i className="fab fa-facebook-f"></i></div>
            <div className="social-card"><i className="fab fa-youtube"></i></div>
          </div>
        </div>
      </div>
    </section>
  );
}
