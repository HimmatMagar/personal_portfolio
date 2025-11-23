import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap, Award } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      icon: Briefcase,
      title: "Senior ML Engineer",
      company: "Tech Innovations Inc.",
      period: "2022 - Present",
      description: "Leading development of advanced ML models for predictive analytics",
    },
    {
      icon: GraduationCap,
      title: "Research Scientist",
      company: "AI Research Lab",
      period: "2020 - 2022",
      description: "Published papers on deep learning and neural network architectures",
    },
    {
      icon: Award,
      title: "ML Engineer",
      company: "DataTech Solutions",
      period: "2018 - 2020",
      description: "Developed and deployed ML pipelines for production environments",
    },
  ];

  return (
    <section id="about" className="min-h-screen py-20 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about transforming data into actionable insights through cutting-edge machine learning techniques
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-primary">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed">
              With over 6 years of experience in machine learning and artificial intelligence, 
              I've worked on diverse projects ranging from computer vision to natural language processing. 
              My work focuses on developing scalable ML solutions that drive real-world impact.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I'm particularly interested in deep learning, reinforcement learning, and building 
              interpretable AI systems that can be trusted in critical applications.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-card rounded-2xl p-8 border border-border"
          >
            <h3 className="text-2xl font-semibold mb-6 text-primary">Expertise</h3>
            <div className="space-y-4">
              {["Deep Learning", "Computer Vision", "NLP", "MLOps", "Data Science", "Research"].map(
                (skill, index) => (
                  <div key={skill} className="flex items-center justify-between">
                    <span className="text-foreground">{skill}</span>
                    <motion.div
                      className="h-2 bg-muted rounded-full flex-1 ml-4 overflow-hidden"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: "100%" } : { width: 0 }}
                      transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                    >
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                        initial={{ width: "0%" }}
                        animate={isInView ? { width: `${85 + index * 2}%` } : { width: "0%" }}
                        transition={{ duration: 1, delay: 0.6 + index * 0.1 }}
                      />
                    </motion.div>
                  </div>
                )
              )}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-3xl font-semibold mb-8 text-center">Experience</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:glow-primary"
              >
                <exp.icon className="w-12 h-12 text-primary mb-4" />
                <h4 className="text-xl font-semibold mb-2">{exp.title}</h4>
                <p className="text-secondary font-medium mb-2">{exp.company}</p>
                <p className="text-sm text-muted-foreground mb-3">{exp.period}</p>
                <p className="text-muted-foreground">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
