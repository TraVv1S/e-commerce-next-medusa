'use client'
import { motion, easeIn } from 'framer-motion'

const Hero = () => {
  
  return (
    <section className="bg-white dark:bg-gray-900">
    <div className="grid max-w-screen-xl px-4 mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12">
        <motion.div className="mr-auto place-self-center lg:col-span-7"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: [0, 0.71, 0.2, 1.01]
          }}
        >
            <h1 className="max-w-2xl mb-8 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-5xl dark:text-white">Кроссовки оригинального качества с гарантией возврата</h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Бесплатно доставим на примерку 2 размера</p>
            <a href="/store" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-sky-800 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                В каталог
                <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </a>
            <a href="/store" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                Скидки
            </a> 
        </motion.div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            {/* <img src="https://i.postimg.cc/L6tsYP2R/removal-ai-6f6d5a30-995b-47a1-a434-1c82b24a51aa-nb-725-4-RDIPU.png" alt="mockup" />
             */}
             <motion.img src="https://i.postimg.cc/L6tsYP2R/removal-ai-6f6d5a30-995b-47a1-a434-1c82b24a51aa-nb-725-4-RDIPU.png" alt="New Balance sneakers"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.2,
                ease: [0, 0.71, 0.2, 1.01]
              }}
            />
        </div>                
    </div>
</section>
  )
}

export default Hero
