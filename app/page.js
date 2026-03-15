"use client"

import { useState } from "react"
import { Brain, Activity } from "lucide-react"

export default function Home() {

const [input,setInput] = useState("")
const [result,setResult] = useState("")

function handleSubmit(){
setResult("Prediction result for: " + input)
}

return (

<div className="min-h-screen bg-[#0a0f1c] text-white flex flex-col">

{/* HEADER */}
<header className="flex items-center justify-between px-8 py-4 bg-[#0b1324] border-b border-gray-800">

<div className="flex items-center gap-3">

<div className="w-10 h-10 flex items-center justify-center rounded-xl bg-blue-500/10 border border-blue-500/20">
<Brain className="text-blue-400 w-5 h-5"/>
</div>

<span className="text-lg font-semibold">ChargeFit</span>

<span className="text-xs px-2 py-1 rounded-full bg-gray-700 text-gray-300">
v1.0
</span>

</div>

<nav className="flex gap-8 text-gray-400">
<a className="hover:text-white transition">Dashboard</a>
<a className="hover:text-white transition">About</a>
</nav>

<div className="flex items-center gap-2 text-sm text-gray-400">
<span className="w-2.5 h-2.5 bg-green-500 rounded-full"></span>
System Online
</div>

</header>


{/* TITLE */}
<div className="text-center mt-14 mb-10">

<h1 className="text-3xl font-bold">
ChargeFit Prediction
</h1>

<p className="text-gray-400 text-sm mt-2">
Check the suitability of your charging station
</p>

</div>


{/* MAIN PANELS */}
<div className="flex justify-center gap-8 px-8">

{/* INPUT PANEL */}
<div className="bg-[#0f172a] border border-gray-700 rounded-xl p-8 w-[420px]">

<p className="text-gray-400 text-sm mb-4 flex items-center gap-2">
INPUT
</p>

<input
type="text"
placeholder="Enter your location"
value={input}
onChange={(e)=>setInput(e.target.value)}
className="w-full p-3 rounded-md bg-[#020617] border border-gray-600 text-white mb-4"
/>

<button
onClick={handleSubmit}
className="w-full bg-indigo-600 hover:bg-indigo-700 transition p-3 rounded-md font-semibold"
>
Check Suitability
</button>

</div>


{/* RESULT PANEL */}
<div className="bg-[#0f172a] border border-gray-700 rounded-xl p-8 w-[420px] flex flex-col items-center justify-center text-center">

<p className="text-gray-400 text-sm mb-6 flex items-center gap-2">
<Activity className="w-4 h-4"/>
RESULTS
</p>

{result ? (

<p className="text-gray-200">
{result}
</p>

) : (

<div className="text-gray-500 text-sm max-w-[260px]">

<div className="flex justify-center mb-4">
<Brain className="w-8 h-8 text-gray-500"/>
</div>

<p className="font-medium text-gray-400 mb-1">
No Results Yet
</p>

<p>
See if your spot is good for a charging station setup!
</p>

</div>

)}

</div>

</div>

</div>

)

}