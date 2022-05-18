/* This example requires Tailwind CSS v2.0+ */
import { MailIcon, PhoneIcon } from '@heroicons/react/outline'

export default function Example() {
  return (
    <div className="bg-white border-t-2 border-gray-100">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto">
          <div>
            <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">Contact Me</h2>
            <div className="mt-3">
              <p className="text-lg text-gray-500">
                Need help with Julia?
              </p>
            </div>
            <div className="mt-9">
              <div className="mt-6 flex">
                <div className="flex-shrink-0">
                  <MailIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                </div>
                <div className="ml-3 text-base text-gray-500">
                  <p>josh [at] loonanalytics [dot] com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
