# Olloi

> AI-Native Community Platform Backend

A serverless, event-driven backend that powers multi-tenant communities with AI agents, personalized feeds, smart issue workflows, news automation, payments, notifications, and analytics.

![Olloi project hero image](https://res.cloudinary.com/diyxwdtjd/image/upload/v1769290223/projects/olloi-pic_fy2jly.png)

- Live: https://olloi.com
- Tags: Hono, TypeScript, AWS Lambda, PostgreSQL, Drizzle ORM, pgvector, SQS, EventBridge, OpenAI, Gemini, ElevenLabs, Replicate, Firebase, Razorpay, Terraform

## Overview

Olloi is the intelligence and operations layer behind a modern community platform. It is built for residential communities, corporate communities, admins, and platform operators who need more than a traditional CRUD backend: it coordinates onboarding, roles, events, amenities, issue escalation, social feeds, surveys, marketplace listings, news, notifications, payments, and analytics through a single serverless API. The standout part is the AI-native architecture, where LLM agents, vector search, scheduled automation, and queue-driven background workflows work together to make the product feel proactive instead of manual.

## Tech Stack

- API Layer: Hono, TypeScript, AWS Lambda, API Gateway
- Data Layer: PostgreSQL, Drizzle ORM, pgvector, RDS Proxy
- Async Workflows: Amazon SQS, dead-letter queues, AWS EventBridge, Lambda event handlers
- AI Orchestration: OpenAI GPT-4.1, GPT-4o, GPT-4o Mini, Gemini 2.0 Flash, AI SDK, LangChain, Braintrust evals
- Embeddings and Search: OpenAI text embeddings, pgvector similarity search, hybrid news and knowledge search
- Media AI: Replicate image generation, ElevenLabs text-to-speech, S3 audio and image storage
- Notifications: Firebase Cloud Messaging, Telegram bot delivery, SES/SESv2 email, SNS infrastructure
- Payments and Onboarding: Razorpay subscriptions, payment links, webhooks, prorated seat upgrades
- Storage and Delivery: Amazon S3, CloudFront
- Security and Access: JWT auth, role-based admin permissions, community-scoped data, developer API key middleware, Cognito infrastructure
- Infrastructure and Tooling: Terraform, Docker, pnpm, esbuild, Drizzle migrations, load testing scripts

## Features

### Multi-model AI agent orchestration

Olloi uses a router-agent pattern where Gemini classifies the user intent and OpenAI GPT-4.1 executes specialized tools for issues, events, amenities, surveys, goals, marketplace, knowledge base, people search, and user profiles.

### Context-aware community assistant

The app chat system stores full sessions, keeps recent conversation context, generates summaries for long sessions through SQS, and returns structured answers with suggested next choices so the assistant can stay useful across real product workflows.

### Event-driven backend engine

The same Lambda entry point handles HTTP requests, SQS queue messages, and EventBridge scheduled events, which keeps core APIs fast while AI processing, notifications, issue propagation, tracking, summaries, and image generation run asynchronously.

### Smart issue intelligence

Issue creation is supported by embeddings, duplicate detection, AI-generated metadata, polling scope decisions, and community-specific propagation flows for housing and corporate environments.

### Personalized social feed

The feed ranking system blends engagement, embedding-based relevance, user interests, post interaction history, recency, and seen-state decay to produce a more thoughtful community feed than a simple chronological timeline.

### AI content moderation and suggestions

Posts can be analyzed with multimodal LLMs for category, sentiment, moderation risk, and suggested comments, including support for S3-hosted images that are converted into model-ready inputs in background jobs.

### Semantic knowledge base

Admins can upload documents, the backend extracts and chunks the content, stores embeddings in Postgres, and exposes knowledge search tools so the assistant can answer community-specific questions from trusted documents.

### Automated news and audio layer

The news module supports hot/cold tables, personalized search, bookmarks, reactions, reports, comments, recommendations, and daily AI-generated English and Hindi audio summaries powered by OpenAI and ElevenLabs.

### Dynamic event reminders

EventBridge rules are created per event, scheduled intelligently based on event time, used to notify RSVP users, and then cleaned up automatically after execution.

### Deep admin analytics

Tracking events flow through SQS into analytics tables, enabling dashboards for sessions, engagement, profile visits, clubs, contributors, goals, events, issues, surveys, and community health.

### Marketplace, amenities, goals, and surveys

The backend includes full product modules for community marketplace listings, amenity booking, event memories, clubs, recurring surveys, goals, leaderboards, progress tracking, and AI-assisted discovery.

### Subscription-ready community onboarding

Community setup supports OTP capture, community creation, logo and member imports, Razorpay subscriptions, payment confirmation, seat upgrades, and operational emails.

## Architecture

![Olloi architecture — diagram 1](https://res.cloudinary.com/diyxwdtjd/image/upload/v1777306858/projects/d1e12029-5855-41fd-a0ae-10269fc70d30.png)
![Olloi architecture — diagram 2](https://res.cloudinary.com/diyxwdtjd/image/upload/v1777386323/projects/305b0a83-8c5c-4fe8-b647-87c0647d01b6.png)
![Olloi architecture — diagram 3](https://res.cloudinary.com/diyxwdtjd/image/upload/v1777386233/projects/3284852f-7394-494c-b3ff-47fff14d0167.png)
![Olloi architecture — diagram 4](https://res.cloudinary.com/diyxwdtjd/image/upload/v1777386269/projects/924af5bd-50c9-41ab-9f1a-93fa6229684e.png)
![Olloi architecture — diagram 5](https://res.cloudinary.com/diyxwdtjd/image/upload/v1777384336/projects/95964146-a091-4852-b75f-941800e7f14f.png)
![Olloi architecture — diagram 6](https://res.cloudinary.com/diyxwdtjd/image/upload/v1777385794/projects/5c908214-1f6e-4fb8-bb61-68b8057b7d4b.png)
![Olloi architecture — diagram 7](https://res.cloudinary.com/diyxwdtjd/image/upload/v1777385807/projects/1db2b662-6848-4a04-8f9a-360cc67b1a71.png)
![Olloi architecture — diagram 8](https://res.cloudinary.com/diyxwdtjd/image/upload/v1777385819/projects/e12df20a-1fb5-43d6-83cc-f6d1eef598dd.png)
![Olloi architecture — diagram 9](https://res.cloudinary.com/diyxwdtjd/image/upload/v1777385834/projects/ed388f7e-e735-4ae9-b705-5e85d6f118c4.png)

## Product Images

![Olloi — mobile app demo](https://drive.google.com/file/d/1ofBdlmaayoJPZgfvHbERHZX3PlqHpPi-/view?usp=drive_link)
![Olloi — dashboard demo](https://drive.google.com/file/d/1V_aZq4OPCaBmGFEy_2U_0M8OIAdgM9RG/view?usp=drive_link)
![Olloi — product image 1](https://res.cloudinary.com/diyxwdtjd/image/upload/v1777386541/projects/47d6a995-6596-461f-bece-1343debce902.png)
![Olloi — product image 2](https://res.cloudinary.com/diyxwdtjd/image/upload/v1777386554/projects/9fca1162-242c-45d7-bbd1-1808560aea0c.png)
![Olloi — product image 3](https://res.cloudinary.com/diyxwdtjd/image/upload/v1777386575/projects/8be4048e-6448-401d-a778-0f2924c65268.png)
![Olloi — product image 4](https://res.cloudinary.com/diyxwdtjd/image/upload/v1777386609/projects/d24dc9ae-dc18-42cd-ae20-2f20e459ea2b.png)
![Olloi — product image 5](https://res.cloudinary.com/diyxwdtjd/image/upload/v1777386662/projects/e1a67947-fd74-4d7f-aba8-527e4f478d71.png)

## CTA

- Live: https://olloi.com
- Back to Projects: /#projects
