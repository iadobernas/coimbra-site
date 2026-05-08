'use client'

import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const SENHA = 'coimbra2024admin'

export default function AdminLoginPage() {
  const [senha, setSenha] = useState('')
  const [erro, setErro] = useState(false)
  const router = useRouter()

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (senha === SENHA) {
      localStorage.setItem('admin-auth', '1')
      router.push('/admin/dashboard')
    } else {
      setErro(true)
      setSenha('')
    }
  }

  return (
    <div
      className="flex items-center justify-center py-16 px-4"
      style={{ backgroundColor: '#0d4a24', minHeight: 'calc(100vh - 112px)' }}
    >
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-sm">
        <div className="flex justify-center mb-6">
          <Image
            src="/logo.png.png"
            alt="Coimbra"
            width={160}
            height={52}
            style={{ height: '48px', width: 'auto' }}
            className="object-contain"
          />
        </div>

        <h1 className="text-center text-base font-display font-black text-gray-700 mb-6 tracking-wide">
          Painel Administrativo
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Senha de acesso
            </label>
            <input
              type="password"
              value={senha}
              onChange={(e) => {
                setSenha(e.target.value)
                setErro(false)
              }}
              required
              placeholder="••••••••••••"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#1a6b3a] focus:border-transparent transition-shadow"
            />
          </div>

          {erro && (
            <p className="text-red-600 text-sm font-medium bg-red-50 border border-red-200 rounded-lg px-3 py-2">
              Senha incorreta. Tente novamente.
            </p>
          )}

          <button
            type="submit"
            className="w-full text-white font-bold py-3 rounded-lg transition-colors duration-200 bg-[#1a6b3a] hover:bg-[#155c30]"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  )
}
