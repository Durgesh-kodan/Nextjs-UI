import { NavbarDemo } from "./Header";
import Home from "./home";
import { About } from "./about";
import { ThreeDCardDemo } from "./projects";
import { InfiniteMovingCardsDemo } from "./quotes";
import { SignupFormDemo } from "./contact";
import { FloatingDockDemo } from "./dock";
import Footer from "./footer";

export default function Page() {
  return (
    <div>
      <NavbarDemo />
      <Home />
      <FloatingDockDemo/>
      <About />
      <ThreeDCardDemo />
      <InfiniteMovingCardsDemo />
      <SignupFormDemo/>
      <Footer/>
      footer page banana hai
    </div>
  );
}
