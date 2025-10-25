import { BMICalculator } from '@/components/blocks/bmi-calculator';
import { DiabetesQuiz } from '@/components/blocks/diabetes-quiz';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';

export default function ToolsPage() {
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
                    <h1 className="text-4xl font-bold mb-4">Health Tools</h1>
                    <p className="text-lg text-muted-foreground">
                        Calculate your BMI and test your diabetes knowledge with our interactive tools
                    </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-900/50 p-6 rounded-lg">
                        <h2 className="text-2xl font-semibold mb-4 text-blue-400">BMI Calculator</h2>
                        <p className="text-muted-foreground mb-6">
                            Calculate your Body Mass Index to assess your weight status and potential health risks
                        </p>
                        <BMICalculator />
                    </div>
                    
                    <div className="bg-gray-900/50 p-6 rounded-lg">
                        <h2 className="text-2xl font-semibold mb-4 text-green-400">Diabetes Knowledge Quiz</h2>
                        <p className="text-muted-foreground mb-6">
                            Test your knowledge about diabetes with our 3-question quiz and get instant feedback
                        </p>
                        <DiabetesQuiz />
                    </div>
                </div>
            </div>
        </div>
    );
} 