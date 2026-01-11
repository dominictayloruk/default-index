import type React from "react";
import { FEATURES } from "../constants";

const Features: React.FC = () => {
  return (
    <section
      id="features"
      className="bg-tech-black border-tech-border relative border-t py-20"
    >
      <div className="container mx-auto max-w-7xl px-6">
        <div className="mb-16 flex flex-col items-end justify-between gap-6 md:flex-row">
          <div className="max-w-2xl">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Engineered for{" "}
              <span className="text-tech-green">Performance</span>
            </h2>
            <p className="text-gray-400">
              The default configuration comes pre-loaded with essential tools
              for monitoring, security, and scalability.
            </p>
          </div>
          <a
            href="#modules"
            className="border-tech-green hover:text-tech-green border-b pb-1 font-mono text-sm text-white transition-colors"
          >
            VIEW ALL MODULES &rarr;
          </a>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature) => (
            <div
              key={feature.id}
              className="bg-tech-card border-tech-border hover:border-tech-green group rounded-lg border p-6 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="bg-tech-accent/30 group-hover:bg-tech-green text-tech-green group-hover:text-tech-black mb-6 flex h-12 w-12 items-center justify-center rounded-lg transition-all">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-white">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
