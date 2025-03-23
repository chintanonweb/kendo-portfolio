import { Star } from "lucide-react";
import {
  Avatar,
  Card,
  CardBody,
  CardSubtitle,
  CardTitle,
  StackLayout,
} from "@progress/kendo-react-layout";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO at TechStart",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      content:
        "Working with this developer was an absolute pleasure. They delivered our project on time and exceeded all expectations.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Product Manager",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      content:
        "Exceptional technical skills combined with great communication. Our web application turned out better than we imagined.",
      rating: 5,
    },
    {
      name: "Emily Davis",
      role: "Creative Director",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      content:
        "A true professional who understands both design and development. The attention to detail was impressive.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen pt-20 pb-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <StackLayout
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Client Testimonials
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md p-6"
              >
                <div className="flex items-center gap-4 mb-4">
                  <Avatar>
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg font-semibold text-gray-900">
                      {testimonial.name}
                    </CardTitle>
                    <CardSubtitle className="text-gray-600">
                      {testimonial.role}
                    </CardSubtitle>
                  </div>
                </div>
                <CardBody className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className="text-yellow-400 fill-current"
                    />
                  ))}
                </CardBody>
                <p className="text-gray-600 italic">{testimonial.content}</p>
              </Card>
            ))}
          </div>
        </StackLayout>
      </div>
    </div>
  );
};

export default Testimonials;
