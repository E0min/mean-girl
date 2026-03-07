"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import EditorialRow from "@/components/EditorialRow";
import Link from "next/link";
import "./docs.css";

export default function Docs() {
  const [activeTab, setActiveTab] = useState<"all" | "articles" | "zines">("all");

  const articles = [
    {
      label: "ARTICLE",
      title: "The Film Everyone Is Arguing About: Sirāt",
      img: "/images/page/docs/sirat.png",
      link: "/docs/sirat",
      reverse: false,
      textSide: "right" as const,
      imgSide: "left" as const,
    },
    {
      label: "ARTICLE",
      title: "Space & Time: A Note from Celine Song",
      img: "/images/page/docs/past_lives.png",
      link: "/docs/past-lives",
      reverse: true,
      textSide: "left" as const,
      imgSide: "right" as const,
    },
    {
      label: "ARTICLE",
      title: "Joker: Folie à Deux There Is No Joker",
      img: "/images/page/docs/joker_folie_a_deux.png",
      link: "#",
      reverse: false,
      textSide: "right" as const,
      imgSide: "left" as const,
    },
    {
      label: "ARTICLE",
      title: "Space & Time: A Note from Celine Song",
      img: "/images/page/docs/midsommar.png",
      link: "/docs/past-lives",
      reverse: true,
      textSide: "left" as const,
      imgSide: "right" as const,
    },
    {
      label: "ARTICLE",
      title: "A Dangerous Woman: Too Much for Her Age",
      img: "/images/page/docs/fourthgrader_bogyeong.png",
      link: "#",
      reverse: false,
      textSide: "right" as const,
      imgSide: "left" as const,
    },
  ];

  const zines = [
    {
      label: "ARTICLE",
      title: "Arco: A Rainbow Adventure of Time Travel & Friendship",
      img: "/images/page/docs/arco.png",
      link: "#",
      reverse: true,
      textSide: "left" as const,
      imgSide: "right" as const,
    },
    {
      label: "ARTICLE",
      title: "How to Paint a Movie: MinarI",
      img: "/images/page/docs/minari.png",
      link: "#",
      reverse: false,
      textSide: "right" as const,
      imgSide: "left" as const,
    },
    {
      label: "ARTICLE",
      title: "Poster Boy: Sean Baker (& his Chihuahuas)",
      img: "/images/page/docs/poster_boy.png",
      link: "#",
      reverse: true,
      textSide: "left" as const,
      imgSide: "right" as const,
    },
    {
      label: "ARTICLE",
      title: "Wes Anderson Returns to Montblanc",
      img: "/images/page/docs/montblanc.png",
      link: "#",
      reverse: false,
      textSide: "right" as const,
      imgSide: "left" as const,
    },
  ];

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
              {articles.map((card, idx) => (
                <EditorialRow key={`art-${idx}`} {...card} className="article-card" />
              ))}
            </section>
          )}

          {(activeTab === "all" || activeTab === "zines") && (
            <section className="docs-articles" data-tab="zines">
              {zines.map((card, idx) => (
                <EditorialRow key={`zine-${idx}`} {...card} className="article-card" />
              ))}
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
