'use client';
import React, { useState } from 'react';
import { MotionWrapper } from '../hoc/motion-wrapper';
import { Typography } from '../ui/typography';
import { ChevronDown, Rocket } from 'lucide-react';
import { functionalModules } from '@/data/functional-modules.data';

// Dummy data for cards and their content
const cards = [
  {
    label: 'HR Management',
    content: [
      { id: 1, name: 'Tasks Management' },
      { id: 2, name: 'Employee Records' },
      { id: 3, name: 'Attendance Tracking' },
      { id: 4, name: 'Payroll Management' },
      { id: 5, name: 'Performance Reviews' },
      { id: 6, name: 'Leave Management' },
      { id: 7, name: 'Training and Development' },
      { id: 8, name: 'Compliance Management' },
      { id: 9, name: 'Recruitment' },
    ],
  },
  {
    label: 'Finance',
    content: [
      { id: 1, name: 'Expense Tracking' },
      { id: 2, name: 'Invoice Management' },
      { id: 3, name: 'Budgeting' },
      { id: 4, name: 'Financial Reporting' },
    ],
  },
  {
    label: 'Operations',
    content: [
      { id: 1, name: 'Workflow Optimization' },
      { id: 2, name: 'Supply Chain Management' },
      { id: 3, name: 'Inventory Control' },
    ],
  },
];

export default function SubModulesFunctional() {
  const [active, setActive] = useState(0);
  const activeContent = functionalModules.slice(0, 22).map((item, id) => (
    <div
      key={id}
      className="text-gray-900 py-2 px-2 bg-white border border-gray-50 rounded-3xl h-fit flex items-center gap-2 text-sm shadow "
    >
      <Rocket className="w-4 h-4 shrink-0 text-green-600" />
      {item.name}
      <ChevronDown className="w-4 h-4 ml-auto shrink-0 text-gray-600" />
    </div>
  ));
  const restActiveContent = functionalModules.slice(22).map((item, id) => (
    <div
      key={id}
      className="text-gray-900 py-2 px-2 bg-white border border-gray-50 rounded-3xl h-fit flex items-center gap-2 text-sm shadow "
    >
      <Rocket className="w-4 h-4 shrink-0 text-green-600" />
      {item.name}
      <ChevronDown className="w-4 h-4 ml-auto shrink-0 text-gray-600" />
    </div>
  ));
  return (
    <section className="w-full min-h-screen p-10 container">
      <MotionWrapper variant="fadeIn">
        <Typography variant="title" className="text-center mb-4 font-bold">
          Functional Submodules
        </Typography>
        <Typography variant="paragraph" className="text-center mb-8">
          Explore our functional submodules designed to enhance your workflow.
        </Typography>
      </MotionWrapper>

      <div className="mx-auto">
        <div className="flex gap-2">
          {cards.map((card, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              className={`px-6 py-2 rounded-t-md font-semibold transition-colors duration-200
                ${
                  active === index
                    ? ' border-gray-200 bg-white border-x border-t'
                    : 'bg-gray-100 text-gray-700 hover:bg-blue-200'
                }`}
              style={{ minWidth: 120 }}
            >
              {card.label}
            </button>
          ))}
        </div>
        <div className="bg-white border-x border-y border-gray-200  rounded-b-md rounded-r-md min-h-[200px] w-full transition-all duration-300 flex justify-between flex-col -mt-[1px]">
          <div className="flex justify-between">
            <div className="flex gap-x-3 gap-y-1 max-w-[670px] mx-auto flex-wrap items-start h-fit px-6 pt-2">
              {activeContent}
            </div>
            <div
              style={{
                width: '100%',
                backgroundImage:
                  'url(\'https://images.unsplash.com/photo-1590041794748-2d8eb73a571c?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D\')',
                height: '330px',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {/* <Image
              src={"/assets/images/pages/hrm/main-sect-dashboard.png"}
              alt=""
              width={1000}
              height={1000}
              className="h-[300px] w-[320px] object-object-cover "
            /> */}
            </div>
          </div>
          <div className="flex gap-x-3 gap-y-1 mx-auto flex-wrap items-start h-fit px-6 py-2">
            {restActiveContent}
          </div>
        </div>
      </div>
    </section>
  );
}
