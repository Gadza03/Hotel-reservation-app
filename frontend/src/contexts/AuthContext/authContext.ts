import { createContext } from "react";
import type { JwtPayload } from "../../utils/decodeUser";

type AuthContextType = {
  user: JwtPayload | null;
  login: (token: string) => void;
  logout: () => void;
  isLoading: boolean;
};

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);
