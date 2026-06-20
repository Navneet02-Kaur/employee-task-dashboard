function Navbar() {
  return (
    <nav className="nb-nav">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@700&display=swap');

        .nb-nav {
          width: 100%;
          background: #0E0F12;
          border-bottom: 1px solid #1F2128;
          padding: 16px 32px;
          box-sizing: border-box;
        }
        .nb-inner {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .nb-mark {
          width: 9px;
          height: 9px;
          border-radius: 3px;
          background: #5B7FDE;
          flex-shrink: 0;
        }
        .nb-brand {
          font-family: 'Sora', sans-serif;
          font-size: 17px;
          font-weight: 700;
          color: #F4F5F7;
          letter-spacing: -0.01em;
          margin: 0;
        }
      `}</style>

      <div className="nb-inner">
        <span className="nb-mark" />
        <span className="nb-brand">
          Employee Task Dashboard
        </span>
      </div>
    </nav>
  );
}

export default Navbar;