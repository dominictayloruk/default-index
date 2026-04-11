import { Terminal } from "lucide-react";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    role="img"
    aria-label="GitHub"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.15-.38 6.5-1.4 6.5-7.17A5.1 5.1 0 0 0 19 4.6a4.9 4.9 0 0 0-.5-3.3s-1.3-.4-4.2 1.6a14.6 14.6 0 0 0-4.6-.3 14.6 14.6 0 0 0-4.6.3C2.3 1.3 1 1.7 1 1.7A4.9 4.9 0 0 0 .5 5s-1.4 2.3-1.4 5.3c0 5.8 3.3 6.8 6.4 7.2A4.8 4.8 0 0 0 4 20.1v4"></path>
  </svg>
);

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    role="img"
    aria-label="Twitter"
    {...props}
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    role="img"
    aria-label="LinkedIn"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);
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
                <GithubIcon className="h-5 w-5" />
              </a>
              <a
                href="https://x.com/yobasystems"
                className="bg-tech-card border-tech-border hover:border-tech-green flex h-10 w-10 items-center justify-center rounded-full border text-gray-400 transition-all hover:text-white"
              >
                <TwitterIcon className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/yoba-systems/"
                className="bg-tech-card border-tech-border hover:border-tech-green flex h-10 w-10 items-center justify-center rounded-full border text-gray-400 transition-all hover:text-white"
              >
                <LinkedinIcon className="h-5 w-5" />
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
