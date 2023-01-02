/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'

export default function Example() {
  return (
    <div className="relative bg-white">
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-white" />
      </div>
      <div className="relative mx-auto max-w-5xl lg:grid lg:grid-cols-5">
        <div className="bg-white py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
          <div className="mx-auto max-w-lg">
            <h2 className="text-2xl font-regular italic font-serif tracking-tight text-gray-900 sm:text-3xl">Get in touch</h2>
            <p className="mt-3 text-lg leading-6 text-gray-500">
            Reach out and schedule an introductory call free of charge to evaluate your issue and receive a quote.
            </p>
            <dl className="mt-8 text-base text-gray-500">
              <div>
                <dt className="sr-only">Postal address</dt>
                <dd>
                <p>Kamil Daniel LTD</p>
                  <p>Floor 5, 20 Saville Row</p>
                  <p>London, W1S 3SR</p>
                </dd>
              </div>
              <div className="mt-6">
                <dt className="sr-only">Phone number</dt>
                <dd className="flex">
                  <PhoneIcon className="h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true" />
                  <span className="ml-3">+44 77 33 78 44 44</span>
                </dd>
              </div>
              <div className="mt-3">
                <dt className="sr-only">Email</dt>
                <dd className="flex">
                  <EnvelopeIcon className="h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true" />
                  <span className="ml-3">kamil@akdag.com</span>
                </dd>
              </div>
            </dl>
            <p className="mt-6 text-base text-gray-500">
              Schedule a meeting{' '}
              <a href="https://calendly.com/kamildaniel-legal" className="font-medium text-gray-700 underline">
                with Kamil
              </a>
              .
            </p>
          </div>
        </div>
        <div className="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
          <div className="mx-auto max-w-lg lg:max-w-none">
          <div className="mx-auto max-w-lg md:grid md:max-w-none md:grid-cols-1  md:gap-8">
          <div>
            <h2 className="text-2xl font-regular italic font-serif text-gray-900 sm:text-2xl sm:tracking-tight">For UK/EU requests</h2>
            <div className="mt-3">
              <p className="text-lg text-gray-500">
              
                Available for in-person meetings in the EU and United Kingdom, Q4 2022.
              </p>
            </div>
            <div className="mt-9">
              <div className="flex">
                <div className="flex-shrink-0">
                  <PhoneIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                </div>
                <div className="ml-3 text-base text-gray-500">
                  <p className="mb-2">+ 44 77 33 78 44 44 (United Kingdom)</p>
                  <p className="mb-2">+ 32 487 47 88 21 (Europe)</p>
                  <p className="mt-1">Mon-Fri 8am to 6pm GMT</p>
                </div>
              </div>
              
            </div>
          </div>
          <div className="mt-12 sm:mt-16 md:mt-0">
            <h2 className="text-2xl font-regular font-serif italic text-gray-900 sm:text-2xl sm:tracking-tight">For US requests</h2>
            <div className="mt-3">
              <p className="text-lg text-gray-500">
                Available for in-person meetings in the United States & Canada, in Q2 2023.
              </p>
            </div>
            
          </div>
        </div>
          </div>
        </div>
      </div>
    </div>
  )
}
