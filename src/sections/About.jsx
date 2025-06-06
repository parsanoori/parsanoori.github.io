export const About = {
  key: "about",
  title: "About Me",
  content: (
    <div className="flex flex-col items-center gap-4">
      <p className="text-sm md:text-base leading-relaxed max-w-md">
        I'm Parsa Noori, a Computer Engineering graduate who is curious about software systems.
        Since graduating, I've enjoyed exploring technologies and different aspects of life.
        Traveling across the country has helped enrich my thinking with diverse perspectives.
      </p>
      <div className="w-40 h-40 rounded-full bg-gray-300 shadow-inner flex items-center justify-center overflow-hidden">
        <img src="/assets/profile.jpg" alt="Parsa Noori" className="w-full h-full object-cover" />
      </div>
    </div>
  ),
};
