'use client'

import { ChangeEvent, useState } from 'react';
import Calender from "./calender";

export default function DayMenuTextfield() {

    const [dayMenu, setDaymenu] = useState<string>("");

    const handlemenuchange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setDaymenu(event.target.value)

    }

    return (
        <div className="flex flex-col justify-center items-center w-full justify-center px-4 pt-4 bg-gradient-to-r from-blue-100 to-purple-100">
            <h1 className="text-2xl font-bold mb-8 text-center text-gray-800">
                Day Menu Plan
            </h1>
            <Calender />
            <textarea
                placeholder="Type your day menu here..."
                value={dayMenu}
                onChange={handlemenuchange}
                className="w-full max-w-4xl h-70 px-4 py-3 border border-gray-400 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-400 text-gray-800 bg-white mt-10 overflow-y-auto"
            />
            <div className="flex justify-center mt-10">
                 <button className="bg-gray-700 text-white font-semibold px-6 py-2 rounded-lg hover:bg-gray-500 transition">
                    Get Ingredients
                </button>
            </div>
        </div>
    );
}
