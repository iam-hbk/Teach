import NavigationWheel from "@/components/wheel";
import Image from "next/image";
import teach_logo from "@/assets/teach_logo.svg";
import Link from "next/link";
export default function Home() {
  return (
    <main className="flex flex-col items-center  p-5">
      <div className="flex w-full flex-row items-center justify-between border border-red-500">
        <div className="flex flex-col items-center justify-evenly space-y-10 border border-green-600">
          <Image src={teach_logo} height={180} width={180} alt="teach logo" />
          <p className="w-1/2 text-center">
            The Model provides a quick scan of the critical competencies
            required for an academic on all levels (Lecturer, Senior lecturer,
            Associate Professor, Professor).
          </p>
          <div className="flex flex-row items-center justify-center space-x-2">
            <Link href="/how-it-works" className="btn btn-primary btn-outline">
              How it works
            </Link>

            <Link href="/how-it-works" className="btn btn-primary">
              Register
            </Link>
          </div>
        </div>
        <NavigationWheel />
      </div>
    </main>
  );
}
