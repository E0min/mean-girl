"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import "./docs.css";

export default function Docs() {
  const [activeTab, setActiveTab] = useState<"all" | "articles" | "zines">("all");

  const articles = [
    {
      type: "articles",
      title: "The Film Everyone Is Arguing About: Sirāt",
      img: "/images/page/docs/sirat.png",
      link: "/editors-note/sirat",
      reverse: false,
    },
    {
      type: "articles",
      title: "Space & Time: A Note from Celine Song",
      img: "/images/page/docs/past_lives.png",
      link: "/editors-note/past-lives",
      reverse: true,
    },
    {
      type: "articles",
      title: "Joker: Folie à Deux There Is No Joker",
      img: "/images/page/docs/joker_folie_a_deux.png",
      link: "#",
      reverse: false,
    },
    {
      type: "articles",
      title: "Space & Time: A Note from Celine Song",
      img: "/images/page/docs/midsommar.png",
      link: "/editors-note/past-lives",
      reverse: true,
    },
    {
      type: "articles",
      title: "A Dangerous Woman: Too Much for Her Age",
      img: "/images/page/docs/fourthgrader_bogyeong.png",
      link: "#",
      reverse: false,
    },
  ];

  const zines = [
    {
      type: "zines",
      title: "Arco: A Rainbow Adventure of Time Travel & Friendship",
      img: "/images/page/docs/arco.png",
      link: "#",
      reverse: true,
      tall: true,
    },
    {
      type: "zines",
      title: "How to Paint a Movie: MinarI",
      img: "/images/page/docs/minari.png",
      link: "#",
      reverse: false,
      overlay: "Reclaiming the American Dream",
    },
    {
      type: "zines",
      title: "Poster Boy: Sean Baker (& his Chihuahuas)",
      img: "/images/page/docs/poster_boy.png",
      link: "#",
      reverse: true,
    },
    {
      type: "zines",
      title: "Wes Anderson Returns to Montblanc",
      img: "/images/page/docs/montblanc.png",
      link: "#",
      reverse: false,
    },
  ];

  const renderCard = (card: any, idx: number) => (
    <div key={`${card.type}-${idx}`} className={`article-card ${card.reverse ? "reverse" : ""}`}>
      {card.reverse ? (
        <>
          <div className="article-info">
            <span className="article-label">ARTICLE</span>
            <h2 className="article-title">{card.title}</h2>
            <Link href={card.link} className="read-more" data-cursor-dir="left">
              READ MORE
            </Link>
          </div>
          <div className={`article-img ${card.tall ? "tall" : ""}`}>
            <img src={card.img} alt={card.title} />
          </div>
        </>
      ) : (
        <>
          <div className={`article-img ${card.overlay ? "overlay-card" : ""}`}>
            <img src={card.img} alt={card.title} />
            {card.overlay && <span className="img-overlay-text">{card.overlay}</span>}
          </div>
          <div className="article-info">
            <span className="article-label">ARTICLE</span>
            <h2 className="article-title">{card.title}</h2>
            <Link href={card.link} className="read-more" data-cursor-dir="right">
              READ MORE
            </Link>
          </div>
        </>
      )}
    </div>
  );

  return (
    <main>
      <Header />
      <div className="content-wrapper">
        <section className="docs-hero">
          <img src="/images/svg/DOCS.svg" alt="DOCS" className="docs-title-svg" />
          <div className="docs-tabs">
            <span
              className={`tab ${activeTab === "all" ? "active" : ""}`}
              onClick={() => setActiveTab("all")}
            >
              All
            </span>
            <span
              className={`tab ${activeTab === "articles" ? "active" : ""}`}
              onClick={() => setActiveTab("articles")}
            >
              Articles
            </span>
            <span
              className={`tab ${activeTab === "zines" ? "active" : ""}`}
              onClick={() => setActiveTab("zines")}
            >
              Zines
            </span>
          </div>
        </section>

        <div className="docs-content-container">
          {(activeTab === "all" || activeTab === "articles") && (
            <section className="docs-articles" data-tab="articles">
              {articles.map((card, idx) => renderCard(card, idx))}
            </section>
          )}

          {(activeTab === "all" || activeTab === "zines") && (
            <section className="docs-articles" data-tab="zines">
              {zines.map((card, idx) => renderCard(card, idx))}
            </section>
          )}
        </div>

        <div className="show-more">
          <span>SHOW MORE</span>
        </div>

        {/* About Section */}
        <AboutSection />

        <footer className="main-footer">
          <div className="footer-logo">
            <div className="footer-logo-wrapper">
              <img src="/images/svg/me n.svg" alt="ME N" className="men-svg" />
              <div className="footer-pill">
                <img src="/images/page/docs/past_lives.png" alt="Footer" className="footer-img-bg" />
              </div>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}

function AboutSection() {
  return (
    <section className="section about">
      <h2 className="section-title">ABOUT</h2>
      <div className="about-grid">
        <div className="about-card">
          <h4>Films</h4>
          <div className="card-bottom">
            <Link href="/all-films">All</Link>
            <br />
            <a href="#">Upcoming</a>
          </div>
        </div>
        <div className="about-card">
          <h4>edits</h4>
          <div className="card-bottom vertical-links">
            <Link href="/"><u>Home</u></Link>
            <Link href="/docs">Docs</Link>
            <Link href="/collections">Collections</Link>
          </div>
        </div>
        <div className="about-card">
          <h4>MEan</h4>
          <div className="mean-content">
            <p className="en-desc"><strong>MEAN</strong> is an editorial platform...</p>
            <p className="kr-desc"><strong>MEAN</strong>은 선택, 해석, 기록을 중심으로...</p>
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
