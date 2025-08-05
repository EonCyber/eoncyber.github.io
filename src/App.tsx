import React from 'react';
import { motion, Variants } from 'framer-motion';
import { 
  Linkedin, 
  Github, 
  Instagram, 
  Youtube,
  BookOpen,
  ExternalLink
} from 'lucide-react';

interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
  color: string;
  hoverColor: string;
}

function App() {
  const socialLinks: SocialLink[] = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/ian-vieira-salgado',
      icon: <Linkedin className="w-6 h-6" />,
      color: 'bg-blue-600',
      hoverColor: 'hover:bg-blue-700'
    },
    {
      name: 'Substack',
      url: 'https://stackinteligente.substack.com/',
      icon: <BookOpen className="w-6 h-6" />,
      color: 'bg-orange-500',
      hoverColor: 'hover:bg-orange-600'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/EonCyber',
      icon: <Github className="w-6 h-6" />,
      color: 'bg-gray-800',
      hoverColor: 'hover:bg-gray-900'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/ianzvieira',
      icon: <Instagram className="w-6 h-6" />,
      color: 'bg-gradient-to-r from-purple-500 to-pink-500',
      hoverColor: 'hover:from-purple-600 hover:to-pink-600'
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com/@eonkaivr',
      icon: <Youtube className="w-6 h-6" />,
      color: 'bg-red-600',
      hoverColor: 'hover:bg-red-700'
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 200
      }
    }
  };

  const floatingVariants: Variants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut" 
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#393be5] to-[#1e1b4b] relative overflow-hidden px-4 py-6 sm:px-6 sm:py-8">
      {/* Triangular geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large triangle - top left */}
        <div 
          className="absolute -top-20 -left-20 w-0 h-0 opacity-10"
          style={{
            borderLeft: '200px solid transparent',
            borderRight: '200px solid transparent',
            borderBottom: '300px solid #5b5ff5',
            transform: 'rotate(-45deg)'
          }}
        />
        
        {/* Medium triangle - top right */}
        <div 
          className="absolute -top-10 -right-16 w-0 h-0 opacity-15"
          style={{
            borderLeft: '120px solid transparent',
            borderRight: '120px solid transparent',
            borderBottom: '180px solid #7c3aed',
            transform: 'rotate(30deg)'
          }}
        />
        
        {/* Large triangle - bottom left */}
        <div 
          className="absolute -bottom-32 -left-24 w-0 h-0 opacity-12"
          style={{
            borderLeft: '250px solid transparent',
            borderRight: '250px solid transparent',
            borderBottom: '350px solid #4338ca',
            transform: 'rotate(15deg)'
          }}
        />
        
        {/* Small triangle - middle right */}
        <div 
          className="absolute top-1/3 -right-8 w-0 h-0 opacity-20"
          style={{
            borderLeft: '80px solid transparent',
            borderRight: '80px solid transparent',
            borderBottom: '120px solid #6366f1',
            transform: 'rotate(-60deg)'
          }}
        />
        
        {/* Medium triangle - bottom right */}
        <div 
          className="absolute -bottom-16 -right-20 w-0 h-0 opacity-8"
          style={{
            borderLeft: '150px solid transparent',
            borderRight: '150px solid transparent',
            borderBottom: '220px solid #312e81',
            transform: 'rotate(45deg)'
          }}
        />
        
        {/* Small accent triangle - top center */}
        <div 
          className="absolute -top-8 left-1/2 w-0 h-0 opacity-25"
          style={{
            borderLeft: '60px solid transparent',
            borderRight: '60px solid transparent',
            borderBottom: '90px solid #8b5cf6',
            transform: 'rotate(90deg) translateX(-50%)'
          }}
        />
      </div>

      {/* Animated background elements */}
      <motion.div 
        className="absolute top-10 left-4 w-32 h-32 sm:top-20 sm:left-20 sm:w-72 sm:h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
        variants={floatingVariants}
        animate="animate"
      />
      <motion.div 
        className="absolute top-20 right-4 w-32 h-32 sm:top-40 sm:right-20 sm:w-72 sm:h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 2 }}
      />
      <motion.div 
        className="absolute -bottom-4 left-1/2 w-32 h-32 sm:-bottom-8 sm:w-72 sm:h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 4 }}
      />

      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <motion.div
          className="w-full max-w-sm sm:max-w-6xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Desktop layout: side by side */}
          <div className="sm:flex sm:items-center sm:justify-center sm:gap-12 lg:gap-16">
            {/* Profile section */}
            <motion.div 
              className="text-center mb-6 sm:mb-0 sm:text-left sm:flex-shrink-0"
              variants={itemVariants}
            >
              <motion.div 
                className="w-20 h-20 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-full mx-auto sm:mx-0 mb-3 sm:mb-6 flex items-center justify-center shadow-2xl bg-gradient-to-r from-blue-400 to-purple-500"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
              >
                <img 
                  src="/IMG_5805.jpg" 
                  alt="Ian is smiling and looking at a laptop. Wearing a black turtleneck." 
                  className="w-full h-full rounded-full object-cover"
                />
              </motion.div>
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-4">Ian V. Salgado</h1>
              <p className="text-gray-300 text-base sm:text-xl lg:text-2xl mb-2 sm:mb-4">
                Fullstack Developer • LLM Educator • Creator
              </p>
              <p className="text-gray-400 text-xs sm:text-base lg:text-lg max-w-xs sm:max-w-sm mx-auto sm:mx-0 px-2 sm:px-0">
                Conecte-se comigo nos meus canais!
              </p>
            </motion.div>

            {/* Social links */}
            <motion.div 
              className="space-y-3 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:gap-6 sm:flex-1 sm:max-w-lg"
              variants={containerVariants}
            >
              {socialLinks.map((link, _) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full ${link.color} ${link.hoverColor} text-white rounded-xl sm:rounded-2xl p-3 sm:p-4 sm:aspect-square flex items-center justify-between sm:justify-center sm:flex-col transition-all duration-300 shadow-lg backdrop-blur-sm bg-opacity-90 group border border-transparent hover:border-gradient-to-r hover:from-cyan-400 hover:via-purple-500 hover:to-pink-500 hover:shadow-[0_0_20px_rgba(139,92,246,0.6)] relative overflow-hidden`}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.2,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.98, transition: { duration: 0.2 } }}
                >
                  {/* Retro gradient border overlay */}
                  <div className="absolute inset-0 rounded-xl sm:rounded-2xl p-[1px] bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className={`w-full h-full ${link.color} rounded-xl sm:rounded-2xl`}></div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10 flex items-center justify-between w-full sm:flex-col sm:justify-center sm:text-center sm:space-y-2">
                  <div className="flex items-center space-x-3 sm:space-x-0 sm:flex-col sm:space-y-2">
                    <div className="p-1.5 sm:p-3 bg-white bg-opacity-20 rounded-lg sm:rounded-xl">
                      {link.icon}
                    </div>
                    <span className="font-semibold text-base sm:text-lg sm:text-center">{link.name}</span>
                  </div>
                  <motion.div
                    className="opacity-70 group-hover:opacity-100 transition-opacity sm:hidden"
                    whileHover={{ x: 5 }}
                  >
                    <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.div>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Footer */}
          <motion.div 
            className="text-center mt-6 sm:mt-12 text-gray-400 text-xs sm:text-sm"
            variants={itemVariants}
          >
            <p>© 2025 • Vibe coded ⚡️</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default App;