interface WorkCardProps {
  image: string;
  title: string;
}

const WorkCard = ({ image, title }: WorkCardProps) => {
  return (
    <div className="relative w-full aspect-[4/5] rounded-[14px] z-10 overflow-hidden flex flex-col items-center justify-center shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]">
      {/* Animated blob */}
      <div className="absolute z-[1] top-1/2 left-1/2 w-[150px] h-[150px] rounded-full bg-black/20 opacity-100 blur-[12px] animate-[blob-bounce_5s_infinite_ease]" />
      
      {/* Inner card */}
      <div className="absolute top-[5px] left-[5px] right-[5px] bottom-[5px] z-[2] bg-white/95 backdrop-blur-[24px] rounded-[10px] overflow-hidden outline outline-2 outline-white flex flex-col">
        <div className="flex-1 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.03]"
          />
        </div>
        <p className="px-3 py-3 text-sm md:text-base font-semibold text-black/85 leading-snug">
          {title}
        </p>
      </div>
    </div>
  );
};

export default WorkCard;
