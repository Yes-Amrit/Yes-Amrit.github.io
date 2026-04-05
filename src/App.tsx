import { motion, AnimatePresence, useMotionValue, useSpring, useScroll, useTransform, useMotionValueEvent } from "motion/react";
import { Instagram, Globe, Star, Heart, Zap, Moon, Sun, Smile, Ghost, Coffee, ArrowRight, Github, Linkedin, Send } from "lucide-react";
import { useState, useEffect, useRef, useMemo, FormEvent } from "react";
import ScrambledText from "./components/ScrambledText";
import PixelBlast from "./components/PixelBlast";
import TargetCursor from "./components/TargetCursor";
import ElectricBorder from "./components/ElectricBorder";
import LightRays from "./components/LightRays";
import MagicBento from "./components/MagicBento";
import Orb from "./components/Orb";
import LogoLoop from "./components/LogoLoop";
import DotGrid from "./components/DotGrid";
import ScrollStack, { ScrollStackItem } from "./components/ScrollStack";
import ShapeGrid from "./components/ShapeGrid";
import TweetCard from "./components/TweetCard";
import ProfileCard from "./components/ProfileCard";
import BorderGlow from "./components/BorderGlow";
import CircularText from "./components/CircularText";
import TrueFocus from "./components/TrueFocus";
import LaserFlow from "./components/LaserFlow";
import {
  SiCplusplus, SiJavascript, SiTypescript, SiPostgresql, SiMongodb, SiR, SiHtml5, SiCss, SiArduino,
  SiReact, SiNodedotjs, SiExpress, SiTailwindcss, SiPrisma, SiWordpress,
  SiGit, SiDocker, SiPostman, SiGooglecolab, SiPython, SiOpenjdk, SiOpenai, SiLangchain
} from 'react-icons/si';

const STICKERS = [
  { Icon: Star, color: "#FFD700" },
  { Icon: Heart, color: "#FF69B4" },
  { Icon: Zap, color: "#00BFFF" },
  { Icon: Moon, color: "#C0C0C0" },
  { Icon: Sun, color: "#FFA500" },
  { Icon: Smile, color: "#ADFF2F" },
  { Icon: Ghost, color: "#FFFFFF" },
  { Icon: Coffee, color: "#D2B48C" },
];

function Preloader({ onComplete }: { onComplete: () => void }) {
  const [count, setCount] = useState(0);
  const [animationStep, setAnimationStep] = useState(0);

  useEffect(() => {
    const duration = 4000; // 4 seconds
    const interval = 40;
    const steps = duration / interval;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return Math.min(prev + increment, 100);
      });
    }, interval);

    // Cycle through animation steps
    const stepTimer = setInterval(() => {
      setAnimationStep((prev) => (prev + 1) % 5);
    }, 800);

    return () => {
      clearInterval(timer);
      clearInterval(stepTimer);
    };
  }, [onComplete]);

  return (
    <motion.div
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[200] bg-black flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Morphing Central Icon */}
      <div className="relative w-32 h-32 flex items-center justify-center">
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-white/10"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        <div className="relative w-16 h-16 flex items-center justify-center">
          <AnimatePresence mode="wait">
            {animationStep === 0 && (
              <motion.div
                key="clock"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 270 }}
                exit={{ opacity: 0, rotate: 450 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="relative w-full h-full"
              >
                <div className="absolute top-1/2 left-1/2 w-1 h-6 bg-white -translate-x-1/2 -translate-y-full origin-bottom rounded-full" />
                <div className="absolute top-1/2 left-1/2 w-4 h-4 border-2 border-white rounded-full -translate-x-1/2 -translate-y-1/2" />
              </motion.div>
            )}

            {animationStep === 1 && (
              <motion.div
                key="arrow"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.5 }}
                className="flex items-center justify-center"
              >
                <div className="w-8 h-1 bg-white rounded-full relative">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 border-t-2 border-r-2 border-white rotate-45" />
                </div>
              </motion.div>
            )}

            {animationStep === 2 && (
              <motion.div
                key="loading"
                initial={{ opacity: 0, rotate: 0 }}
                animate={{ opacity: 1, rotate: 360 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-10 h-10 border-2 border-white border-t-transparent rounded-full"
              />
            )}

            {animationStep === 3 && (
              <motion.div
                key="dot-morph"
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: 1,
                  scale: [1, 0.5, 1],
                  borderRadius: ["50%", "10%", "50%"]
                }}
                exit={{ opacity: 0, scale: 1.5 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="w-8 h-8 bg-white"
              />
            )}

            {animationStep === 4 && (
              <motion.div
                key="pendulum"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="relative w-full h-full flex items-center justify-center"
              >
                <motion.div
                  animate={{ rotate: [-30, 30, -30] }}
                  transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
                  className="w-1 h-12 bg-white origin-top rounded-full"
                >
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rounded-full" />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Loading Text & Counter */}
      <div className="mt-16 flex flex-col items-center gap-4">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          className="text-[10px] uppercase tracking-[0.4em] font-medium text-white"
        >
          Loading please wait...
        </motion.p>

        <div className="flex items-baseline gap-1">
          <motion.span
            className="text-4xl font-curvy font-light text-white"
          >
            {Math.round(count)}
          </motion.span>
          <span className="text-[10px] text-white/20 uppercase tracking-widest">%</span>
        </div>

        <div className="w-32 h-[1px] bg-white/5 relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 h-full bg-white/40"
            style={{ width: `${count}%` }}
          />
        </div>
      </div>

      {/* Branding */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        className="absolute bottom-12 text-[10px] uppercase tracking-[0.5em] font-bold"
      >
        Amrit Portfolio 2026
      </motion.div>
    </motion.div>
  );
}

const TESTIMONIALS = [
  {
    name: "Harshil R",
    text: "He learns fast. Even if he doesn’t know something initially, he figures it out without making it a big deal.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix",
    gender: "boy"
  },
  {
    name: "Rakhi",
    text: "He’s respectful and easy to communicate with. Makes teamwork much more comfortable.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka",
    gender: "girl"
  },
  {
    name: "Dhairya",
    text: "Working with Amrit has always been a great experience. He’s reliable, focused, and consistently delivers on time without compromising quality. What I appreciate most is his ability to break down complex problems into simple, workable solutions. You can count on him when it matters.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aman",
    gender: "boy"
  },
  {
    name: "Prasun",
    text: "Amrit has a very practical mindset when it comes to development. He focuses on building things that actually work instead of overcomplicating them. That balance of simplicity and efficiency is something I really respect.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Prasun",
    gender: "boy"
  },
  {
    name: "Adi",
    text: "Easy to work with and highly cooperative, Amrit makes teamwork feel effortless. He learns clearly, adapts quickly, and contributes meaningfully without overstepping.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Adi",
    gender: "boy"
  },
  {
    name: "Mayank Kumar",
    text: "Amrit approaches work with sincerity and focus. He doesn’t overpromise, but whatever he commits to, he delivers with full effort.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mayank",
    gender: "boy"
  },
  {
    name: "Yash",
    text: "What I like about Amrit is his honesty in work. He’s always learning and improving, and that mindset reflects in the quality of what he builds.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Yash",
    gender: "boy"
  },
  {
    name: "Shivam",
    text: "Dependability is one of Amrit’s strongest qualities. You don’t have to follow up — once he takes ownership, he makes sure things are completed properly and on time.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Shubham",
    gender: "boy"
  },
  {
    name: "Pradhi",
    text: "Working with Amrit is a lesson in consistency. He avoids the fluff and focuses on the impact, letting the quality of the architecture speak for itself.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priyansh",
    gender: "boy"
  }
];

function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://formspree.io/f/mjgpppvy", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        setStatus("sent");
        form.reset();
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        const errorData = await response.json();
        console.error("Formspree error:", errorData);
        setStatus("idle");
        alert(errorData.error || "Oops! There was a problem submitting your form");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("idle");
      alert("Network error. Please try again later.");
    }
  };

  return (
    <form
      ref={formRef}
      className="p-8 bg-black/40 backdrop-blur-xl rounded-[24px] space-y-6"
      onSubmit={handleSubmit}
    >
      <div className="space-y-2">
        <label className="text-[10px] uppercase tracking-widest text-white/40 ml-1">Name</label>
        <input
          name="name"
          type="text"
          required
          placeholder="Your Name"
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/10 focus:outline-none focus:border-white/30 transition-colors"
        />
      </div>
      <div className="space-y-2">
        <label className="text-[10px] uppercase tracking-widest text-white/40 ml-1">Email</label>
        <input
          name="email"
          type="email"
          required
          placeholder="your@email.com"
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/10 focus:outline-none focus:border-white/30 transition-colors"
        />
      </div>
      <div className="space-y-2">
        <label className="text-[10px] uppercase tracking-widest text-white/40 ml-1">Message</label>
        <textarea
          name="message"
          required
          rows={4}
          placeholder="Send me message..."
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/10 focus:outline-none focus:border-white/30 transition-colors resize-none"
        />
      </div>
      <button
        type="submit"
        disabled={status === "sending" || status === "sent"}
        className="w-full py-4 bg-white text-black rounded-xl text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-white/90 transition-colors cursor-target disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "idle" && "Send Message"}
        {status === "sending" && "Sending..."}
        {status === "sent" && "Sent"}
      </button>
    </form>
  );
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Mouse Parallax Logic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: any) => {
    const { clientX, clientY } = e;
    const moveX = (clientX / window.innerWidth - 0.5) * 40;
    const moveY = (clientY / window.innerHeight - 0.5) * 40;
    mouseX.set(moveX);
    mouseY.set(moveY);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="relative min-h-screen bg-black text-white font-sans overflow-x-hidden selection:bg-white selection:text-black"
    >
      <TargetCursor
        spinDuration={2}
        hideDefaultCursor
        parallaxOn
        hoverDuration={0.2}
      />
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Preloader onComplete={() => setIsLoading(false)} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {/* Header */}
            <header className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-4xl z-50 flex justify-between items-center px-8 py-4 border border-white/10 bg-black/40 backdrop-blur-md rounded-full">
              <div className="flex-1">
                <motion.h1
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="text-xl font-curvy font-bold tracking-tighter cursor-target"
                  style={{ fontVariationSettings: '"SOFT" 100, "WONK" 1' }}
                >
                  <ScrambledText radius={50} duration={1} speed={0.3} scrambleChars=".:">
                    Amrit
                  </ScrambledText>
                </motion.h1>
              </div>

              <nav className="hidden md:flex flex-2 justify-center gap-6 text-[9px] uppercase tracking-[0.25em] font-bold text-white/40">
                {["About", "Journey", "Works", "Contact"].map((item, i) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                    className="hover:text-white transition-colors duration-300 relative group cursor-target"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
                  </motion.a>
                ))}
                <motion.a
                  href="https://drive.google.com/file/d/1l7p4IbldmLFspHSOmN1Y2JD_ueNf00y9/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="hover:text-white transition-colors duration-300 relative group cursor-target"
                >
                  Resume
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
                </motion.a>
              </nav>

              <div className="flex-1 flex justify-end gap-4">
                <motion.a
                  href="https://www.instagram.com/raj_.amrit/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="flex items-center gap-2 text-[9px] uppercase tracking-[0.2em] font-bold text-white/40 hover:text-white transition-colors cursor-target"
                >
                  <Instagram size={14} />
                </motion.a>
                <motion.a
                  href="https://github.com/Yes-Amrit"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                  className="flex items-center gap-2 text-[9px] uppercase tracking-[0.2em] font-bold text-white/40 hover:text-white transition-colors cursor-target"
                >
                  <Github size={14} />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/amrit-raj-a6b29b28a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                  className="flex items-center gap-2 text-[9px] uppercase tracking-[0.2em] font-bold text-white/40 hover:text-white transition-colors cursor-target"
                >
                  <Linkedin size={14} />
                </motion.a>
              </div>
            </header>

            {/* Main Content */}
            <main className="relative h-screen flex items-center justify-center pt-20">
              {/* PixelBlast Background */}
              <div className="absolute inset-0 z-10 opacity-40 cursor-target">
                <PixelBlast
                  variant="square"
                  pixelSize={4}
                  color="#B19EEF"
                  patternScale={2}
                  patternDensity={1}
                  pixelSizeJitter={0}
                  enableRipples
                  rippleSpeed={0.4}
                  rippleThickness={0.12}
                  rippleIntensityScale={1.5}
                  liquid={false}
                  liquidStrength={0.12}
                  liquidRadius={1.2}
                  liquidWobbleSpeed={5}
                  speed={0.5}
                  edgeFade={0.25}
                  transparent
                />
              </div>

              {/* Background Year - Extremely Minimalistic */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.1 }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="absolute top-[40%] right-[15%] pointer-events-none select-none"
              >
                <div className="flex items-start gap-2">
                  <span className="text-8xl md:text-[12rem] font-curvy font-light text-outline leading-none">
                    2026
                  </span>
                </div>
              </motion.div>

              {/* Central Portal */}
              <div className="relative z-20 w-full max-w-5xl px-6 flex flex-col items-center pointer-events-none">
                <motion.div
                  style={{ x, y }}
                  className="relative w-full aspect-square max-w-[420px]"
                >
                  {/* The Circle */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: [0.23, 1, 0.32, 1] }}
                    className="absolute inset-0 rounded-full border border-white/8 overflow-hidden shadow-[0_0_60px_rgba(255,255,255,0.02)] pointer-events-auto cursor-target"
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 z-10" />

                    {/* Uploaded Video Integration - input_file_1.mp4 */}
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover scale-[1.15] grayscale hover:grayscale-0 transition-all duration-1000"
                      style={{ animation: 'slow-loop 8s infinite linear' }}
                    >
                      <source src="input_file_1.mp4" type="video/mp4" />
                    </video>
                  </motion.div>
                </motion.div>

                {/* Floating Title Text - Rearranged to top-left quadrant */}
                <div className="absolute inset-0 z-30 pointer-events-none">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }}
                    className="absolute top-[18%] left-[5%] md:left-[10%]"
                  >
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.4 }}
                      transition={{ delay: 1, duration: 1 }}
                      className="block text-lg md:text-2xl font-italic italic mb-0"
                    >
                      between
                    </motion.span>
                    <motion.h2
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.2, duration: 1 }}
                      className="text-5xl md:text-8xl font-curvy font-medium tracking-tight leading-none mix-blend-difference"
                      style={{ fontVariationSettings: '"SOFT" 100, "WONK" 1' }}
                    >
                      <ScrambledText radius={50} duration={1} speed={0.3} scrambleChars=".:">
                        Reality
                      </ScrambledText>
                    </motion.h2>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8, duration: 1.5, ease: "easeOut" }}
                    className="absolute top-[48%] left-[12%] md:left-[18%]"
                  >
                    <div className="flex items-start">
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.4 }}
                        transition={{ delay: 1.4, duration: 1 }}
                        className="text-3xl md:text-5xl font-italic italic mt-2 mr-4"
                      >
                        &
                      </motion.span>
                      <motion.h2
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.6, duration: 1 }}
                        className="text-5xl md:text-8xl font-curvy font-medium tracking-tight leading-none mix-blend-difference"
                        style={{ fontVariationSettings: '"SOFT" 100, "WONK" 1' }}
                      >
                        <ScrambledText radius={50} duration={1} speed={0.3} scrambleChars=".:">
                          Dream
                        </ScrambledText>
                      </motion.h2>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Scroll Down Indicator */}
              <motion.a
                href="#about"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute left-8 md:left-12 bottom-12 flex flex-col items-center gap-8 cursor-target z-30"
              >
                <span className="text-[15px] uppercase tracking-[0.4em] font-medium text-white/38 [writing-mode:vertical-lr] rotate-180">
                  Scroll Down
                </span>
                <div className="relative w-[1px] h-24 bg-white/5 overflow-hidden">
                  <motion.div
                    animate={{ y: ["-100%", "100%"] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                    className="absolute top-0 left-0 w-full h-1/2 bg-white"
                  />
                </div>
              </motion.a>

              {/* Bottom Elements */}
              <div className="absolute bottom-8 left-0 w-full px-12 flex justify-between items-end pointer-events-none">
                <div className="hidden md:block">
                  <span className="text-[20px] uppercase tracking-[0.2em] font-medium text-white/15">
                    Series 01 / Portfolio
                  </span>
                </div>

                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="text-white/5 cursor-target pointer-events-auto"
                >
                  <Globe size={24} />
                </motion.div>
              </div>
            </main>

            {/* About Section */}
            <section id="about" className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden py-24">
              {/* LightRays Background */}
              <div className="absolute inset-0 z-0 opacity-75">
                <LightRays
                  raysOrigin="top-center"
                  raysColor="#ffffff"
                  raysSpeed={0.8}
                  lightSpread={0.6}
                  rayLength={2.5}
                  followMouse={true}
                  mouseInfluence={0.05}
                  noiseAmount={0.02}
                  distortion={0.1}
                  className="custom-rays"
                  pulsating={true}
                  fadeDistance={1}
                  saturation={0.5}
                />
              </div>

              <div className="relative z-10 w-full max-w-4xl px-6">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="flex flex-col items-center text-center gap-12"
                >
                  <div className="space-y-4">
                    <motion.span
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 0.4 }}
                      className="text-[10px] uppercase tracking-[0.6em] font-bold text-white"
                    >
                      The Philosophy
                    </motion.span>
                    <h2 className="text-4xl md:text-6xl font-curvy font-medium tracking-tight flex flex-col items-center">
                      <ScrambledText radius={50} duration={1} speed={0.3} scrambleChars=".:">
                        About
                      </ScrambledText>
                      <span className="font-italic italic opacity-50 -mt-2">Me</span>
                    </h2>
                  </div>

                  <ElectricBorder
                    color="#ffffff"
                    speed={0.5}
                    chaos={0.08}
                    borderRadius={32}
                    className="cursor-target"
                  >
                    <div className="p-8 md:p-12 max-w-2xl">
                      <p className="text-lg md:text-xl leading-relaxed font-light text-white/80">
                        Curiosity-led. System-driven. I bridge the gap between emerging AI and real-world utility. I don’t just write code; I refine chaos into products that work—experimenting relentlessly until the idea becomes an impact.
                      </p>
                      <div className="mt-8 pt-8 border-t border-white/10 flex justify-between items-center">
                        <span className="text-sm font-italic italic opacity-60">~ Amrit</span>
                        <motion.a
                          href="#works"
                          whileHover={{ x: 5 }}
                          className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-white/40 hover:text-white transition-colors"
                        >
                          View Works <ArrowRight size={12} />
                        </motion.a>
                      </div>
                    </div>
                  </ElectricBorder>
                </motion.div>
              </div>
            </section>

            {/* Journey Section */}
            <section id="journey" className="relative min-h-screen bg-black py-32 overflow-hidden">
              {/* Orb Background */}
              <div className="absolute inset-0 z-0 opacity-20">
                <Orb
                  hoverIntensity={2}
                  rotateOnHover
                  hue={88}
                  forceHoverState={false}
                  backgroundColor="#000000"
                />
              </div>

              <div className="relative z-10 max-w-6xl mx-auto px-6">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  className="space-y-24"
                >
                  {/* Education Journey */}
                  <div className="space-y-12">
                    <div className="text-center space-y-4">
                      <motion.span className="text-[10px] uppercase tracking-[0.6em] font-bold text-white/40">
                        The Foundation
                      </motion.span>
                      <h2 className="text-4xl md:text-6xl font-curvy font-medium tracking-tight flex flex-col items-center">
                        <ScrambledText radius={50} duration={1} speed={0.3} scrambleChars=".:">
                          Education
                        </ScrambledText>
                        <span className="font-italic italic opacity-50 -mt-2">Journey</span>
                      </h2>
                    </div>

                    <ElectricBorder
                      color="#ffffff"
                      speed={0.3}
                      chaos={0.05}
                      borderRadius={24}
                      className="cursor-target"
                    >
                      <div className="p-4 bg-black/40 backdrop-blur-sm rounded-[24px]">
                        <MagicBento
                          textAutoHide={false}
                          enableStars
                          enableSpotlight
                          enableBorderGlow={true}
                          enableTilt={false}
                          enableMagnetism={false}
                          clickEffect
                          spotlightRadius={400}
                          particleCount={12}
                          glowColor="132, 0, 255"
                          disableAnimations={false}
                          data={[
                            {
                              title: 'Vellore Institute of Technology (2023 - 2027)',
                              description: "Bachelor of Technology in Computer Science\n\nTheory is the map, but the build is the journey. I’ve spent my time at VIT obsessed with the 'how' behind the 'what.'",
                              label: 'Education'
                            },
                            {
                              title: 'DAV Public School (2009 - 2020)',
                              description: "Primary Education, CBSE\n\nThis is where the obsession started. Before the complex AI and systems, there was just a kid with a laptop, a massive curiosity, and a school desk. I spent these years training my brain to see the world as a series of puzzles—finding the rhythm in Math and the discipline in Sketching.",
                              label: 'Education'
                            },
                            {
                              title: 'STSV Internation School (2020 - 2022)',
                              description: "Sr. Secondary Education, CBSE\n\nThe world went quiet, 2020 to 2022 was my training ground for self-reliance. Without the noise of a typical school day, I treated this period as a deep-sea dive into complexity.",
                              label: 'Education'
                            }
                          ]}
                        />
                      </div>
                    </ElectricBorder>
                  </div>

                  {/* Experience Journey */}
                  <div className="space-y-12">
                    <div className="text-center space-y-4">
                      <motion.span className="text-[10px] uppercase tracking-[0.6em] font-bold text-white/40">
                        The Evolution
                      </motion.span>
                      <h2 className="text-4xl md:text-6xl font-curvy font-medium tracking-tight flex flex-col items-center">
                        <ScrambledText radius={50} duration={1} speed={0.3} scrambleChars=".:">
                          Experience
                        </ScrambledText>
                        <span className="font-italic italic opacity-50 -mt-2">Journey</span>
                      </h2>
                    </div>

                    <ElectricBorder
                      color="#ffffff"
                      speed={0.3}
                      chaos={0.05}
                      borderRadius={24}
                      className="cursor-target"
                    >
                      <div className="p-4 bg-black/40 backdrop-blur-sm rounded-[24px]">
                        <MagicBento
                          textAutoHide={false}
                          enableStars
                          enableSpotlight
                          enableBorderGlow={true}
                          enableTilt={false}
                          enableMagnetism={false}
                          clickEffect
                          spotlightRadius={400}
                          particleCount={12}
                          glowColor="132, 0, 255"
                          disableAnimations={false}
                          data={[
                            {
                              title: 'Summer Intern | Branded Buddies (2025)',
                              description: "May 2025 — July 2025\n\nEngineered a high-traffic travel ecosystem with Custom PHP for complex booking logic. Architected responsive themes and Integrated REST APIs to reduce third-party friction. Deployed secure authentication and Real-time Sync for 100% booking accuracy.",
                              label: 'Experience'
                            },
                            {
                              title: 'Web Developer | DAO Community (2025 - Present)',
                              description: "Aug 2025 — Present\n\nLed end-to-end development of the official platform and a Scalable Digital Foundation. Coordinated technical summits and cross-functional sprints for Seamless Execution. Optimized digital presence focusing on Performance and modular architecture.",
                              label: 'Experience'
                            },
                            {
                              title: 'Campus Ambassador | myCaptain (2026 - Present)',
                              description: "Feb 2026 — Present\n\nStrategized campus outreach, significantly Increasing Engagement and brand awareness. Leveraged networking to act as a Strategic Bridge between the organization and the student body.",
                              label: 'Experience'
                            }
                          ]}
                        />
                      </div>
                    </ElectricBorder>
                  </div>
                </motion.div>
              </div>
            </section>

            {/* Technical Skills Section */}
            <section id="skills" className="relative py-32 bg-black overflow-hidden">
              {/* DotGrid Background */}
              <div className="absolute inset-0 z-0 opacity-40">
                <DotGrid
                  dotSize={13}
                  gap={19}
                  baseColor="#271E37"
                  activeColor="#5227FF"
                  proximity={250}
                  shockRadius={250}
                  shockStrength={5}
                  resistance={750}
                  returnDuration={1.5}
                />
              </div>

              <div className="relative z-10 max-w-6xl mx-auto px-6 mb-16 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <motion.span
                    className="text-[10px] uppercase tracking-[0.6em] font-bold text-white/40"
                  >
                    The Toolkit
                  </motion.span>
                  <h2 className="text-4xl md:text-6xl font-curvy font-medium tracking-tight mt-4 flex flex-col items-center">
                    <ScrambledText radius={50} duration={1} speed={0.3} scrambleChars=".:">
                      Technical
                    </ScrambledText>
                    <span className="font-italic italic opacity-50 -mt-2">Skills</span>
                  </h2>
                </motion.div>
              </div>

              <div className="relative z-10">
                <div className="h-[600px] w-full max-w-4xl mx-auto px-4 no-scrollbar">
                  <ScrollStack
                    className="no-scrollbar"
                    itemDistance={100}
                    itemScale={0.05}
                    itemStackDistance={20}
                    stackPosition="25%"
                    baseScale={0.9}
                    blurAmount={2}
                    rotationAmount={2}
                  >
                    <ScrollStackItem>
                      <div className="text-center">
                        <h3 className="text-xl font-bold mb-4 text-white/80">Languages</h3>
                        <div className="flex flex-wrap justify-center gap-4">
                          <SiCplusplus size={32} color="#00599C" title="C/C++" />
                          <SiOpenjdk size={32} color="#007396" title="Java" />
                          <SiJavascript size={32} color="#F7DF1E" title="JavaScript" />
                          <SiTypescript size={32} color="#3178C6" title="TypeScript" />
                          <SiPython size={32} color="#3776AB" title="Python" />
                          <SiR size={32} color="#276DC3" title="R" />
                        </div>
                      </div>
                    </ScrollStackItem>

                    <ScrollStackItem>
                      <div className="text-center">
                        <h3 className="text-xl font-bold mb-4 text-white/80">Web & Databases</h3>
                        <div className="flex flex-wrap justify-center gap-4">
                          <SiHtml5 size={32} color="#E34F26" title="HTML5" />
                          <SiCss size={32} color="#1572B6" title="CSS3" />
                          <SiPostgresql size={32} color="#4169E1" title="PostgreSQL" />
                          <SiMongodb size={32} color="#47A248" title="MongoDB" />
                          <SiWordpress size={32} color="#21759B" title="WordPress" />
                        </div>
                      </div>
                    </ScrollStackItem>

                    <ScrollStackItem>
                      <div className="text-center">
                        <h3 className="text-xl font-bold mb-4 text-white/80">Frameworks</h3>
                        <div className="flex flex-wrap justify-center gap-4">
                          <SiReact size={32} color="#61DAFB" title="React.js" />
                          <SiNodedotjs size={32} color="#339933" title="Node.js" />
                          <SiExpress size={32} color="#FFFFFF" title="Express.js" />
                          <SiTailwindcss size={32} color="#06B6D4" title="Tailwind CSS" />
                          <SiPrisma size={32} color="#2D3748" title="Prisma" />
                        </div>
                      </div>
                    </ScrollStackItem>

                    <ScrollStackItem>
                      <div className="text-center">
                        <h3 className="text-xl font-bold mb-4 text-white/80">Tools & DevOps</h3>
                        <div className="flex flex-wrap justify-center gap-4">
                          <SiGit size={32} color="#F05032" title="Git" />
                          <SiDocker size={32} color="#2496ED" title="Docker" />
                          <SiPostman size={32} color="#FF6C37" title="Postman" />
                          <SiGooglecolab size={32} color="#F9AB00" title="Google Colab" />
                        </div>
                      </div>
                    </ScrollStackItem>

                    <ScrollStackItem>
                      <div className="text-center">
                        <h3 className="text-xl font-bold mb-4 text-white/80">Advanced Tech</h3>
                        <div className="flex flex-wrap justify-center gap-4">
                          <SiArduino size={32} color="#00979D" title="Arduino" />
                          <SiOpenai size={32} color="#412991" title="Gen AI" />
                          <SiLangchain size={32} color="#FFFFFF" title="LangChain" />
                          <div className="w-8 h-8 flex items-center justify-center text-[10px] font-bold border border-white/20 rounded">API</div>
                        </div>
                      </div>
                    </ScrollStackItem>
                  </ScrollStack>
                </div>
              </div>
            </section>

            {/* Works Section */}
            <section id="works" className="relative min-h-screen bg-black py-32 overflow-hidden">
              {/* ShapeGrid Background */}
              <div className="absolute inset-0 z-0">
                <ShapeGrid
                  speed={0.5}
                  squareSize={40}
                  direction="diagonal"
                  borderColor="#290c5a"
                  hoverFillColor="#201529"
                  shape="hexagon"
                  hoverTrailAmount={6}
                />
              </div>

              <div className="relative z-10 max-w-6xl mx-auto px-6">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  className="space-y-16"
                >
                  <div className="text-center space-y-4">
                    <motion.span className="text-[10px] uppercase tracking-[0.6em] font-bold text-white/40">
                      The Portfolio
                    </motion.span>
                    <h2 className="text-4xl md:text-6xl font-curvy font-medium tracking-tight flex flex-col items-center">
                      <ScrambledText radius={50} duration={1} speed={0.3} scrambleChars=".:">
                        Selected
                      </ScrambledText>
                      <span className="font-italic italic opacity-50 -mt-2">Works</span>
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                    <BorderGlow
                      edgeSensitivity={30}
                      glowColor="40 80 80"
                      backgroundColor="#060010"
                      borderRadius={28}
                      glowRadius={40}
                      glowIntensity={1}
                      coneSpread={25}
                      animated={false}
                      colors={['#c084fc', '#f472b6', '#38bdf8']}
                    >
                      <TweetCard
                        title="Code-Vista"
                        description="A full-stack solution for conducting seamless remote technical interviews. Code Vista integrates Stream Video & Chat SDKs with a live coding environment, allowing for real-time collaboration and instant code execution."
                        image="https://res.cloudinary.com/dhpnzrxsp/image/upload/v1775370180/Screenshot_2026-04-05_115244_gvun7w.png"
                        liveUrl="https://code-vista-frontend-3je0.onrender.com/"
                        githubUrl="https://github.com/Yes-Amrit/CODE-VISTA"
                        tags={["#InterviewTool", "#WebRTC", "#NodeJS"]}
                      />
                    </BorderGlow>

                    <BorderGlow
                      edgeSensitivity={30}
                      glowColor="40 80 80"
                      backgroundColor="#060010"
                      borderRadius={28}
                      glowRadius={40}
                      glowIntensity={1}
                      coneSpread={25}
                      animated={false}
                      colors={['#c084fc', '#f472b6', '#38bdf8']}
                    >
                      <TweetCard
                        title="Care-Connect"
                        description="A production-ready SaaS ecosystem architected to automate clinical workflows. Beyond seamless appointment scheduling, it features a Next.js and Prisma backend with integrated Stripe billing and Clerk authentication."
                        image="https://res.cloudinary.com/dhpnzrxsp/image/upload/v1775369908/Screenshot_2026-04-05_015410_zqqhds.png"
                        liveUrl="https://care-connect-009k.onrender.com/"
                        githubUrl="https://github.com/Yes-Amrit/Care-Connect"
                        tags={["#HealthTech", "#SaaS", "#NextJS"]}
                      />
                    </BorderGlow>

                    <BorderGlow
                      edgeSensitivity={30}
                      glowColor="40 80 80"
                      backgroundColor="#060010"
                      borderRadius={28}
                      glowRadius={40}
                      glowIntensity={1}
                      coneSpread={25}
                      animated={false}
                      colors={['#c084fc', '#f472b6', '#38bdf8']}
                    >
                      <TweetCard
                        title="Safety-Spot"
                        description="A high-concurrency crowdsourcing engine for real-time hazard tracking. By integrating live geolocation mapping and a seamless report-to-resolution workflow, the platform transforms individual observations into collective civic action."
                        image="https://res.cloudinary.com/dhpnzrxsp/image/upload/v1775370127/Screenshot_2026-04-05_020108_cnhgzu.png"
                        liveUrl="https://reportifyy.vercel.app/"
                        githubUrl="https://github.com/Yes-Amrit/UrbanCare-website"
                        tags={["#CivicTech", "#ReactJS", "#AI"]}
                      />
                    </BorderGlow>

                    <BorderGlow
                      edgeSensitivity={30}
                      glowColor="40 80 80"
                      backgroundColor="#060010"
                      borderRadius={28}
                      glowRadius={40}
                      glowIntensity={1}
                      coneSpread={25}
                      animated={false}
                      colors={['#c084fc', '#f472b6', '#38bdf8']}
                    >
                      <TweetCard
                        title="Care-Connect-Dashboard"
                        description="An AI-powered pharmacy help assistant designed to provide quick, accurate medication guidance and health support. Users can check prescriptions, get dosage advice, and manage their health queries. The website also allows easy appointment booking with pharmacists or healthcare professionals, ensuring convenient, personalized consultations."
                        image="https://res.cloudinary.com/dhpnzrxsp/image/upload/v1775370123/Screenshot_2026-04-05_020037_voqdm8.png"
                        liveUrl="https://quick-care-finalproj-kohl.vercel.app/"
                        githubUrl="https://github.com/Yes-Amrit/QuickCare-01"
                        tags={["#HealthTech", "#SaaS", "#NextJS"]}
                      />
                    </BorderGlow>
                  </div>
                </motion.div>
              </div>
            </section>

            {/* Testimonials Section */}
            <section id="testimonials" className="relative min-h-screen bg-black py-32 overflow-hidden">
              <div className="relative z-10 max-w-7xl mx-auto px-6">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  className="space-y-24"
                >
                  <div className="text-center space-y-4">
                    <motion.span className="text-[10px] uppercase tracking-[0.6em] font-bold text-white/40">
                      The Feedback
                    </motion.span>
                    <h2 className="text-4xl md:text-6xl font-curvy font-medium tracking-tight flex flex-col items-center">
                      <ScrambledText radius={50} duration={1} speed={0.3} scrambleChars=".:">
                        Testimonials
                      </ScrambledText>
                      <span className="font-italic italic opacity-50 -mt-2">Feedback</span>
                    </h2>
                  </div>

                  <div className="relative h-[500px] flex items-center justify-center">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 z-0">
                      <CircularText
                        text="Hear    From   People    "
                        onHover="speedUp"
                        spinDuration={34}
                        className="custom-class"
                      />
                    </div>

                    {/* Testimonial Cards Grid - Draggable Effect */}
                    <div className="absolute inset-0 pointer-events-none mt-20">
                      {TESTIMONIALS.map((t, i) => (
                        <motion.div
                          key={t.name}
                          drag
                          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                          dragElastic={0.7}
                          whileHover={{ scale: 1.02, rotate: 1 }}
                          whileDrag={{ scale: 1.1, zIndex: 50, cursor: 'grabbing' }}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            delay: i * 0.1,
                            duration: 0.8
                          }}
                          className="absolute hidden md:block pointer-events-auto"
                          style={{
                            left: `${(i % 3) * 30 + 10}%`,
                            top: `${Math.floor(i / 3) * 25 + 5}%`,
                            zIndex: 20
                          }}
                        >
                          <div className="p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl max-w-[280px] cursor-grab active:cursor-grabbing hover:border-white/30 transition-all duration-300 group shadow-xl">
                            <div className="flex items-center gap-3 mb-3">
                              <span className="text-[10px] font-bold uppercase tracking-widest text-white/60 group-hover:text-white transition-colors">
                                {t.name}
                              </span>
                            </div>
                            <p className="text-[12px] leading-relaxed text-white/40 group-hover:text-white/80 transition-colors italic">
                              "{t.text}"
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Mobile View - Simple List */}
                    <div className="md:hidden space-y-4 w-full mt-40">
                      {TESTIMONIALS.slice(0, 4).map((t) => (
                        <div key={t.name} className="p-4 bg-white/5 border border-white/10 rounded-xl">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-white/60">{t.name}</span>
                          </div>
                          <p className="text-[11px] text-white/40 italic">"{t.text}"</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="relative min-h-screen bg-black flex items-center justify-center py-32 overflow-hidden">
              {/* LaserFlow Background - Positioned specifically around the card */}
              <div className="absolute inset-0 z-0 opacity-60 ">
                <LaserFlow
                  color="#CF9EFF"
                  beamOffset={0.5}
                  wisps={0.8}
                  flowDynamics={1.2}
                />
              </div>

              <div className="relative z-10 w-full max-w-7xl px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">

                  {/* Left: Text Content */}
                  <div className="lg:col-span-3 space-y-4 text-center lg:text-left">
                    <div className="space-y-2">
                      <motion.span className="text-[10px] uppercase tracking-[0.6em] font-bold text-white/40 block">
                        The Connection
                      </motion.span>
                      <h2 className="text-4xl md:text-7xl font-curvy font-medium tracking-tight flex flex-col items-center lg:items-start">
                        <ScrambledText radius={50} duration={1} speed={0.3} scrambleChars=".:">
                          Contact
                        </ScrambledText>
                        <span className="font-italic italic opacity-50 -mt-2">Me</span>
                      </h2>
                    </div>

                    <p className="text-white/40 text-sm leading-relaxed max-w-sm mx-auto lg:mx-0">
                      I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                    </p>
                  </div>

                  {/* Middle: Contact Form */}
                  <div className="lg:col-span-6 relative">
                    <ElectricBorder
                      color="#9e8af0"
                      speed={0.4}
                      chaos={0.15}
                      borderRadius={24}
                    >
                      <ContactForm />
                    </ElectricBorder>
                  </div>

                  {/* Right: Profile Card */}
                  <div className="lg:col-span-3 flex justify-center lg:justify-end">
                    <div className="w-[200px] lg:w-[240px] shrink-0">
                      <ProfileCard
                        name="Amrit Raj"
                        title="Software Engineer"
                        handle="Yes-Amrit"
                        status="Online"
                        contactText="Contact Me"
                        avatarUrl="https://res.cloudinary.com/dhpnzrxsp/image/upload/v1775385110/dp_xdfcet.jpg"
                        showUserInfo
                        enableTilt={true}
                        enableMobileTilt
                        onContactClick={() => {
                          document.querySelector('form')?.querySelector('input')?.focus();
                          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                      />
                    </div>
                  </div>

                </div>
              </div>
            </section>

            {/* Subtle Grain Overlay */}
            <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.015] mix-blend-overlay">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <filter id="noiseFilter">
                  <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
                </filter>
                <rect width="100%" height="100%" filter="url(#noiseFilter)" />
              </svg>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @keyframes slow-loop {
          0% { transform: scale(1); }
          50% { transform: scale(1.02); }
          100% { transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
