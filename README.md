<div align="center">
   <img src="assets/icon.png" width="96" alt="KoiNoYume7" style="border-radius:18px" />

   # hey, I'm Akira

   `Switzerland` · `17` · `cybersecurity trainee by day, vibe coder by night`

   <br/>

   *best commits happen after midnight with a Monster in hand*

</div>

---

I go by **KoiNoYume7** online. I'm a cybersecurity trainee based in Switzerland who got tired of waiting for tools to exist and started building them instead.

I architect, debug, and direct. AI writes the first draft. I make it actually work.  
You could call it vibe coding — but there's real engineering underneath.

My current obsession is self-hosting everything I can on a Raspberry Pi 4 tucked under my desk, serving a live website to the internet without a single open inbound port. Because why not.

---

## what I'm building

### [AnniWebsite](https://github.com/KoiNoYume7/AnniWebsite) · *[yumehana.dev](https://yumehana.dev)*

My personal site — fully self-hosted, zero cloud, runs on the Pi.

Built with Vite + vanilla JS (no frameworks, no shortcuts), an Express OAuth backend with GitHub/Discord/Google login, and a live system dashboard that reads real CPU temps, memory, storage, and network stats straight from `/proc`.

Deployed from my Windows machine with a single PowerShell script. nginx proxies everything through a Cloudflare Tunnel so the Pi never exposes a port. I'm pretty proud of this one.

> *has easter eggs. won't tell you where.*

---

### [AnniProxy](https://github.com/KoiNoYume7/AnniProxy)

A portable proxy-browser environment for minimal Windows setups.

Bootstraps its own dependencies, punches a Cloudflared SSH tunnel, spins up a SOCKS5 proxy, and launches an isolated Brave profile. Every session is logged. Designed to be reliable first, clever second.

---

## how I actually work

I treat AI like a senior dev I can pair with at 2am — it drafts, I review, we argue about architecture, I win sometimes.

Every line that goes to production gets validated. I care about things being reproducible and maintainable, not just functional. A script that works once isn't a solution, it's a prototype.

Languages I reach for: `Python` `JavaScript` `PowerShell` `Bash` `HTML/CSS` `C`  
Currently learning: `systems internals` `network security` `access control models`

---

## the homelab

A hardened Raspberry Pi 4 running Pi OS Lite 64-bit, locked behind Tailscale and Fail2ban, serving the internet through Cloudflare without exposing a single port.

```
internet → Cloudflare Tunnel → nginx → static site + API
                                           ↓
                              Express OAuth + Python stats API
                                           ↓
                              /proc · vcgencmd · systemd
```

SSH is Tailscale-only. Samba is Tailscale-only. Nothing is public that doesn't need to be.

---

## outside the terminal

Star Citizen addict · Cyberpunk 2077 · Euro Truck Simulator 2  
Anime · cars · music with good bass · energy drinks as a personality trait

---

## find me

- 🌐 [yumehana.dev](https://yumehana.dev)
- 💬 Discord: `koinoyume7`
- 📧 `koinoyume7@gmail.com`

---

<div align="center">
   <sub>systems · automation · security · ships when it works</sub>
</div>