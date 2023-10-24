import NavWheel from "@/components/Navwheel";
import NavigationWheel from "@/components/wheel";
import data from "@/utils/data";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
        <NavigationWheel />
    </main>
  );
}
