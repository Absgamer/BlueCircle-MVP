import { HeroSection } from "@/components/blocks/hero-section-1";
import { QuickFacts } from "@/components/blocks/quick-facts";
import { Button } from "@/components/ui/button";
import Prism from "@/components/ui/prism";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black">
      {/* Animated Prism Background */}
      <div className="fixed inset-0 z-0">
        <Prism
          animationType="3drotate"
          timeScale={0.2}
          height={3}
          baseWidth={4}
          scale={2.5}
          hueShift={0.1}
          colorFrequency={0.8}
          noise={0.2}
          glow={0.8}
          transparent={true}
        />
      </div>
      <div className="relative z-10">
        <HeroSection />
      </div>
      <section className="relative z-10 max-w-4xl mx-auto py-8 px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Welcome to BlueCircle Connect</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Our mission is to raise global awareness about diabetes through clear information, interactive charts, and user-friendly tools.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-900/50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-blue-400">What is Diabetes?</h3>
            <p className="text-muted-foreground mb-4">
              Diabetes is a chronic health condition that affects how your body turns food into energy.
              When you have diabetes, your body either doesn&apos;t make enough insulin or can&apos;t use it as well as it should.
            </p>
            <p className="text-muted-foreground">
              There are two main types: Type 1 diabetes (usually diagnosed in children and young adults)
              and Type 2 diabetes (most common, often related to lifestyle factors).
            </p>
          </div>

          <div className="bg-gray-900/50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-green-400">Why Awareness Matters</h3>
            <p className="text-muted-foreground mb-4">
              Over 537 million adults worldwide live with diabetes, and this number is expected to rise to 643 million by 2030.
            </p>
            <p className="text-muted-foreground">
              Early detection and proper management can prevent serious complications like heart disease, kidney failure, and vision problems.
            </p>
          </div>
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Button asChild size="lg">
              <Link href="/tools">Try BMI Calculator & Quiz</Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/visualizations">See Diabetes Data</Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/about">About the Project</Link>
            </Button>
          </div>
        </div>

      </section>
      <div className="relative z-10">
        <QuickFacts />
      </div>
    </div>
  );
}
