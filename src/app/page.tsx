import Version1 from "@/components/LogoSections/Version1";
import Version2 from "@/components/LogoSections/Version2";
import Version3 from "@/components/LogoSections/Version3";
import Version4 from "@/components/LogoSections/Version4";
import Version5 from "@/components/LogoSections/Version5";
import Version6 from "@/components/LogoSections/Version6";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gray-200">
      <Version1 />
      <Version2 />
      <Version3 />
      <Version4 />
      <Version5 />
      <Version6 />
    </main>
  );
}
