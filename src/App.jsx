import "./App.css";

function App() {
  return (
    <div className="page">
      <main className="card" role="main">
        <div className="logo-placeholder">
          {/* 如果之後有正式 Logo，可以改成 <img src="/logo.svg" alt="FurTimes" className="logo-img" /> */}
          <div className="logo-mark">F</div>
          <div className="logo-text">FurTimes</div>
        </div>

        <div className="badge" aria-label="網站重製中">
          <span className="badge-dot"></span>
          <span>New Site in Progress</span>
        </div>

        <h1>
          新版 <span className="highlight">獸時報</span>
          <br />
          網站正在重製中
        </h1>

        <p className="subtitle">
          我們正在重新打造獸時報官網，
          在新網站上線前，這裡會作為暫時的落地頁面。
        </p>

        <div className="divider"></div>

        <ul className="info-list">
          <li className="info-item">
            <span className="info-item-bullet"></span>
            <span>網站目前下線重製中！</span>
          </li>
          <li className="info-item">
            <span className="info-item-bullet"></span>
            <span>感謝你在網站重製期間的耐心等待與支持，請期待新版本上線！</span>
          </li>
        </ul>

        <div className="cta-row">
          {/* TODO: 把 href 改成你們的主要社群／公告管道 */}
          <a
            className="btn btn-primary"
            href="https://www.facebook.com/fur.times.official"
            target="_blank"
            rel="noopener noreferrer"
          >
            追蹤最新進度
            <span className="btn-icon">↗</span>
          </a>

          <div>
            <a className="btn btn-ghost" href="mailto:furtimestw@gmail.com">
              聯絡編輯團隊
            </a>
            <p className="meta">
              如需合作或採訪邀約，歡迎來信給我們。<br />
              <strong>Temporary Landing Page · 2025</strong>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;