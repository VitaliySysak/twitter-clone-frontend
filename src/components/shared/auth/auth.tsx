import React from "react";
import { cn } from "@/src/lib/utils";
import { FaTwitter } from "react-icons/fa";
import { Button } from "../../ui/button";
import { CiSearch } from "react-icons/ci";
import { MdPeopleOutline } from "react-icons/md";
import { IoChatbubbleOutline } from "react-icons/io5";
import { AuthModal } from "./auth-modal";

interface Props {
  className?: string;
}

export const Auth: React.FC<Props> = ({ className }) => {
  const [openSignUp, setOpenSignUp] = React.useState(false);
  const [openSignIn, setOpenSignIn] = React.useState(false);
  return (
    <section className={cn("flex h-screen", className)}>
      {/* Left side */}
      <aside className="bg-secondary relative flex justify-center items-center flex-1 overflow-hidden">
        <FaTwitter className="absolute -top-80" size={1800} color="var(--primary)" />
        <ul className="relative flex flex-col text-white text-xs sm:text-xs md:text-sm lg:text-xl font-semibold space-y-8 px-10">
          <li className="flex items-center gap-2">
            <CiSearch className="size-4 sm:size-4 md:size-6 lg:size-8" size={10} />
            Read about what interests you.
          </li>
          <li className="flex items-center gap-2">
            <MdPeopleOutline className="sm:size-4 md:size-6 lg:size-8" size={10} />
            Find out what people are talking about in the world.
          </li>
          <li className="flex items-center gap-2">
            <IoChatbubbleOutline className="sm:size-4 md:size-6 lg:size-8" size={10} />
            Join the conversation.
          </li>
        </ul>
      </aside>

      {/* Right side */}
      <aside className="bg-white flex justify-center items-center flex-1">
        <div className="flex flex-col items-center px-10">
          <FaTwitter className="self-start mb-8" size={50} color="var(--primary)" />
          <h1 className="text-3xl font-semibold mb-16">Find out what’s happening in the world right now.</h1>

          <p className="text-center font-semibold mb-4">Join Twitter right now!</p>
          <Button
            onClick={() => setOpenSignUp(true)}
            className="w-[clamp(10rem,45vw,40rem)] font-semibold rounded-2xl mb-4">
            Register
          </Button>
          <Button
            onClick={() => setOpenSignIn(true)}
            className="font-semibold rounded-2xl w-[clamp(10rem,45vw,40rem)]"
            variant={"outline"}>
            Log In
          </Button>
          {openSignUp && <AuthModal type="sign-up" setOpen={setOpenSignUp} />}
          {openSignIn && <AuthModal type="sign-in" setOpen={setOpenSignIn} />}
        </div>
      </aside>
    </section>
  );
};
