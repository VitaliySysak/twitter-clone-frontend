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
        <FaTwitter className="absolute -top-80 -right-150" size={1600} color="var(--primary)" />
        <ul className="relative flex flex-col text-white text-xs sm:text-xs md:text-sm lg:text-xl font-bold space-y-8 px-10">
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
        <div className="flex flex-col px-10 mb-16">
          <FaTwitter className="self-start mb-8" size={50} color="var(--primary)" />
          <h1 className="self-start text-4xl font-bold mb-16">See what’s happening in <br /> the world right now</h1>

          <p className="font-bold mb-4">Join Twitter Today.</p>
          <Button
            onClick={() => setOpenSignUp(true)}
            className="w-[clamp(10rem,35vw,30rem)] font-semibold rounded-2xl mb-4">
            Register
          </Button>
          <Button
            onClick={() => setOpenSignIn(true)}
            className="font-semibold rounded-2xl w-[clamp(10rem,35vw,30rem)]"
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
