"use client";

import { useState } from "react";
import Image from "next/image";

type PersonalityId = "cozy" | "indulgent" | "artisan" | "nightowl" | "zen" | "sweet";

interface Personality {
  id: PersonalityId;
  name: string;
  coffee: string;
  tagline: string;
  image: string;
}

interface Option {
  emoji: string;
  text: string;
  personality: PersonalityId;
}

interface Question {
  question: string;
  options: Option[];
}

const personalities: Personality[] = [
  { id: "cozy",     name: "Cozy Classic",      coffee: "Medium Roast Drip",           tagline: "Comfort in every cup",          image: "/drip-coffee.jpg" },
  { id: "indulgent",name: "Indulgent Treat",    coffee: "Mocha with Whip",             tagline: "Coffee is dessert",             image: "/mocha.jpg" },
  { id: "artisan",  name: "Artisan Snob",       coffee: "Pour-Over, Single Origin",    tagline: "You know what you like",        image: "/pour-over.jpg" },
  { id: "nightowl", name: "Night Owl",          coffee: "Red Eye",                     tagline: "Sleep is optional",             image: "/red-eye.jpg" },
  { id: "zen",      name: "Zen Minimalist",     coffee: "Black Coffee, Single Origin", tagline: "Simple. Clean. Perfect.",       image: "/black-coffee.jpg" },
  { id: "sweet",    name: "Sweet Enthusiast",   coffee: "Caramel Latte",               tagline: "Life's too short for bitter",   image: "/caramel-latte.jpg" },
];

const questions: Question[] = [
  {
    question: "What does your ideal Saturday morning look like?",
    options: [
      { emoji: "🛋️", text: "Slow morning, cozy blanket, no rush",       personality: "cozy" },
      { emoji: "☀️", text: "Up early, productive before 9am",           personality: "zen" },
      { emoji: "🎨", text: "Creative project with music playing",        personality: "artisan" },
      { emoji: "👥", text: "Brunch with friends, the more the merrier", personality: "sweet" },
      { emoji: "🌙", text: "Still asleep — I went to bed at 3am",       personality: "nightowl" },
      { emoji: "🍫", text: "Fancy breakfast spread, treat yourself",     personality: "indulgent" },
    ],
  },
  {
    question: "How do you take your vacations?",
    options: [
      { emoji: "🏡", text: "Cabin rental, nowhere to be",               personality: "cozy" },
      { emoji: "🎒", text: "Backpacking, local experiences only",       personality: "zen" },
      { emoji: "✈️", text: "Boutique hotels, researched for months",    personality: "artisan" },
      { emoji: "🏖️", text: "All-inclusive with a big group",            personality: "sweet" },
      { emoji: "🦉", text: "Night tours, sleep in, no alarms",          personality: "nightowl" },
      { emoji: "🛳️", text: "Luxury cruise, spa days",                   personality: "indulgent" },
    ],
  },
  {
    question: "What's your go-to comfort food?",
    options: [
      { emoji: "🍲", text: "Homemade soup or mac & cheese",             personality: "cozy" },
      { emoji: "🥗", text: "A really good grain bowl",                  personality: "zen" },
      { emoji: "🍜", text: "That one ramen spot you always return to",  personality: "artisan" },
      { emoji: "🍕", text: "Pizza with everyone sharing",               personality: "sweet" },
      { emoji: "🌮", text: "Late-night tacos at midnight",              personality: "nightowl" },
      { emoji: "🧁", text: "Dessert first, always",                     personality: "indulgent" },
    ],
  },
  {
    question: "How do you recharge after a long week?",
    options: [
      { emoji: "📺", text: "Netflix on the couch, do not disturb",      personality: "cozy" },
      { emoji: "🧘", text: "Solo walk or meditation",                   personality: "zen" },
      { emoji: "🎸", text: "Deep dive into a new hobby or craft",       personality: "artisan" },
      { emoji: "🎉", text: "Happy hour with the whole crew",            personality: "sweet" },
      { emoji: "🎮", text: "Gaming until 2am",                          personality: "nightowl" },
      { emoji: "🛁", text: "Long bath, face mask, the works",           personality: "indulgent" },
    ],
  },
  {
    question: "Pick your ideal workspace:",
    options: [
      { emoji: "🏠", text: "Home office with a candle burning",         personality: "cozy" },
      { emoji: "🤍", text: "Clean desk, nothing but essentials",        personality: "zen" },
      { emoji: "☕", text: "Corner table at a specialty café",          personality: "artisan" },
      { emoji: "🏢", text: "Open office, love the energy",             personality: "sweet" },
      { emoji: "🌃", text: "Best work happens after midnight",          personality: "nightowl" },
      { emoji: "🌸", text: "Aesthetic setup, plants everywhere",        personality: "indulgent" },
    ],
  },
  {
    question: "What's your relationship with your phone?",
    options: [
      { emoji: "📵", text: "Notifications off, check it when I want",              personality: "cozy" },
      { emoji: "🔕", text: "One screen time limit, strictly enforced",             personality: "zen" },
      { emoji: "📷", text: "Always taking photos of interesting things",           personality: "artisan" },
      { emoji: "💬", text: "Always texting someone, group chats everywhere",       personality: "sweet" },
      { emoji: "🌙", text: "Phone is at 100% because I charged it at 3am",        personality: "nightowl" },
      { emoji: "🛍️", text: "Shopping apps, TikTok, treat myself",                 personality: "indulgent" },
    ],
  },
];

export default function Quiz() {
  const [screen, setScreen] = useState<"intro" | "quiz" | "results">("intro");
  const [current, setCurrent] = useState(0);
  const [scores, setScores] = useState<Record<string, number>>({});
  const [selected, setSelected] = useState<PersonalityId | null>(null);
  const [copied, setCopied] = useState(false);

  function handleAnswer(personality: PersonalityId) {
    setSelected(personality);
    setTimeout(() => {
      const newScores = { ...scores, [personality]: (scores[personality] || 0) + 1 };
      setScores(newScores);
      setSelected(null);
      if (current + 1 >= questions.length) {
        setScreen("results");
      } else {
        setCurrent(current + 1);
      }
    }, 300);
  }

  function restart() {
    setScreen("intro");
    setCurrent(0);
    setScores({});
    setSelected(null);
  }

  const sortedResults = personalities
    .map((p) => ({ ...p, score: scores[p.id] || 0, pct: Math.round(((scores[p.id] || 0) / questions.length) * 100) }))
    .sort((a, b) => b.score - a.score);

  if (screen === "intro") {
    return (
      <div className="bg-white rounded-[16px] shadow-[0_20px_60px_rgba(255,107,157,0.5)] w-full max-w-[560px] p-10 text-center">
        <div className="text-6xl mb-4">☕</div>
        <h1 className="text-3xl font-extrabold text-[#2D2D2D] mb-3 leading-tight">
          What's Your Coffee Personality?
        </h1>
        <p className="text-[#2D2D2D]/70 text-lg mb-8">
          Answer 6 quick questions to discover your perfect coffee match.
        </p>
        <button
          onClick={() => setScreen("quiz")}
          className="bg-gradient-to-r from-[#3B82F6] to-[#EF4444] text-white font-extrabold text-lg px-10 py-4 rounded-full shadow-lg hover:opacity-90 transition-opacity cursor-pointer"
        >
          Start the Quiz →
        </button>
      </div>
    );
  }

  if (screen === "quiz") {
    const q = questions[current];
    const progress = ((current) / questions.length) * 100;

    return (
      <div className="bg-white rounded-[16px] shadow-[0_20px_60px_rgba(255,107,157,0.5)] w-full max-w-[560px] p-8">
        {/* Progress */}
        <div className="mb-6">
          <div className="flex justify-between text-sm font-bold text-[#2D2D2D]/50 mb-2">
            <span>Question {current + 1} of {questions.length}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{
                width: `${progress}%`,
                background: "linear-gradient(90deg, #FF6B9D, #FFB347)",
              }}
            />
          </div>
        </div>

        {/* Question */}
        <h2 className="text-xl font-extrabold text-[#2D2D2D] mb-5 leading-snug">
          {q.question}
        </h2>

        {/* Options */}
        <div className="flex flex-col gap-3">
          {q.options.map((opt) => {
            const isSelected = selected === opt.personality;
            return (
              <button
                key={opt.personality}
                onClick={() => handleAnswer(opt.personality)}
                disabled={selected !== null}
                className={`flex items-center gap-3 w-full text-left px-4 py-3 rounded-2xl border-2 font-bold transition-all cursor-pointer
                  ${isSelected
                    ? "border-[#FF6B9D] bg-[#FF6B9D]/10"
                    : "border-gray-200 bg-white hover:border-[#FF6B9D] hover:bg-[#FF6B9D]/5"
                  }`}
              >
                <span className="text-2xl">{opt.emoji}</span>
                <span className="text-[#2D2D2D] text-sm leading-snug">{opt.text}</span>
                {isSelected && <span className="ml-auto text-[#FF6B9D] text-lg">●</span>}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  function handleShare() {
    const top = sortedResults[0];
    const text = `I'm a ${top.name} — my coffee match is ${top.coffee}! ☕ Take the quiz:`;
    const url = "https://quiz.apricotsolutions.io";
    if (navigator.share) {
      navigator.share({ title: "My Coffee Personality", text, url });
    } else {
      navigator.clipboard.writeText(`${text} ${url}`).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }
  }

  // Results screen
  const top = sortedResults[0];

  return (
    <div className="bg-white rounded-[16px] shadow-[0_20px_60px_rgba(255,107,157,0.5)] w-full max-w-[560px] p-8">
      <h2 className="text-2xl font-extrabold text-[#2D2D2D] text-center mb-1">Your Results</h2>
      <p className="text-center text-[#2D2D2D]/60 text-sm mb-6">Your coffee personality breakdown</p>

      <div className="flex flex-col gap-3">
        {sortedResults.map((p, i) => {
          const isTop = i === 0;
          return (
            <div
              key={p.id}
              className={`rounded-2xl border-2 overflow-hidden transition-all
                ${isTop ? "border-yellow-400 shadow-md" : "border-gray-100"}`}
            >
              <div className={`flex items-center gap-4 p-4 ${isTop ? "bg-yellow-50" : "bg-white"}`}>
                {/* Top match shows coffee image */}
                {isTop && (
                  <div className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 ring-2 ring-yellow-400">
                    <Image src={p.image} alt={p.coffee} fill className="object-cover" />
                  </div>
                )}

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    {isTop && <span className="text-lg">🥇</span>}
                    <span className={`font-extrabold ${isTop ? "text-[#2D2D2D] text-base" : "text-[#2D2D2D]/80 text-sm"}`}>
                      {p.name}
                    </span>
                  </div>
                  <p className={`text-xs text-[#2D2D2D]/60 truncate ${isTop ? "mb-1" : ""}`}>{p.coffee}</p>
                  {isTop && <p className="text-xs text-[#FFB347] font-bold italic">{p.tagline}</p>}
                </div>

                <div className="flex-shrink-0 text-right">
                  <span className={`font-extrabold ${isTop ? "text-2xl text-[#FF6B9D]" : "text-base text-[#2D2D2D]/60"}`}>
                    {p.pct}%
                  </span>
                </div>
              </div>

              {/* Mini progress bar for each result */}
              <div className="h-1.5 bg-gray-100">
                <div
                  className="h-full transition-all duration-700"
                  style={{
                    width: `${p.pct}%`,
                    background: isTop
                      ? "linear-gradient(90deg, #FF6B9D, #FFB347)"
                      : "#e5e7eb",
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 flex gap-3">
        <button
          onClick={restart}
          className="flex-1 bg-gradient-to-r from-[#FF6B9D] to-[#FFB347] text-white font-extrabold text-base px-8 py-3 rounded-full shadow hover:opacity-90 transition-opacity cursor-pointer"
        >
          Retake Quiz
        </button>
        <button
          onClick={handleShare}
          className="flex-1 border-2 border-[#FF6B9D] text-[#FF6B9D] font-extrabold text-base px-8 py-3 rounded-full hover:bg-[#FF6B9D]/10 transition-colors cursor-pointer"
        >
          {copied ? "Copied! ✓" : "Share ↗"}
        </button>
      </div>
    </div>
  );
}
