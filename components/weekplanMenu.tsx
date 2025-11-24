'use client'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import { useState } from 'react';
import Calender from './calender';

const weekdays = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
] as const

type Weekday = typeof weekdays[number]

type MenuState = Record<Weekday, string>



export default function WeeklyMenuPlanner() {

    const [menus, setMenus] = useState<MenuState>({

        Monday: '',
        Tuesday: '',
        Wednesday: '',
        Thursday: '',
        Friday: '',
        Saturday: '',
        Sunday: '',
    })

    const handleChange = (day: Weekday, value: string) => {
        setMenus({ ...menus, [day]: value })
    }

    return (

        <div className="flex flex-col justify-center items-center w-full justify-center px-4 pt-4 bg-gray-800 ">
            
            <h1 className="text-2xl font-bold mb-8 text-center text-white">
                Weekly Menu Plan
            </h1>

            <Calender />

            <TabGroup className="w-full flex flex-wrap justify-center">
                <TabList className="flex flex-wrap justify-center w-full gap-2 mb-4 mt-6">
                    {weekdays.map((day) => (
                        <Tab
                            key={day}
                            className={({ selected }) =>
                                `rounded-full px-3 py-1 text-sm font-semibold ${selected
                                    ? 'bg-purple-600 text-white'
                                    : 'bg-gray-600 text-white hover:bg-purple-600'
                                }`
                            }
                        >
                            {day}
                        </Tab>
                    ))}
                </TabList>

               <TabPanels className="w-full max-w-4xl flex justify-center">

                    {weekdays.map((day) => (
                        <TabPanel key={day} className="flex justify-center w-full rounded-xl bg-gray-100 p-0">

                            <textarea
                                className="w-full h-60 p-3 max-w-4xl text-white rounded-xl border border-gray-300 focus:outline-none focus:ring-0 focus:ring-purple-500 resize-none bg-gray-700 overflow-y-auto"
                                placeholder={`Type ${day}'s menu here...`}
                                value={menus[day]}
                                onChange={(e) => handleChange(day, e.target.value)}
                            />
                        </TabPanel>
                    ))}
                </TabPanels>
            </TabGroup>
            <div className="flex justify-center mt-10">
                <button className="bg-purple-800 text-white font-semibold px-6 py-2 rounded-lg hover:bg-purple-400 transition">
                    Get Ingredients
                </button>
            </div>
            
        </div>
    )
}
