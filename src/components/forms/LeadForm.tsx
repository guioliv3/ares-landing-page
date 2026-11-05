import { useState, type FormEvent } from 'react'
import { ArrowRight } from 'lucide-react'

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


export default LeadForm
