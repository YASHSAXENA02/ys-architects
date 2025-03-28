interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
}

const ProcessStep = ({ number, title, description }: ProcessStepProps) => {
  return (
    <div className="flex items-start">
      <div className="flex-shrink-0 mr-6">
        <div className="w-12 h-12 rounded-full bg-[#C9A227] text-[#333333] flex items-center justify-center font-bold text-xl">
          {number}
        </div>
      </div>
      <div>
        <h3 className="font-serif text-xl font-bold mb-4 text-[#333333]">{title}</h3>
        <p className="text-[#333333]">{description}</p>
      </div>
    </div>
  );
};

export default ProcessStep;
