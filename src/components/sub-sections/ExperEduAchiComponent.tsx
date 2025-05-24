import { tabs } from "@/data/aboutInfo";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";

function ExperEduAchiComponent({
  setActiveTab,
  activeTab,
}: {
  setActiveTab: any;
  activeTab: any;
}) {
  return (
    <div className="mb-6">
      <div className="flex border-b border-zinc-800 mb-4">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center px-4 py-2 text-sm font-medium transition-colors relative ${
                activeTab === tab.id
                  ? "text-emerald-500"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              <Icon className="mr-2 h-4 w-4" />
              {tab.label}
              {activeTab === tab.id && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-500"
                  layoutId="activeTab"
                  transition={{ duration: 0.3 }}
                />
              )}
            </button>
          );
        })}
      </div>

      <div className="min-h-[180px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {tabs.find((tab) => tab.id === activeTab)?.content}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default ExperEduAchiComponent;
