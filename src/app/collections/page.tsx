"use client";

import Footer from "@/components/Footer";
import Link from "next/link";
import "./collections.css";

export default function CollectionsLists() {
  const collections = [
    {
      kicker: (
        <>
          2023
          <br />
          DIRECTOR OF ANORA
        </>
      ),
      title: (
        <>
          GREAT
          <br />
          AMERICAN
          <br />
          DREAM
          <br />
          SEAN BAKER
        </>
      ),
      img: "/images/page/collections/sean_baker.png",
      link: "/collections/collections-item",
      reverse: false,
      textSide: "left",
      imgSide: "right",
    },
    {
      kicker: "DIRECTOR OF MATERIALISTS",
      title: (
        <>
          CREATIVE
          <br />
          AFFAIR
          <br />
          WITH
          <br />
          CELINE SONG
        </>
      ),
      img: "/images/page/collections/celine song.png",
      reverse: true,
      textSide: "right",
      imgSide: "left",
      alignRight: true,
    },
    {
      kicker: "DIRECTOR OF No other choice",
      title: (
        <>
          BLEAK
          <br />
          BLOODY
          <br />
          VISION
          <br />
          PARK CHAN-WOOK
        </>
      ),
      img: "/images/page/collections/park_chan_wook.png",
      reverse: false,
      textSide: "left",
      imgSide: "right",
    },
    {
      kicker: "ARTICLE",
      title: (
        <>
          HOW
          <br />
          TO PAINT
          <br />
          A MOVIE:
          <br />
          MINARI
        </>
      ),
      img: "/images/page/collections/minary.png",
      reverse: true,
      textSide: "left",
      imgSide: "left",
      alignRight: true,
      readMore: true,
    },
    {
      kicker: "DIRECTOR OF No other choice",
      title: (
        <>
          THE MEANS
          <br />
          GUIDE TO
          <br />
          WIM
          <br />
          WENDERS
        </>
      ),
      img: "/images/page/collections/wim_wenders.png",
      reverse: false,
      textSide: "left",
      imgSide: "right",
      titleStyle: { color: "#e95538" },
    },
  ];

  return (
    <main className="theme-green">
      {/* 1:1 Matching Original Header Structure */}
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
        <section className="collections-list">
          {collections.map((col, idx) => {
            const ItemContent = (
              <div className={`collection-row ${col.reverse ? "reverse" : ""}`}>
                <div className={`col-text ${col.textSide}`}>
                  <span className="col-kicker">{col.kicker}</span>
                  <h2 className={`col-title ${col.alignRight ? "align-right" : ""}`} style={col.titleStyle}>
                    {col.title}
                  </h2>
                  {col.readMore && (
                    <span className="read-more">
                      READ MORE <span className="arrow">→</span>
                    </span>
                  )}
                </div>
                <div className={`col-image ${col.imgSide}`}>
                  <img src={col.img} alt="Collection" className="collection-img" />
                </div>
              </div>
            );

            return col.link ? (
              <Link key={idx} href={col.link} style={{ textDecoration: "none", color: "inherit", display: "block" }}>
                {ItemContent}
              </Link>
            ) : (
              <div key={idx}>{ItemContent}</div>
            );
          })}
        </section>

        {/* REUSED ABOUT SECTION */}
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
        
        <footer className="main-footer">
          <div className="footer-logo">
            <div className="footer-logo-wrapper">
              <img src="/images/svg/me n.svg" alt="ME N" className="men-svg" />
              <div className="footer-pill">
                <img src="/images/page/home/footer_anatomy.png" alt="Anatomy of a Fall" className="footer-img-bg" />
              </div>
            </div>
          </div>
        </footer>
      </div>
      <Footer />
    </main>
  );
}
