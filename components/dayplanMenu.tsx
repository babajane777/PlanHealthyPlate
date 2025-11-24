'use client'

import { ChangeEvent, useState } from 'react';
import Calender from "./calender";

export default function DayMenuTextfield() {

    const [dayMenu, setDaymenu] = useState<string>("");

    const handlemenuchange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setDaymenu(event.target.value)

    }

    return (
        <div className="flex flex-col justify-center items-center w-full justify-center px-4 pt-4 pb-4 bg-gray-800">
            <h1 className="text-2xl font-bold mb-8 text-center text-white">
                Day Menu Plan
            </h1>
            <Calender />
            <textarea
                placeholder="Type your day menu here..."
                value={dayMenu}
                onChange={handlemenuchange}
                className="w-full max-w-4xl h-70 px-4 py-3 border border-white-400 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-white text-white bg-gray-700 mt-10 overflow-y-auto"
            />
            <div className="flex justify-center mt-10">
                 <button className="bg-purple-800 text-white font-semibold px-6 py-2 rounded-lg hover:bg-purple-400 transition">
                    Get Ingredients
                </button>
            </div>
        </div>
    );
}
