import React, { createContext, useMemo, useState } from 'react';

const PrinterContext = createContext<{
  port: SerialPort | null;
  setPort: (port: SerialPort) => void;
}>({
  port: null,
  setPort: () => undefined,
});

export function PrinterProvider({ children }: { children: React.ReactNode }) {
  const [port, setPort] = useState<SerialPort | null>(null);

  const contextValue = useMemo(() => {
    return { port, setPort };
  }, [port, setPort]);

  return (
    <PrinterContext.Provider value={contextValue}>
      {children}
    </PrinterContext.Provider>
  );
}

export default PrinterContext;
