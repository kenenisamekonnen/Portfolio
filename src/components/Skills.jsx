import React from 'react'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      color: 'primary',
      skills: [
        { name: 'React', url: 'https://reactjs.org', icon: 'react-icon' },
        { name: 'JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', icon: 'js-icon' },
        { name: 'HTML5', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML', icon: 'html-icon' },
        { name: 'CSS3', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS', icon: 'css-icon' },
        { name: 'Tailwind CSS', url: 'https://tailwindcss.com', icon: 'tailwind-icon' },
      ]
    },
    {
      title: 'Backend Development',
      color: 'secondary',
      skills: [
        { name: 'Node.js', url: 'https://nodejs.org', icon: 'node-icon' },
        { name: 'Express.js', url: 'https://expressjs.com', icon: 'express-icon' },
        { name: 'Python', url: 'https://python.org', icon: 'python-icon' },
        { name: 'RESTful APIs', url: 'https://restfulapi.net', icon: 'rest-icon' },
      ]
    },
    {
      title: 'Database Technologies',
      color: 'accent',
      skills: [
        { name: 'PostgreSQL', url: 'https://www.postgresql.org', icon: 'postgres-icon' },
        { name: 'MongoDB', url: 'https://www.mongodb.com', icon: 'mongo-icon' },
        { name: 'MySQL', url: 'https://www.mysql.com', icon: 'mysql-icon' },
      ]
    },
    {
      title: 'DevOps & Tools',
      color: 'primary',
      skills: [
        { name: 'Git', url: 'https://git-scm.com', icon: 'git-icon' },
        { name: 'CI/CD', url: 'https://github.com/features/actions', icon: 'cicd-icon' },
      ]
    },
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-primary)] via-[var(--color-bg)] to-[var(--color-secondary)] opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold mb-16 text-center">
          My <span className="text-[var(--color-primary)]">Skills</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} 
              className="p-8 rounded-xl bg-[var(--color-card-bg)] border border-[var(--color-card-border)] 
                       transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <h3 className={`text-2xl font-bold mb-6 text-[var(--color-${category.color})]`}>
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <a
                    key={skillIndex}
                    href={skill.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      flex items-center justify-center p-3 rounded-lg
                      bg-[var(--color-bg)] border border-[var(--color-card-border)]
                      hover:border-[var(--color-${category.color})] 
                      hover:text-[var(--color-${category.color})]
                      transform hover:-translate-y-1
                      transition-all duration-300
                      group
                    `}
                  >
                    <span className="text-sm font-medium">{skill.name}</span>
                    <svg
                      className={`w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity
                                text-[var(--color-${category.color})]`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills