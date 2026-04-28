# YAP

> AI Language Learning / Web3 EdTech

A cross-platform language-learning app that combines AI lessons, speech scoring, voice tutoring, and on-chain rewards to make daily practice feel measurable and motivating.

![YAP project hero image](https://res.cloudinary.com/diyxwdtjd/image/upload/v1769290224/projects/yap-pic_uscwvo.png)

- GitHub: https://github.com/YAP-Technologies-Inc/yap-integration
- Live: https://staging.yapapp.io
- Tags: Next.js, React Native, TypeScript, Express.js, PostgreSQL, Redis, Privy, Azure Speech, Gemini, OpenAI, ElevenLabs, Sei, Docker

## Overview

YAP is a full-stack language learning platform for learners who want more than passive flashcards: it gives them structured daily lessons, real speaking practice, AI-generated stories, conversational tutoring, vocabulary review, streaks, referrals, and reward points tied to on-chain activity. The project spans a production-minded web app, a mobile app, a TypeScript API, PostgreSQL persistence, Redis lesson caching, AI speech analysis, and Docker-based deployment infrastructure, making it a strong example of building a complex consumer product end to end.

## Tech Stack

- Frontend: Next.js 15, React 19, TypeScript, Tailwind CSS, next-intl, SWR, Privy, Wagmi, Ethers
- Mobile: Expo 54, React Native, Expo Router, NativeWind, Zustand, i18next, Privy Expo, LiveKit/WebRTC, ElevenLabs React Native
- Backend: Node.js, Express.js, TypeScript, PostgreSQL, Redis, Zod, Multer, Sentry, prom-client
- AI and Speech: Azure Speech Pronunciation Assessment, Google Speech fallback, Google Gemini, Google Translate, Google Text-to-Speech, OpenAI feedback analysis, ElevenLabs conversational agents
- Web3: Sei EVM testnet, Privy embedded wallets, EIP-712 signed tutor permits, on-chain lesson and referral event emission, token-style points ledger
- Deployment: Docker, Docker Compose, Caddy reverse proxy, GitLab CI/CD, Docker Hub image publishing, Prometheus, Grafana, Blackbox Exporter

## Features

### Multi-platform lesson journey

YAP delivers the same lesson progression across web and mobile, with daily five-lesson bundles, quiz gates, resumable progress, multilingual content, and cached CMS lesson windows.

### Speech intelligence and pronunciation feedback

Learners can speak directly into lesson cards and receive scored feedback across accuracy, fluency, intonation, word-level errors, and longer-form coaching powered by Azure Speech, Google fallback, and OpenAI analysis.

### AI tutor, vocabulary, and story practice

The app extends practice beyond lessons with CEFR-level ElevenLabs voice tutors, vocabulary bank review, per-word pronunciation history, word scramble games, and Gemini-generated storyboards with translations and grammar analysis.

### Rewards, referrals, and wallet-aware learning

YAP turns progress into a reward loop with Privy authentication, embedded wallets, a PostgreSQL points ledger, referral invites, email validation, tutor-session purchases, and Sei on-chain audit events.

## Architecture

![YAP architecture](https://res.cloudinary.com/diyxwdtjd/image/upload/v1777301100/projects/26008436-ee55-4ccd-bc66-50145f3706f9.png)

## Product Images

![YAP — product screen 1](https://res.cloudinary.com/diyxwdtjd/image/upload/v1777296213/projects/5d963ffe-6379-489a-8f9e-755c5f78c192.png)
![YAP — product screen 2](https://res.cloudinary.com/diyxwdtjd/image/upload/v1777296309/projects/b2f5efb3-eefc-4301-bbf5-34c545874dc4.png)
![YAP — product screen 3](https://res.cloudinary.com/diyxwdtjd/image/upload/v1777296333/projects/687e1be8-76c2-4678-8562-29554a138872.png)
![YAP — product screen 4](https://res.cloudinary.com/diyxwdtjd/image/upload/v1777296373/projects/ffc57cd1-8d8c-4ce3-b719-421e48284c1d.png)
![YAP — product screen 5](https://res.cloudinary.com/diyxwdtjd/image/upload/v1777296587/projects/3813a9e8-ea10-475c-a96b-b856bc48b427.png)

## CTA

- Live: https://staging.yapapp.io
- Play Store: https://play.google.com/store/apps/details?id=io.yapapp.mobile
- Back to Projects: /#projects
