import React from 'react'
import Header from '../Components/Header'

export default function Books() {
  return (
    <div>
          <Header/>
        {/* Title header */}
        <div className="">
          <section className="flex h-screen overflow-hidden">
            <div className="fixed left-0 top-31 h-screen w-65 border-r-2 ">
              {/* Sidebar content filter method */}
              <h1 className='bg-mist-400 text-2xl ps-2.5'>Filter by</h1>
              <div className='flex flex-col pt-3 px-3.5'>
                <div>
                   <input type="checkbox" id='all' /> <label  htmlFor="all"> All</label>
                </div>
                <div>
                  <input type="checkbox" id='history' /> <label  htmlFor="history"> History</label>
                </div>
                <div>
                  <input type="checkbox" id='fantasy' /> <label  htmlFor="fantasy"> Fantasy</label>
                </div>
                <div>
                  <input type="checkbox" id='programing' /> <label  htmlFor="programming"> Programming</label>
                </div>
                <div>
                  <input type="checkbox" id='self-help' /> <label  htmlFor="self-help"> Self-help</label>
                </div>
                <div>
                  <input type="checkbox" id='finance' /> <label  htmlFor="finance"> Finance</label>
                </div>
              </div>
              

            </div>

            <div className="ml-65 h-screen flex-1 overflow-hidden bg-amber-100">
              <nav className="sticky top-0 z-10 bg-white shadow-md">
                <div className="flex items-center justify-between px-10 py-5">
                  <h1 className="text-4xl font-bold text-gray-800"> Books Collection</h1>
                  <input type="text" placeholder="Find from our collection..." className="w-100 rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-teal-600" />
                </div>
              </nav>

              <main className="h-screen overflow-y-auto p-6">
                {/* Your book cards */}
              </main>
            </div>
          </section>

        </div>    
      </div>
  )
}
