import React, { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button, Button as div } from "@/components/ui/button"
import { LuEye, LuEyeClosed } from "react-icons/lu";
import { Header } from "@/components/home/header";

export const SignIn = () => {
  const [username, setUsername] = useState<string | null>(null)
  const [password, setPassword] = useState<string | null>(null)
  const [showPassword, setShowPassword] = useState<boolean>(false)

  return (
    <div>
      <Header />
      <div className="w-full h-full flex flex-1 justify-center mt-4">
        <div className="w-[30vw] px-10 flex flex-col space-y-10 items-center justify-center">
          <h2 className="font-bold text-lg">Portal Login</h2>
          <form className="flex flex-col w-full space-y-8">
            <div className="flex flex-col space-y-2 items-start">
              <Label className="item">Email Address</Label>
              <Input type="email" required value={username || ""} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)} />
            </div>
            <div className="flex flex-col space-y-2 items-start">
              <Label className="item">Password</Label>
              <span className="flex flex-row w-full space-x-3">
                <Input type={showPassword ? "text" : "password"} required value={password || ""} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} />
                <div className="hover:cursor-pointer flex items-center justify-center" onClick={() => setShowPassword((prev) => !prev)}>
                  {showPassword ? <LuEye size={22} color="#A5202A" />
                    : <LuEyeClosed size={22} color="#A5202A" />
                  }
                </div>
              </span>
            </div>
            <Button>Login</Button>
          </form>
        </div>
      </div>
    </div>
  )
}
