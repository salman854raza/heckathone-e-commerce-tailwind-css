import React from 'react'

export default function TeamSection() {
  return (
    <div>
      {/* Team Section */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-16">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                id: 1,
                image: "about-1-meet-1.jpg",
                name: "John Doe",
                profession: "Software Engineer",
              },
              {
                id: 2,
                image: "about-1-meet-2.jpg",
                name: "Jane Smith",
                profession: "Product Manager",
              },
              {
                id: 3,
                image: "about-1-meet-3.jpg",
                name: "Mike Johnson",
                profession: "UX Designer",
              },
            ].map((member) => (
              <div
                key={member.id}
                className="text-center bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-[316px] h-[231px] mx-auto mb-4 object-cover rounded-lg"
                />
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-600 mb-4">{member.profession}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
