import { Code, Database, Globe, Palette } from 'lucide-react';
import { Fade } from '@progress/kendo-react-animation';
import { Card, CardBody, CardHeader, CardTitle } from '@progress/kendo-react-layout';

const About = () => {
  const skills = [
    {
      category: 'Frontend',
      icon: <Code size={24} />,
      items: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
      color: 'from-blue-500 to-cyan-400',
    },
    {
      category: 'Backend',
      icon: <Database size={24} />,
      items: ['Node.js', 'Python', 'PostgreSQL', 'Redis'],
      color: 'from-green-500 to-emerald-400',
    },
    {
      category: 'DevOps',
      icon: <Globe size={24} />,
      items: ['Docker', 'AWS', 'CI/CD', 'Kubernetes'],
      color: 'from-orange-500 to-amber-400',
    },
    {
      category: 'Design',
      icon: <Palette size={24} />,
      items: ['Figma', 'Adobe XD', 'UI/UX', 'Prototyping'],
      color: 'from-purple-500 to-pink-400',
    },
  ];

  const experiences = [
    {
      company: 'Debutify',
      role: 'Senior Full Stack Developer',
      period: '2025 - Present',
      description: 'Leading development of enterprise web applications using modern technologies.',
    },
    {
      company: 'Albiorix Technology Pvt. Ltd',
      role: 'Software Engineer',
      period: '2022 - 2025',
      description: 'Developed responsive web applications and improved user experiences.',
    },
    {
      company: 'Shree Hari Infotech',
      role: 'Software Engineer',
      period: '2019 - 2022',
      description: 'Built and maintained various web applications and services.',
    },
  ];

  return (
    <div className="min-h-screen pt-20 pb-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Fade
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-8">About Me</h1>
          <p className="text-xl text-gray-600 mb-12">
            I'm a passionate full-stack developer with over 5 years of experience in building
            modern web applications. I have an interest in creating something new and imaginary. I choose to be a web designer to bring my ideas to life.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {skills.map((skill) => (
              <Card
                key={skill.category}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <div className={`bg-gradient-to-r ${skill.color} p-4 text-white`}>
                  <CardHeader className="flex items-center gap-2">
                    {skill.icon}
                    <CardTitle className="text-lg font-semibold">{skill.category}</CardTitle>
                  </CardHeader>
                </div>
                <CardBody className="p-4">
                  <ul className="space-y-2">
                    {skill.items.map((item) => (
                      <li key={item} className="text-gray-600">
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardBody>
              </Card>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Experience</h2>
          <Card className="space-y-6">
            {experiences.map((exp) => (
              <CardBody
                key={exp.company}
                className="bg-white rounded-xl shadow-md p-6"
              >
                <h3 className="text-xl font-semibold text-gray-900">{exp.role}</h3>
                <p className="text-purple-600 font-medium">{exp.company}</p>
                <p className="text-gray-500 text-sm mb-2">{exp.period}</p>
                <p className="text-gray-600">{exp.description}</p>
              </CardBody>
            ))}
          </Card>
        </Fade>
      </div>
    </div>
  );
};

export default About;