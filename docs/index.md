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

</div>
