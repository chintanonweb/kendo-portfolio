import { motion } from "framer-motion";
import { Github as GitHub, Linkedin, Twitter, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Card, CardBody, StackLayout } from "@progress/kendo-react-layout";
import { Button } from "@progress/kendo-react-buttons";
import { Fade } from "@progress/kendo-react-animation";

const Home = () => {
  const navigate = useNavigate();

  const socialLinks = [
    { icon: <GitHub size={24} />, href: "https://github.com/chintanonweb/", label: "GitHub" },
    {
      icon: <Linkedin size={24} />,
      href: "https://www.linkedin.com/in/chintanonweb/",
      label: "LinkedIn",
    },
    {
      icon: <Twitter size={24} />,
      href: "https://twitter.com/chintanonweb",
      label: "Twitter",
    },
    { icon: <Mail size={24} />, href: "mailto:chintandhokai97@gmail.com", label: "Email" },
  ];

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <Card
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex-1 text-center md:text-left"
          >
            <CardBody>
              <StackLayout
                className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
              >
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent animate-gradient">
                  Chintan D.
                </span>
              </StackLayout>
            </CardBody>
            <StackLayout
              className="text-xl text-gray-600 mb-8"
            >
              A passionate full-stack developer crafting beautiful and
              functional web experiences
            </StackLayout>
            <StackLayout
              className="flex flex-wrap gap-4 justify-center md:justify-start"
            >
              <Button
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                onClick={() => navigate("/projects")}
              >
                View Projects
              </Button>
              <Button
                className="px-8 py-4 border-2 border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                onClick={() => navigate("/contact")}
              >
                Contact Me
              </Button>
            </StackLayout>
            <StackLayout
              className="mt-8 flex gap-6 justify-center md:justify-start"
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-full shadow-md text-gray-600 hover:text-purple-600 transition-all duration-300"
                  whileHover={{
                    scale: 1.2,
                    rotate: 360,
                    backgroundColor: "#F3E8FF",
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.3 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </StackLayout>
          </Card>
          <StackLayout
            className="flex-1"
          >
            <StackLayout
              className="relative w-64 h-64 md:w-96 md:h-96 mx-auto animate-float"
            >
              <img
                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt="Profile"
                className="rounded-full object-cover w-full h-full shadow-2xl transition-all duration-300 hover:shadow-purple-200"
              />
              <Fade
                className="absolute inset-0 rounded-full border-4 border-purple-500/20"
              />
            </StackLayout>
          </StackLayout>
        </div>
      </div>
    </div>
  );
};

export default Home;
