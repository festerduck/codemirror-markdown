# Composr

Composr is a markdown writer with real-time compiler for the web.

## Implementations

0. Install _Shadcn_
1. Implement the `cmdk` from "https://cmdk.paco.me/"

```
markdown-editor-nextjs/
│
├── pages/                  # Next.js pages directory
│   ├── _app.js             # Custom App component to initialize pages
│   ├── index.js            # Home page
│   └── editor.js           # Markdown editor page
│
├── components/             # Reusable components
│   ├── Header.js           # Header component
│   ├── Footer.js           # Footer component
│   └── MarkdownEditor.js   # Markdown editor component
│
├── public/                 # Static files like images
│
├── styles/                 # Styled-Components global styles
│   ├── GlobalStyle.js      # Global styles
│   └── theme.js            # Theme for styled components
│
├── utils/                  # Utility functions
│   ├── supabaseClient.js   # Initializes Supabase client
│   └── markdownUtils.js    # Utility functions for Markdown processing
│
├── hooks/                  # Custom React hooks
│   └── useSupabaseAuth.js  # Hook for Supabase authentication
│
├── lib/                    # Library code
│   └── supabase.js         # Supabase SDK initialization and utilities
│
├── .env.local              # Local environment variables
├── next.config.js          # Next.js configuration
└── package.json

```
