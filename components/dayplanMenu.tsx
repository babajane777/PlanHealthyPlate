import Calender from "./calender";

export default function DayMenuTextfield() {

    return (
        <div className="w-full">
            <h1 className="text-1xl font-bold mb-4 text-center text-gray-800">
                Day Menu Plan
            </h1>
            <Calender/>
            <textarea
                placeholder="Type your full menu here..."
                className="w-full h-50 px-4 py-3 border border-gray-400 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-400 text-gray-800 bg-white "
            />
        </div>
    );
}
