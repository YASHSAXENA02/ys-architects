

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <div className="bg-white p-8 rounded-sm shadow-md">
      <div className="flex text-accent-custom mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <i key={i} className="fas fa-star"></i>
        ))}
      </div>
      <blockquote className="mb-6 text-gray-700 italic">
        "{testimonial.content}"
      </blockquote>
      <div className="flex items-center">
        <div>
          <h4 className="font-bold">{testimonial.name}</h4>
          <p className="text-gray-600 text-sm">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
