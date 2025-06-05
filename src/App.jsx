import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { About } from './sections/About'
import { Education } from './sections/Education'
import { Career } from './sections/Career'
import { Life } from './sections/Life'
import { Misc } from './sections/Misc'

const sections = [About, Education, Career, Life, Misc]

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const nextSection = () => setCurrentIndex((currentIndex + 1) % sections.length)

  // Memoize bucket positions so they don’t change on re-render
  const backgroundBuckets = useMemo(
    () =>
      Array.from({ length: 20 }).map(() => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        xTarget: Math.random() * window.innerWidth,
        yTarget: Math.random() * window.innerHeight,
      })),
    []
  )

  return (
    <div
      className="relative h-screen w-screen overflow-hidden bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white"
      onClick={nextSection}
    >
      {/* Persistent animated background buckets */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {backgroundBuckets.map((bucket, i) => (
          <motion.div
            key={i}
            className="absolute w-24 h-24 bg-blue-400 rounded-lg opacity-10"
            animate={{
              x: [0, bucket.xTarget],
              y: [0, bucket.yTarget],
              rotate: [0, 360],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              repeatType: 'mirror',
              ease: 'easeInOut',
            }}
            style={{
              top: bucket.top,
              left: bucket.left,
            }}
          />
        ))}
      </div>

      {/* Section content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={sections[currentIndex].key}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 max-w-xl w-full shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-4">{sections[currentIndex].title}</h2>
            <div className="mb-4">{sections[currentIndex].content}</div>
            <div className="mt-4 text-sm text-gray-300 italic">Click anywhere to continue...</div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

