import React, { createContext, useState, useEffect } from "react";
import { setCookie, parseCookies, destroyCookie } from "nookies";

// import { useNavigate } from 'react-router-dom'

// Token => cookie (NOOKIES), localStorage

export type FormData = {
  email: string;
  password: string;
};

type User = {
  id: number;
  email: string;
  passwordHash: string;
  firstName: string;
  lastName: string;
};

type AuthContextType = {
  isAuthenticated: boolean;
  user: User | null;
  signIn: (data: FormData) => Promise<void>;
  signOut: () => void;
};

export const AuthContext = createContext({} as AuthContextType);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  console.log(user)

  const isAuthenticated = !!user;

  useEffect(() => {
    const { "devemdobro.token": token } = parseCookies();

    if (token) {
      fetch("http://localhost:3333/users/", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((userData) => {
          setUser(userData);
        })
        .catch((error) => {
          console.error("Error fetching userData:", error);
        });
    }
  }, []);

  async function signIn({ email, password }: FormData) {
    const url = "http://localhost:3333/users/login";

    try {
        const request = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });
    
        if (!request.ok) {
          const error = await request.json();
          throw new Error(error.message);
        }
    
        const response = await request.json()
    
        setCookie(response, "devemdobro.token", response.token, {
          maxAge: 60 * 60 * 1, // 1h
        })
    
        setUser(response.user)
    
        window.location.reload()
    } catch (error) { 
        console.error(error)
    }
  }

  const signOut = () => {
    destroyCookie(null, "devemdobro.token")
    setUser(null)

    window.location.reload()
  }

  return (
    <AuthContext.Provider value={{ signIn, isAuthenticated, user, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

// !! => é uma maneira de garantir que o valor de "user" seja convertido em um booleano.
// ! => converte o valor em um booleano "NEGADO", se o user for um valor "falsy" (null, undefined, 0, false, string vazia ''), ele vai se tornar um true
// !! => inverte o valor, retornando um booleano original (true ou false)
// true => se o valor for "truthy" (se for um valor válido, um objeto, string não vazia, um número diferente de 0)
