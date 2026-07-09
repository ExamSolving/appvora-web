import {
  Smartphone,
  Bot,
  Globe,
  Atom,
  Layers,
  Layers3,
  BrainCircuit,
  PenTool,
  Palette,
  Boxes,
  Database,
  Workflow,
  Cloud,
  Monitor,
  FileBadge,
  Award,
  Calculator,
  IndianRupee,
  FileText,
  Keyboard,
  ClipboardList,
  type LucideIcon,
} from "lucide-react";
import type { CourseIcon } from "@/lib/data/courses";
import type { ServiceIcon } from "@/lib/data/services";
import type { FoundationalCourseIcon } from "@/lib/data/foundational-courses";

export const courseIconMap: Record<CourseIcon, LucideIcon> = {
  smartphone: Smartphone,
  android: Bot,
  globe: Globe,
  atom: Atom,
  layers: Layers,
  stack: Layers3,
  brain: BrainCircuit,
  "pen-tool": PenTool,
};

export const serviceIconMap: Record<ServiceIcon, LucideIcon> = {
  smartphone: Smartphone,
  palette: Palette,
  globe: Globe,
  boxes: Boxes,
  database: Database,
  brain: BrainCircuit,
  workflow: Workflow,
  cloud: Cloud,
};

export const foundationalCourseIconMap: Record<FoundationalCourseIcon, LucideIcon> = {
  monitor: Monitor,
  "file-badge": FileBadge,
  award: Award,
  calculator: Calculator,
  rupee: IndianRupee,
  "file-text": FileText,
  keyboard: Keyboard,
  "clipboard-list": ClipboardList,
};
