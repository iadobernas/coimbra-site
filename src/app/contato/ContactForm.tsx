'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch('https://formspree.io/f/SEU_ID_FORMSPREE', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(data.entries())),
      })

      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="text-center py-16">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
          style={{ backgroundColor: '#e8f5ee' }}
        >
          <svg className="w-8 h-8" style={{ color: '#1a6b3a' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Mensagem enviada com sucesso!</h3>
        <p className="text-green-600 font-medium mb-1">Retornaremos em breve.</p>
        <p className="text-gray-400 text-sm">Ou nos chame diretamente pelo WhatsApp.</p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-6 text-sm font-medium transition-colors duration-200 hover:underline"
          style={{ color: '#1a6b3a' }}
        >
          Enviar outra mensagem
        </button>
      </div>
    )
  }

  const inputClass =
    'w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1a6b3a] focus:border-transparent transition-shadow disabled:opacity-50 disabled:cursor-not-allowed'
  const isLoading = status === 'loading'

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Nome <span style={{ color: '#c0392b' }}>*</span>
          </label>
          <input
            name="nome"
            type="text"
            required
            placeholder="Seu nome completo"
            className={inputClass}
            disabled={isLoading}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Email <span style={{ color: '#c0392b' }}>*</span>
          </label>
          <input
            name="email"
            type="email"
            required
            placeholder="seu@email.com"
            className={inputClass}
            disabled={isLoading}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Telefone</label>
          <input
            name="telefone"
            type="tel"
            placeholder="(31) 99999-9999"
            className={inputClass}
            disabled={isLoading}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Assunto <span style={{ color: '#c0392b' }}>*</span>
          </label>
          <select
            name="assunto"
            required
            className={inputClass + ' bg-white'}
            disabled={isLoading}
          >
            <option value="">Selecione um assunto</option>
            <option value="orcamento">Orçamento</option>
            <option value="duvida">Dúvida</option>
            <option value="parceria">Parceria</option>
            <option value="outro">Outro</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          Mensagem <span style={{ color: '#c0392b' }}>*</span>
        </label>
        <textarea
          name="mensagem"
          required
          rows={5}
          placeholder="Descreva como podemos te ajudar..."
          className={inputClass + ' resize-none'}
          disabled={isLoading}
        />
      </div>

      {status === 'error' && (
        <p className="text-red-600 text-sm font-medium bg-red-50 border border-red-200 rounded-lg px-4 py-3">
          Erro ao enviar. Tente pelo{' '}
          <a href="https://wa.me/5531934741533" className="underline font-bold">
            WhatsApp
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={isLoading}
        className="w-full text-white font-semibold py-3.5 px-6 rounded-lg transition-colors duration-200 bg-[#1a6b3a] hover:bg-[#155c30] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isLoading ? (
          <>
            <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Enviando...
          </>
        ) : (
          'Enviar Mensagem'
        )}
      </button>

      <p className="text-xs text-gray-400 text-center">
        Para ativar o formulário, acesse{' '}
        <a href="https://formspree.io" target="_blank" rel="noopener noreferrer" className="underline">
          formspree.io
        </a>
        , crie uma conta gratuita e substitua{' '}
        <code className="bg-gray-100 px-1 rounded">SEU_ID_FORMSPREE</code> em{' '}
        <code className="bg-gray-100 px-1 rounded">ContactForm.tsx</code>.
      </p>
    </form>
  )
}
