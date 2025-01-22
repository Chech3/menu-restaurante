"use client"

import Image from "next/image"
import Zoom from "react-medium-image-zoom"
import "react-medium-image-zoom/dist/styles.css"
import { Heart } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-pink-50 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-3xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-300 to-red-400 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-3xl mx-auto">
            <div className="divide-y divide-pink-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <h2 className="text-4xl font-extrabold text-center text-red-600 flex items-center justify-center">
                  <Heart className="w-8 h-8 text-red-500 mr-2" />
                  Bienvenidos
                  <Heart className="w-8 h-8 text-red-500 ml-2" />
                </h2>
                
                <div className="space-y-8">
                  <div className="bg-pink-100 p-6 rounded-lg shadow-md">
                    {/* <h3 className="text-2xl font-bold text-red-500 mb-4">Primer Menú</h3> */}
                    <Zoom>
                      <Image
                        src="/sanvalentin2.jpeg"
                        alt="Menú 1"
                        width={800}
                        height={600}
                        className="rounded-lg shadow-md"
                      />
                    </Zoom>
                  </div>
                  <div className="bg-pink-100 p-6 rounded-lg shadow-md">
                    {/* <h3 className="text-2xl font-bold text-red-500 mb-4">Segundo Menú</h3> */}
                    <Zoom>
                      <Image
                        src="/sanvalenti3.jpeg"
                        alt="Menú 2"
                        width={800}
                        height={600}
                        className="rounded-lg shadow-md"
                      />
                    </Zoom>
                  </div>
                </div>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

