import React from 'react'

export default function ContactSection() {
  return (
    <div>
       {/* Contact Section */}
       <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get in touch today!
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
              We know how large objects will act, but things on a small scale.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
            <div className="text-center">
              <p className="text-lg font-medium">Phone:</p>
              <p className="text-xl font-bold mb-2">+451 215 215</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-medium">Fax:</p>
              <p className="text-xl font-bold mb-2">+451 215 215</p>
            </div>
          </div>

          <div className="flex justify-center space-x-4 mt-8">
            <a href="#" className="text-gray-600 hover:text-blue-600">
              <i className="fab fa-twitter text-2xl"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600">
              <i className="fab fa-facebook text-2xl"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600">
              <i className="fab fa-instagram text-2xl"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600">
              <i className="fab fa-linkedin text-2xl"></i>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-6 text-center">
        <p className="text-sm">
          © 2024 Bandage. All Rights Reserved.
        </p>
      </footer>
    </div>
  )
}
