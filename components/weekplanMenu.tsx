'use client'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import { useState } from 'react'

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
        <div className=" w-full justify-center px-4 pt-4 bg-gray-200">
            {/* <div className="flex w-full max-w-xl rounded-xl bg-white p-6 shadow-lg"> */}
                <h1 className="text-1xl font-bold mb-8 text-center text-gray-800">
                    Weekly Menu Plan
                </h1>

                <TabGroup>
                    <TabList className="flex flex-wrap justify-center gap-2 mb-4">
                        {weekdays.map((day) => (
                            <Tab
                                key={day}
                                className={({ selected }) =>
                                    `rounded-full px-3 py-1 text-sm font-semibold ${selected
                                        ? 'bg-blue-600 text-white'
                                        : 'bg-gray-300 text-gray-700 hover:bg-gray-400'
                                    }`
                                }
                            >
                                {day}
                            </Tab>
                        ))}
                    </TabList>

                    <TabPanels>
                        {weekdays.map((day) => (
                            <TabPanel key={day} className="rounded-xl bg-gray-100 p-4">
                              
                                <textarea
                                    className="w-full h-50 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-0 focus:ring-blue-500 resize-none"
                                    placeholder={`Type ${day}'s menu here...`}
                                    value={menus[day]}
                                    onChange={(e) => handleChange(day, e.target.value)}
                                />
                            </TabPanel>
                        ))}
                    </TabPanels>
                </TabGroup>
            {/* </div> */}
        </div>
    )
}
