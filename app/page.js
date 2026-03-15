"use client"

import { useState } from "react"

export default function Home() {

  const [input,setInput] = useState("")
  const [result,setResult] = useState("")

  function handleSubmit(){
    setResult("Prediction result for: " + input)
  }

  return (

    <div className="min-h-screen bg-gradient-to-b from-[#0a0f1c] to-[#020617] text-white flex flex-col items-center justify-center">

      {/* Main Heading */}
      <h1 className="text-3xl font-bold mb-1">
        ChargeFit Prediction
      </h1>

      {/* Smaller Subtitle */}
      <p className="text-gray-400 text-sm mb-6">
        Check the suitability of your charging station
      </p>

      {/* Input Card */}
      <div className="bg-[#0f172a] border border-gray-700 rounded-xl p-8 w-[500px]">

        <p className="text-gray-300 mb-4">
          Enter your text input
        </p>

        <input
          type="text"
          placeholder="Type your input here..."
          value={input}
          onChange={(e)=>setInput(e.target.value)}
          className="w-full p-3 rounded-md bg-[#020617] border border-gray-600 text-white mb-4"
        />

        <button
          onClick={handleSubmit}
          className="w-full bg-indigo-600 hover:bg-indigo-700 transition p-3 rounded-md font-semibold"
        >
          Submit
        </button>

      </div>

      {/* Result Card */}
      {result && (
        <div className="mt-10 bg-[#0f172a] border border-gray-700 rounded-xl p-6 w-[500px]">
          <h2 className="text-lg font-semibold mb-2">
            Result
          </h2>
          <p className="text-gray-300">
            {result}
          </p>
        </div>
      )}

    </div>

  )

}