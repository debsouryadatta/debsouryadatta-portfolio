# VOKK

> Personal AI Video App

VOKK turns raw talking-head footage into editable, platform-ready short-form videos with AI-generated captions, scene pacing, B-roll, music, trims, and local MP4 export.

![VOKK project hero image](https://res.cloudinary.com/diyxwdtjd/image/upload/v1777090035/projects/9f9ac2ce-4cc8-48e5-ad4b-074b5adc00b3.png)

- GitHub: https://github.com/debsouryadatta/vokk
- Live: Coming soon
- Tags: Next.js, React, TypeScript, Remotion, OpenAI, AssemblyAI, Pexels, FFmpeg, BullMQ, Redis, SQLite

## Overview

VOKK is a local-first AI video editing workbench for creators who record technical explainers, founder updates, demos, or talking-head clips and want a strong first cut without spending hours in a traditional timeline. It turns an uploaded video into an editable draft with transcript-based captions, scene planning, B-roll placement, visual filters, transitions, music, trim suggestions, canvas presets, and MP4 export. The key idea is simple: AI builds the draft, but every layer stays editable so the creator can keep control of taste, pacing, and final polish.

## Tech Stack

- Frontend: Next.js 15, React 19, TypeScript, Remotion Player, Lucide React, custom CSS
- Backend: Next.js API Routes, Node.js, BullMQ worker
- AI and Media: OpenAI Responses API, AssemblyAI, Pexels API, FFmpeg, Remotion Renderer
- Database: SQLite with better-sqlite3
- Queue and Storage: Redis, local filesystem storage, Docker Compose
- Deployment: Local-first monorepo with separate web and worker apps

## Features

### AI autopilot draft

Uploads are queued to a background worker that probes the video, extracts audio and frames, transcribes speech, creates caption chunks, maps scenes, suggests dead-air cuts, adds zoom moments, selects music, and prepares an editable first draft.

### Creator-grade captions

VOKK includes 38 built-in caption styles with word timing, karaoke-style highlighting, editable caption chunks, visibility toggles, filler-word metadata, and live caption position controls in the preview.

### Scene-aware B-roll

The editor splits the video into idea-based scenes, generates B-roll search intent, searches Pexels for matching vertical videos or images, downloads selected assets locally, and lets the creator swap, upload, remove, zoom, filter, or transition each scene.

### Review, trim, music, and export

An autopilot readiness panel scores the draft, flags missing layers, regenerates selected fixes, supports manual and suggested cut ranges, applies local background music, previews everything in Remotion, and exports the final MP4 with a Remotion-first render plus FFmpeg fallback.

## Architecture

![VOKK architecture](https://res.cloudinary.com/diyxwdtjd/image/upload/v1777294048/projects/c177778a-3a2d-464d-a738-e4de653395a3.png)

## Product Images

![VOKK — editor overview](https://res.cloudinary.com/diyxwdtjd/image/upload/v1777090035/projects/9f9ac2ce-4cc8-48e5-ad4b-074b5adc00b3.png)
![VOKK — captions and timeline](https://res.cloudinary.com/diyxwdtjd/image/upload/v1777213554/projects/f27c433e-04c1-4c8e-acb2-052b97fe2851.png)
![VOKK — B-roll and scenes](https://res.cloudinary.com/diyxwdtjd/image/upload/v1777294187/projects/b7fd2c2f-1504-42de-99ef-e87f29ccdd20.png)

## CTA

- GitHub: https://github.com/debsouryadatta/vokk
- Back to Projects: /#projects
