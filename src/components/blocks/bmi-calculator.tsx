'use client';
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

export function BMICalculator() {
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');

    const heightNum = parseFloat(height);
    const weightNum = parseFloat(weight);
    const bmi = heightNum && weightNum ? (weightNum / ((heightNum / 100) ** 2)) : null;

    let category = '';
    let color = '';
    let riskLevel = '';
    let advice = '';

    if (bmi) {
        if (bmi < 18.5) {
            category = 'Underweight';
            color = 'bg-blue-100 text-blue-800';
            riskLevel = 'Low';
            advice = 'Consider consulting a healthcare provider about healthy weight gain strategies.';
        } else if (bmi < 25) {
            category = 'Normal weight';
            color = 'bg-green-100 text-green-800';
            riskLevel = 'Low';
            advice = 'Great! Maintain your current lifestyle with balanced diet and regular exercise.';
        } else if (bmi < 30) {
            category = 'Overweight';
            color = 'bg-yellow-100 text-yellow-800';
            riskLevel = 'Moderate';
            advice = 'Consider lifestyle changes to reduce diabetes risk. Focus on healthy eating and regular physical activity.';
        } else {
            category = 'Obese';
            color = 'bg-red-100 text-red-800';
            riskLevel = 'High';
            advice = 'High risk for diabetes and other health conditions. Please consult a healthcare provider for guidance.';
        }
    }

    return (
        <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-300">Height (cm)</label>
                    <input
                        type="number"
                        value={height}
                        onChange={e => setHeight(e.target.value)}
                        className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                        placeholder="e.g. 170"
                    />
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-300">Weight (kg)</label>
                    <input
                        type="number"
                        value={weight}
                        onChange={e => setWeight(e.target.value)}
                        className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                        placeholder="e.g. 65"
                    />
                </div>
            </div>

            {bmi && (
                <div className="bg-gray-800 p-4 rounded-lg space-y-3">
                    <div className="text-center">
                        <div className="text-3xl font-bold text-white mb-1">
                            {bmi.toFixed(1)}
                        </div>
                        <div className="text-sm text-gray-400">BMI</div>
                    </div>

                    <div className="text-center">
                        <span className={cn('px-3 py-1 rounded-full text-sm font-medium', color)}>
                            {category}
                        </span>
                    </div>

                    <div className="text-center">
                        <span className="text-sm text-gray-400">Diabetes Risk: </span>
                        <span className={cn('font-medium',
                            riskLevel === 'Low' ? 'text-green-400' :
                                riskLevel === 'Moderate' ? 'text-yellow-400' : 'text-red-400'
                        )}>
                            {riskLevel}
                        </span>
                    </div>

                    <div className="text-sm text-gray-300 text-center">
                        {advice}
                    </div>
                </div>
            )}
        </div>
    );
} 