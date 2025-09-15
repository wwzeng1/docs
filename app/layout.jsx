import { Footer, Layout, Navbar, ThemeSwitch } from 'nextra-theme-blog'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-blog/style.css'
import './globals.css'

export const metadata = {
  title: 'Sweep AI Blog',
  description: 'Insights and updates on building AI coding agents and autocompletion'
}

export default async function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head backgroundColor={{ dark: '#0a0a0a', light: '#ffffff' }} />
      <body style={{
        margin: 0,
        padding: 0,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column'
      }}>
        {/* Logo at the very top of the page */}
        <div style={{
          position: 'sticky',
          top: 0,
          zIndex: 1001,
          backgroundColor: 'transparent',
          padding: '0.75rem 1rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <a href="/" style={{
            display: 'flex',
            alignItems: 'center',
            color: 'inherit',
            textDecoration: 'none',
            width: 'fit-content'
          }}>
            <img src="/banner.svg" alt="Sweep AI" style={{
              height: '40px',
              marginLeft: '2rem'
            }} />
          </a>

          {/* Download button for JetBrains plugin */}
          <a 
            href="https://plugins.jetbrains.com/plugin/26860-sweep-ai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="download-button"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.375rem 0.75rem',
              marginRight: '2rem',
              backgroundColor: '#007ACC',
              color: 'white',
              borderRadius: '12px',
              textDecoration: 'none',
              fontSize: '0.875rem',
              fontWeight: '500',
              transition: 'background-color 0.2s',
              cursor: 'pointer'
            }}
          >
            Download
            <svg
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </a>
        </div>

        <Layout>
          <Navbar 
            pageMap={await getPageMap()}
            style={{ 
              borderBottom: '1px solid #e5e5e5',
              backgroundColor: 'transparent',
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
              width: '100%',
              padding: '0 0rem'
            }}
          />

          {children}
        </Layout>

        {/* Spacer to push footer down */}
        <div style={{ flex: 1 }} />

        <footer style={{
          padding: '1rem 0rem',
          backgroundColor: 'inherit'
        }}>
          <div style={{ 
            textAlign: 'center',
            fontSize: '0.875rem',
            color: '#aaa',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            Sweep AI Inc © {new Date().getFullYear()} <span style={{ margin: '0 0.5rem' }}>•</span>
            <a href="https://twitter.com/sweep_ai" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>Twitter</a> <span style={{ margin: '0 0.5rem' }}>•</span>
            <a href="https://discord.gg/sweep" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>Discord</a>
          </div>
        </footer>
      </body>
    </html>
  )
}