import Link from "next/link"


export default function LandingPage() {

    return (

        <div className=" h-screen relative isolate overflow-hidden bg-gray-800 px-6 pt-16 shadow-2xl sm:px-16 md:pt-24 lg:flex justify-center lg:px-24 lg:pt-0">
            <svg viewBox="0 0 1024 1024" aria-hidden="true" className="absolute top-1/2 left-1/2 -z-10 size-256 -translate-y-1/2 mask-[radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0">
                <circle r="512" cx="512" cy="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
                <defs>
                    <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                        <stop stopColor="#7775D6" />
                        <stop offset="1" stopColor="#E935C1" />
                    </radialGradient>
                </defs>
            </svg>
            <div className="mx-auto max-w-screen text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-center">
                <h3 className="text-4xl font-semibold tracking-tight drop-shadow-sm">
                    
                    <span className="mx-2 bg-white bg-clip-text text-transparent  text-6xl">
                        Healthy
                    </span>

                    <span className="bg-white bg-clip-text text-transparent  text-6xl">
                        Plate
                    </span>

                </h3><br/>


                <h3 className="text-2xl tracking-tight text-white ">
                        Where planning meets nourishment
                </h3>
                <br />

                <div className="mt-5 flex items-center justify-center gap-x-6 lg:justify-center">
                    <Link href="/plan" className="rounded-lg bg-purple-500 px-3.5 py-2.5 text-lg font-semibold text-white shadow-xs hover:bg-pink-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"> Get started </Link>

                </div>
            </div>

        </div>
    )
}