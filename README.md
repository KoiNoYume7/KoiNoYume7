<div align="center">
   <img src="assets/icon.png" width="96" alt="KoiNoYume7" style="border-radius:18px" />

   # Welcome to KoiNoYume7's territory

   `Swiss kid with a spanish car and a japanese soul`

   <br/>

   *Always keeping the vibe up late at night, with my car, music and energy drinks*

</div>

---

I go by **KoiNoYume7** online. I'm based in Switzerland and I build things because I can and love doing it.

I architect, debug, and direct. I might not write all the code myself, but I make sure it gets done right.
You could call it vibe coding — but there's real engineering underneath. It's modern and practical, so go cry about it (no offense).

My current obsession is just vibing and building stuff for fun.

It might seem like I ship unfinished stuff and don't update it for months, but my ADHD brain just gets hundreds of ideas at once and I just constantly switch between them. That doesn't mean that I don't care about the quality of my work, it just lacks consistency I guess.

---

## The Anni Philosophy

Every project I build that starts with "Anni" follows the same set of principles. It's not a brand, it's just how I think software should work.

**One entry point.** Every Anni project has a single way in — one script, one installer, one command. You don't need to read three READMEs to get started. You run the thing and it works.

**Config as source of truth.** No hardcoded values. Ever. If something needs to be configurable, it goes in a JSON file. If a setting isn't in the config, it shouldn't exist. Reinstall your system and restore your config — everything is exactly as you left it.

**Reliable first, clever second.** If a feature adds complexity and breaks the core, it doesn't ship. AnniProxy logs every session and coordinates shutdown. AnniWin11 validates before it writes. AnniAudio won't break your system audio if it crashes. Reliability is not negotiable.

**Self-sufficient.** Anni projects bootstrap their own dependencies. They don't assume you have the right version of something installed. They don't phone home. They don't require an account. If a dependency is missing, the project handles it.

**Built for a real need.** Every Anni project exists because I needed it and nothing out there did it right. AnniWebsite because I wanted a self-hosted life OS. AnniWin11 because reinstalling Windows was always a nightmare. AnniProxy because I needed a portable, isolated browser. AnniAudio because Windows audio tooling is a mess. The goal is always to replace something annoying with something that actually works.

**Open but honest.** Everything is open source. The code is real, the architecture is documented, and the rough edges are admitted. Nothing is polished into something it isn't.

Together, the Anni projects feed into a larger personal AI assistant — each one a module that handles a specific layer of my digital life. That's the long game.

> It is possible, that some of the Anni projects are not meeting the stuff just mentioned, that's because I'm still learning and improving. I just got into the "big project" mindset and I'm still figuring out how to balance everything. ^^

---

## What I'm building

### [AnniWebsite](https://github.com/KoiNoYume7/AnniWebsite) · *[yumehana.dev](https://yumehana.dev)*

Started as a personal site. Became a self-hosted life OS.

Built with Vite + vanilla JS (no frameworks, no shortcuts), an Express + SQLite backend with GitHub/Discord/Google OAuth and role-based access, and a live Pi system dashboard reading real stats from `/proc`. Now also has a blog, a contact form, and a full personal organizer — todos, calendar, reminders, finance tracker, and Claude AI integration incoming. Why? Because this is what I need in real life and thought it would be fun to build it and maybe it even serves someone else as well.

Deployed with a single script. nginx proxies everything through a Cloudflare Tunnel so the Pi never exposes a port.

My Nr.1 Priority Project, always the focus and the one that gets the most attention.

---

### [AnniWin11](https://github.com/KoiNoYume7/AnniWin11)

Scan your system once. Back up everything. Restore everything on a fresh install.

A PowerShell-based Windows 11 post-install automation suite. One-click setup, app installation via winget or direct download, config backup and restore across reinstalls, and OS settings from a single JSON file. No hardcoded values — everything is config-driven.

Currently in active development (v0.1.x alpha), but also in heavy research phase for the next major update.

---

### [AnniProxy](https://github.com/KoiNoYume7/AnniProxy)

A portable proxy-browser environment for minimal Windows setups.

Bootstraps its own dependencies, punches a Cloudflared SSH tunnel, spins up a SOCKS5 proxy, and launches an isolated Brave profile. Every session is logged. Designed to be reliable first, clever second.

This Project is currently on hold due to the other Projects I'm working on, which have priority over this one.

---

### [AnniAudio](https://github.com/KoiNoYume7/AnniAudio)

One install. One config. Full control over your audio.

A system-wide audio processing suite for Windows 11. Ships its own virtual WDM audio driver, a full parametric EQ, GPU-accelerated noise cancellation via the NVIDIA RTX Effects SDK, and HRTF-based spatial audio — all in a single process with a REST API, configurable hotkeys, and a routing matrix that actually lets you wire audio wherever you want. Built because every good audio tool is either locked down, fragmented across 3 apps, or breaks every other update.

Currently in active planning and research phase.

---

## How I actually work

Think of it as I simply don't write code manually anymore. Meaning, the only thing which changed from regular coding is that I use AI to write it for me, but I'm still doing everything else. That includes debugging, testing, validating, and maintaining the code and all that.

## Languages:

You are probably curious about what languages I use, so here you go:

### Main Languages:
- **Python**
- **JavaScript**
- **Powershell**
- **HTML**
- **CSS**
- **Markdown**

### Other Languages I know/used:
- TypeScript
- C
- C#
- C++ *(learning right now)*
- Java
- Rust
- Go
- Batch
- Shell
- SQL

There might be some languages I forgot, but those are the main ones I use and know.

---

## The homelab

A hardened Raspberry Pi 4 running Pi OS Lite 64-bit, locked behind Tailscale and Fail2ban, serving the internet through Cloudflare without exposing a single port.
```
internet → Cloudflare Tunnel → nginx → static site + API
↓
Express OAuth + SQLite + Python stats API
↓
/proc · vcgencmd · systemd
```
SSH is Tailscale-only. Samba is Tailscale-only. Nothing is public that doesn't need to be.
Ah and if my server is not up, that just means my internet is down for no reason at all. Happens at least once a month, can't fix that in the moment.

My drives are hot plugged via USB 3.0, so I can swap them out without rebooting, sometimes it's hella convenient, especially because it is auto mounting.

---

## Outside the terminal

I am a [**Star Citizen**](https://robertsspaceindustries.com/en/star-citizen) addict and part of the [**Medrunner**](https://www.medrunner.space/) ingame organization. 
I also absolutely love **Cyberpunk 2077** with my over [**500 hours**](https://steamcommunity.com/id/koinoyume7/) playtime and tons of mods. 

Besides that, I absolutely love my car, a **2015 Seat Leon FR** with a **1.4l TSI** engine. Nothing fancy, but it's reliable and so much fun to drive as a first car.

Of course I also love Anime, Music and all mechanical and technical stuff, cause I'm a nerd at heart.

---

## Find me

- 🌐 [yumehana.dev](https://yumehana.dev)
- 💬 Discord: `koinoyume7`
- 📧 `koinoyume7@gmail.com`

---

<div align="center">
   <sub>builds things for fun · ships when it's right · ADHD may vary</sub>
</div>