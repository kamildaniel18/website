import { ChevronDoubleRightIcon, StarIcon } from "@heroicons/react/24/outline"

const metrics = [
    { id: 1, stat: 'Legal and compliance', emphasis: 'Clients', rest: 'use laoreet amet lacus nibh integer quis.' },
    { id: 2, stat: 'Finance and technology', emphasis: 'Clients', rest: 'lacus nibh integer quis.' },
    { id: 3, stat: 'Climate and environmental', emphasis: 'Clients include', rest: 'laoreet amet lacus nibh integer quis.' },
    { id: 4, stat: 'Blockchain, crypto and web3', emphasis: 'Previously', rest: 'lacus nibh integer quis.' },
  ]
  
  export default function Example() {
    return (
      <div id="expertise" className="relative bg-clear sm:max-w-5xl mx-auto">
        <div className="absolute bottom-0 h-80 w-full xl:inset-0 xl:h-full">
          <div className="h-full w-full xl:grid xl:grid-cols-2">
            <div className="h-full pt-36 xl:pt-0 xl:ml-16  xl:relative xl:col-start-2  ">
              <img
                className="h-full w-full object-cover opacity-100 xl:absolute xl:rounded-full inset-0"
                src="https://images.unsplash.com/photo-1669634941379-02c46012398e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80"
                alt="Abstract green image"
              />
              <div
                aria-hidden="true"
                className="absolute inset-x-0  h-32 pt-24 sm:pt-0 bg-gradient-to-b from-green-500/50 sm:rounded-full xl:inset-y-0 xl:left-0 xl:h-full xl:w-full "
              />
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-flow-col-dense xl:grid-cols-2 xl:gap-x-8">
          <div className="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
            <h2 className="text-base font-regular text-green-500 uppercase">AREAS OF PRACTICE</h2>
            <p className="mt-3 text-4xl font-regular tracking-tight font-serif italic text-black">
              A proven track record of excellence
            </p>
            <p className="mt-5 text-lg text-slate-700">
            We provide legal advice to a number of clients across a diverse array of industries.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-1">
              {metrics.map((item) => (
                <p key={item.id}>
                  <span className="  text-lg font-light  text-black flex items-center"><ChevronDoubleRightIcon className="h-6 text-green-600 flex mr-3"/>{item.stat}</span>
                 {/*  <span className="mt-1 block text-base text-gray-300">
                    <span className="font-medium text-black">{item.emphasis}</span> {item.rest}
                  </span> */}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  