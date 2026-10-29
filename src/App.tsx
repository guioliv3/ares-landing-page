import { useRef, useState, type FormEvent } from 'react'
import {
  ArrowDown, ArrowRight, ArrowUpRight, BedDouble, CarFront, Maximize2,
  ChevronLeft, ChevronRight, MapPin, Menu, X,
} from 'lucide-react'

type Category = 'Lazer' | 'Decorado' | 'Região' | 'Acessos'

const gallery: Record<Category, { label: string; image: string }[]> = {
  Lazer: [
    { label: 'Piscina', image: '/images/pool.webp' },
    { label: 'Fitness', image: '/images/fitness.webp' },
    { label: 'Espaço kids', image: '/images/kids.webp' },
    { label: 'Espaço gourmet', image: '/images/gourmet.webp' },
    { label: 'Salão de festas', image: '/images/party.webp' },
  ],
  Decorado: [
    { label: 'Living', image: '/images/living.webp' },
    { label: 'Suíte', image: '/images/suite.webp' },
    { label: 'Sacada', image: '/images/balcony.webp' },
  ],
  Região: [
    { label: 'Vista da região', image: '/images/region.webp' },
    { label: 'Panorama', image: '/images/region-2.webp' },
  ],
  Acessos: [
    { label: 'Acesso', image: '/images/access.webp' },
    { label: 'Hall', image: '/images/lobby.webp' },
  ],
}

function LeadForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const endpoint = import.meta.env.VITE_LEAD_ENDPOINT?.trim()

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (isSubmitting) return
    const form = event.currentTarget
    if (!endpoint) {
      setStatus('O formulário está temporariamente indisponível. Tente novamente mais tarde.')
      return
    }
    setIsSubmitting(true)
    setStatus('Enviando…')
    const values = Object.fromEntries(new FormData(form).entries())
    const controller = new AbortController()
    const timeout = window.setTimeout(() => controller.abort(), 15_000)
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...values, project: 'ARES Aquarius' }),
        signal: controller.signal,
      })
      if (!response.ok) throw new Error('Request failed')
      form.reset()
      setStatus('Recebemos seus dados. Em breve entraremos em contato.')
    } catch {
      setStatus(controller.signal.aborted ? 'O envio demorou demais. Tente novamente.' : 'Não foi possível enviar agora. Confira sua conexão e tente novamente.')
    } finally {
      window.clearTimeout(timeout)
      setIsSubmitting(false)
    }
  }

  return <form className={`lead-form${compact ? ' lead-form--compact' : ''}`} onSubmit={submit}>
    <label>Nome<input name="name" autoComplete="name" required placeholder="Seu nome" /></label>
    <label>E-mail<input name="email" type="email" autoComplete="email" required placeholder="voce@email.com" /></label>
    <label><span>Telefone <small>(opcional)</small></span><input name="phone" type="tel" autoComplete="tel" placeholder="(00) 00000-0000" /></label>
    <label className="consent"><input type="checkbox" name="consent" required /><span>Autorizo contato sobre o ARES Aquarius.</span></label>
    <button className="button button--light" type="submit" disabled={isSubmitting} aria-busy={isSubmitting}>{isSubmitting ? 'Enviando…' : 'Tenho interesse'} <ArrowRight size={16} /></button>
    <p className="form-status" role="status" aria-live="polite">{status}</p>
  </form>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState<Category>('Lazer')
  const [openPlan, setOpenPlan] = useState<string | null>(null)
  const [openGallery, setOpenGallery] = useState<number | null>(null)
  const planDialog = useRef<HTMLDialogElement>(null)
  const galleryDialog = useRef<HTMLDialogElement>(null)
  const panoeeUrl = import.meta.env.VITE_PANOEE_URL?.trim()
  const items = gallery[activeCategory]
  const moveGallery = (direction: -1 | 1) => setOpenGallery((current) => (current === null ? 0 : (current + direction + items.length) % items.length))

  return <main>
    <section className="hero" id="inicio">
      <picture className="hero-scene">
        <source media="(max-width: 760px)" srcSet="/images/hero-mobile.webp" />
        <img src="/images/hero-wide.webp" alt="" />
      </picture>
      <header className="site-header">
        <a href="#inicio" className="hero-brand" aria-label="ARES Aquarius, início"><img src="/ares-aquarius.svg" alt="ARES Aquarius" width="180" height="60" /></a>
        <nav className={`navigation${menuOpen ? ' is-open' : ''}`} aria-label="Navegação principal">
          <a href="#inicio" onClick={() => setMenuOpen(false)}>O empreendimento</a>
          <a href="#plantas" onClick={() => setMenuOpen(false)}>Plantas</a>
          <a href="#lazer" onClick={() => setMenuOpen(false)}>Diferenciais</a>
          <a href="#regiao" onClick={() => setMenuOpen(false)}>Região</a>
          <a href="#contato" onClick={() => setMenuOpen(false)}>Contato</a>
          <a className="nav-cta" href="#contato" onClick={() => setMenuOpen(false)}>Fale conosco <ArrowRight size={15} /></a>
        </nav>
        <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      </header>
      <div className="hero-content">
        <div className="hero-left"><div className="hero-copy"><p className="launch-label">Lançamento</p><h1>Respire<br />novos ares.</h1><p className="hero-intro">Um novo empreendimento residencial no coração do Jardim Aquarius, onde arquitetura, bem-estar e localização se encontram para um novo capítulo da sua vida.</p></div><div className="hero-contact"><p className="form-title">Seja o primeiro a receber<br />todas as informações</p><LeadForm compact /></div></div>
      </div>
      <a href="#conceito" className="hero-scroll" aria-label="Continue para conhecer as características do empreendimento"><ArrowDown /></a>
    </section>

    <section className="specs" id="conceito" aria-label="Características do empreendimento"><div className="specs-inner"><div><BedDouble /><strong>3 dorms.</strong><small>1 suíte</small></div><div><Maximize2 /><strong>102 a 106 m²</strong><small>área privativa</small></div><div><CarFront /><strong>2 vagas</strong><small>de garagem</small></div><p>Mais conforto e sofisticação em uma das localizações mais valorizadas de São José dos Campos.</p></div></section>

    <section className="gallery section-pad" id="lazer">
      <div className="leisure-feature"><img src="/images/pool.webp" alt="Piscina com vista para a cidade ao entardecer" /><div className="leisure-copy"><h2>Lazer que faz parte da sua rotina</h2><p>Ambientes projetados para proporcionar equilíbrio entre o seu dia a dia e momentos inesquecíveis de lazer e bem-estar.</p><a className="button button--outline" href="#gallery-panel">Conheça o lazer <ArrowRight size={16} /></a></div></div>
      <div className={`mosaic mosaic--${activeCategory === 'Lazer' ? 'lazer' : activeCategory === 'Decorado' ? 'decorado' : activeCategory === 'Região' ? 'regiao' : 'acessos'}`} id="gallery-panel" role="group" aria-label={`Galeria de fotos: ${activeCategory}`}>{items.map((item, index) => <button className={`mosaic-item mosaic-item-${index % 6}`} key={item.image} onClick={() => { setOpenGallery(index); galleryDialog.current?.showModal() }} aria-label={`Ampliar ${item.label}`}><img src={item.image} alt={item.label} loading="lazy" /><span>{item.label}</span></button>)}</div>
      <div className="gallery-tabs" role="group" aria-label="Escolha uma categoria de fotos">{(['Lazer', 'Decorado', 'Região', 'Acessos'] as Category[]).map(category => <button key={category} type="button" className={activeCategory === category ? 'active' : ''} aria-pressed={activeCategory === category} aria-controls="gallery-panel" onClick={() => { setActiveCategory(category); setOpenGallery(null) }}>{category}</button>)}</div>
      <dialog className="plan-dialog gallery-dialog" ref={galleryDialog} onClose={() => setOpenGallery(null)} aria-label={openGallery === null ? 'Imagem ampliada' : items[openGallery]?.label}><button className="dialog-close" type="button" onClick={() => galleryDialog.current?.close()} aria-label="Fechar imagem ampliada"><X /></button>{openGallery !== null && items[openGallery] && <><button className="gallery-dialog-prev" type="button" aria-label="Imagem anterior" onClick={() => moveGallery(-1)}><ChevronLeft /></button><img src={items[openGallery].image} alt={items[openGallery].label} /><button className="gallery-dialog-next" type="button" aria-label="Próxima imagem" onClick={() => moveGallery(1)}><ChevronRight /></button></>}</dialog>
    </section>

    <section className="plans section-pad" id="plantas"><div className="plans-heading"><p className="eyebrow">Plantas</p><h2>Escolha o seu espaço.</h2></div><div className="plans-grid">{['A', 'B'].map(label => <figure className="plan-card" key={label}><button className="plan-image" type="button" onClick={() => { setOpenPlan(label); planDialog.current?.showModal() }} aria-label={`Ampliar Planta ${label}`}><img src={`/images/plan-${label.toLowerCase()}.webp`} alt={`Planta ${label}`} loading="lazy" /><span className="plan-zoom"><Maximize2 size={16} /> Ampliar</span></button><figcaption><span>Planta {label}</span><span>3 dormitórios · 1 suíte</span></figcaption></figure>)}</div><p className="plans-note">Plantas ilustrativas. Consulte a planta oficial e as especificações do empreendimento.</p><dialog className="plan-dialog" ref={planDialog} aria-label={openPlan ? `Planta ${openPlan} ampliada` : 'Planta ampliada'} onClose={() => setOpenPlan(null)}><button className="dialog-close" type="button" onClick={() => planDialog.current?.close()} aria-label="Fechar planta ampliada"><X /></button>{openPlan && <img src={`/images/plan-${openPlan.toLowerCase()}.webp`} alt={`Planta ${openPlan} ampliada`} />}</dialog></section>

      <section className="region section-pad" id="regiao"><div className="section-kicker">04 / JARDIM AQUARIUS</div><div className="region-top"><div><p className="eyebrow">Explore a região</p><h2>Do Jardim Aquarius.</h2></div><p>Um endereço para estar perto do que faz parte da sua rotina.</p></div><div className="region-panorama"><img src="/images/region-2.webp" alt="Vista ilustrativa de bairro" loading="lazy" /><span className="region-caption">Imagem ilustrativa</span>{panoeeUrl ? <a className="tour-link" href={panoeeUrl} target="_blank" rel="noreferrer"><span>Explore em 360°</span><ArrowUpRight /></a> : <span className="tour-link tour-link--disabled" aria-disabled="true">Tour 360° indisponível</span>}</div></section>

    <section className="poi-section section-pad"><div className="poi-heading"><p className="eyebrow">Tudo por perto</p><h2>O bairro ao seu <em>redor.</em></h2></div><div className="poi-list"><a href="https://www.google.com/maps/search/?api=1&query=Colinas+Shopping%2C+S%C3%A3o+Jos%C3%A9+dos+Campos" target="_blank" rel="noreferrer"><MapPin /> Colinas Shopping <ArrowUpRight /></a><a href="https://www.google.com/maps/search/?api=1&query=P%C3%A3o+de+A%C3%A7%C3%BAcar%2C+S%C3%A3o+Jos%C3%A9+dos+Campos" target="_blank" rel="noreferrer"><MapPin /> Pão de Açúcar <ArrowUpRight /></a><a href="https://www.google.com/maps/search/?api=1&query=Parque+Ribeir%C3%A3o+Vermelho%2C+S%C3%A3o+Jos%C3%A9+dos+Campos" target="_blank" rel="noreferrer"><MapPin /> Parque Ribeirão Vermelho <ArrowUpRight /></a><a href="https://www.google.com/maps/search/?api=1&query=Avenida+Cassiano+Ricardo%2C+S%C3%A3o+Jos%C3%A9+dos+Campos" target="_blank" rel="noreferrer"><MapPin /> Av. Cassiano Ricardo <ArrowUpRight /></a></div></section>

    <section className="location-map section-pad" id="mapa"><div className="map-panel"><div className="map-placeholder"><div className="map-art" role="img" aria-label="Mapa ilustrativo da região do Jardim Aquarius"><svg className="map-roads" viewBox="0 0 600 400" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><path className="map-artery" d="M-30 326 C105 275 186 239 280 196 S460 107 635 65" /><path className="map-artery" d="M108 -30 C145 63 170 122 202 206 S266 331 305 430" /><g className="map-streets"><path d="M-20 69 619 252M-30 131 605 316M-14 206 572 382M-10 8 495 405M52 -20 217 417M154 -12 315 411M261 -6 409 406M362 -12 512 408M-20 365 616 109M-35 299 585 35M-30 234 494 -10M-2 177 378 -13M14 114 282 -12" /></g><path className="map-green" d="M425 267 553 300 570 393 439 375Z" /><path className="map-green" d="M28 13 113 31 91 104 4 87Z" /></svg><span>Jardim Aquarius</span><span className="map-art-label">São José dos Campos</span><MapPin className="map-art-pin" /></div><a href="https://www.google.com/maps/search/?api=1&query=Jardim+Aquarius+S%C3%A3o+Jos%C3%A9+dos+Campos" target="_blank" rel="noreferrer">Abrir no Google Maps <ArrowUpRight size={15} /></a></div><div className="map-copy"><p className="eyebrow">Jardim Aquarius · São José dos Campos</p><h2>No coração do Jardim Aquarius.</h2><p>Viva perto de tudo o que você precisa, com uma infraestrutura completa e uma das localizações mais desejadas de São José dos Campos.</p><a href="#contato" className="button button--dark">Ver localização <ArrowRight size={16} /></a></div></div></section>

    <section className="final-cta section-pad" id="contato"><div><p className="eyebrow">ARES AQUARIUS</p><h2>Um novo capítulo<br />começa aqui.</h2><p>Deixe seus dados para receber informações sobre o empreendimento.</p></div><LeadForm /></section>

    <footer className="site-footer"><a href="#inicio" className="wordmark" aria-label="ARES Aquarius"><img src="/ares-aquarius.svg" alt="" width="220" height="72" /></a><p>© ARES Aquarius · São José dos Campos, SP</p><a href="#inicio">Voltar ao início <ArrowUpRight size={15} /></a><small className="legal">Imagens ilustrativas. Consulte informações oficiais do empreendimento.</small></footer>
  </main>
}

export default App
