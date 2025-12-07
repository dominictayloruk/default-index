import { Activity, Server, Globe, Lock } from 'lucide-react';
import { NavItem, Feature, Stat, ServiceStatus } from './types';

export const APP_NAME = 'DEFAULT INDEX';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Overview', href: '#overview' },
  { label: 'Features', href: '#features' },
  { label: 'System Status', href: '#status' },
];

export const FEATURES: Feature[] = [
  {
    id: 'f1',
    title: 'Containerized Core',
    description:
      'Isolated execution environment optimized for high-throughput workloads and minimal latency.',
    icon: Server,
  },
  {
    id: 'f2',
    title: 'Real-time Metrics',
    description:
      'Direct stream of system telemetry including CPU, memory, and network I/O stats.',
    icon: Activity,
  },
  {
    id: 'f3',
    title: 'Secure Gateway',
    description:
      'Enterprise-grade encryption with automated SSL termination and request validation.',
    icon: Lock,
  },
  {
    id: 'f4',
    title: 'Edge Deployment',
    description:
      'Ready for global distribution. Push to any registry and deploy in seconds.',
    icon: Globe,
  },
];

export const SERVICE_STATS: Stat[] = [
  { label: 'Requests/sec', value: '84.2', suffix: 'k' },
  { label: 'Uptime', value: '99.999', suffix: '%' },
  { label: 'Latency', value: '9', suffix: 'ms' },
  { label: 'Active Nodes', value: '237', suffix: '' },
];

export const SERVICES_STATUS: ServiceStatus[] = [
  { name: 'API Gateway', status: 'operational', uptime: '14d 2h' },
  { name: 'Database Cluster', status: 'operational', uptime: '45d 12h' },
  { name: 'Cache Layer', status: 'degraded', uptime: '2d 5h' },
  { name: 'Worker Nodes', status: 'operational', uptime: '14d 2h' },
];
