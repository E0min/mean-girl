"use client";

import { useParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import WishlistButton from "@/components/WishlistButton";
import { useEffect, useState } from "react";
import "./film-showcase.css";
import "./film-detail.css";

// Import integrated movie data
import editorsNotes from "@/data/editors-notes.json";

export default function FilmDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const [movie, setMovie] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [hoverImg, setHoverImg] = useState("");
  const [listHoverOpacity, setListHoverOpacity] = useState(0);

  useEffect(() => {
    if (!slug) return;
    const foundMovie = editorsNotes.find((m: any) => m.slug === slug);
    if (foundMovie) {
      setMovie(foundMovie);
    }
    setLoading(false);
  }, [slug]);

  if (loading) {
    return (
      <main>
        <Header />
        <div style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", color: "#C45481" }}>
          <h1>Loading...</h1>
        </div>
        <Footer />
      </main>
    );
  }

  if (!movie) {
    return (
      <main>
        <Header />
        <div style={{ padding: "100px", textAlign: "center", color: "#C45481" }}>
          <h1>Film Not Found</h1>
          <Link href="/all-films" style={{ textDecoration: "underline" }}>Back to All Films</Link>
        </div>
        <Footer />
      </main>
    );
  }

  // --- 1. Article Layout (Past Lives, Sirāt) ---
  if (movie.layout === "article") {
    return (
      <main className="theme-white">
        <div className="editor-hero">
          <img src={movie.heroImg} alt={movie.title} className="editor-hero-img" />
          <header className="editor-header-overlay">
            <div className="hamburger-btn">
              <span></span>
              <span></span>
            </div>
            <Link href="/" className="editor-site-title">Mean girls</Link>
            <nav className="editor-nav">
              <Link href="/all-films">All Films</Link>
              <Link href="/collections">Collections</Link>
              <Link href="/docs">Docs</Link>
              <a href="#">About</a>
            </nav>
          </header>
        </div>

        <div className="content-wrapper">
          <article className="editor-article">
            <div className="article-header">
              <span className="article-date">JAN 27, 2026</span>
              <h1 className="article-title">{movie.title}</h1>
              <div className="article-meta-row">
                <span className="article-share">SHARE</span>
                <span className="article-author">Editor's Note</span>
              </div>
            </div>

            <div 
              className="article-body article-body-kr"
              dangerouslySetInnerHTML={{ __html: movie.content }}
            />
          </article>

          <AboutSection />
          
          <footer className="main-footer">
            <div className="footer-logo">
              <div className="footer-logo-wrapper">
                <img src="/images/svg/me n.svg" alt="ME N" className="men-svg" />
                <div className="footer-pill">
                  <img src={movie.footerImg || movie.heroImg} alt="" className="footer-img-bg" />
                </div>
              </div>
            </div>
          </footer>
        </div>
        <Footer />
      </main>
    );
  }

  // --- 2. Showcase Layout (Anora, Parasite, etc.) ---
  return (
    <main className={movie.theme || "theme-pink"}>
      {/* 1. Hero Section */}
      <div className="showcase-hero">
        <img src={movie.heroImg} alt={movie.title} className="showcase-hero-img" />
        <header className="showcase-overlay">
          <div className="showcase-hamburger">
            <span></span>
            <span></span>
          </div>
          <Link href="/" className="showcase-site-title">Mean girls</Link>
          <nav className="showcase-nav">
            <Link href="/all-films">All Films</Link>
            <Link href="/collections">Collections</Link>
            <Link href="/docs">Docs</Link>
            <a href="#">About</a>
          </nav>
          <h1 className="showcase-movie-title" dangerouslySetInnerHTML={{ __html: movie.title }} />
          <span className="showcase-year">{movie.year}</span>
          <div className="showcase-hero-wishlist">
            <WishlistButton id={`${movie.slug}-hero`} />
          </div>
        </header>
      </div>

      <div className="content-wrapper">
        <img src="/images/page/editors_note/anora/gallery_arrow.svg" alt="" className="info-scroll-arrow" />

        {/* 2. Info Section */}
        <section className="showcase-info">
          <div className="info-poster">
            <img src={movie.poster || movie.heroImg} alt="Poster" />
          </div>

          <div className="info-synopsis">
            <span className="info-label">SYNOPSIS</span>
            <div className="info-divider"></div>
            <p className="info-text">{movie.synopsis}</p>

            {movie.awards && movie.awards.length > 0 && (
              <div className="awards-block">
                <span className="info-label">AWARDS</span>
                <div className="awards-divider-full"></div>
                {movie.awards.map((award: any, i: number) => (
                  <div key={i} style={{ marginBottom: "1.5vw" }}>
                    <img src={award.icon} alt="" className={award.festival.includes("ACADEMY") ? "academy-award-icon" : "cannes-icon"} />
                    <span className="awards-festival">{award.festival}</span>
                    <span className="awards-detail">{award.detail}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="info-details">
            <span className="info-label">ADDITIONAL DETAILS</span>
            <div className="info-divider"></div>
            {movie.credits && (
              <>
                <div className="detail-group">
                  <span className="detail-label">DIRECTED BY</span>
                  <span className="detail-value">{movie.credits.directedBy}</span>
                </div>
                <div className="detail-group">
                  <span className="detail-label">WRITTEN BY</span>
                  <span className="detail-value">{movie.credits.writtenBy}</span>
                </div>
                <div className="detail-group starring">
                  <span className="detail-label">STARRING</span>
                  {movie.credits.starring.map((actor: string, i: number) => (
                    <span key={i} className="detail-value">{actor}</span>
                  ))}
                </div>
              </>
            )}
            {movie.ratingImg && (
              <div className="detail-group rating">
                <span className="detail-label">RATING</span>
                <img src={movie.ratingImg} alt="R" className="rating-img" />
              </div>
            )}
          </div>
        </section>

        {/* 3. Scene Section */}
        {movie.scene && (
          <section className="showcase-scene showcase-scene-wrapper">
            <img src={movie.scene.img} alt="Scene" />
            <div className="scene-quote" dangerouslySetInnerHTML={{ __html: movie.scene.quote }} />
          </section>
        )}

        {/* 4. Director Spotlight */}
        {movie.directorSpotlight && (
          <section className="showcase-director">
            <div className="director-photo">
              <img src={movie.directorSpotlight.photo} alt="Director" />
            </div>
            <div className="director-info">
              <span className="director-role">{movie.directorSpotlight.role}</span>
              <h2 className="director-name">
                {movie.directorSpotlight.name.map((n: string, i: number) => (
                  <span key={i}>{n}<br /></span>
                ))}
              </h2>
              <p className="director-quote">{movie.directorSpotlight.quote}</p>
            </div>
          </section>
        )}

        {/* 5. Gallery */}
        {movie.gallery && (
          <section className="showcase-gallery">
            <div className="gallery-header">
              <h2 className="gallery-title">Gallery</h2>
            </div>
            <div className="gallery-grid">
              {movie.gallery.map((img: string, i: number) => (
                <div key={i} className="gallery-item" style={{ position: "relative" }}>
                  <img src={img} alt={`Gallery ${i + 1}`} />
                  <div className="gallery-wishlist-pos" style={{ position: "absolute", bottom: "1.14vw", left: "1.14vw", zIndex: 10 }}>
                    <WishlistButton id={`${movie.slug}-gallery-${i}`} variant="gallery" />
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 6. Film List */}
        <section className="showcase-film-list">
          <ul className="showcase-text-list">
            {[
              { name: "The Room Next Door", year: 2024, img: "hover/the_room_next_door.png" },
              { name: "On Becoming a Guinea Fowl", year: 2025, img: "hover/on_becoming_guinea_fowl.png" },
              { name: "Immaculate", year: 2024, img: "hover/immaculate.png" },
              { name: "Oldboy", year: 2003, img: "hover/oldboy.png" },
              { name: "Materialists", year: 2025, img: "hover/materialists.png" },
              { name: "The Zone of Interest", year: 2024, img: "hover/the_zone_of_interest.png" },
            ].map((item, idx) => (
              <li
                key={idx}
                onMouseEnter={() => {
                  setHoverImg(`/images/page/all_films/${item.img}`);
                  setListHoverOpacity(1);
                }}
                onMouseLeave={() => setListHoverOpacity(0)}
              >
                {item.name} <sup>{item.year}</sup>
              </li>
            ))}
          </ul>
          <div className="showcase-show-more">
            <span>SHOW MORE</span>
          </div>
          <div className="list-hover-img" style={{ opacity: listHoverOpacity }}>
            <img src={hoverImg} alt="" className="hover-preview-img" />
          </div>
        </section>

        <AboutSection />

        <footer className="main-footer">
          <div className="footer-logo">
            <div className="footer-logo-wrapper">
              <img src="/images/svg/me n.svg" alt="ME N" className="men-svg" />
              <div className="footer-pill">
                <img src={movie.footerImg || movie.heroImg} alt="" className="footer-img-bg" />
              </div>
            </div>
          </div>
          <div className="footer-film-info">
            <span className="footer-film-title" dangerouslySetInnerHTML={{ __html: movie.title.replace('<br>', ' ') }} />
            <span className="footer-film-detail">{movie.year}, Directed by {movie.credits?.directedBy || "Various"}</span>
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
          <div className="card-bottom vertical-links">
            <Link href="/all-films">All</Link>
            <a href="#">Upcoming</a>
          </div>
        </div>
        <div className="about-card">
          <h4>EDITS</h4>
          <div className="card-bottom vertical-links">
            <Link href="/">Home</Link>
            <Link href="/docs">Docs</Link>
            <Link href="/collections">Collections</Link>
          </div>
        </div>
        <div className="about-card">
          <h4>MEAN</h4>
          <div className="mean-content">
            <p className="en-desc"><strong>MEAN</strong> is an editorial platform<br />built around selection, interpretation, and record.</p>
            <p className="kr-desc"><strong>MEAN</strong>은 선택, 해석, 기록을 중심으로<br />영화를 다루는 에디토리얼 플랫폼입니다.</p>
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
