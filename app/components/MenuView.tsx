"use client";

import { useMemo, useRef, useState } from "react";
import {
  menu,
  restaurant,
  itemImage,
  type MenuCategory,
  type MenuItem,
} from "../data/menu";
import FoodImage from "./FoodImage";

type Filter = "all" | "veg" | "nonveg";

type Props = {
  tableNumber: string;
  onChangeTable: () => void;
};

type Selected = { item: MenuItem; type: MenuCategory["type"] };

function VegMark({ type, size = 14 }: { type: MenuCategory["type"]; size?: number }) {
  const color = type === "veg" ? "#099250" : "#dc2626";
  return (
    <span
      aria-label={type === "veg" ? "Veg" : "Non-Veg"}
      className="inline-flex shrink-0 items-center justify-center rounded-[3px] border bg-white"
      style={{ borderColor: color, width: size, height: size }}
    >
      <span
        className="rounded-full"
        style={{ backgroundColor: color, width: size * 0.42, height: size * 0.42 }}
      />
    </span>
  );
}

export default function MenuView({ tableNumber, onChangeTable }: Props) {
  const [filter, setFilter] = useState<Filter>("all");
  const [selected, setSelected] = useState<Selected | null>(null);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  const categories = useMemo(
    () => menu.filter((c) => filter === "all" || c.type === filter),
    [filter]
  );

  const filters: { id: Filter; label: string }[] = [
    { id: "all", label: "All" },
    { id: "veg", label: "Veg" },
    { id: "nonveg", label: "Non-Veg" },
  ];

  function scrollTo(id: string) {
    sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div className="mx-auto min-h-dvh w-full max-w-3xl pb-16">
      {/* Header */}
      <header className="px-5 pb-4 pt-9 text-center">
        <p
          className="font-extrabold leading-tight text-brand-700"
          style={{
            fontFamily: '"Noto Sans Telugu", sans-serif',
            fontSize: "clamp(1.9rem, 7vw, 2.7rem)",
          }}
        >
          {restaurant.nameTelugu}
        </p>
        <p
          className="font-bold text-brand-600"
          style={{
            fontFamily: '"Noto Sans Telugu", sans-serif',
            fontSize: "clamp(1rem, 4vw, 1.4rem)",
          }}
        >
          {restaurant.subTelugu}
        </p>
        <div className="mx-auto mt-3 flex max-w-[16rem] items-center justify-center gap-3">
          <span className="h-px flex-1 bg-brand-200" />
          <span className="text-[0.7rem] font-bold uppercase tracking-[0.28em] text-ink-muted">
            {restaurant.tagEnglish}
          </span>
          <span className="h-px flex-1 bg-brand-200" />
        </div>
      </header>

      {/* Sticky controls */}
      <div className="sticky top-0 z-20 border-b border-brand-100 bg-canvas/85 px-4 py-3 backdrop-blur-md">
        <div className="flex items-center justify-between gap-3">
          <button
            onClick={onChangeTable}
            className="flex items-center gap-1.5 rounded-full bg-brand-600 px-3.5 py-1.5 text-sm font-semibold text-white shadow-sm transition active:scale-95"
          >
            <span>🪑</span>
            Table {tableNumber}
            <span className="text-xs text-white/70">change</span>
          </button>

          <div className="flex rounded-full border border-brand-200 bg-white p-1">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={`rounded-full px-3 py-1 text-xs font-bold transition ${
                  filter === f.id ? "bg-brand-600 text-white" : "text-ink-muted"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="no-scrollbar mt-3 flex gap-2 overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => scrollTo(cat.id)}
              className="shrink-0 rounded-full border border-brand-200 bg-white px-3 py-1 text-xs font-medium text-brand-800 transition active:scale-95"
            >
              {cat.title}
            </button>
          ))}
        </div>
      </div>

      {/* Menu sections */}
      <main className="space-y-9 px-4 pt-6">
        {categories.map((cat, idx) => (
          <section
            key={cat.id}
            ref={(el) => {
              sectionRefs.current[cat.id] = el;
            }}
            className="animate-fade-up scroll-mt-36"
            style={{ animationDelay: `${idx * 45}ms` }}
          >
            <div className="mb-4 flex items-center gap-2">
              <VegMark type={cat.type} />
              <h2 className="font-display text-xl font-extrabold text-ink">
                {cat.title}
              </h2>
              <span className="ml-1 h-px flex-1 bg-brand-100" />
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {cat.items.map((item) => (
                <button
                  key={item.name}
                  onClick={() => setSelected({ item, type: cat.type })}
                  className="card-shadow group flex flex-col overflow-hidden rounded-2xl bg-white text-left transition active:scale-[0.98]"
                >
                  <div className="relative aspect-square w-full overflow-hidden">
                    <FoodImage
                      src={itemImage(item.name)}
                      alt={item.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-active:scale-105"
                    />
                    <span className="absolute left-2 top-2 rounded-md bg-white/90 p-0.5 shadow-sm">
                      <VegMark type={cat.type} size={13} />
                    </span>
                    {item.note && (
                      <span className="absolute right-2 top-2 rounded-full bg-amber-400 px-2 py-0.5 text-[9px] font-bold text-amber-950 shadow-sm">
                        {item.note}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-1 flex-col p-2.5">
                    <h3 className="line-clamp-2 text-[0.82rem] font-semibold leading-snug text-ink">
                      {item.name}
                    </h3>
                    <span className="mt-auto pt-1.5 font-display text-base font-extrabold text-brand-700">
                      ₹{item.price}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </section>
        ))}
      </main>

      {/* Footer */}
      <footer className="mt-12 px-4 text-center">
        <p className="text-xs italic text-ink-muted">Note: {restaurant.note}</p>
        <div className="mt-4 rounded-2xl bg-gradient-to-br from-brand-600 to-brand-800 px-4 py-4 text-white">
          <p className="font-display text-lg font-extrabold">
            {restaurant.nameEnglish}
          </p>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/80">
            {restaurant.tagEnglish}
          </p>
        </div>
      </footer>

      {selected && (
        <ItemDetails selected={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
}

function ItemDetails({
  selected,
  onClose,
}: {
  selected: Selected;
  onClose: () => void;
}) {
  const { item, type } = selected;
  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 backdrop-blur-sm sm:items-center"
      onClick={onClose}
    >
      <div
        className="animate-slide-up w-full max-w-md overflow-hidden rounded-t-3xl bg-white shadow-2xl sm:rounded-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <FoodImage
            src={itemImage(item.name)}
            alt={item.name}
            className="h-60 w-full object-cover"
          />
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-lg font-bold text-ink shadow-md active:scale-95"
          >
            ✕
          </button>
        </div>

        <div className="p-5">
          <div className="flex items-start gap-2">
            <VegMark type={type} size={16} />
            <h2 className="font-display text-2xl font-extrabold leading-tight text-ink">
              {item.name}
            </h2>
          </div>

          {item.note && (
            <span className="mt-2 inline-block rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-semibold text-amber-700">
              {item.note}
            </span>
          )}

          <p className="mt-3 text-sm leading-relaxed text-ink-muted">{item.desc}</p>

          <div className="mt-5 flex items-center justify-between">
            <span className="font-display text-3xl font-extrabold text-brand-700">
              ₹{item.price}
            </span>
            <button
              onClick={onClose}
              className="rounded-xl bg-gradient-to-b from-brand-500 to-brand-600 px-6 py-3 text-sm font-extrabold text-white shadow-lg shadow-brand-600/30 active:scale-[0.98]"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
