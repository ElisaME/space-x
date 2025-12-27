# SpaceX Dashboard

## 1. Architecture & Tech Stack

Folder Structure

```bash
├───app
│   ├───components/     # A page to test my components as I was creating them
│   └──page.tsx
│   └──layout.tsx
│   └──loading.tsx
├───components
│   ├───launches/       # Feature-specific components
│   ├───layout/         # Layout components (header,panel)
│   ├───shared/         # Reusable components
│   └───ui/             # Shadcn/ui componens
├───lib
│   ├───api.ts          # API service layer
│   ├───constants.ts    # Configuration constants
│   └───utils.ts        # Utility functions
├───types               # TypeScript interfaces
```

## Why I choose this structure?

- Featured-based organization: I try to group them by feature (launches, layout) for better scalability.
- Separation by responsabilities: API logic, types and components are isolated.
- Server/Client split: server components for data fetching and client components for interactivity.

## Tech Stack Choices

### Next.js 15 + App Router

- Server components by default for a better performance.
- Built-in loading states

### TypeScript

- Type safety for API responses
- Better developer experience with autocomplete
- Catches errors at compile time

### Tailwind CSS

- Utility first, makes faster developer
- Can build a consistent design system
- Small bundle

### shadcn/ui

- Pre-built components for faster development
- Full customization control

### Framer Motion

- Declarative animations

### Direct API calls

- Next.js App Router handles caching natively (revalidate)
- Simpler architecture for this use case
- Server Components eliminate need for client-side fetching library

## 2. AI Usage(Transparency)

I used Claude and Stitch for this project.
I first review both of the options given for this project, explore each and when I decided to use the SpaceX API I played around with the tool Stitch to make de Screen design, I tried different prompts to finally get this option which I felt matches my idea, I make small changes to show the data I thought will be better to display and also remove elements that I wouldn't be building.

Here is an image of thw work made by Stitch:

![Stitch Screen](/public/screen.png)

The used of Cloud was as a pair programming partner, who helped me to:

- Identify SpaceX key features, to make the first TypeScript Interfaces and then there were refined manually.
- Component Boilerplate: It gave me a suggestion for the component boilerplate and then it was edited.
- I didn't have used the Next.js v15 yet, so it helped me to consult on Next.js patterns (server vs client compnents, loading states)
- I asked for feedback on architecture decisions.

What I did manually:

- Component composition and data flow
- Animations
- Filtering and search logic
- Error handling strategy

## Key Learnings:

- Effective prompting, for UI interface and specific tecj stack doubts.
- Always reviewing AI outputs, as developers we can´t blindly trust in the suggested solutions.
- Even though I have used Next.js in the past, it has been a while since I did it, so it was fun to build this project with Next.js v15.

## 3. Design decisions

### Layout Choice

I was inspired by space mission control interfaces, I though a dark theme with blue accents brings the high tech and space aesthetic.

I choose a card grid for quick visual scanning and also the option for looking more in their data history with the table component.

### Detail view

I think a side panel instead of modal or new page it's always helpful for the user to keep context of their search or filter state. I think this kind of navigation makes easier to compare issions.

The information hierarchy was decided from my curiosity, it will be very interesting to know someone with a better understanding of this industry and explore another information distributions.

## 4. Challenges & Trade-offs:

1. SpaceX API Structure: the launch objects have the rocket and launchpad references as IDs, I created Maps for better lookups. I think the trade-off here is the extra data fetching upgront, but this way I think the performance improves in rendering.

2. The next.js curve of learning, I have to update my knowledge in this technology to build this challenge.

If I had more time I will:

- Built more filters, by rocket, success rate, etc.
- Add sort options, by date, name, flight number.
- Analytics and Vehicles pages, it will be very interesting to add charts with the results over time.
- Testing, I will add unit tests.
- Accesibility, improve it with keyboard navigation testing.
- UX/UI, make light and dark theme, add i18n for international users.

# Running the project

```
npm install
npm run dev
```

Open: http://localhost:3000
