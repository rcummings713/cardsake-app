import { useState } from "react";
import type { FormEvent } from "react";
import { Card, Heading, Link, Notice, go, copy } from "./shared";
import { designs } from "./model";
import { useStore } from "./state";

export function Home() {
  return (
    <>
      <section className="home-hero">
        <div>
          <span className="script-accent">for the moments that matter</span>
          <h1>
            A little card.
            <br />A whole lot of feeling.
          </h1>
          <p>
            Bring your people together for heartfelt cards, shared memories, and
            a keepsake you’ll come back to.
          </p>
          <div className="buttons">
            <Link to="/start?occasion=Wedding" className="primary">
              Create a wedding card box <span aria-hidden="true">↗</span>
            </Link>
            <Link to="/how-it-works" className="text-link">
              How it works
            </Link>
          </div>
          <p className="small">
            Every note belongs. Gifts are always optional.
          </p>
        </div>
        <div className="hero-composition">
          <img
            src="/images/flowers.jpg"
            alt="Soft pink roses ready for a celebration"
          />
          <div className="hero-card">
            <Card
              small
              entry={{
                name: "Jordan",
                style: "botanical",
                note: "Here’s to all the little moments that become your favorite memories.",
              }}
            />
          </div>
          <span className="hero-label">Words worth keeping.</span>
        </div>
      </section>
      <section className="occasion-section">
        <p className="eyebrow">Make room for every kind of occasion</p>
        <div className="occasion-links">
          {[
            ["Wedding", "Our next chapter"],
            ["Baby shower", "A little one, so much love"],
            ["Birthday", "Another beautiful year"],
            ["Other dated event", "Just because it matters"],
          ].map(([type, title], i) => (
            <Link
              key={type}
              to={"/start?occasion=" + encodeURIComponent(type)}
              className="occasion-tile"
            >
              <span className="tile-number">0{i + 1}</span>
              <h2>{type === "Other dated event" ? "Every occasion" : type}</h2>
              <p>{title}</p>
              <span className="text-link">Create a card box ↗</span>
            </Link>
          ))}
        </div>
      </section>
      <section className="split-story">
        <img
          src="/images/celebration.jpg"
          alt="A candlelit table set for friends and family"
        />
        <div>
          <p className="eyebrow">Less collecting. More connecting.</p>
          <h2>
            One place for every
            <br />
            “we’re so happy for you.”
          </h2>
          <p>
            Share your event link. Let guests choose a beautiful card and make
            it their own. Gather their words in an event book that feels as
            special as the occasion.
          </p>
          <Link className="secondary" to="/start">
            Start your card box
          </Link>
        </div>
      </section>
      <section className="center-section">
        <p className="eyebrow">Made to be opened again</p>
        <h2>
          Beautiful on the outside.
          <br />
          Entirely you on the inside.
        </h2>
        <div className="design-triptych">
          {designs.slice(0, 3).map((d, i) => (
            <Card
              key={d.id}
              small
              entry={{
                name: ["Your people", "Your family", "Your friends"][i],
                style: d.id,
                note: [
                  "A little love for the life you are making.",
                  "All the joy in the world, and then a little more.",
                  "May the best part always be what comes next.",
                ][i],
              }}
            />
          ))}
        </div>
        <Link className="text-link" to="/cards">
          Find your kind of beautiful ↗
        </Link>
      </section>
      <section className="cta-band">
        <span className="script-accent">let’s make a memory</span>
        <h2>
          Your next chapter deserves
          <br />a beautiful place to begin.
        </h2>
        <Link to="/start" className="primary">
          Create your card box
        </Link>
      </section>
    </>
  );
}

export function Start() {
  const { notify } = useStore();
  const [manual, setManual] = useState(false);
  const occasion =
    new URLSearchParams(location.search).get("occasion") || "Wedding";
  return (
    <div className="onboarding-grid">
      <div className="onboarding-story">
        <p className="eyebrow">A new beginning</p>
        <h1>
          Let’s make
          <br />
          something
          <br />
          <em>worth keeping.</em>
        </h1>
        <p>Your people. Their words. All together.</p>
        <Card
          small
          entry={{
            name: "The people who love you",
            style: "ribbon",
            note: "For the big days, and all the little things that make them yours.",
          }}
        />
      </div>
      <section className="panel account-panel">
        <p className="eyebrow">Welcome to TheDigitalCardBox</p>
        <h2>Create your space</h2>
        <p>Start a card box for your {occasion.toLowerCase()}.</p>
        <div className="provider-list">
          {["Apple", "Google", "Amazon"].map((provider, i) => (
            <button
              key={provider}
              className="provider-button"
              onClick={() =>
                notify(
                  `${provider} sign-in is not connected. Choose “Continue without signing in” to review the experience.`,
                )
              }
            >
              <span aria-hidden="true">{["●", "G", "a"][i]}</span>Continue with{" "}
              {provider}
            </button>
          ))}
        </div>
        <div className="or-rule">
          <span>or</span>
        </div>
        <button
          className="secondary full"
          onClick={() => setManual(!manual)}
          aria-expanded={manual}
          aria-controls="email-entry"
        >
          Continue with email
        </button>
        {manual && (
          <form
            id="email-entry"
            onSubmit={(e) => {
              e.preventDefault();
              notify(
                "Account creation is not connected. Continue without signing in below.",
              );
            }}
          >
            <label htmlFor="account-name">Your name</label>
            <input
              id="account-name"
              autoComplete="name"
              required
              maxLength={80}
            />
            <label htmlFor="account-email">Email address</label>
            <input
              id="account-email"
              type="email"
              autoComplete="email"
              required
            />
            <p className="small">
              Account connections are being prepared. No password is collected
              here.
            </p>
            <button className="secondary">Review account choice</button>
          </form>
        )}
        <div className="account-skip">
          <Link
            to={"/workspace/new?occasion=" + encodeURIComponent(occasion)}
            className="primary full"
          >
            Continue without signing in ↗
          </Link>
          <p className="small">
            Design workspace · No account needed. Changes stay in this browser.
          </p>
        </div>
        <p className="small">
          Read our <Link to="/privacy">privacy notice</Link> and{" "}
          <Link to="/terms">terms</Link>.
        </p>
        <Link to="/workspace" className="text-link">
          Open existing card boxes
        </Link>
      </section>
    </div>
  );
}
export function Informational({ page }: { page: string }) {
  if (page === "cards")
    return (
      <>
        <Heading
          eyebrow="The card collection"
          title="A beautiful home for your words."
        >
          <p>
            Original illustrations, considered typography, and all the room you
            need to make it personal.
          </p>
        </Heading>
        <div className="collection-grid">
          {designs.map((d, i) => (
            <div key={d.id}>
              <Card
                entry={{
                  name: "You",
                  style: d.id,
                  note: [
                    "Some moments stay with us. You are one of mine.",
                    "Here’s to your beautiful next chapter.",
                    "Of all the stars, you found each other.",
                    "With more love than a card could ever hold.",
                    "May your days grow wild with happiness.",
                    "For the memories we made, and the ones still to come.",
                  ][i],
                }}
              />
              <h2>{d.name}</h2>
              <p>{d.description}</p>
            </div>
          ))}
        </div>
        <section className="cta-band">
          <h2>Your words make it a keepsake.</h2>
          <Link to="/start" className="primary">
            Create a card box
          </Link>
          <p className="small">
            Received an invitation? Open the event link from your host to send a
            card.
          </p>
        </section>
      </>
    );
  if (page === "pricing")
    return (
      <>
        <Heading
          eyebrow="Simple, thoughtful choices"
          title="The words are always enough."
        >
          <p>
            Every guest can leave a note. A gift and a polished event book are
            separate, optional choices.
          </p>
        </Heading>
        <div className="pricing-grid">
          <section className="panel">
            <p className="eyebrow">Your card box</p>
            <h2>Keep the kind words.</h2>
            <div className="price">Free</div>
            <p>
              Guest cards, a private CardVault and basic export. No contribution
              cap and no gift required.
            </p>
            <Link className="primary" to="/start">
              Create your card box
            </Link>
          </section>
          <section className="panel price-feature">
            <p className="eyebrow">The polished event book</p>
            <h2>Make it a keepsake.</h2>
            <p>
              Final pricing follows the number of included entries when
              contributions close.
            </p>
            <dl className="price-tiers">
              <div>
                <dt>0–99 entries</dt>
                <dd>$15</dd>
              </div>
              <div>
                <dt>100–299 entries</dt>
                <dd>$30</dd>
              </div>
              <div>
                <dt>300+ entries</dt>
                <dd>$79</dd>
              </div>
            </dl>
            <p className="small">
              One card with its photo counts as one entry. GIFs and cash gifts
              do not add entries. Purchasing is not connected in this workspace.
            </p>
          </section>
        </div>
      </>
    );
  if (page === "how-it-works")
    return (
      <>
        <Heading
          eyebrow="A thoughtful little process"
          title="From a shared link to a lasting memory."
        />
        <div className="steps-grid">
          {[
            [
              "Create your card box",
              "Choose an occasion, add your welcome, and make it feel like you.",
            ],
            [
              "Invite your people",
              "Share your event link or QR with the people you want to hear from. Events are not publicly listed.",
            ],
            [
              "Let their words come in",
              "Guests choose a card, add their note, and optionally include a photo, GIF or external gift.",
            ],
            [
              "Keep the feeling close",
              "Enjoy your CardVault, curate your event book, and revisit your favorite words.",
            ],
          ].map(([title, description], i) => (
            <section className="panel" key={title}>
              <span className="tile-number">0{i + 1}</span>
              <h2>{title}</h2>
              <p>{description}</p>
            </section>
          ))}
        </div>
        <div className="center-section">
          <Link to="/start" className="primary">
            Let’s begin
          </Link>
        </div>
      </>
    );
  if (page === "about")
    return (
      <>
        <Heading
          eyebrow="A little about us"
          title="Less to carry. More to keep."
        >
          <p>The heart of a greeting card. The ease of a shared link.</p>
        </Heading>
        <section className="split-story">
          <img
            src="/images/tea.jpg"
            alt="A quiet cup of tea beside a journal"
          />
          <div>
            <span className="script-accent">our purpose</span>
            <h2>
              For the people.
              <br />
              For the words.
              <br />
              For the years ahead.
            </h2>
            <p>
              The best part of a celebration is the connection. A heartfelt
              note, a shared memory, something to return to long after the
              occasion.
            </p>
            <p>
              TheDigitalCardBox brings those moments together in one thoughtful
              place. From weddings and baby showers to birthdays and quiet
              milestones: less paper to manage, and more room for what matters.
            </p>
            <Link to="/start" className="primary">
              Make room for your memories
            </Link>
          </div>
        </section>
      </>
    );
  const copyByPage: Record<string, [string, string, string[]]> = {
    privacy: [
      "Your privacy",
      "Your words deserve care.",
      [
        "This design workspace stores fictional records and the changes you make in your browser’s local storage. It does not create an account, upload a photo, send a note to a server, or connect a payment service. Use fictional information while reviewing it.",
        "Uploaded photos stay on this device. You can remove your card, clear your browser data, or reset the design workspace in Account settings. An exported file stays on the device where you download it.",
        "Contact drafts open in your own email app. Nothing is sent until you choose to send it there. No advertising trackers or external GIF searches are loaded by this interface.",
      ],
    ],
    terms: [
      "Using TheDigitalCardBox",
      "A thoughtful place, used thoughtfully.",
      [
        "Share only words and images that you have permission to use. Keep payment credentials, financial documents and sensitive personal information out of notes.",
        "External gift activity is separate from a card. A guest report or an app handoff does not verify receipt. The host checks their own payment service before marking a gift as received.",
        "This account-free design workspace does not process payments or purchases. Features that require connected accounts will be available after the corresponding services are implemented.",
      ],
    ],
    accessibility: [
      "Accessibility",
      "A place for everyone.",
      [
        "We are building toward WCAG 2.2 Level AA with keyboard navigation, visible focus, text alternatives, sufficient contrast, labeled controls and layouts that adapt to zoom and small screens.",
        "Cards have a readable text version. GIFs are still by default; motion starts only when you choose to play it. You can reduce motion in Account settings.",
        "If something gets in your way, email support@digitalcardbox.com with the page and what you were trying to do. Please leave out private guest or payment information.",
      ],
    ],
  };
  const content = copyByPage[page];
  return (
    <>
      <Heading eyebrow={content[0]} title={content[1]} />
      <article className="panel reading-width">
        {content[2].map((p) => (
          <p key={p}>{p}</p>
        ))}
        <p>
          <Link to="/contact">Get in touch ↗</Link>
        </p>
      </article>
    </>
  );
}
export function Contact() {
  const { notify } = useStore();
  const [draft, setDraft] = useState<{
    to: string;
    subject: string;
    body: string;
  } | null>(null);
  function prepare(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const topic = String(f.get("topic"));
    setDraft({
      to:
        topic === "Support"
          ? "support@digitalcardbox.com"
          : "info@digitalcardbox.com",
      subject: "TheDigitalCardBox · " + topic,
      body: `${f.get("message")}\n\nFrom: ${f.get("name")}\nReply to: ${f.get("email")}`,
    });
  }
  return (
    <>
      <Heading eyebrow="A note away" title="Let’s keep in touch." />
      <div className="two-column">
        <section className="panel">
          <h2>Send a little hello</h2>
          <form onSubmit={prepare} onChange={() => setDraft(null)}>
            <label htmlFor="contact-name">Your name</label>
            <input
              id="contact-name"
              name="name"
              autoComplete="name"
              required
              maxLength={80}
            />
            <label htmlFor="contact-email">Email address</label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              required
            />
            <label htmlFor="contact-topic">What’s on your mind?</label>
            <select id="contact-topic" name="topic">
              <option>General question</option>
              <option>Support</option>
              <option>Hosting</option>
              <option>Feedback</option>
            </select>
            <label htmlFor="contact-message">Your message</label>
            <textarea
              id="contact-message"
              name="message"
              required
              rows={6}
              maxLength={3000}
            />
            <p className="small">
              Please leave out passwords, payment details and private guest
              information.
            </p>
            <button className="primary">Prepare email draft</button>
          </form>
          {draft && (
            <div className="draft-preview">
              <h3>Your email draft</h3>
              <p>
                To: {draft.to}
                <br />
                Subject: {draft.subject}
              </p>
              <pre>{draft.body}</pre>
              <div className="buttons">
                <button
                  className="secondary"
                  onClick={() =>
                    copy(draft.subject + "\n" + draft.body, notify)
                  }
                >
                  Copy draft
                </button>
                <a
                  className="primary"
                  href={`mailto:${draft.to}?subject=${encodeURIComponent(draft.subject)}&body=${encodeURIComponent(draft.body)}`}
                >
                  Open email app
                </a>
              </div>
              <Notice>Your draft is ready. Nothing has been sent.</Notice>
            </div>
          )}
        </section>
        <aside className="panel">
          <span className="script-accent">hello!</span>
          <h2>We’d love to hear from you.</h2>
          <p>
            Support
            <br />
            <a href="mailto:support@digitalcardbox.com">
              support@digitalcardbox.com
            </a>
          </p>
          <p>
            General information
            <br />
            <a href="mailto:info@digitalcardbox.com">info@digitalcardbox.com</a>
          </p>
          <details>
            <summary>Looking for an event?</summary>
            <p>
              Use the link or QR from your host. We do not offer a public event
              directory.
            </p>
          </details>
          <details>
            <summary>Have a question about a gift?</summary>
            <p>
              Check the payment service you used and contact your host through a
              channel you know.
            </p>
          </details>
        </aside>
      </div>
    </>
  );
}
export function Missing() {
  return (
    <div className="empty">
      <span className="script-accent">a little lost?</span>
      <h1>This page isn’t here.</h1>
      <p>If you’re joining an event, use the complete link from your host.</p>
      <Link to="/" className="primary">
        Back to home
      </Link>
      <button className="secondary" onClick={() => go("/workspace")}>
        My card boxes
      </button>
    </div>
  );
}
