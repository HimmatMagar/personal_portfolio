import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Database, Brain, Cloud } from "lucide-react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      icon: Brain,
      title: "Machine Learning",
      skills: ["TensorFlow", "PyTorch", "scikit-learn", "XGBoost", "Keras", "JAX"],
    },
    {
      icon: Code2,
      title: "Programming",
      skills: ["Python", "R", "Julia", "C++", "SQL", "JavaScript"],
    },
    {
      icon: Database,
      title: "Data & Tools",
      skills: ["Pandas", "NumPy", "Spark", "Airflow", "MLflow", "DVC"],
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      skills: ["AWS", "GCP", "Docker", "Kubernetes", "CI/CD", "Terraform"],
    },
  ];

  return (
    <section id="skills" className="min-h-screen py-20 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for building and deploying machine learning solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <category.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold">{category.title}</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, delay: index * 0.15 + skillIndex * 0.05 }}
                    className="px-4 py-3 bg-muted/50 rounded-lg border border-border hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                  >
                    <span className="text-foreground font-medium">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 bg-gradient-to-br from-card to-card/50 rounded-2xl p-8 border border-border"
        >
          <h3 className="text-2xl font-semibold mb-6 text-center">Research Interests</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              "Deep Learning",
              "Computer Vision",
              "Natural Language Processing",
              "Reinforcement Learning",
              "Neural Architecture Search",
              "Explainable AI",
              "Federated Learning",
              "AutoML",
            ].map((interest, index) => (
              <motion.span
                key={interest}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.05 }}
                className="px-5 py-2 bg-primary/10 text-primary rounded-full border border-primary/20 hover:bg-primary/20 transition-colors duration-300"
              >
                {interest}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
