import { Header } from "@/components/home/header";
import { SignIn } from "./auth/sign-in";

export const Home = () => {

  return (
    <div className="w-screen h-screen">
      <SignIn />
    </div>
  );
};
