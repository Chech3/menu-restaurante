'use client'

import Image from 'next/image'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

export default function Home() {
  return (
    <div className="min-h-screen bg-yellow-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-3xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-red-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-3xl mx-auto">
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <h2 className="text-3xl font-extrabold text-center text-red-600">Nuestro Menú</h2>
                <div className="space-y-8">
                  <Zoom>
                    <Image
                      src="/menu1.jpg"
                      alt="Menú 1"
                      width={800}
                      height={600}
                      className="rounded-lg shadow-md"
                    />
                  </Zoom>
                  <Zoom>
                    <Image
                      src="/menu2.jpg"
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
  )
}

