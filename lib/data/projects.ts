export type Project = {
  name: string;
  description: string;
  link: string;
  platform: "Google Play" | "App Store" | "Web";
  tech: string[];
};

export const projects: Project[] = [
  {
    name: "AssetTrak",
    description:
      "Asset management platform helping organizations inventory, track, and maintain machines, equipment, computers, and office assets across industries like Manufacturing, Pharma, Construction, Retail, and BFSI.",
    link: "https://play.google.com/store/apps/details?id=com.assetrak.app",
    platform: "Google Play",
    tech: ["Flutter", "Firebase", "Node.js", "PostgreSQL", "AWS", "RFID", "GPS", "Razorpay"],
  },
  {
    name: "UrbanMatch",
    description:
      "Matchmaking platform for South Asians abroad, blending cultural tradition with modern romance — built with video calling, secure payments, and face verification.",
    link: "https://play.google.com/store/apps/details?id=com.urbanmatch&hl=en_IN",
    platform: "Google Play",
    tech: ["Flutter", "Firebase", "Django REST Framework", "MySQL", "Agora", "PayU", "Face Match API"],
  },
  {
    name: "Mana Narayana",
    description:
      "Community engagement and social content-sharing platform where users browse and share public posts and videos from sources like YouTube and Facebook with their community.",
    link: "https://play.google.com/store/apps/details?id=com.epics.pongurunarayana.android&hl=en_IN",
    platform: "Google Play",
    tech: ["Flutter", "Firebase", ".NET Core", "Oracle DB"],
  },
];
