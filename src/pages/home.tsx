import { useState, useEffect } from "react";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";

type UserData = {
  id: string
  email: string
  first_name: string
  last_name: string
};

export const Home = () => {
  const [user, setUser] = useState<UserData | null>(null)
  const navigate = useNavigate()
  
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user') || 'null');
    setUser(user);
    if (!user) {
      window.location.href = '/login';
    }
  }, []);

  const handleOnLogoutClick = () =>{ 
    localStorage.removeItem('user')
    navigate('/login')
  }

  return (
    <div className="w-screen h-screen flex flex-1 justify-center">
      <div className="flex flex-col space-y-12 mt-28">
        <div className="flex flex-col space-y-3 items-center justify-center">
          <img src="https://sa1s3optim.patientpop.com/assets/images/provider/photos/2018797.jpg" />
          <p className="text-2xl font-bold">Welcome, <span className="text-primary">{user?.first_name || "N/A"}</span>!</p>
        </div>
        <Button onClick={handleOnLogoutClick}>Logout</Button>
      </div>


    </div>
  );
};
