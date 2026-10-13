import { useEffect, useRef, useState } from "react";
import type { FormEvent, MouseEvent, ReactNode } from "react";
import { DEMO_DESTINATIONS } from "./modules/gifts/public";
import type { PaymentService } from "./modules/gifts/public";

type Page = "home" | "guest" | "host" | "about" | "contact" | "not-found";
const paths = { home: "/", guest: "/guest", host: "/host", about: "/about", contact: "/contact" };
const titles: Record<Page, string> = { home: "Cards, gifts & memories", guest: "Guest experience", host: "For hosts", about: "About", contact: "Contact", "not-found": "Page not found" };
const supportEmail = "support@digitalcardbox.com";
const infoEmail = "info@digitalcardbox.com";
const contactTopics = [
  { value: "general", label: "A general question", email: infoEmail },
  { value: "support", label: "Help or support", email: supportEmail },
  { value: "hosting", label: "Hosting a celebration", email: infoEmail },
  { value: "guest", label: "The guest experience", email: supportEmail },
  { value: "feedback", label: "Feedback on the demo", email: infoEmail },
];
const exampleNotes = [
  "Wishing you a lifetime of laughter, adventure, and quiet moments together.",
  "What a joy to celebrate this day with you both. Here is to everything ahead.",
  "From our first shared memories to this milestone, I am so happy for you.",
];

function pageFromLocation(): Page {
  const path = window.location.pathname.replace(/\/$/, "") || "/";
  return (Object.entries(paths).find(([, value]) => value === path)?.[0] as Page) || "not-found";
}

function PageLink({ page, navigate, children, className, current }: {
  page: Exclude<Page, "not-found">; navigate: (page: Page) => void;
  children: ReactNode; className?: string; current?: Page;
}) {
  function click(event: MouseEvent<HTMLAnchorElement>) {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    if (page !== pageFromLocation()) window.history.pushState({}, "", paths[page]);
    navigate(page);
  }
  return <a href={paths[page]} onClick={click} className={className}
    aria-current={current === page ? "page" : undefined}>{children}</a>;
}

function BrandLogo({ compact = false }: { compact?: boolean }) {
  return <span className={`brand-logo${compact ? " brand-logo-compact" : ""}`}>
    <img src="/images/company-logo.png" alt="DigitalCardBox — Elevating events & memories"
      width={1179} height={611} decoding="async" />
  </span>;
}

function ContactPage() {
  const [topic, setTopic] = useState(contactTopics[0].value);
  const selectedTopic = contactTopics.find((option) => option.value === topic) || contactTopics[0];
  const contactEmail = selectedTopic.email;
  const [draft, setDraft] = useState("");
  const [subject, setSubject] = useState("");
  const [copyStatus, setCopyStatus] = useState("");
  function prepareMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();
    if (!name || !message) {
      setCopyStatus("Please enter your name and a message before preparing a draft.");
      return;
    }
    setSubject("DigitalCardBox · " + selectedTopic.label);
    setDraft(`${message}\n\nFrom: ${name}\nReply to: ${email}`);
    setCopyStatus("Your draft is ready below. No message has been sent.");
  }
  async function copyDraft() {
    try {
      await navigator.clipboard.writeText(`To: ${contactEmail}\nSubject: ${subject}\n\n${draft}`);
      setCopyStatus("Draft copied. No message has been sent.");
    } catch {
      setCopyStatus("Copy is unavailable in this browser. Select and copy the draft below.");
    }
  }
  return <>
    <div className="page-heading"><p className="eyebrow">We would love to hear from you</p><h1>Let’s keep in touch.</h1>
      <p>A question, a thought, or a little feedback. There’s room for it here.</p></div>
    <div className="content-grid contact-layout">
      <section className="panel"><h2>Send a little hello</h2><p>Tell us what’s on your mind. This form prepares a draft for you to review.</p>
        <form onSubmit={prepareMessage} onChange={() => { setDraft(""); setCopyStatus(""); }}>
          <div className="form-row">
            <div className="field"><label htmlFor="contact-name">Your name</label><input id="contact-name" name="name" autoComplete="name" maxLength={80} required placeholder="First and last name" /></div>
            <div className="field"><label htmlFor="contact-email">Your email</label><input id="contact-email" name="email" type="email" autoComplete="email" maxLength={254} required placeholder="Your email address" /></div>
          </div>
          <div className="field"><label htmlFor="contact-topic">What’s it about?</label>
            <select id="contact-topic" name="topic" value={topic} onChange={(event) => setTopic(event.target.value)} aria-describedby="contact-recipient">
              {contactTopics.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
            </select>
            <p className="small" id="contact-recipient">Your draft will be addressed to {contactEmail}.</p>
          </div>
          <div className="field"><label htmlFor="contact-message">Your message</label><textarea id="contact-message" name="message" rows={7} maxLength={3000} required placeholder="Start with a hello…" aria-describedby="contact-privacy" /></div>
          <p className="small" id="contact-privacy">Please leave out payment details, passwords, and private guest information.</p>
          <button className="primary" type="submit">Prepare message <span aria-hidden="true">↗</span></button>
          <p className="small">Nothing is sent until you send it from your own email app.</p>
        </form>
        <p className="small" role="status">{copyStatus}</p>
        {draft && <section className="draft-preview" aria-label="Your contact draft"><h3>Your message draft</h3>
          <p className="small">To: {contactEmail}<br />Subject: {subject}</p>
          <label htmlFor="contact-draft">Review and copy your message</label><textarea id="contact-draft" value={draft} readOnly rows={7} />
          <div className="buttons"><button type="button" className="secondary" onClick={copyDraft}>Copy draft</button>
            <a className="primary" href={`mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(draft)}`}>Open email draft</a></div>
        </section>}
      </section>
      <aside className="sidebar">
        <section className="sidebar-card contact-card"><span className="script-accent">hello!</span><h2>A note away</h2><p>For questions about DigitalCardBox and feedback on the experience.</p>
          <dl className="contact-addresses">
            <div><dt>Support Email</dt><dd><a href={`mailto:${supportEmail}`}>{supportEmail}</a></dd></div>
            <div><dt>General Info</dt><dd><a href={`mailto:${infoEmail}`}>{infoEmail}</a></dd></div>
          </dl>
          <div className="fine-rule" /><h3>About an event or gift?</h3><p>Contact your event host through a channel you already know. Check external transfers in the service you used.</p></section>
        <section className="sidebar-card faq-card"><p className="eyebrow">A little help</p>
          <details><summary>Do I need to send a gift?</summary><p>No. A kind note is enough. Notes and gifts are independent.</p></details>
          <details><summary>Does this demo save my note?</summary><p>No. Demo notes stay in the open page and disappear when you reload.</p></details>
          <details><summary>Does DigitalCardBox send money?</summary><p>No. The demo makes no transfers. The planned app offers directions to host-enabled external services.</p></details>
        </section>
      </aside>
    </div>
  </>;
}

export default function App() {
  const [page, setPage] = useState<Page>(pageFromLocation);
  const [note, setNote] = useState("");
  const [service, setService] = useState<PaymentService>("Cash App");
  const [acknowledged, setAcknowledged] = useState(false);
  const [showSample, setShowSample] = useState(false);
  const [handoffPreview, setHandoffPreview] = useState(false);
  const mainRef = useRef<HTMLElement>(null);
  const initialRender = useRef(true);
  const destination = DEMO_DESTINATIONS.find((route) => route.service === service)!;
  useEffect(() => {
    const onPopState = () => setPage(pageFromLocation());
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);
  useEffect(() => {
    document.title = `${titles[page]} · DigitalCardBox`;
    if (initialRender.current) initialRender.current = false;
    else { mainRef.current?.focus({ preventScroll: true }); window.scrollTo({ top: 0, behavior: "instant" }); }
  }, [page]);
  function changeService(next: PaymentService) {
    if (next === service) return;
    setService(next); setAcknowledged(false); setHandoffPreview(false);
  }
  const linkProps = { navigate: setPage };
  return <div className="shell">
    <a className="skip-link" href="#main-content">Skip to content</a>
    <header className="site-header">
      <div className="navigation-bar"><nav aria-label="Main navigation">
        <PageLink {...linkProps} page="home" current={page}>Home</PageLink><PageLink {...linkProps} page="about" current={page}>About</PageLink>
        <PageLink {...linkProps} page="guest" current={page}>Guest experience</PageLink><PageLink {...linkProps} page="host" current={page}>For hosts</PageLink><PageLink {...linkProps} page="contact" current={page}>Contact</PageLink>
      </nav><span className="nav-caption"><span aria-hidden="true">♡</span> Made for meaningful moments</span></div>
      <div className="masthead"><PageLink {...linkProps} page="home" className="wordmark"><BrandLogo /></PageLink></div>
    </header>
    <div className="demo-banner"><span className="demo-label">A little preview</span>Sample data only. No accounts, saved notes, live AI, or money transfers.</div>
    <main id="main-content" ref={mainRef} tabIndex={-1}>
      {page === "home" && <>
        <h1 className="visually-hidden">DigitalCardBox — cards, gifts, and memories worth keeping</h1>
        <section className="featured-grid" aria-label="Explore DigitalCardBox">
          <PageLink {...linkProps} page="guest" className="feature-card"><img src="/images/flowers.jpg" alt="A soft pink and white bouquet for a special occasion" width="1000" height="1250" fetchPriority="high" /><div className="feature-caption"><span className="eyebrow">Cards &amp; kind words</span><h2>A little note.<br />A lasting memory.</h2></div></PageLink>
          <PageLink {...linkProps} page="host" className="feature-card"><img src="/images/celebration.jpg" alt="An intimate celebration table with flowers and candlelight" width="1000" height="1250" /><div className="feature-caption"><span className="eyebrow">For your celebration</span><h2>Bring everyone together<br />with one simple link.</h2></div></PageLink>
          <PageLink {...linkProps} page="about" className="feature-card"><img src="/images/tea.jpg" alt="A quiet cup of tea, a reminder to enjoy the little moments" width="1000" height="1250" /><div className="feature-caption"><span className="eyebrow">Memories worth keeping</span><h2>Make the moment last<br />longer than the day.</h2></div></PageLink>
        </section>
        <div className="content-grid home-content"><div className="story-list">
          <article className="story-panel"><img src="/images/flowers.jpg" alt="Flowers in soft blush tones" width="1000" height="1250" loading="lazy" /><div><p className="eyebrow">A thoughtful little gesture</p><h2>Every celebration starts<br />with a kind word.</h2><p>For the big milestones and the just-because moments. Leave a personal note, share a memory, and give someone words they can return to.</p><PageLink {...linkProps} page="guest" className="primary">Explore guest view <span aria-hidden="true">↗</span></PageLink></div></article>
          <article className="story-panel"><img src="/images/celebration.jpg" alt="A celebration ready for friends and family" width="1000" height="1250" loading="lazy" /><div><p className="eyebrow">Less organizing, more celebrating</p><h2>One celebration.<br />So many beautiful memories.</h2><p>The idea is simple: share one link for cards and memories, offer optional external gift choices, and keep the words together in your private CardVault.</p><PageLink {...linkProps} page="host" className="primary">Explore host view <span aria-hidden="true">↗</span></PageLink></div></article>
          <section className="keepsake-panel"><p className="eyebrow">A glimpse of the guest experience</p><h2>Alex &amp; Maya</h2><p className="event-date">The wedding · June 14, 2027 · sample event</p><blockquote>“Here’s to all the small, ordinary moments that become your favorite memories.”</blockquote><PageLink {...linkProps} page="guest" className="secondary">Leave a kind word <span aria-hidden="true">↗</span></PageLink></section>
        </div><aside className="sidebar">
          <section className="sidebar-card welcome-card"><img className="round-image" src="/images/flowers.jpg" alt="" width="200" height="200" loading="lazy" /><span className="script-accent">hello!</span><p>Welcome to DigitalCardBox. A thoughtful little place for the people, celebrations, and words that mean the most.</p><PageLink {...linkProps} page="about" className="primary">Get to know us</PageLink></section>
          <section className="sidebar-card quick-links"><h2>Make yourself at home</h2><PageLink {...linkProps} page="guest">Leave a note <span aria-hidden="true">↗</span></PageLink><PageLink {...linkProps} page="host">Host a celebration <span aria-hidden="true">↗</span></PageLink><a href="/prototype/index.html">Full clickable demo <span aria-hidden="true">↗</span></a><PageLink {...linkProps} page="contact">Say hello <span aria-hidden="true">↗</span></PageLink></section>
          <section className="sidebar-card quiet-card"><span aria-hidden="true" className="heart-mark">♡</span><h2>Words are always enough.</h2><p>A gift is optional. A note is personal. Every guest has a place here.</p></section>
        </aside></div>
      </>}
      {page === "about" && <>
        <div className="page-heading"><p className="eyebrow">A little about DigitalCardBox</p><h1>Celebrate simply.<br />Keep what matters.</h1><p>The heart of a greeting card. The ease of a shared link.</p></div>
        <section className="about-story panel">
          <img src="/images/flowers.jpg" alt="A bouquet of pink and white flowers" width="1000" height="1250" />
          <div>
            <span className="script-accent">our purpose</span>
            <h2>Less to carry.<br />More to keep.</h2>
            <p>The best part of a celebration is the connection: a heartfelt note, a generous gesture, a memory you’ll smile at years later.</p>
            <p>DigitalCardBox is being built to bring that feeling into a simpler, mobile-friendly experience. Our vision connects elegant digital invitations, personal e-cards, and optional cash gifting in one thoughtful place.</p>
            <p>Hosts can look forward to sharing an event link or QR code and gathering kind words in a private CardVault. Guests will be able to write from wherever they are and, if they choose, send a gift through a host-enabled external service.</p>
            <p>From weddings and baby showers to milestone parties and new beginnings: fewer last-minute card runs, ATM stops, and envelopes to look after. Less paper to manage. More time for the people who matter.</p>
            <PageLink {...linkProps} page="host" className="primary">Explore hosting <span aria-hidden="true">↗</span></PageLink>
          </div>
        </section>
        <section className="principles" aria-label="What matters to us">
          <article className="panel"><span className="principle-number">01</span><h2>Simple to share.</h2><p>One link, a phone-friendly experience, and a place for guests near and far. Thoughtfulness should fit into everyone’s day.</p></article>
          <article className="panel"><span className="principle-number">02</span><h2>Personal, always.</h2><p>A meaningful note is always enough. Gifts are optional, with external service choices enabled by the host.</p></article>
          <article className="panel"><span className="principle-number">03</span><h2>Made to be kept.</h2><p>Our planned private CardVault brings notes and consented memories together, ready to revisit long after the occasion.</p></article>
        </section>
        <section className="about-details panel"><div><p className="eyebrow">Simply, thoughtfully</p><h2>A little less effort.<br />A little more connection.</h2></div><ol className="how-it-works"><li><strong>Welcome your people.</strong><p>Share an occasion link or QR, whether your guests are across the room or across the miles.</p></li><li><strong>Make it meaningful.</strong><p>Leave a personal card or note, share a memory, and choose whether to give through a host-enabled external service.</p></li><li><strong>Keep the feeling close.</strong><p>The host’s private collection is designed to keep the kind words together after the celebration ends.</p></li></ol></section>
        <div className="page-end"><p>You’re exploring a preview of our vision. Live accounts, private storage, and AI are still being built.</p><PageLink {...linkProps} page="contact" className="secondary">Tell us about your celebration <span aria-hidden="true">↗</span></PageLink></div>
      </>}
      {page === "contact" && <ContactPage />}
      {page === "guest" && <>
        <div className="page-heading"><p className="eyebrow">Guest experience · sample event</p><h1>Celebrate Alex &amp; Maya</h1><p>A kind word, a favorite memory, a little love.</p></div>
        <div className="layout guest-layout"><section className="panel note-panel"><p className="eyebrow">01 / A note from you</p><h2>Make it personal.</h2><p>Write a note, then decide whether you also want to send a gift. A note needs no gift.</p>
          <label htmlFor="note">Your message</label><textarea id="note" value={note} onChange={(event) => setNote(event.target.value)} rows={7} placeholder="Write something personal…" />
          <button className="secondary" onClick={() => setShowSample((value) => !value)} aria-expanded={showSample} aria-controls="sample-drafts">{showSample ? "Hide" : "Show"} sample draft choices</button>
          {showSample && <div className="samples" id="sample-drafts"><p className="small">These are fixed demo examples, not live AI. Pick one and edit it.</p>{exampleNotes.map((text) => <button key={text} onClick={() => setNote(text)}>{text}</button>)}</div>}
          {note && <div className="note-preview"><p className="eyebrow">Your note · unsaved preview</p><blockquote>{note}</blockquote></div>}
          <p className="small">Your draft stays in this open page. Reloading clears it. No message is saved or submitted in this demo.</p><a className="text-link" href="/prototype/index.html">Try card design in the full demo <span aria-hidden="true">↗</span></a>
        </section><section className="panel"><p className="eyebrow">02 / An optional gesture</p><h2>Choose a gift service.</h2><p className="small">Demo only. No payment app opens and no transfer occurs.</p>
          <div className="service-list" role="group" aria-label="Payment service">{DEMO_DESTINATIONS.map((route) => <button className={service === route.service ? "selected" : ""} key={route.service} onClick={() => changeService(route.service)} aria-pressed={service === route.service}>{route.service}</button>)}</div>
          <div className="destination"><p className="small">Destination supplied by the event host · sample only</p><strong>{destination.recipient}</strong><dl><dt>Service</dt><dd>{destination.service}</dd><dt>Exact account</dt><dd>{destination.identifier}</dd></dl><p className="small">DigitalCardBox has not independently verified these host-supplied details.</p></div>
          <p>Before sending, check the recipient inside your payment service. If it differs, stop and contact your host through a known channel. DigitalCardBox cannot confirm an external transfer.</p>
          <label className="checkbox"><input type="checkbox" checked={acknowledged} onChange={(event) => { setAcknowledged(event.target.checked); setHandoffPreview(false); }} /><span>I will check the recipient inside the payment service.</span></label>
          <button className="primary" disabled={!acknowledged} onClick={() => setHandoffPreview(true)}>Preview handoff <span aria-hidden="true">↗</span></button>
          {handoffPreview && <p className="handoff-status" role="status">Demo preview for {service}. No payment app opened and no money was sent. External gifts remain unconfirmed until the host checks their own account.</p>}
        </section></div>
      </>}
      {page === "host" && <>
        <div className="page-heading"><p className="eyebrow">For hosts · sample data</p><h1>Your people.<br />Your celebration.</h1><p>One thoughtful place for everything they want to say.</p></div>
        <section className="host-intro panel"><img src="/images/celebration.jpg" alt="A table set for an intimate celebration" width="1000" height="1250" /><div><p className="eyebrow">A single link, so many memories</p><h2>More time for the moment.</h2><p>In the planned app, sign in, create your occasion, confirm any enabled external gift destinations, and share a single guest link or QR.</p><p>Your guests can leave a note without sending a gift. Their kind words come together in your private CardVault.</p><a className="primary" href="/prototype/index.html#setup">Explore host setup <span aria-hidden="true">↗</span></a><p className="small">This demo does not create accounts, publish events, or store host details.</p></div></section>
        <section className="host-grid" aria-label="Sample host overview"><div className="panel"><span className="eyebrow">Your guest link</span><h2>Easy to share.</h2><strong>digitalcardbox.example/g/alex-maya</strong><p className="small">Example address only · no event is hosted here</p></div><div className="panel"><span className="eyebrow">Optional gift choices</span><h2>The guest chooses.</h2><strong>Cash App · Venmo · Zelle</strong><p className="small">Host-enabled external services · demo routes only</p></div><div className="panel"><span className="eyebrow">Your CardVault</span><h2>Keep the kind words.</h2><strong>Private notes and consented entries</strong><p className="small">Explore the sample book in the full clickable demo</p></div></section>
      </>}
      {page === "not-found" && <section className="page-heading"><p className="eyebrow">A little detour</p><h1>This page isn’t here.</h1><p>Let’s get you back to the celebration.</p><PageLink {...linkProps} page="home" className="primary">Back to home</PageLink></section>}
    </main>
    <footer className="site-footer"><PageLink {...linkProps} page="home" className="footer-wordmark"><BrandLogo compact /></PageLink><p>Cards, gifts, and the memories worth keeping.</p><nav aria-label="Footer navigation"><PageLink {...linkProps} page="about">About</PageLink><PageLink {...linkProps} page="contact">Contact</PageLink><a href="/prototype/index.html">Full demo</a></nav><p className="small">DigitalCardBox · Sample experience · October 2026</p></footer>
  </div>;
}
