"use client";

import { useEffect, useState } from "react";
import TablePrompt from "./components/TablePrompt";
import MenuView from "./components/MenuView";

const STORAGE_KEY = "pp_table_number";

export default function Home() {
  const [tableNumber, setTableNumber] = useState<string | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const saved = sessionStorage.getItem(STORAGE_KEY);
    if (saved) setTableNumber(saved);
    setReady(true);
  }, []);

  function handleConfirm(table: string) {
    sessionStorage.setItem(STORAGE_KEY, table);
    setTableNumber(table);
  }

  function handleChangeTable() {
    sessionStorage.removeItem(STORAGE_KEY);
    setTableNumber(null);
  }

  if (!ready) return null;

  return (
    <>
      {tableNumber ? (
        <MenuView tableNumber={tableNumber} onChangeTable={handleChangeTable} />
      ) : (
        <TablePrompt onConfirm={handleConfirm} />
      )}
    </>
  );
}
