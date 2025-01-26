import React from 'react';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">Contact Me</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            I'm currently actively looking for new opportunities in full-stack web development. 
            If you are an employer looking for a dedicated web developer, contact me before someone else does.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Location Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center flex flex-col justify-between">
            <div>
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Location</h3>
              <p className="text-gray-700">Kerala, India</p>
            </div>
          </div>

          {/* Phone Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center flex flex-col justify-between">
            <div>
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Contact Number</h3>
              <a href="tel:+918287844049" className="text-blue-600 hover:text-blue-700 font-medium">
                +91-8277506766
              </a>
            </div>
          </div>

          {/* Email Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center flex flex-col justify-between">
            <div>
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email Address</h3>
              {/* Ensure proper wrapping with a max width */}
              <a href="mailto:srinandan2003@gmail.com" className="text-blue-600 hover:text-blue-700 font-medium break-all max-w-full">
                srinandan2003@gmail.com
              </a>
            </div>
          </div>

          {/* Website Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center flex flex-col justify-between">
            <div>
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Website</h3>
              <a href="https://aleemalam.netlify.app" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-medium">
                aleemalam.netlify.app
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
