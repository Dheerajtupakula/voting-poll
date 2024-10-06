import Image from "next/image";
import { Inter } from "next/font/google";
import HomeComponent from "@/components/homeComponent";
import VoterFormComponent from "@/components/voterForm";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <HomeComponent />;
}
