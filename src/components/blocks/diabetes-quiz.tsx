'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';

const questions = [
    {
        question: 'What is the normal range for fasting blood glucose (mg/dL)?',
        options: ['70-99', '100-125', '126-150', '150-200'],
        answer: 0,
        explanation: 'Normal fasting blood glucose is 70-99 mg/dL. 100-125 mg/dL indicates prediabetes, and 126+ mg/dL indicates diabetes.'
    },
    {
        question: 'Which of these is a common symptom of diabetes?',
        options: ['Blurred vision', 'Hair loss', 'Hearing loss', 'Rash'],
        answer: 0,
        explanation: 'Blurred vision is a common symptom of diabetes due to high blood sugar affecting the lens of the eye.'
    },
    {
        question: 'Which type of diabetes is most common?',
        options: ['Type 1', 'Type 2', 'Gestational', 'Monogenic'],
        answer: 1,
        explanation: 'Type 2 diabetes accounts for 90-95% of all diabetes cases, making it the most common form.'
    },
];

export function DiabetesQuiz() {
    const [selected, setSelected] = useState<number[]>(Array(questions.length).fill(-1));
    const [submitted, setSubmitted] = useState(false);

    const score = selected.reduce((acc, val, idx) => acc + (val === questions[idx].answer ? 1 : 0), 0);
    const percentage = Math.round((score / questions.length) * 100);

    const getScoreMessage = () => {
        if (percentage >= 80) return { message: 'Excellent!', color: 'text-green-400' };
        if (percentage >= 60) return { message: 'Good job!', color: 'text-yellow-400' };
        return { message: 'Keep learning!', color: 'text-red-400' };
    };

    const scoreInfo = getScoreMessage();

    return (
        <div className="space-y-4">
            <form
                className="space-y-6"
                onSubmit={e => {
                    e.preventDefault();
                    setSubmitted(true);
                }}
            >
                {questions.map((q, i) => (
                    <div key={i} className="space-y-3">
                        <div className="font-medium text-white">
                            {i + 1}. {q.question}
                        </div>
                        <div className="space-y-2">
                            {q.options.map((opt, j) => (
                                <label key={j} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-700 cursor-pointer">
                                    <input
                                        type="radio"
                                        name={`q${i}`}
                                        checked={selected[i] === j}
                                        onChange={() => {
                                            const copy = [...selected];
                                            copy[i] = j;
                                            setSelected(copy);
                                        }}
                                        disabled={submitted}
                                        className="w-4 h-4 text-blue-600"
                                    />
                                    <span className="text-gray-300">{opt}</span>
                                    {submitted && (
                                        <span className={cn('ml-auto text-sm font-medium',
                                            j === questions[i].answer ? 'text-green-400' :
                                            j === selected[i] ? 'text-red-400' : 'text-gray-500'
                                        )}>
                                            {j === questions[i].answer ? '✓' : j === selected[i] ? '✗' : ''}
                                        </span>
                                    )}
                                </label>
                            ))}
                        </div>
                        {submitted && (
                            <div className="text-sm text-gray-400 bg-gray-800 p-3 rounded-lg">
                                <strong>Explanation:</strong> {q.explanation}
                            </div>
                        )}
                    </div>
                ))}
                
                <button
                    type="submit"
                    className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    disabled={submitted || selected.some(s => s === -1)}
                >
                    {submitted ? 'Quiz Completed' : 'Submit Answers'}
                </button>
            </form>
            
            {submitted && (
                <div className="bg-gray-800 p-6 rounded-lg text-center space-y-4">
                    <div className="text-2xl font-bold text-white">
                        {score} / {questions.length}
                    </div>
                    <div className="text-lg font-medium text-white">
                        {percentage}% Correct
                    </div>
                    <div className={cn('text-lg font-semibold', scoreInfo.color)}>
                        {scoreInfo.message}
                    </div>
                    <div className="text-sm text-gray-400">
                        {percentage >= 80 
                            ? 'You have excellent knowledge about diabetes!'
                            : percentage >= 60 
                            ? 'Good understanding! Consider learning more about diabetes prevention.'
                            : 'Great start! Keep learning about diabetes to better understand this important health topic.'
                        }
                    </div>
                </div>
            )}
        </div>
    );
} 