import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-black py-12">
            <div className="max-w-4xl mx-auto px-4">
                <div className="text-center mb-12">
                    <div className="flex justify-center mb-6">
                        <Button asChild variant="outline" size="sm">
                            <Link href="/" className="flex items-center gap-2">
                                <Home className="w-4 h-4" />
                                Back to Home
                            </Link>
                        </Button>
                    </div>
                    <h1 className="text-4xl font-bold mb-4">About BlueCircle Connect</h1>
                    <p className="text-lg text-muted-foreground">
                        A student-led initiative to raise global awareness about diabetes through data, education, and technology
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-gray-900/50 p-6 rounded-lg">
                        <h2 className="text-2xl font-semibold mb-4 text-blue-400">The Creator</h2>
                        <div className="space-y-4">
                            <div className="flex flex-col items-center text-center">
                                <div className="w-32 h-32 mb-4 rounded-full overflow-hidden border-4 border-blue-400/30">
                                    <Image 
                                        src="/abhimanyu-chaudhary.png" 
                                        alt="Abhimanyu Chaudhary" 
                                        width={128}
                                        height={128}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h3 className="text-xl font-semibold text-white">Abhimanyu Chaudhary</h3>
                                <p className="text-gray-400">Founder, Developer & Researcher</p>
                            </div>
                            <p className="text-gray-300">
                                A passionate high school student and researcher who published his work on diabetes prevalence
                                and comorbidities in the National High School Journal of Science. Abhimanyu created BlueCircle
                                Connect to bridge the gap between complex scientific data and public understanding.
                            </p>
                        </div>
                    </div>

                    <div className="bg-gray-900/50 p-6 rounded-lg">
                        <h2 className="text-2xl font-semibold mb-4 text-green-400">Research Background</h2>
                        <div className="space-y-4">
                            <p className="text-gray-300">
                                Through extensive research and data analysis, Abhimanyu identified the critical need for
                                accessible diabetes education. His published research revealed significant gaps in
                                public understanding of diabetes risk factors and prevention strategies.
                            </p>
                            <div className="bg-gray-800 p-4 rounded-lg">
                                <p className="text-sm text-gray-400 italic">
                                    &ldquo;The data showed that many people don&apos;t understand their diabetes risk until it&apos;s too late.
                                    I wanted to create something that could help people understand and take action before
                                    developing diabetes.&rdquo;
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-gray-900/50 p-6 rounded-lg">
                        <h2 className="text-2xl font-semibold mb-4 text-purple-400">Our Mission</h2>
                        <p className="text-gray-300">
                            To raise global awareness about diabetes through clear information, interactive charts,
                            and user-friendly tools. We believe that knowledge is the first step toward prevention
                            and better health outcomes for everyone.
                        </p>
                    </div>

                    <div className="bg-gray-900/50 p-6 rounded-lg">
                        <h2 className="text-2xl font-semibold mb-4 text-yellow-400">Our Vision</h2>
                        <p className="text-gray-300">
                            To empower people everywhere with the knowledge and tools to understand and manage diabetes,
                            making science accessible and actionable for all. We envision a world where diabetes
                            prevention is common knowledge.
                        </p>
                    </div>
                </div>

                <div className="bg-gray-900/50 p-6 rounded-lg mb-8">
                    <h2 className="text-2xl font-semibold mb-4 text-cyan-400">Future Goals</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h3 className="text-lg font-semibold text-white mb-2">Short-term</h3>
                            <ul className="text-gray-300 space-y-1">
                                <li>• Expand data visualizations with more countries</li>
                                <li>• Add more interactive health tools</li>
                                <li>• Create educational content series</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-white mb-2">Long-term</h3>
                            <ul className="text-gray-300 space-y-1">
                                <li>• Partner with healthcare organizations</li>
                                <li>• Develop mobile app for health tracking</li>
                                <li>• Create community support features</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 p-6 rounded-lg">
                    <h2 className="text-2xl font-semibold mb-4 text-white">A Personal Note</h2>
                    <p className="text-gray-300 mb-4">
                        &ldquo;As a student, I&apos;ve seen how diabetes affects families and communities. This project isn&apos;t
                        just about data—it&apos;s about making a real difference in people&apos;s lives. Every person who
                        learns something new about diabetes prevention is a step toward a healthier world.&rdquo;
                    </p>
                    <p className="text-gray-400 text-sm">
                        — Abhimanyu Chaudhary, Founder
                    </p>
                </div>

            </div>
        </div>
    );
} 