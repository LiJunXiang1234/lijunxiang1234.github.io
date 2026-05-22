<template>
  <main class="page-shell">
    <NuxtRouteAnnouncer />

    <header class="site-header" aria-label="站点导航">
      <div class="brand-mark" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <p class="header-name">Li Junxiang</p>
      <p class="header-label">Portfolio.</p>
    </header>

    <section class="hero" aria-labelledby="hero-title">
      <div class="hero-copy">
        <p class="eyebrow">Frontend Developer / Industrial Design</p>
        <h1 id="hero-title">Hello,<br /><span>I'm 李俊祥</span></h1>
      </div>

      <aside class="role-card" aria-label="个人定位">
        <div class="vertical-line" aria-hidden="true" />
        <div>
          <p class="role-title">前端开发工程师</p>
          <p class="role-text">工业设计背景，关注体验与工程落地。</p>
        </div>
      </aside>
    </section>

    <section class="profile" aria-label="个人简介">
      <div class="avatar" aria-hidden="true">
        <span>LJX</span>
      </div>

      <div class="profile-content">
        <p class="section-kicker">我相信好的产品设计来自对真实问题的理解，也来自稳定清晰的工程实现。</p>
        <h2>Design-minded Frontend Developer</h2>
        <p>
          湖南大学工业设计本科在读，目标岗位为前端开发工程师。熟悉 HTML、CSS、JavaScript、
          TypeScript，能够使用 Vue3、Nuxt、React 完成 Web 应用开发，具备从界面设计到前端开发、
          接口联调与项目落地的完整经验。
        </p>

        <ul class="skill-list" aria-label="技术栈">
          <li>Vue3</li>
          <li>Nuxt</li>
          <li>React</li>
          <li>TypeScript</li>
          <li>Element Plus</li>
          <li>Figma</li>
        </ul>

        <a class="resume-button" href="/resume.pdf" download>
          下载简历
        </a>
      </div>
    </section>
  </main>
</template>

<style>
:root {
  color: #f6f6f3;
  background: #020202;
  font-family:
    Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
    "Microsoft YaHei", sans-serif;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  box-sizing: border-box;
}

body {
  min-width: 320px;
  margin: 0;
  background: #020202;
}

a {
  color: inherit;
}

.page-shell {
  width: min(100%, 1440px);
  min-height: 100vh;
  margin: 0 auto;
  padding: 32px clamp(24px, 5vw, 78px) 80px;
  background:
    linear-gradient(90deg, rgba(255, 255, 255, 0.035) 1px, transparent 1px) 0 0 / 25% 100%,
    #020202;
}

.site-header {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 24px;
  color: #f2f2ee;
  font-size: 15px;
}

.brand-mark {
  position: relative;
  width: 42px;
  height: 42px;
}

.brand-mark span {
  position: absolute;
  width: 28px;
  height: 28px;
  border: 1px solid rgba(255, 255, 255, 0.88);
  border-radius: 50%;
}

.brand-mark span:nth-child(1) {
  left: 0;
  top: 7px;
}

.brand-mark span:nth-child(2) {
  left: 7px;
  top: 0;
}

.brand-mark span:nth-child(3) {
  left: 14px;
  top: 7px;
}

.header-name,
.header-label {
  margin: 0;
}

.header-label {
  justify-self: end;
}

.hero {
  display: grid;
  grid-template-columns: minmax(0, 1.25fr) minmax(260px, 400px);
  gap: clamp(42px, 7vw, 110px);
  align-items: end;
  min-height: 510px;
  padding: clamp(86px, 12vw, 156px) 0 58px;
}

.eyebrow {
  margin: 0 0 28px;
  color: #a8aaa3;
  font-size: 14px;
}

h1,
h2,
p {
  margin-top: 0;
}

h1 {
  max-width: 800px;
  margin-bottom: 0;
  color: #ffffff;
  font-size: clamp(58px, 8.7vw, 118px);
  line-height: 0.98;
  letter-spacing: 0;
}

h1 span {
  display: inline-block;
  white-space: nowrap;
}

.role-card {
  display: grid;
  grid-template-columns: 1px minmax(0, 1fr);
  gap: 28px;
  min-height: 270px;
  align-items: start;
  padding-bottom: 16px;
}

.vertical-line {
  width: 1px;
  height: 100%;
  background: rgba(255, 255, 255, 0.72);
}

.role-title {
  margin-bottom: 8px;
  color: #ffffff;
  font-size: 18px;
  font-weight: 800;
}

.role-text {
  max-width: 260px;
  margin-bottom: 0;
  color: #d8d8d2;
  font-size: 16px;
  line-height: 1.7;
}

.profile {
  display: grid;
  grid-template-columns: 220px minmax(0, 760px);
  gap: clamp(48px, 8vw, 120px);
  align-items: start;
  padding-top: 36px;
}

.avatar {
  display: grid;
  width: 190px;
  aspect-ratio: 1;
  place-items: center;
  border: 1px solid rgba(255, 255, 255, 0.42);
  border-radius: 50%;
  background:
    linear-gradient(135deg, rgba(255, 255, 255, 0.12), transparent 55%),
    radial-gradient(circle at 32% 30%, rgba(0, 208, 188, 0.44), transparent 32%),
    #111111;
  color: #ffffff;
  font-size: 28px;
  font-weight: 800;
}

.section-kicker {
  max-width: 720px;
  margin-bottom: 22px;
  color: #b8bab4;
  font-size: 14px;
  line-height: 1.8;
}

h2 {
  margin-bottom: 24px;
  color: #ffffff;
  font-size: clamp(34px, 4.5vw, 60px);
  line-height: 1.08;
  letter-spacing: 0;
}

.profile-content > p:not(.section-kicker) {
  max-width: 760px;
  color: #e7e7e1;
  font-size: 17px;
  line-height: 1.85;
}

.skill-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 0;
  margin: 28px 0 34px;
  list-style: none;
}

.skill-list li {
  border: 1px solid rgba(255, 255, 255, 0.24);
  border-radius: 999px;
  padding: 8px 14px;
  color: #dadbd5;
  font-size: 14px;
  line-height: 1;
}

.resume-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  border: 1px solid #ffffff;
  border-radius: 999px;
  padding: 0 24px;
  background: #ffffff;
  color: #050505;
  font-size: 15px;
  font-weight: 800;
  text-decoration: none;
  transition:
    transform 180ms ease,
    background-color 180ms ease,
    color 180ms ease;
}

.resume-button:hover {
  transform: translateY(-2px);
  background: #d9fff8;
  color: #020202;
}

@media (max-width: 860px) {
  .page-shell {
    padding: 24px 20px 56px;
    background: #020202;
  }

  .site-header {
    grid-template-columns: auto 1fr auto;
    gap: 14px;
    font-size: 13px;
  }

  .brand-mark {
    width: 34px;
    height: 34px;
  }

  .brand-mark span {
    width: 23px;
    height: 23px;
  }

  .brand-mark span:nth-child(3) {
    left: 11px;
  }

  .hero {
    grid-template-columns: 1fr;
    gap: 48px;
    min-height: auto;
    padding: 92px 0 64px;
  }

  h1 {
    font-size: clamp(48px, 15vw, 72px);
  }

  .role-card {
    min-height: 180px;
  }

  .profile {
    grid-template-columns: 1fr;
    gap: 36px;
  }

  .avatar {
    width: 148px;
  }
}
</style>
