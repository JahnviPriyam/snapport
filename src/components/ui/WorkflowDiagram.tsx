import React from "react";

type Props = {
  steps: string[];
  direction?: "vertical" | "horizontal";
};

export function WorkflowDiagram({ steps, direction = "vertical" }: Props) {
  return (
    <div className={`w-full flex ${direction === "horizontal" ? "flex-row" : "flex-col"} items-center gap-4`}>
      {steps.map((step, i) => (
        <div key={i} className="flex items-center">
          <div className="px-4 py-3 rounded-lg bg-surface border border-border shadow-sm text-sm text-primaryText">
            {step}
          </div>
          {i < steps.length - 1 && (
            <div className={`mx-3 ${direction === "horizontal" ? "hidden md:block" : "block"}`}>
              <svg width={direction === "horizontal" ? 48 : 24} height={24} viewBox="0 0 48 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 12 H42" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M36 6 L42 12 L36 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
