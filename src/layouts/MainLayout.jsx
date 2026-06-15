import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'

/**
 * Root page layout — renders Navbar, page content, and Footer.
 * Also manages the top-level scroll container.
 */
export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-primary text-textPrimary">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
