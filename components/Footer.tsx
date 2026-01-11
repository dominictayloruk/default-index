import { Github, Linkedin, Terminal, Twitter } from "lucide-react";
import type React from "react";
import { APP_NAME } from "../constants";

const Footer: React.FC = () => {
  return (
    <footer className="bg-tech-black border-tech-border border-t pt-20 pb-10">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="col-span-1 md:col-span-1">
            <a href="#top" className="mb-6 flex items-center gap-2">
              <div className="bg-tech-green/10 border-tech-green/20 group-hover:border-tech-green rounded border p-2 transition-colors">
                <Terminal className="text-tech-green h-5 w-5" />
              </div>
              <span className="font-mono text-xl font-bold text-white">
                {APP_NAME}
              </span>
            </a>
            <p className="text-sm leading-relaxed text-gray-500">
              High-performance architecture meets scalable infrastructure.
              Access your default storage and replace this file to get started.
            </p>
          </div>

          <div>
            <h4 className="mb-6 font-bold text-white">Platform</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li>
                <a
                  href="#documentation"
                  className="hover:text-tech-green transition-colors"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="#api"
                  className="hover:text-tech-green transition-colors"
                >
                  API Reference
                </a>
              </li>
              <li>
                <a
                  href="#status"
                  className="hover:text-tech-green transition-colors"
                >
                  Status
                </a>
              </li>
              <li>
                <a
                  href="#cli"
                  className="hover:text-tech-green transition-colors"
                >
                  CLI Tools
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 font-bold text-white">Resources</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li>
                <a
                  href="#github"
                  className="hover:text-tech-green transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="#gitlab"
                  className="hover:text-tech-green transition-colors"
                >
                  Gitlab
                </a>
              </li>
              <li>
                <a
                  href="#docker"
                  className="hover:text-tech-green transition-colors"
                >
                  Docker Hub
                </a>
              </li>
              <li>
                <a
                  href="#quay"
                  className="hover:text-tech-green transition-colors"
                >
                  Quay.io
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 font-bold text-white">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/yobasystems"
                className="bg-tech-card border-tech-border hover:border-tech-green flex h-10 w-10 items-center justify-center rounded-full border text-gray-400 transition-all hover:text-white"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://x.com/yobasystems"
                className="bg-tech-card border-tech-border hover:border-tech-green flex h-10 w-10 items-center justify-center rounded-full border text-gray-400 transition-all hover:text-white"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/yoba-systems/"
                className="bg-tech-card border-tech-border hover:border-tech-green flex h-10 w-10 items-center justify-center rounded-full border text-gray-400 transition-all hover:text-white"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            <div className="border-tech-border bg-tech-card text-tech-green mt-6 mb-6 inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-xs">
              <span className="bg-tech-green h-2 w-2 animate-pulse rounded-full"></span>
              STATUS CODE 200 OK
            </div>
          </div>
        </div>

        <div className="border-tech-border flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} {APP_NAME}. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-600">
            <a href="#privacy" className="hover:text-gray-400">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-gray-400">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
