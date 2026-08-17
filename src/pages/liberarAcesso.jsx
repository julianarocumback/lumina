// src/pages/LiberarAcesso.jsx
import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient'; // ajuste o caminho relativo

export default function LiberarAcesso() {
  const [status, setStatus] = useState('Conectando e liberando...');

  useEffect(() => {
    const canal = supabase.channel('canal-desbloqueio');

    canal.subscribe(async (statusConexao) => {
      if (statusConexao === 'SUBSCRIBED') {
        // Envia o sinal para a tela do PC
        await canal.send({
          type: 'broadcast',
          event: 'liberar-tela',
          payload: { liberado: true },
        });
        setStatus('✅ Acesso liberado no computador!');
      }
    });

    return () => {
      supabase.removeChannel(canal);
    };
  }, []);

  return (
    <div style={{ textAlign: 'center', padding: '60px 20px', fontFamily: 'sans-serif' }}>
      <h2>{status}</h2>
      <p style={{ color: '#666' }}>Pode olhar para a tela do computador.</p>
    </div>
  );
}