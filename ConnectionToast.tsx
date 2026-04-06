'use client';

import { useState, useEffect } from 'react';

interface ConnectionToastProps {
  isConnected: boolean;
}

export default function ConnectionToast({ isConnected }: { isConnected: boolean }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Solo mostramos la notificación si la conexión es exitosa
    if (isConnected) {
      setIsVisible(true);
    }
  }, [isConnected]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce-short">
      <div className="flex items-center gap-3 bg-white border border-green-100 shadow-2xl rounded-xl p-4 min-w-[320px] transition-all">
        <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
          <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div className="flex-1">
          <h3 className="text-sm font-bold text-gray-900">Neon Database</h3>
          <p className="text-xs text-gray-500 font-medium">¡Conexión establecida con éxito!</p>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="ml-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 p-1.5 rounded-lg transition-colors"
          title="Eliminar notificación"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}