import { ExternalLink, Github } from 'lucide-react';
import { Fade } from '@progress/kendo-react-animation';
import { Card, CardBody, CardSubtitle, CardTitle } from '@progress/kendo-react-layout';

const Projects = () => {
  const projects = [
    {
      title: 'Ng-Ecommerce',
      description: 'A full-featured e-commerce platform built with Angular and Node.js',
      image: 'https://chintanonweb.github.io/images/portfolio/ng-ecommerce.png',
      tags: ['Angular', 'Node.js', 'Bootstrap', 'TypeScript'],
      liveUrl: 'https://ng-ecommerce-d1a5c.web.app/',
      githubUrl: 'https://github.com/chintanonweb/',
    },
    {
      title: 'Ng-Dashboard',
      description: 'A beautiful dashboard with detailed animations',
      image: 'https://chintanonweb.github.io/images/portfolio/ng-dashboard.png',
      tags: ['Angular', 'Bootstrap', 'Maps', 'TypeScript'],
      liveUrl: 'https://ng-dashboard1.web.app/',
      githubUrl: 'https://github.com/chintanonweb/',
    },
    {
      title: 'Gokuldham ',
      description: 'Residential Website with responsive and adaptive design for Gokuldham Project',
      image: 'https://chintanonweb.github.io/images/portfolio/gokuldham.png',
      tags: ['Html', 'Css', 'Javascript', 'Bootstrap'],
      liveUrl: 'https://chintanonweb.github.io/gokuldham/',
      githubUrl: 'https://github.com/chintanonweb/',
    },
  ];

  return (
    <div className="min-h-screen pt-20 pb-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Fade
          
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-8">My Projects</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <div className="relative h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className="p-6">
                  <CardTitle className="text-xl font-semibold text-gray-900 mb-2">{project.title}</CardTitle>
                  <CardSubtitle className="text-gray-600 mb-4">{project.description}</CardSubtitle>
                  <CardBody className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </CardBody>
                  <div className="flex gap-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 hover:text-gray-700"
                    >
                      <Github size={16} />
                      Source Code
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Projects;