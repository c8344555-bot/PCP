import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock } from 'lucide-react';
import steelLogo from '@/assets/uploads/1791673211566-0-WhatsApp-Image-2026-10-10-at-19.59.16.jpeg';

export default function Index() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(isRegistering ? 'Conta criada com sucesso! O primeiro usuário é Administrador.' : 'Login efetuado com sucesso!');
  };

  return (
    <div className="min-h-screen bg-[#070913] text-white flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-md z-10">
        {/* Header Branding */}
        <div className="flex items-center gap-3 mb-8">
          <div className="bg-gradient-to-r from-[#38bdf8] to-[#60a5fa] text-slate-950 font-bold px-4 py-2 rounded-xl text-lg shadow-[0_0_20px_rgba(56,189,248,0.4)] flex items-center justify-center">
            STEEL
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight text-white">CLARK PCP</h1>
            <p className="text-xs text-slate-400">Gestão de Pedidos e Produção</p>
          </div>
        </div>

        {/* Card Box */}
        <div className="bg-[#0f172a]/80 backdrop-blur-xl border border-slate-800/80 rounded-2xl p-6 shadow-2xl shadow-black/50">
          <div className="text-xs font-semibold tracking-wider text-slate-400 uppercase mb-6">
            {isRegistering ? 'CRIAR CONTA' : 'ENTRAR'}
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">E-mail</label>
              <div className="relative">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#1e293b]/70 border border-slate-700/80 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="seu@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">Senha</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-[#1e293b]/70 border border-slate-700/80 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors pr-10"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {!isRegistering && (
              <div className="text-right">
                <a href="#" onClick={(e) => { e.preventDefault(); alert('Instruções de recuperação enviadas para o e-mail.'); }} className="text-xs text-[#38bdf8] hover:underline">
                  Esqueci minha senha
                </a>
              </div>
            )}

            <button
              type="submit"
              className="w-full mt-2 bg-gradient-to-r from-[#38bdf8] to-[#60a5fa] hover:from-[#0ea5e9] hover:to-[#38bdf8] text-slate-950 font-semibold py-3 px-4 rounded-xl text-sm shadow-[0_0_20px_rgba(56,189,248,0.3)] transition-all"
            >
              {isRegistering ? 'Cadastrar' : 'Entrar'}
            </button>

            <div className="relative flex py-2 items-center">
              <div className="flex-grow border-t border-slate-800"></div>
              <span className="flex-shrink mx-4 text-slate-500 text-xs">ou</span>
              <div className="flex-grow border-t border-slate-800"></div>
            </div>

            <button
              type="button"
              onClick={() => alert('Login com Google simulado com sucesso!')}
              className="w-full bg-[#1e293b]/80 hover:bg-[#1e293b] border border-slate-700/60 text-white font-medium py-3 px-4 rounded-xl text-sm transition-colors flex items-center justify-center gap-2"
            >
              Continuar com Google
            </button>
          </form>

          <div className="mt-6 text-center">
            <button
              type="button"
              onClick={() => setIsRegistering(!isRegistering)}
              className="text-xs text-[#38bdf8] hover:underline"
            >
              {isRegistering ? 'Já tem conta? Entrar' : 'Não tem conta? Criar conta'}
            </button>
          </div>
        </div>

        {/* Footer info */}
        <p className="text-center text-xs text-slate-500 mt-6">
          O primeiro usuário cadastrado vira Administrador.
        </p>
      </div>
    </div>
  );
}
