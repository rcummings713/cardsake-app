import { useState } from "react";
import { DEMO_DESTINATIONS } from "./modules/gifts/public";
import type { PaymentService } from "./modules/gifts/public";

type View = "welcome" | "guest" | "host";

const exampleNotes = [
  "Wishing you a lifetime of laughter, adventure, and quiet moments together.",
  "What a joy to celebrate this day with you both. Here is to everything ahead.",
  "From our first shared memories to this milestone, I am so happy for you."
];

export default function App() {
  const [view, setView] = useState<View>("welcome");
  const [note, setNote] = useState("");
  const [service, setService] = useState<PaymentService>("Cash App");
  const [acknowledged, setAcknowledged] = useState(false);
  const [showSample, setShowSample] = useState(false);
  const destination = DEMO_DESTINATIONS.find((route) => route.service === service)!;

  function changeService(next: PaymentService) {
    setService(next);
    setAcknowledged(false);
  }

  return (
    <div className="shell">
      <header className="site-header">
        <button className="wordmark" onClick={() => setView("welcome")}>TheDigitalCardBox<span>.</span></button>
        <nav aria-label="Demo views">
          <button className={view === "guest" ? "active" : ""} onClick={() => setView("guest")}>Guest</button>
          <button className={view === "host" ? "active" : ""} onClick={() => setView("host")}>Host</button>
        </nav>
      </header>
      <div className="demo-banner" role="status">
        Local UI starter. Sample data only. No accounts, AI requests, stored messages, or money transfers.
      </div>
      <main>
        {view === "welcome" && (
          <section className="hero">
            <div>
              <p className="eyebrow">Cards, gifts, and the memories worth keeping</p>
              <h1>Make the moment last longer than the day.</h1>
              <p className="lead">A single link for friends and family to leave a card, share a memory, and choose a host supplied way to send a gift.</p>
              <div className="buttons">
                <button className="primary" onClick={() => setView("guest")}>Explore guest view</button>
                <button className="secondary" onClick={() => setView("host")}>Explore host view</button>
              </div>
              <p className="small">The full clickable concept is included at <a href="/prototype/index.html">/prototype/index.html</a>.</p>
            </div>
            <div className="preview-card" aria-label="Sample event card">
              <span className="eyebrow">The wedding of</span>
              <h2>Alex &amp; Maya</h2>
              <p>June 14, 2027</p>
              <div className="ribbon">A place for every kind word</div>
            </div>
          </section>
        )}
        {view === "guest" && (
          <div className="layout">
            <section className="panel">
              <p className="eyebrow">Guest view · sample event</p>
              <h1>Celebrate Alex &amp; Maya</h1>
              <p>Write a note, then decide whether you also want to send a gift.</p>
              <label htmlFor="note">Your message</label>
              <textarea id="note" value={note} onChange={(e) => setNote(e.target.value)} rows={5} placeholder="Write something personal..." />
              <button className="secondary" onClick={() => setShowSample((v) => !v)}>
                {showSample ? "Hide" : "Show"} sample draft choices
              </button>
              {showSample && (
                <div className="samples">
                  <p className="small">These are fixed demo examples, not live AI. Pick one and edit it.</p>
                  {exampleNotes.map((text) => (
                    <button key={text} onClick={() => setNote(text)}>{text}</button>
                  ))}
                </div>
              )}
              <p className="small">No message is saved in this starter. The real MVP needs server authorization, consent, and private storage.</p>
            </section>
            <section className="panel">
              <p className="eyebrow">Optional external gift · demo</p>
              <h2>Choose a service</h2>
              <div className="service-list" role="group" aria-label="Payment service">
                {DEMO_DESTINATIONS.map((route) => (
                  <button className={service === route.service ? "selected" : ""}
                    key={route.service} onClick={() => changeService(route.service)}>{route.service}</button>
                ))}
              </div>
              <div className="destination">
                <p>Destination supplied by the event host</p>
                <strong>{destination.recipient}</strong>
                <dl>
                  <dt>Service</dt><dd>{destination.service}</dd>
                  <dt>Exact account</dt><dd>{destination.identifier}</dd>
                </dl>
              </div>
              <p>Before sending, check the recipient shown inside your payment service. Stop if it differs. TheDigitalCardBox cannot confirm a transfer made outside this site.</p>
              <label className="checkbox">
                <input type="checkbox" checked={acknowledged} onChange={(e) => setAcknowledged(e.target.checked)} />
                I will check the recipient inside the payment service.
              </label>
              <button className="primary" disabled={!acknowledged}
                onClick={() => window.alert("Demo only. No payment app opens and no money is sent.")}>
                Preview handoff
              </button>
            </section>
          </div>
        )}
        {view === "host" && (
          <section className="panel host-panel">
            <p className="eyebrow">Host view · sample data</p>
            <h1>One link for your celebration</h1>
            <p>In the real MVP, hosts sign in, create an occasion, confirm each enabled gift destination, and share a live URL or QR. This starter does not store host details.</p>
            <div className="host-grid">
              <div><span>Guest link</span><strong>thedigitalcardbox.example/g/alex-maya</strong></div>
              <div><span>Gift services</span><strong>Cash App · Venmo · Zelle</strong></div>
              <div><span>CardVault</span><strong>Private notes and consented entries</strong></div>
            </div>
            <a className="primary link-button" href="/prototype/index.html">Open full clickable concept</a>
          </section>
        )}
      </main>
      <footer>TheDigitalCardBox development starter · October 2026 private MVP target</footer>
    </div>
  );
}
