// components/FeaturedPosts.js
const FeaturedPosts = () => {
  const posts = [
    {
      id: 1,
      tag: "NEW",
      title: "Loudest à la Madison #1 (L'Integrale)",
      description: "We recount experiments and meetings related to classic physics.",
      date: "12 April 2023",
      link: "#",
      image: "/id-1.png", // Image for the first card
    },
    {
      id: 2,
      tag: "NEW",
      title: "Loudest à la Madison #1 (L'Integrale)",
      description: "We recount experiments and meetings related to classic physics.",
      date: "12 April 2023",
      link: "#",
      image: "/id-2.png", // Image for the second card
    },
    {
      id: 3,
      tag: "NEW",
      title: "Loudest à la Madison #1 (L'Integrale)",
      description: "We recount experiments and meetings related to classic physics.",
      date: "12 April 2023",
      link: "#",
      image: "/id-3.png", // Image for the third card
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-blue-500 text-sm font-semibold tracking-wide uppercase">
            Practice Articles
          </h2>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-800">
            Featured Posts
          </h1>
          <p className="text-gray-600 mt-2">
            Problems linking to resolve the conflict between the two major rules
            of classical physics' interaction molecules.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <div
              key={post.id}
              className={`relative bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-1000 hover:scale-105 hover:-translate-y-1 hover:rotate-${index % 2 === 0 ? '3' : '-3'}`}
            >
              {/* Image */}
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                {/* Tag */}
                <div className="inline-block px-3 py-1 text-sm text-white bg-red-500 rounded-full">
                  {post.tag}
                </div>

                {/* Title */}
                <h3 className="mt-4 text-lg font-semibold text-gray-800">
                  {post.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-gray-600">{post.description}</p>

                {/* Date */}
                <p className="mt-4 text-sm text-gray-400">{post.date}</p>

                {/* Button */}
                <a
                  href={post.link}
                  className="inline-block mt-6 text-blue-500 hover:text-blue-700 font-semibold text-sm transition-colors"
                >
                  Learn More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPosts;
