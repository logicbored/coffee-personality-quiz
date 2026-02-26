# What's Your Coffee Personality? — Quiz Requirements

## Personality → Coffee Pairings

| # | Personality | Coffee | Tagline | Image |
|---|------------|--------|---------|-------|
| 1 | Cozy Classic | Medium Roast Drip | "Comfort in every cup" | public/drip-coffee.jpg |
| 2 | Indulgent Treat | Mocha with Whip | "Coffee is dessert" | public/mocha.jpg |
| 3 | Artisan Snob | Pour-Over, Single Origin | "You know what you like" | public/pour-over.jpg |
| 4 | Night Owl | Red Eye (coffee + espresso) | "Sleep is optional" | public/red-eye.jpg |
| 5 | Zen Minimalist | Black Coffee, Single Origin | "Simple. Clean. Perfect." | public/black-coffee.jpg |
| 6 | Sweet Enthusiast | Caramel Latte | "Life's too short for bitter" | public/caramel-latte.jpg |

---

## Result Display

**Option B — Show all percentages**
Show the user all 6 personality scores as percentages with their top match highlighted. Example:
- 🥇 50% Cozy Classic → Medium Roast Drip
- 30% Artisan Snob → Pour-Over, Single Origin
- 20% Zen Minimalist → Black Coffee, Single Origin

---

## Visual Style

**Style 1 — Playful & Colorful**
- Background: gradient (pink → orange → yellow)
- Card: white, large border-radius (32px), box shadow
- Font: Nunito (rounded, friendly)
- Progress bar: gradient pill shape
- Options: rounded cards with emoji icons, bold text
- Colors: #FF6B9D (pink), #FFB347 (orange), #FFE66D (yellow), #2D2D2D (text)

---

## Images & Icons

- **Images**: Yes — one coffee photo per result card (in `/public/`)
- **Icons**: Yes — emoji icon next to each answer option

---

## Quiz Questions

### Q1: What does your ideal Saturday morning look like?
- 🛋️ Slow morning, cozy blanket, no rush → **Cozy Classic**
- ☀️ Up early, productive before 9am → **Zen Minimalist**
- 🎨 Creative project with music playing → **Artisan Snob**
- 👥 Brunch with friends, the more the merrier → **Sweet Enthusiast**
- 🌙 Still asleep — I went to bed at 3am → **Night Owl**
- 🍫 Fancy breakfast spread, treat yourself → **Indulgent Treat**

### Q2: How do you take your vacations?
- 🏡 Cabin rental, nowhere to be → **Cozy Classic**
- 🎒 Backpacking, local experiences only → **Zen Minimalist**
- ✈️ Boutique hotels, researched for months → **Artisan Snob**
- 🏖️ All-inclusive with a big group → **Sweet Enthusiast**
- 🦉 Night tours, sleep in, no alarms → **Night Owl**
- 🛳️ Luxury cruise, spa days → **Indulgent Treat**

### Q3: What's your go-to comfort food?
- 🍲 Homemade soup or mac & cheese → **Cozy Classic**
- 🥗 A really good grain bowl → **Zen Minimalist**
- 🍜 That one ramen spot you always return to → **Artisan Snob**
- 🍕 Pizza with everyone sharing → **Sweet Enthusiast**
- 🌮 Late-night tacos at midnight → **Night Owl**
- 🧁 Dessert first, always → **Indulgent Treat**

### Q4: How do you recharge after a long week?
- 📺 Netflix on the couch, do not disturb → **Cozy Classic**
- 🧘 Solo walk or meditation → **Zen Minimalist**
- 🎸 Deep dive into a new hobby or craft → **Artisan Snob**
- 🎉 Happy hour with the whole crew → **Sweet Enthusiast**
- 🎮 Gaming until 2am → **Night Owl**
- 🛁 Long bath, face mask, the works → **Indulgent Treat**

### Q5: Pick your ideal workspace:
- 🏠 Home office with a candle burning → **Cozy Classic**
- 🤍 Clean desk, nothing but essentials → **Zen Minimalist**
- ☕ Corner table at a specialty café → **Artisan Snob**
- 🏢 Open office, love the energy → **Sweet Enthusiast**
- 🌃 Best work happens after midnight → **Night Owl**
- 🌸 Aesthetic setup, plants everywhere → **Indulgent Treat**

### Q6: What's your relationship with your phone?
- 📵 Notifications off, check it when I want → **Cozy Classic**
- 🔕 One screen time limit, strictly enforced → **Zen Minimalist**
- 📷 Always taking photos of interesting things → **Artisan Snob**
- 💬 Always texting someone, group chats everywhere → **Sweet Enthusiast**
- 🌙 Phone is at 100% because I charged it at 3am → **Night Owl**
- 🛍️ Shopping apps, TikTok, treat myself → **Indulgent Treat**

---

## Tech Stack

- Next.js (React)
- No database — all logic runs client-side
- Images served from `/public/` folder
- Deployed to Vercel
