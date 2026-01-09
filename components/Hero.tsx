import { ArrowRight, Command } from "lucide-react";
import type React from "react";

const Hero: React.FC = () => {
  return (
    <section
      id="overview"
      className="relative overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-32"
    >
      {/* Background Grids */}
      <div className="bg-grid-pattern pointer-events-none absolute inset-0 z-0 bg-size-[40px_40px] opacity-20"></div>
      <div className="to-tech-black pointer-events-none absolute inset-0 z-0 bg-linear-to-b from-transparent via-transparent"></div>

      {/* Glow Effect */}
      <div className="bg-tech-green/5 pointer-events-none absolute top-1/4 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full blur-[120px]"></div>

      <div className="relative z-10 container mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-20">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="border-tech-border bg-tech-card text-tech-green mb-6 inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-xs">
              <span className="bg-tech-green h-2 w-2 animate-pulse rounded-full"></span>
              STATUS CODE 200 OK
            </div>

            <h1 className="mb-6 text-5xl leading-[1.1] font-bold tracking-tight text-white lg:text-7xl">
              Default &nbsp;
              <span className="from-tech-green bg-linear-to-r to-emerald-600 bg-clip-text text-transparent">
                Index_
              </span>
            </h1>

            <p className="mx-auto mb-8 max-w-xl text-lg leading-relaxed text-gray-400 lg:mx-0">
              Your container environment is ready. <br /> High-performance
              architecture meets scalable infrastructure. Access your default
              storage and replace this file to get started.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
              <a
                href="#features"
                className="group flex w-full items-center justify-center gap-2 rounded bg-white px-8 py-3 font-semibold text-black transition-colors hover:bg-gray-200 sm:w-auto"
              >
                Features
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#status"
                className="border-tech-border bg-tech-card hover:border-tech-green flex w-full items-center justify-center gap-2 rounded border px-8 py-3 font-mono text-sm text-gray-300 transition-all hover:text-white sm:w-auto"
              >
                <Command className="h-4 w-4" />
                System Status
              </a>
            </div>
          </div>

          {/* Visual/Graphic - Mock Terminal */}
          <div className="w-full max-w-lg flex-1 lg:max-w-xl">
            <div className="bg-tech-card border-tech-border shadow-tech-green/10 relative overflow-hidden rounded-lg border shadow-2xl">
              <div className="bg-tech-black border-tech-border flex items-center gap-1.5 border-b px-4 py-3">
                <div className="h-3 w-3 rounded-full bg-red-500/50"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500/50"></div>
                <div className="h-3 w-3 rounded-full bg-green-500/50"></div>
                <div className="ml-auto font-mono text-xs text-gray-600">
                  bash — 80x24
                </div>
              </div>
              <div className="h-[320px] space-y-2 overflow-hidden p-6 font-mono text-sm">
                <div className="flex gap-2">
                  <span className="text-tech-green">
                    nginx@default-index:~$
                  </span>
                  <span className="text-gray-300">docker ps</span>
                </div>
                <div className="mt-2 text-xs text-gray-500">
                  CONTAINER ID IMAGE COMMAND STATUS PORTS
                </div>
                <div className="text-xs text-gray-300">
                  8f3a2b1c4d5e yobasystems/alpine-nginx:latest "nginx" Up 2
                  minutes 0.0.0.0:80-{">"}80/tcp
                </div>

                <div className="mt-4 flex gap-2">
                  <span className="text-tech-green">
                    nginx@default-index:~$
                  </span>
                  <span className="text-gray-300">./check-status.sh</span>
                </div>
                <div className="mt-2 text-xs text-gray-400">
                  [INFO] Initializing diagnostics...
                  <br />
                  [INFO] CPU Load: <span className="text-tech-green">12%</span>
                  <br />
                  [INFO] Memory Usage:{" "}
                  <span className="text-tech-green">1.2GB / 8GB</span>
                  <br />
                  [OK] Database Connection
                  <br />
                  [OK] Cache Layer
                  <br />
                  <span className="text-tech-green font-bold">
                    System Ready.
                  </span>
                </div>

                <div className="mt-4 flex animate-pulse gap-2">
                  <span className="text-tech-green">
                    nginx@default-index:~$
                  </span>
                  <span className="bg-tech-green block h-4 w-2"></span>
                </div>
              </div>

              {/* Decorative gradient overlay */}
              <div className="from-tech-card pointer-events-none absolute inset-0 bg-linear-to-t via-transparent to-transparent opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
