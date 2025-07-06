
import {
  Search,
  Clock,
  BookOpen,
  Target,
  PlayCircle,
  Award,
  Briefcase,
} from "lucide-react"

export const problems = [
  {
    icon: Search,
    title: "Endless Searching",
    description:
      "You spend hours jumping between YouTube, Stack Overflow, and random blogs trying to find the right tutorial for your skill level.",
  },
  {
    icon: Clock,
    title: "Outdated Content",
    description:
      "You follow a tutorial from 2018 only to discover the framework has completely changed and nothing works anymore.",
  },
  {
    icon: BookOpen,
    title: "Fragmented Learning",
    description:
      "You learn HTML from one source, CSS from another, and JavaScript from a third - with no connection between them.",
  },
  {
    icon: Target,
    title: "No Clear Direction",
    description: "You're learning random skills without knowing if they'll actually help you land the job you want.",
  },
]

export const learningPath = [
  {
    icon: PlayCircle,
    title: "Learn Fundamentals",
    description: "Master web development basics with our structured curriculum.",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-500",
    step: 1,
    side: "left",
  },
  {
    icon: Target,
    title: "Build Real Projects",
    description: "Apply your skills on industry-relevant portfolio projects.",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-500",
    step: 2,
    side: "right",
  },
  {
    icon: Award,
    title: "Get Certified",
    description: "Earn recognized certifications that validate your expertise.",
    color: "from-emerald-500 to-emerald-600",
    bgColor: "bg-emerald-500",
    step: 3,
    side: "left",
  },
  {
    icon: Briefcase,
    title: "Land Your Job",
    description: "Connect with hiring partners and launch your tech career.",
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-500",
    step: 4,
    side: "right",
  },
]