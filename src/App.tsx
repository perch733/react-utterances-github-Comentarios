import { useState } from 'react'
import GithubComments from 'react-utterances-github-comments'
import './App.css'

const installCommand = 'npm install react-utterances-github-comments'
const packageUrl = 'https://www.npmjs.com/package/react-utterances-github-comments'

const Icon = ({ children }: { children: React.ReactNode }) => {
  return (
    <svg aria-hidden="true" className="icon" viewBox="0 0 24 24" fill="none">
      {children}
    </svg>
  )
}

const UtterancesDemo = () => {
  return (
    <div className="utterances-demo" aria-label="Comentarios de Utterances">
      <GithubComments
        repo="perch733/react-utterances-github-Comentarios"
        issueTerm="pathname"
        theme="github-dark"
        label="comentario"
        titleText="Deja tu comentario"
        loadingText="Cargando comentarios..."
      />
    </div>
  )
}

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const [copyError, setCopyError] = useState(false)

  const copyInstall = async () => {
    setCopyError(false)
    try {
      await navigator.clipboard.writeText(installCommand)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      setCopyError(true)
      window.setTimeout(() => setCopyError(false), 2200)
    }
  }

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Utterances inicio">
          <span className="brand-mark">
            <Icon>
              <path d="M5 6.5h14A2.5 2.5 0 0 1 21.5 9v5a2.5 2.5 0 0 1-2.5 2.5H11l-4.5 3v-3H5A2.5 2.5 0 0 1 2.5 14V9A2.5 2.5 0 0 1 5 6.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
              <path d="m8 11 2.2 2L8 15m4-4h3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </Icon>
          </span>
          <span>utterances<span className="brand-dot">.</span></span>
        </a>

        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Abrir menú">
          <span />
          <span />
          <span />
        </button>

        <nav className={menuOpen ? 'nav-links is-open' : 'nav-links'}>
          <a href="#features" onClick={() => setMenuOpen(false)}>Características</a>
          <a href="#quickstart" onClick={() => setMenuOpen(false)}>Guía rápida</a>
          <a href="#api" onClick={() => setMenuOpen(false)}>API</a>
          <a className="nav-github" href={packageUrl} target="_blank" rel="noreferrer">
            <Icon><path d="M15.5 20.2c0-1.6-.6-2.7-1.6-3.3 4.7-.5 4.7-4.4 4.7-4.4.3-1.3-.1-2.5-.8-3.4.1-.2.5-1.5-.1-3.2 0 0-1.1-.4-3.5 1.3a12 12 0 0 0-6.4 0C5.4 5.5 4.3 5.9 4.3 5.9c-.6 1.7-.2 3-.1 3.2-.7.9-1.1 2.1-.8 3.4 0 0 0 3.9 4.7 4.4-1 .6-1.6 1.7-1.6 3.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></Icon>
            npm
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-copy">
            <div className="eyebrow"><span className="pulse" /> Wrapper React basado en Utterances</div>
            <h1>Comentarios que<br /><em>conectan.</em></h1>
            <p className="hero-description">
              Añade conversaciones auténticas a tu sitio con un wrapper React ligero, accesible y conectado a GitHub.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#quickstart">Comenzar ahora <span>→</span></a>
              <a className="button button-quiet" href={packageUrl} target="_blank" rel="noreferrer">
                <Icon><path d="M9 19c-4.3 1.4-4.3-2.1-6-2.5m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.7-1.4 5.7-6.1 0-1.3-.5-2.4-1.3-3.3.1-.3.6-1.6-.1-3.3 0 0-1-.3-3.4 1.3a11.8 11.8 0 0 0-6.2 0C6.8 3 5.8 3.3 5.8 3.3c-.7 1.7-.2 3-.1 3.3-.8.9-1.3 2-1.3 3.3 0 4.7 2.9 5.8 5.7 6.1-.4.4-.6 1-.6 2v3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></Icon>
                Ver paquete en npm
              </a>
            </div>
            <div className="trust-row"><span className="stars">★★★★★</span>  Diseñado para desarrolladores</div>
            <div className="origin-note">Basado en <a href="https://github.com/utterance/utterances" target="_blank" rel="noreferrer">Utterances</a> · Open source · Sin tracking</div>
          </div>

          <div className="hero-visual" aria-label="Vista previa del componente de comentarios">
            <div className="glow" />
            <div className="comment-window">
              <div className="window-top"><div className="window-dots"><i /><i /><i /></div><span>Comentarios</span><span className="window-menu">•••</span></div>
              <div className="window-body">
                <div className="comment-heading"><div className="avatar avatar-purple">PC</div><div><strong>Deja tu comentario</strong><small>Comparte tus ideas con la comunidad</small></div></div>
                <div className="comment-input">Escribe algo increíble...<span className="send-icon">↗</span></div>
                <div className="comment-footer"><span><span className="green-dot" /> Conectado con GitHub</span><span>Markdown soportado</span></div>
                <div className="sample-comment"><div className="avatar avatar-blue">MA</div><div><strong>María Andrade <small>hace 2 min</small></strong><p>¡La integración quedó genial! Muy fácil de configurar.</p><div className="reactions"><span>♡ 4</span><span>Responder</span></div></div></div>
              </div>
            </div>
            <div className="floating-badge badge-top"><span className="badge-icon">✦</span><div><b>Simple y potente</b><small>Sin backend adicional</small></div></div>
            <div className="floating-badge badge-bottom"><span className="badge-icon badge-green">✓</span><div><b>100% accesible</b><small>Construido para todos</small></div></div>
          </div>
        </section>

        <section className="feature-strip" id="features">
          <article><span className="feature-icon purple">◈</span><div><h3>El poder de Utterances</h3><p>El widget de comentarios basado en GitHub Issues, ahora listo para React.</p></div></article>
          <article><span className="feature-icon blue">↗</span><div><h3>Powered by GitHub</h3><p>Tus comentarios viven donde tu código también lo hace.</p></div></article>
          <article><span className="feature-icon green">◉</span><div><h3>Listo para cualquier tema</h3><p>Light, dark o el que tu sistema prefiera.</p></div></article>
        </section>

        <section className="quickstart-section" id="quickstart">
          <div className="section-heading"><span className="section-label">01 / GUÍA RÁPIDA</span><h2>De cero a conversación<br /><em>en minutos.</em></h2><p>Instala, configura y deja que tu comunidad haga el resto.</p></div>
          <div className="install-card">          <div className="install-header"><span><i className="terminal-dot" /> Terminal</span><button onClick={copyInstall}>{copied ? '¡Copiado!' : copyError ? 'Selecciona el comando' : 'Copiar'} <span>▣</span></button></div><code><b>$</b> {installCommand}</code></div>
          <div className="steps"><div className="step"><span>01</span><div><h3>Instala el paquete</h3><p>Un solo comando y estás listo para empezar.</p></div></div><div className="step"><span>02</span><div><h3>Añade el componente</h3><p>Importa <code>GithubComments</code> donde quieras mostrarlo.</p></div></div><div className="step"><span>03</span><div><h3>Conecta tu repositorio</h3><p>Configura tu repo de GitHub y comienza la conversación.</p></div></div></div>
        </section>

        <section className="api-section" id="api"><div><span className="section-label">02 / API SIMPLE</span><h2>Una API que<br /><em>se siente natural.</em></h2><p>Todo lo que necesitas, nada de lo que sobra. Personaliza la experiencia con props claros y predecibles.</p><a className="text-link" href="#quickstart">Explorar la documentación <span>→</span></a></div><div className="code-card"><div className="code-line"><span className="line-number">1</span><span><b className="pink">import</b> GithubComments <b className="pink">from</b> <i>'react-utterances-<br />github-comments'</i></span></div><div className="code-line"><span className="line-number">2</span><span><b className="pink">const</b> BlogPost = () =&gt; (</span></div><div className="code-line"><span className="line-number">3</span><span>&nbsp;&nbsp;<b className="blue-text">&lt;GithubComments</b></span></div><div className="code-line"><span className="line-number">4</span><span>&nbsp;&nbsp;&nbsp;&nbsp;repo=<i>"tu-usuario/tu-repo"</i></span></div><div className="code-line"><span className="line-number">5</span><span>&nbsp;&nbsp;&nbsp;&nbsp;issueTerm=<i>"pathname"</i></span></div><div className="code-line"><span className="line-number">6</span><span>&nbsp;&nbsp;&nbsp;&nbsp;theme=<i>"github-light"</i></span></div><div className="code-line"><span className="line-number">7</span><span>&nbsp;&nbsp;<b className="blue-text">/&gt;</b></span></div><div className="code-line"><span className="line-number">8</span><span>)</span></div></div></section>
        <section className="integration-section" id="comments">
          <div className="integration-heading">
            <span className="section-label">03 / INTEGRACIÓN REAL</span>
            <h2># react-utterances-<br /><em>github-comments</em></h2>
            <p>Este es el widget real conectado a GitHub Issues mediante Utterances.</p>
          </div>
          <div className="integration-layout">
            <div className="script-card"><div className="script-card-top"><span><i className="terminal-dot" /> React component</span><span>github-dark</span></div><pre><code>{`import GithubComments from 'react-utterances-github-comments';

const BlogPost = () => {
  return (
    <GithubComments
      repo="perch733/react-utterances-github-Comentarios"
      issueTerm="pathname"
      theme="github-dark"
      label="comentario"
      titleText="Deja tu comentario"
      loadingText="Cargando comentarios..."
    />
  );
}`}</code></pre></div>
            <div className="live-comments"><div className="live-label"><span className="green-dot" /> Vista previa en vivo</div><UtterancesDemo /></div>
          </div>
        </section>
      </main>
      <footer><a className="brand" href="#top"><span className="brand-mark"><Icon><path d="M5 6.5h14A2.5 2.5 0 0 1 21.5 9v5a2.5 2.5 0 0 1-2.5 2.5H11l-4.5 3v-3H5A2.5 2.5 0 0 1 2.5 14V9A2.5 2.5 0 0 1 5 6.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" /></Icon></span><span>utterances<span className="brand-dot">.</span></span></a><span>Hecho con ♥ para la comunidad open source</span><span>MIT License · 2024</span></footer>
    </div>
  )
}

export default App
