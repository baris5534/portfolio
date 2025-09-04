import { IconCloud } from "./interactive-icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "tailwindcss",
  "bootstrap",
  "firebase",
  
  "docker",
  "git",
  "github",
  "visualstudiocode",
  "androidstudio",
  "figma",
];

export default function IconCloudDemo() {
  return (
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg bg-background px-20 pb-20 pt-8 ">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}