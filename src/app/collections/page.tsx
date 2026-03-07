"use client";

import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import EditorialRow from "@/components/EditorialRow";
import Link from "next/link";
import "./collections.css";

export default function CollectionsLists() {
  const collections = [
    {
      label: (
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
      label: "DIRECTOR OF MATERIALISTS",
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
      label: "DIRECTOR OF No other choice",
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
      label: "ARTICLE",
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
      textSide: "right",
      imgSide: "left",
      alignRight: true,
      readMore: true,
    },
    {
      label: "DIRECTOR OF No other choice",
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

        <div className="header-main" style={{ position: "relative" }}>
          <img
            src="/images/page/collections/collections.svg"
            alt="COLLECTIONS"
            className="page-title-svg-collections"
          />
          {/* Scroll Arrow sometimes present in Figma designs for this page */}
          <img src="/images/page/home/scroll_arrow.svg" alt="" className="scroll-arrow-down" style={{ 
            position: "absolute", 
            right: "33%", 
            top: "50%", 
            transform: "translateY(-50%)",
            width: "3.125vw"
          }} />
        </div>
      </header>

      <div className="content-wrapper">
        <section className="collections-list">
          {collections.map((col, idx) => (
            <EditorialRow key={idx} {...col} />
          ))}
        </section>

        <AboutSection />
        
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
