import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";

export const navItems = [
  { label: "Review", href: "#review" },
  { label: "Story", href: "#" },
  { label: "Contact", href: "#contact" },
];

export const features = [
  {
    icon: BotMessageSquare,
    text: "Save Hours Within the Day",
    description:
      "Drastically reduce the time spent on searching for suitable schools.",
  },
  {
    icon: Fingerprint,
    text: "Know Exactly Where Your Teachers Can Get To, in Seconds",
    description: "Immediate results help in making quick decisions.",
  },
  {
    icon: ShieldHalf,
    text: "Decrease Time from Initial Candidate Call to Placement",
    description: "Accelerate the placement process, enhancing efficiency.",
  },
  {
    icon: BatteryCharging,
    text: "Make More Placements, Make More Money",
    description:
      "Increased efficiency leads to more successful placements and higher revenue.",
  },
  {
    icon: PlugZap,
    text: "Saving Hours per Week",
    description:
      "opens up the opportunity for your recruiters to spend time doing what youdo best...Recruit!",
  },
];

export const checklistItems = [
  {
    title: "Locates the Closest Schools",
    description:
      "Locates the closest schools that your candidates can get to in seconds.",
  },
  {
    title: "Choose Commute Preferences",
    description:
      "Choose how your candidates would prefer to commute, as well as their max commute time.",
  },
  {
    title: "Google Maps Filtering",
    description: "Filters the schools using Google Maps technology.",
  },
  {
    title: "Ideal for Temp Staff Recruiting",
    description:
      "Perfect for recruiting temp staff, where time is of the essence.",
  },
  {
    title: "Grow Your Business",
    description: "The perfect tool to help you build your business.",
  },
  {
    title: "Market Candidates to Relevant Schools",
    description: "Market your candidates out to all the relevant schools.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];
