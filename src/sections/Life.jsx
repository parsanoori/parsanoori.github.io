import lifeSvg from './life.svg';

export const Life = {
  key: "life",
  title: "Life To Me",
  content: (
    <div className="flex flex-col items-center gap-2 text-left text-sm md:text-base">
      <img src={lifeSvg} alt="Life Philosophy Flowchart" />
    </div>
  ),
};
