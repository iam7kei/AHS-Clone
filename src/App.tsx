import './App.css'
import './tailwind.css'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { SignIn } from './pages/auth/sign-in'
import { Home } from './pages/home'
import { ProtectedRoute } from './components/route/protected-route';

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
          } />
          <Route path="/login" element={<SignIn />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  )
}

export default App
