"use client";

import { useState } from "react";

export default function Home() {
  const [quantidade, setQuantidade] = useState(1);
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(100);
  const [numeros, setNumeros] = useState<number[]>([]);

  function gerarNumeros() {
    const qtd = Math.max(1, quantidade);
    const minimo = Math.min(min, max);
    const maximo = Math.max(min, max);

    const gerados: number[] = [];
    while (gerados.length < qtd) {
      const n = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
      if (!gerados.includes(n)) gerados.push(n);
    }

    // ✅ Ordena em ordem crescente
    const ordenados = gerados.sort((a, b) => a - b);
    setNumeros(ordenados);
  }

  return (
    <main className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-[#1e3c72] to-[#2a5298] text-white font-sans p-6 text-center">
      <h1 className="text-4xl font-bold mb-2">Bem-vindo 🎉</h1>
      <p className="text-lg mb-8">Gere seus números da sorte!</p>

      <div className="flex flex-col items-center gap-4 mb-8 bg-white/10 p-6 rounded-xl shadow-lg backdrop-blur-sm">
        <label className="flex items-center gap-2">
          <span>Quantos números:</span>
          <input
            type="number"
            value={quantidade}
            onChange={(e) => setQuantidade(Number(e.target.value))}
            min={1}
            className="px-2 py-1 rounded-md border-none w-20 text-black text-center"
          />
        </label>

        <label className="flex items-center gap-2">
          <span>De:</span>
          <input
            type="number"
            value={min}
            onChange={(e) => setMin(Number(e.target.value))}
            className="px-2 py-1 rounded-md border-none w-20 text-black text-center"
          />
        </label>

        <label className="flex items-center gap-2">
          <span>Até:</span>
          <input
            type="number"
            value={max}
            onChange={(e) => setMax(Number(e.target.value))}
            className="px-2 py-1 rounded-md border-none w-20 text-black text-center"
          />
        </label>

        <button
          onClick={gerarNumeros}
          className="bg-orange-500 hover:bg-orange-400 text-white font-semibold px-6 py-2 rounded-lg mt-4 transition-colors"
        >
          Gerar números
        </button>
      </div>

      {numeros.length > 0 && (
        <div>
          <h2 className="text-2xl mb-3">🎲 Números sorteados:</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {numeros.map((n, i) => (
              <span
                key={i}
                className="bg-white text-[#1e3c72] font-bold px-4 py-2 rounded-full shadow-md text-lg"
              >
                {n}
              </span>
            ))}
          </div>
        </div>
      )}
    </main>
  );
}
