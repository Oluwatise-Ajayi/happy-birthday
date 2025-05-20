import { useState, useEffect } from 'react';
import { MantineProvider, Button } from '@mantine/core';
import { AnimatePresence, motion } from 'framer-motion';
import { IconArrowLeft, IconArrowRight, IconMusic, IconMusicOff } from '@tabler/icons-react';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';
import Page5 from './pages/Page5';
import Page6 from './pages/Page6';
import Page7 from './pages/Page7';
import Page8 from './pages/Page8';
import Page9 from './pages/Page9';
import Page10 from './pages/Page10';
import Page11 from './pages/Page11';
import Page12 from './pages/Page12';
import Page13 from './pages/Page13';
import Page14 from './pages/Page14';
import Page15 from './pages/Page15';
import Page16 from './pages/Page16';
import Page17 from './pages/Page17';
import Page18 from './pages/Page18';
import Page19 from './pages/Page19';
import Page20 from './pages/Page20';
import Page21 from './pages/Page21';
import Page22 from './pages/Page22';
import Page23 from './pages/Page23';
import Page24 from './pages/Page24';
import Page25 from './pages/Page25';
import './App.css';

const pages = [
  Page1, Page2, Page3, Page4, Page5, Page6, Page7, Page8, Page9, Page10,
  Page11, Page12, Page13, Page14, Page15, Page16, Page17, Page18, Page19, Page20,
  Page21, Page22, Page23, Page24, Page25
];


type BalloonProps = {
  x: number;
  size: number;
  color: string;
  duration: number;
  delay: number;
};

function StarsBackground() {
  const stars = Array.from({ length: 40 }).map(() => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 1 + Math.random() * 2.5,
    delay: Math.random() * 5,
  }));
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none', background: 'rgba(0, 0, 0, 0.05)' }} aria-hidden>
      {stars.map((star, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0.7 }}
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2.5 + Math.random() * 2, repeat: Infinity, delay: star.delay }}
          style={{
            position: 'absolute',
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
            borderRadius: '50%',
            background: '#ffd700',
            boxShadow: `0 0 6px 2px rgba(255, 215, 0, 0.5)`,
          }}
        />
      ))}
    </div>
  );
}

function Balloon({ x, size, color, duration, delay }: BalloonProps) {
  return (
    <motion.div
      initial={{ y: '100vh', opacity: 0 }}
      animate={{ y: '-10vh', opacity: 1 }}
      transition={{ duration, delay, repeat: Infinity, repeatType: 'loop', ease: 'linear' }}
      style={{
        position: 'absolute',
        left: `${x}%`,
        width: size,
        height: size * 1.2,
        zIndex: 1,
        pointerEvents: 'none',
      }}
    >
      <svg width={size} height={size * 1.2} viewBox={`0 0 40 48`} style={{ display: 'block' }}>
        <ellipse cx="20" cy="20" rx="18" ry="20" fill={color} />
        <rect x="18" y="40" width="4" height="8" rx="2" fill="#aaa" />
      </svg>
    </motion.div>
  );
}

function BalloonBackground() {
  const balloons = [
    { x: 10, size: 48, color: '#ffb6b9', duration: 12, delay: 0 },
    { x: 25, size: 60, color: '#fcd5ce', duration: 14, delay: 2 },
    { x: 40, size: 40, color: '#b5ead7', duration: 10, delay: 1 },
    { x: 60, size: 56, color: '#c7ceea', duration: 13, delay: 3 },
    { x: 75, size: 52, color: '#ffdac1', duration: 11, delay: 2.5 },
    { x: 90, size: 44, color: '#e2f0cb', duration: 15, delay: 1.5 },
  ];
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 1, overflow: 'hidden', pointerEvents: 'none' }} aria-hidden>
      {balloons.map((b, i) => (
        <Balloon key={i} {...b} />
      ))}
    </div>
  );
}

// Firework burst SVG paths/colors
const fireworkColors = ['#ffb6b9', '#fcd5ce', '#b5ead7', '#c7ceea', '#ffdac1', '#e2f0cb', '#ffe066', '#ff6f61'];

function Firework({ x, y, color, size }: { x: number; y: number; color: string; size: number }) {
  return (
    <motion.svg
      style={{ position: 'absolute', left: x, top: y, pointerEvents: 'none', zIndex: 2 }}
      width={size}
      height={size}
      viewBox="0 0 100 100"
      initial={{ opacity: 1, scale: 0.5 }}
      animate={{ opacity: [1, 1, 0], scale: [0.5, 1.2, 1.5] }}
      transition={{ duration: 1.2 }}
    >
      {[...Array(8)].map((_, i) => (
        <motion.line
          key={i}
          x1="50"
          y1="50"
          x2={50 + 40 * Math.cos((i * Math.PI) / 4)}
          y2={50 + 40 * Math.sin((i * Math.PI) / 4)}
          stroke={color}
          strokeWidth="4"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 1.2, delay: 0.1 * i }}
        />
      ))}
    </motion.svg>
  );
}

type FireworkData = { id: number; x: number; y: number; color: string; size: number };
function FireworksBackground() {
  const [fireworks, setFireworks] = useState<FireworkData[]>([]);
  useEffect(() => {
    const interval = setInterval(() => {
      setFireworks((fwks) => [
        ...fwks,
        {
          id: Math.random(),
          x: Math.random() * window.innerWidth * 0.8 + window.innerWidth * 0.1,
          y: Math.random() * window.innerHeight * 0.4 + window.innerHeight * 0.1,
          color: fireworkColors[Math.floor(Math.random() * fireworkColors.length)],
          size: 80 + Math.random() * 60,
        },
      ]);
    }, 1800);
    return () => clearInterval(interval);
  }, []);
  // Remove fireworks after animation
  useEffect(() => {
    if (fireworks.length > 0) {
      const timeout = setTimeout(() => {
        setFireworks((fwks) => fwks.slice(1));
      }, 1400);
      return () => clearTimeout(timeout);
    }
  }, [fireworks]);
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 2, pointerEvents: 'none' }} aria-hidden>
      {fireworks.map((fwk) => (
        <Firework key={fwk.id} {...fwk} />
      ))}
    </div>
  );
}

function App() {
  const [page, setPage] = useState(0);
  const [musicPlaying, setMusicPlaying] = useState(false);
  const CurrentPage = pages[page];

  // Music controls
  const handleMusicToggle = () => {
    const audio = document.getElementById('birthday-audio') as HTMLAudioElement | null;
    if (!audio) return;
    if (musicPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setMusicPlaying(!musicPlaying);
  };

  return (
    <MantineProvider withCssVariables>
      <StarsBackground />
      <FireworksBackground />
      <BalloonBackground />
      {/* Navigation buttons */}
      <Button
        leftSection={<IconArrowLeft size={20} />}
        variant="light"
        size="lg"
        aria-label="Previous page"
        style={{ position: 'fixed', left: 16, top: '50%', transform: 'translateY(-50%)', zIndex: 20, opacity: page === 0 ? 0.3 : 0.6 }}
        onClick={() => setPage((p) => Math.max(0, p - 1))}
        disabled={page === 0}
      >
        Prev
      </Button>
      <Button
        rightSection={<IconArrowRight size={20} />}
        variant="light"
        size="lg"
        aria-label="Next page"
        style={{ position: 'fixed', right: 16, top: '50%', transform: 'translateY(-50%)', zIndex: 20, opacity: page === pages.length - 1 ? 0.3 : 0.6 }}
        onClick={() => setPage((p) => Math.min(p + 1, pages.length - 1))}
        disabled={page === pages.length - 1}
      >
        Next
      </Button>
      {/* Background music controls */}
      <div style={{ position: 'fixed', left: 0, right: 0, bottom: 24, zIndex: 30, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Button
          variant={musicPlaying ? 'filled' : 'outline'}
          color="pink"
          size="md"
          leftSection={musicPlaying ? <IconMusic size={20} /> : <IconMusicOff size={20} />}
          onClick={handleMusicToggle}
          style={{ marginRight: 12 }}
        >
          {musicPlaying ? 'Pause Music' : 'Play Music'}
        </Button>
        <audio id="birthday-audio" src="/music/birthday.mp3" loop style={{ display: 'none' }} />
      </div>
      {/* Main content with transitions */}
      <div style={{ position: 'relative', zIndex: 1, minHeight: '100vh', background: 'transparent' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.5 }}
            style={{ height: '100vh' }}
          >
            <CurrentPage />
          </motion.div>
        </AnimatePresence>
      </div>
    </MantineProvider>
  );
}

export default App;
