<div align="center">
   <img src="assets/icon.png" width="96" alt="KoiNoYume7" style="border-radius:18px" />

   # Hyea, you can call me Koi :D

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

## What I'm building

### [AnniWebsite](https://github.com/KoiNoYume7/AnniWebsite) · *[yumehana.dev](https://yumehana.dev)*

Started as a personal site. Became a self-hosted life OS.

Built with Vite + vanilla JS (no frameworks, no shortcuts), an Express + SQLite backend with GitHub/Discord/Google OAuth and role-based access, and a live Pi system dashboard reading real stats from `/proc`. Now also has a blog, a contact form, and a full personal organizer — todos, calendar, reminders, finance tracker, and Claude AI integration incoming. Why? Because this is what I need in real life and thought it would be fun to build it and maybe it even serves someone else as well.

Deployed with a single script. nginx proxies everything through a Cloudflare Tunnel so the Pi never exposes a port.

> Currently a bit at hold due to other projects and life stuff, but I'm still working on it.

---

### [AnniWin11](https://github.com/KoiNoYume7/AnniWin11)

Scan your system once. Back up everything. Restore everything on a fresh install.

A PowerShell-based Windows 11 post-install automation suite. One-click setup, app installation via winget or direct download, config backup and restore across reinstalls, and OS settings from a single JSON file. No hardcoded values — everything is config-driven.

Currently in active development (v0.1.x alpha).

---

### [AnniProxy](https://github.com/KoiNoYume7/AnniProxy)

A portable proxy-browser environment for minimal Windows setups.

Bootstraps its own dependencies, punches a Cloudflared SSH tunnel, spins up a SOCKS5 proxy, and launches an isolated Brave profile. Every session is logged. Designed to be reliable first, clever second.

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
- C++
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

---

## Outside the terminal

Star Citizen addict · Cyberpunk 2077 · Euro Truck Simulator 2  
Anime · my car · music with good bass · energy drinks as a personality trait

---

## Find me

- 🌐 [yumehana.dev](https://yumehana.dev)
- 💬 Discord: `koinoyume7`
- 📧 `koinoyume7@gmail.com`

---

<div align="center">
   <sub>builds things for fun · ships when it's right · ADHD may vary</sub>
</div>