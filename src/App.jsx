import "./App.css";
import logo from "./assets/logo.svg";

function App() {
  return (
    <div className="page">
      <main className="card" role="main">
        <div className="header-block">
          <div className="logo-placeholder">
            <img src={logo} alt="FurTimes" className="logo-img" />
          </div>

          <div className="badge" aria-label="網站重製中">
            <span className="badge-dot"></span>
            <span>New Site in Progress</span>
          </div>
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
        <p className="subtitle subtitle-en">
          We are rebuilding the official FurTimes website.
        </p>

        <div className="divider"></div>

        <ul className="info-list">
          <li className="info-item">
            <span className="info-item-bullet" />

            <div className="info-text-block">
              <span className="info-zh">網站目前下線重製中！</span>
              <span className="info-en">The current site is temporarily offline for a full redesign.</span>
            </div>
          </li>

          <li className="info-item">
            <span className="info-item-bullet" />
            <div className="info-text-block">
              <span className="info-zh">一切更新目前以粉專為主。</span>
              <span className="info-en">For the latest furry news, feel free to visit our Facebook page.</span>
            </div>
          </li>

          <li className="info-item">
            <span className="info-item-bullet" />
            <div className="info-text-block">
              <span className="info-zh">感謝你在網站重製期間的耐心支持，請期待新版本上線！</span>
              <span className="info-en">
                Thank you for your patience and support during this transition. Please look forward to the relaunch!
              </span>
            </div>
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
            點我看粉專
            <span className="btn-icon">↗</span>
          </a>

          <div>
            <a className="btn btn-ghost" href="mailto:furtimestw@gmail.com">
              聯絡編輯團隊
            </a>
            <p className="meta">
              如需合作或採訪邀約，歡迎來信！<br />
              <strong>Temporary Landing Page · 2025</strong>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
