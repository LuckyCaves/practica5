const page = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="Practica 5: learning to build and deliver with Cloudflare Workers.">
<title>Practica 5 | NewProject</title>
<style>
:root { color-scheme: dark; font-family: system-ui, sans-serif; color: #f1f5f9; background: #101820; }
* { box-sizing: border-box; }
body { margin: 0; }
a { color: inherit; }
.container { width: min(1080px, 90%); margin: auto; }
header { display: flex; justify-content: space-between; align-items: center; gap: 20px; padding: 28px 0; border-bottom: 1px solid #33414b; }
.brand { font-weight: 750; text-decoration: none; font-size: 22px; }
.brand span, .eyebrow, .number { color: #a3e635; }
nav a { font-size: 14px; text-underline-offset: 5px; }
.hero { padding: 100px 0 80px; max-width: 800px; }
.eyebrow { font-size: 13px; font-weight: 700; letter-spacing: .14em; text-transform: uppercase; }
h1 { font-size: clamp(44px, 8vw, 86px); line-height: 1.05; letter-spacing: -.06em; margin: 22px 0; }
.intro { color: #b8c5d0; font-size: 20px; line-height: 1.7; max-width: 580px; }
.button { display: inline-block; margin-top: 22px; padding: 15px 22px; border-radius: 8px; background: #a3e635; color: #18220a; font-weight: 700; text-decoration: none; }
.button:hover { background: #bef264; }
a:focus-visible { outline: 3px solid #f8fafc; outline-offset: 5px; }
#about { padding-bottom: 80px; scroll-margin-top: 30px; }
h2 { font-size: 26px; }
.cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; margin-top: 26px; }
article { padding: 28px; background: #18242e; border: 1px solid #33414b; border-radius: 12px; }
.number { font-family: monospace; font-size: 14px; }
h3 { font-size: 20px; margin: 24px 0 10px; }
article p { color: #b8c5d0; line-height: 1.7; margin-bottom: 0; }
footer { border-top: 1px solid #33414b; padding: 25px 0; color: #b8c5d0; font-size: 13px; }
@media (max-width: 680px) { .hero { padding: 64px 0; } .cards { grid-template-columns: 1fr; } .intro { font-size: 18px; } }
</style>
</head>
<body>
<div class="container">
<header>
<a class="brand" href="/">practica<span>5.</span></a>
<nav aria-label="Main navigation"><a href="https://github.com/LuckyCaves/practica5">View on GitHub &rarr;</a></nav>
</header>
<main>
<section class="hero" aria-labelledby="welcome">
<p class="eyebrow">DevOps / NewProject</p>
<h1 id="welcome">Small project.<br>Big possibilities.</h1>
<p class="intro">Welcome to Practica 5. A simple starting point for building, learning, and bringing ideas to the web with Cloudflare Workers.</p>
<a class="button" href="#about">Explore the project &darr;</a>
</section>
<section id="about" aria-labelledby="about-title">
<h2 id="about-title">From an idea to the web.</h2>
<div class="cards">
<article><span class="number">01 / DEVELOP</span><h3>Start simple</h3><p>A lightweight page built with HTML and CSS, served by a TypeScript Worker.</p></article>
<article><span class="number">02 / COLLABORATE</span><h3>Track every step</h3><p>Use Git branches to explore ideas and review changes before bringing them together.</p></article>
<article><span class="number">03 / DELIVER</span><h3>Build confidence</h3><p>The main branch workflow runs tests before deploying the project to Cloudflare.</p></article>
</div>
</section>
</main>
<footer>Practica 5 &middot; Built for learning. Ready to grow.</footer>
</div>
</body>
</html>`;

export default {
	async fetch(request, env, ctx): Promise<Response> {
		return new Response(page, {
			headers: { "Content-Type": "text/html; charset=UTF-8" },
		});
	},
} satisfies ExportedHandler<Env>;
