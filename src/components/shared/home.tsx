import React from "react";
import { cn } from "@/src/lib/utils";
import { useNavigate } from "react-router-dom";
interface Props {
  className?: string;
}

export const Home: React.FC<Props> = ({ className }) => {
  const navigate = useNavigate();
  const loggedIn = false;
  React.useEffect(() => {
    if (!loggedIn) {
      navigate("/auth");
    }
  }, []);

  return <div className={cn("", className)}></div>;
};
