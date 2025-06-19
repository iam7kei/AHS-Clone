import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

interface Props {
  children: JSX.Element
}

export function ProtectedRoute({ children }: Props) {
  const user = JSON.parse(localStorage.getItem('user') || 'null')
  const navigate = useNavigate()
  
  useEffect(() => {
    if (!user) {
      navigate('/login', { replace: true })
    }
  }, [user, navigate])

  return children
}
