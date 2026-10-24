# 🌸 gasmine-puvvu🌸 2.8.0 Assessment & AI Spec Studio

gasmine-puvvu🌸 AI Spec Studio is a browser-based JavaScript assessment generator, to-do checklist builder, and live unit-test runner built on the gasmine-puvvu🌸 2.8.0 framework. Drop in any coding question or function specification to automatically generate student starter stubs (src/app.js), automated test suites (tests/FunctionsTest.js), problem documentation (README.md), and a live side-by-side Spec Runner.

✨ Key Features

Dual Spec Presets: Switch between the full 10-Spec Task Tracker assessment (20 Marks in Normal / 40 Marks in Hard) and the 5-Spec Core Task Tracker set (10 Marks in Normal / 20 Marks in Hard).

Normal & Hard🔥 Difficulty Modes:

Normal Mode (2 Marks/Spec): Standard functional assertions and basic edge-case checks.

Hard Mode 🔥 (4 Marks/Spec): Strict boundary assertions, empty/zero/negative edge cases, type checks, and input non-mutation verification.

Multi-Provider AI Spec & To-Do Generator: Supports Google Gemini (gemini-2.5-flash), Groq Cloud (llama-3.3-70b-versatile), and OpenRouter (openai/gpt-4o-mini or any model) with automatic API key prefix detection (AIza..., gsk_..., sk-or-...), plus an Offline Prompt Parser when no API key is used.

Side-by-Side IDE Workflow:

Project Explorer Sidebar: One-column vertical navigation across gasmine-puvvu🌸 Runner, tests/FunctionsTest.js, src/app.js, README.md, and index.html.

Default Split View: Displays the Code Writer (src/app.js) and README.md side-by-side when you open the studio.

Live Spec Runner Split View: Clicking ▶ Run gasmine-puvvu🌸 Specs automatically opens the gasmine-puvvu🌸 Spec Runner (with the embedded Compact Spec Checklist) right next to your code editor.

📁 Repository Structure

├── index.html                                      # Main gasmine-puvvu🌸 AI Spec Studio Web App
├── README.md                                       # Project documentation & deployment guide
├── src/
│   └── app.js                                      # Student starter code template
├── tests/
│   └── FunctionsTest.js                            # Automated gasmine-puvvu🌸 2.8.0 test specs
└── gasmine-puvvu/
    └── gasmine-puvvu-2.8.0/
        ├── gasmine-puvvu.js                        # Core test execution engine & 24 matchers
        ├── gasmine-puvvu-html.js                   # Browser HTML reporter UI
        ├── gasmine-puvvu.css                       # Reporter stylesheet
        ├── boot.js                                 # Global interface bootstrapper
        └── console.js                              # CLI / console reporter
