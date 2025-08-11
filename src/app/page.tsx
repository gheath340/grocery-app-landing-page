'use client';
import BudgetSection from "./components/budgetSection";
import HookSection from "./components/hookSection";
import RecipesSection from "./components/recipesSection";
import TrackingSection from "./components/trackingSection";

export default function Home() {

  return (
     <div className="min-h-screen bg-white bg-cover bg-center bg-no-repeat">
      <HookSection />
      <BudgetSection />
      <RecipesSection />
      <TrackingSection />
    </div>
  );
};
