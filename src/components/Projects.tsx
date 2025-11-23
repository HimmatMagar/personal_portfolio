import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Neural Image Classifier",
      description: "Deep learning model achieving 98% accuracy on complex image classification tasks using CNNs and transfer learning",
      tags: ["PyTorch", "Computer Vision", "ResNet"],
      github: "#",
      demo: "#",
    },
    {
      title: "NLP Sentiment Analyzer",
      description: "Real-time sentiment analysis system processing millions of social media posts with transformer models",
      tags: ["BERT", "NLP", "FastAPI"],
      github: "#",
      demo: "#",
    },
    {
      title: "Predictive Analytics Pipeline",
      description: "End-to-end ML pipeline for time series forecasting with automated feature engineering and model selection",
      tags: ["scikit-learn", "MLflow", "Docker"],
      github: "#",
      demo: "#",
    },
    {
      title: "Recommendation Engine",
      description: "Collaborative filtering system serving personalized recommendations to 100K+ users with sub-second latency",
      tags: ["TensorFlow", "Redis", "Kubernetes"],
      github: "#",
      demo: "#",
    },
    {
      title: "Anomaly Detection System",
      description: "Unsupervised learning model detecting anomalies in high-dimensional data streams for fraud prevention",
      tags: ["Isolation Forest", "Spark", "Kafka"],
      github: "#",
      demo: "#",
    },
    {
      title: "Reinforcement Learning Agent",
      description: "RL agent trained to optimize complex decision-making tasks using policy gradient methods",
      tags: ["OpenAI Gym", "PPO", "PyTorch"],
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-20 px-4 bg-card/30" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of machine learning projects showcasing expertise across various domains
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card rounded-xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-300 hover:glow-primary group"
            >
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-primary/30 hover:bg-primary/10"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-primary hover:bg-primary/90"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
