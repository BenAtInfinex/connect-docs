---
id: index
title: Infinex Connect Documentation
sidebar_label: Home
hide_table_of_contents: true
hide_title: true
---

import { Container, Card } from "@site/src/components/cards";

<div className="landing">

  <div className="landing-intro">
    <h1>Introducing Infinex Connect</h1>
    <p className="landing-subtitle">
      Take your Infinex account with you—secure SSO-style auth, frictionless cross-chain access, and built-in swaps & bridges.
    </p>
    <div className="landing-underline"></div>
  </div>

  <Container>
    <Card
      img="/img/icons/connect-light.svg"
      title="Instant App Connection"
      text="Verified, phishing-resistant SSO auth lets you connect to any dApp in one click."
      links={{
        "How It Works": "/protocol/auth",
        "Supported Apps": "/apps/overview",
        "Security Model": "/security/overview"
      }}
    />
    <Card
      img="/img/icons/sign-light.svg"
      title="Clear, Policy-Based Signing"
      text="Granular signing sessions and permissions—no more random pop-ups or gas-price guessing."
      links={{
        "Signing Sessions": "/protocol/signatures",
        "Permission Policies": "/protocol/policies",
        "Best Practices": "/security/signing"
      }}
    />
    <Card
      img="/img/icons/multichain-light.svg"
      title="True Multi-Chain"
      text="Access your portfolio anywhere—no chain switches, no extra wallets, no hassle."
      links={{
        "Chain Abstraction": "/chain-abstraction/what-is",
        "Intents & Flows": "/chain-abstraction/intents/overview",
        "Supported Networks": "/chain-abstraction/networks"
      }}
    />
    <Card
      img="/img/icons/swap-light.svg"
      title="Built-In Swap & Bridge"
      text="Just-in-time gasless swaps and bridges to carry your assets wherever you go."
      links={{
        "Swidge Overview": "/swidge/overview",
        "API & SDK": "/swidge/sdk",
        "Supported Assets": "/swidge/assets"
      }}
    />
  </Container>

  <div className="landing-features">
    <h2>A New Generation of Crypto Apps</h2>
    <p>
      Infinex Connect eliminates wallet hassles—no more juggling extensions, pop-ups, or gas settings. Enjoy
      seamless SSO, policy-based signing, cross-chain balances, gasless swaps, and more.
    </p>
  </div>

  <div className="landing-stages">
    <Container>
      <Card
        img="/img/icons/alpha-light.svg"
        title="Closed Alpha"
        text="Patrons get early access to Connect in classic dApps like Aave & Synthetix Staking."
        links={{
          "Join the Alpha": "/alpha/signup",
          "Alpha Docs": "/alpha/docs",
          "Alpha FAQs": "/alpha/faqs"
        }}
      />
      <Card
        img="/img/icons/flagship-light.svg"
        title="Flagship Apps Next"
        text="Connect to top DeFi protocols on MegaETH, Fogo, and more—no extra wallets needed."
        links={{
          "Explore Apps": "/apps/flagship",
          "MegaETH Integration": "/apps/megaeth",
          "Fogo Integration": "/apps/fogo"
        }}
      />
      <Card
        img="/img/icons/sdk-beta-light.svg"
        title="SDK Beta"
        text="Build next-gen dApps with our TypeScript SDK. Early access opens June 2025."
        links={{
          "Request Beta": "/sdk/beta-signup",
          "SDK Docs": "/sdk/docs",
          "GitHub Repo": "https://github.com/infinex/connect-sdk"
        }}
      />
    </Container>
  </div>

  <div className="landing-press">
    <h2>Latest Announcement</h2>
    <p>
      <strong>May 2, 2025:</strong> At TOKEN2049 Dubai, Infinex unveiled Connect & the upcoming SDK—bringing SSO-style account access
      and powerful developer tools to DeFi.  
      <a href="/blog/2025-05-02-infinex-connect-launch">Read the full press release →</a>
    </p>
  </div>

  <div className="landing-footer">
    <h2>Ready to get started?</h2>
    <p>Unlock seamless, secure cross-chain experiences with Infinex Connect today.</p>
    <div className="landing-cta">
      <a href="/protocol/basics" className="button button--primary button--lg">
        Explore Infinex Connect Docs
      </a>
    </div>
  </div>

</div>
/div>
