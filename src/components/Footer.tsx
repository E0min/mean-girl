import Link from "next/link";

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-logo">
        <div className="footer-logo-wrapper">
          <img src="/images/svg/me n.svg" alt="ME N" className="men-svg" />
          <div className="footer-pill">
            <img
              src="/images/page/home/footer_anatomy.png"
              alt="Anatomy of a Fall"
              className="footer-img-bg"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
