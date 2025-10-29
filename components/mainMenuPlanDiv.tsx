import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import React from 'react';
import DayMenuTextfield from "./dayplanMenu";
import WeeklyMenuPlanner from "./weekplanMenu";



type Category = {
    name: string,
    component: React.ReactElement
}


const categories: Category[] = [
    {
        name: 'Day',
        component: <DayMenuTextfield />
    },
    {
        name: 'Week',
        component: <WeeklyMenuPlanner />
    }
]


export default function MainMenuplanDiv() {

    return (

        <div className="flex h-screen w-full justify-center px-4 pt-24 bg-gray-100">
            <div className="w-full max-w-lg border-0 border-gray-400 rounded-lg p-4 bg-gray-200">
                <TabGroup>
                    <TabList className="flex gap-4">
                        {categories.map(({ name }) => (
                            <Tab
                                key={name}
                                className="rounded-full px-3 py-1 text-sm font-semibold text-black focus:outline-none hover:bg-gray-300 active:bg-gray-300 aria-selected:bg-gray-300"
                            >
                                {name}
                            </Tab>
                        ))}
                    </TabList>
                    <TabPanels className="mt-3">
                        {categories.map(({ name, component }) => (
                            <TabPanel key={name} className="rounded-xl bg-white/5 p-3">
                                <div>
                                    {component}
                                </div>
                            </TabPanel>
                        ))}
                    </TabPanels>
                </TabGroup>
            </div>
        </div>
    )
}
