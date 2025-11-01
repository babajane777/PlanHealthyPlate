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

        <div className="flex flex-col justify-center items-center w-full justify-center px-4 pt-4 bg-gradient-to-r from-blue-100 to-purple-100 ">
            
            <h1 className="text-2xl font-bold mb-8 text-center text-gray-800">
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
                                    ? 'bg-pink-400 text-white'
                                    : 'bg-purple-200 text-gray-700 hover:bg-pink-400'
                                }`
                            }
                        >
                            {day}
                        </Tab>
                    ))}
                </TabList>

               <TabPanels className="w-full max-w-4xl flex justify-center">

                    {weekdays.map((day) => (
                        <TabPanel key={day} className="flex justify-center w-full rounded-xl bg-purple-100 p-0">

                            <textarea
                                className="w-full h-60 p-3 max-w-4xl rounded-xl border border-gray-300 focus:outline-none focus:ring-0 focus:ring-purple-500 resize-none bg-white overflow-y-auto"
                                placeholder={`Type ${day}'s menu here...`}
                                value={menus[day]}
                                onChange={(e) => handleChange(day, e.target.value)}
                            />
                        </TabPanel>
                    ))}
                </TabPanels>
            </TabGroup>
            <div className="flex justify-center mt-10">
                <button className="bg-gray-700 text-white font-semibold px-6 py-2 rounded-lg hover:bg-gray-500 transition">
                    Get Ingredients
                </button>
            </div>
            
        </div>
    )
}
