'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
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
        <h3 className="text-xl font-bold text-gray-900 mb-2">Mensagem enviada!</h3>
        <p className="text-gray-500">Em breve entraremos em contato com você.</p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm font-medium transition-colors duration-200 hover:underline"
          style={{ color: '#1a6b3a' }}
        >
          Enviar outra mensagem
        </button>
      </div>
    )
  }

  const inputClass =
    'w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1a6b3a] focus:border-transparent transition-shadow'

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Nome <span style={{ color: '#c0392b' }}>*</span>
          </label>
          <input type="text" required placeholder="Seu nome completo" className={inputClass} />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Email <span style={{ color: '#c0392b' }}>*</span>
          </label>
          <input type="email" required placeholder="seu@email.com" className={inputClass} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Telefone</label>
          <input type="tel" placeholder="(31) 99999-9999" className={inputClass} />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Assunto <span style={{ color: '#c0392b' }}>*</span>
          </label>
          <select required className={inputClass + ' bg-white'}>
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
          required
          rows={5}
          placeholder="Descreva como podemos te ajudar..."
          className={inputClass + ' resize-none'}
        />
      </div>

      <button
        type="submit"
        className="w-full text-white font-semibold py-3.5 px-6 rounded-lg transition-colors duration-200 bg-[#1a6b3a] hover:bg-[#155c30]"
      >
        Enviar Mensagem
      </button>
    </form>
  )
}
