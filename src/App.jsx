import { Toaster } from 'react-hot-toast'
import MainLayout from '@/layouts/MainLayout'
import Home       from '@/pages/Home'

export default function App() {
  return (
    <MainLayout>
      <Home />
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: '#1e293b',
            color:      '#f1f5f9',
            border:     '1px solid #334155',
            borderRadius: '12px',
            fontSize:   '14px',
          },
          success: { iconTheme: { primary: '#10b981', secondary: '#1e293b' } },
          error:   { iconTheme: { primary: '#ef4444', secondary: '#1e293b' } },
        }}
      />
    </MainLayout>
  )
}
