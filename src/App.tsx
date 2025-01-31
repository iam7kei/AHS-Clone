import './App.css'
import './tailwind.css'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home } from '@/pages/home';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Home/>
    </QueryClientProvider>
  );
}

export default App
