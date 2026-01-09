import { AlertTriangle, CheckCircle, XCircle } from "lucide-react";
import type React from "react";
import { SERVICE_STATS, SERVICES_STATUS } from "../constants";

const StatusDashboard: React.FC = () => {
  return (
    <section
      id="status"
      className="bg-tech-dark relative overflow-hidden py-24"
    >
      {/* Subtle background detail */}
      <div className="from-tech-card pointer-events-none absolute top-0 right-0 h-full w-1/3 bg-linear-to-l to-transparent opacity-50"></div>

      <div className="relative z-10 container mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Stats Grid */}
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-6">
              {SERVICE_STATS.map((stat, idx) => (
                <div
                  key={idx}
                  className="border-tech-border bg-tech-black/50 rounded-lg border p-6 backdrop-blur"
                >
                  <div className="mb-1 font-mono text-4xl font-bold text-white">
                    {stat.value}
                    <span className="text-tech-green text-2xl">
                      {stat.suffix}
                    </span>
                  </div>
                  <div className="text-sm font-semibold tracking-wider text-gray-500 uppercase">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="border-tech-green/30 bg-tech-green/5 mt-8 rounded-lg border p-6">
              <h4 className="text-tech-green mb-2 flex items-center gap-2 font-bold">
                <span className="relative flex h-3 w-3">
                  <span className="bg-tech-green absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
                  <span className="bg-tech-green relative inline-flex h-3 w-3 rounded-full"></span>
                </span>
                System Healthy
              </h4>
              <p className="text-sm text-gray-400">
                All core services are running within optimal parameters. No
                anomalies detected in the last 24 hours.
              </p>
            </div>
          </div>

          {/* Service List */}
          <div className="order-1 lg:order-2">
            <h2 className="mb-6 text-3xl font-bold text-white">
              Live System Status
            </h2>
            <p className="mb-8 text-gray-400">
              Real-time monitoring of all container services and networking
              components.
            </p>

            <div className="space-y-4">
              {SERVICES_STATUS.map((service, idx) => (
                <div
                  key={idx}
                  className="bg-tech-card border-tech-border flex items-center justify-between rounded border p-4 transition-colors hover:border-gray-600"
                >
                  <div className="flex items-center gap-4">
                    {service.status === "operational" ? (
                      <CheckCircle className="text-tech-green h-5 w-5" />
                    ) : service.status === "degraded" ? (
                      <AlertTriangle className="h-5 w-5 text-yellow-500" />
                    ) : (
                      <XCircle className="h-5 w-5 text-red-500" />
                    )}
                    <span className="font-medium text-white">
                      {service.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-6">
                    <span className="hidden font-mono text-xs text-gray-500 sm:block">
                      UPTIME: {service.uptime}
                    </span>
                    <div
                      className={`rounded px-2 py-1 text-xs font-bold uppercase ${
                        service.status === "operational"
                          ? "bg-tech-green/10 text-tech-green"
                          : service.status === "degraded"
                            ? "bg-yellow-500/10 text-yellow-500"
                            : "bg-red-500/10 text-red-500"
                      }`}
                    >
                      {service.status}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatusDashboard;
