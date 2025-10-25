import React from 'react';

const facts = [
    'Over 537 million adults worldwide have diabetes (IDF, 2021).',
    '1 in 2 adults with diabetes are undiagnosed.',
    'Type 2 diabetes accounts for over 90% of all diabetes cases.',
    'Healthy lifestyle changes can prevent or delay type 2 diabetes.',
    'Diabetes is a leading cause of blindness, kidney failure, and amputation.',
];

export function QuickFacts() {
    return (
        <section className="my-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Quick Diabetes Facts</h2>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 max-w-4xl mx-auto">
                {facts.map((fact, i) => (
                    <div key={i} className="bg-muted border rounded-lg p-4 shadow text-center text-sm">
                        {fact}
                    </div>
                ))}
            </div>
        </section>
    );
} 