"use client";

import { useState } from "react";
import { restaurant } from "../data/menu";

type Props = {
  onConfirm: (tableNumber: string) => void;
};

const QUICK_PICKS = ["1", "2", "3", "4", "5", "6", "7", "8"];

export default function TablePrompt({ onConfirm }: Props) {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  function submit(table: string) {
    const trimmed = table.trim();
    if (!trimmed) {
      setError("Please enter your table number");
      return;
    }
    onConfirm(trimmed);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-brand-900/30 p-4 backdrop-blur-sm">
      <div className="animate-pop-in w-full max-w-sm overflow-hidden rounded-3xl bg-white shadow-2xl shadow-brand-900/20">
        {/* Green hero header */}
        <div className="bg-gradient-to-br from-brand-500 to-brand-700 px-6 pb-6 pt-7 text-center text-white">
          <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 text-3xl backdrop-blur-sm">
            🍃
          </div>
          <h1
            className="text-2xl font-extrabold leading-tight"
            style={{ fontFamily: '"Noto Sans Telugu", sans-serif' }}
          >
            {restaurant.nameTelugu}
          </h1>
          <p className="mt-1 text-sm font-medium text-white/85">
            {restaurant.nameEnglish}
          </p>
          <p className="mt-2 inline-block rounded-full bg-white/15 px-3 py-0.5 text-xs font-semibold uppercase tracking-widest">
            {restaurant.tagEnglish}
          </p>
        </div>

        {/* Body */}
        <div className="px-6 pb-6 pt-5 text-center">
          <h2 className="font-display text-lg font-bold text-ink">
            Welcome! Please select your table
          </h2>
          <p className="mt-1 text-xs text-ink-muted">
            We&apos;ll bring your order to the right spot.
          </p>

          <div className="mt-5 grid grid-cols-4 gap-2">
            {QUICK_PICKS.map((n) => (
              <button
                key={n}
                type="button"
                onClick={() => {
                  setValue(n);
                  setError("");
                }}
                className={`rounded-xl border py-3 text-base font-bold transition active:scale-95 ${
                  value === n
                    ? "border-brand-600 bg-brand-600 text-white"
                    : "border-brand-100 bg-brand-50 text-brand-800 hover:border-brand-300"
                }`}
              >
                {n}
              </button>
            ))}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              submit(value);
            }}
            className="mt-4"
          >
            <input
              inputMode="numeric"
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
                setError("");
              }}
              placeholder="Or type table number"
              className="w-full rounded-xl border border-brand-100 bg-brand-50/50 px-4 py-3 text-center text-base text-ink outline-none placeholder:text-ink-muted/60 focus:border-brand-500 focus:bg-white"
            />

            {error && <p className="mt-2 text-sm text-red-500">{error}</p>}

            <button
              type="submit"
              className="mt-4 w-full rounded-xl bg-gradient-to-b from-brand-500 to-brand-600 py-3.5 text-base font-extrabold text-white shadow-lg shadow-brand-600/30 transition active:scale-[0.98]"
            >
              View Menu
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
