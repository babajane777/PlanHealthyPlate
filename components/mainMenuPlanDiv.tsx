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

        <div className="flex h-screen justify-center bg-white">
            <div className="h-full w-full p-4 bg-gray-800">
                <TabGroup>
                    <TabList className="flex gap-4">
                        {categories.map(({ name }) => (
                            <Tab
                                key={name}
                                className="rounded-full px-3 py-1 text-md font-semibold text-black bg-gray-700 text-white focus:outline-white hover:bg-orange-500 hover:text-white active:bg-gray-900  aria-selected:bg-orange-500 aria-selected:text-white "
                            >
                                {name}
                            </Tab>
                        ))}
                    </TabList>
                    <TabPanels className="mt-3">
                        {categories.map(({ name, component }) => (
                            <TabPanel key={name} className="rounded-xl bg-gray/5 p-3">
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
