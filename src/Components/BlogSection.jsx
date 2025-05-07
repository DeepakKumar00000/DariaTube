import React from 'react';

const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      tag: 'Insights',
      image: 'Blog1.png',
      title: 'The Art Of The Awkward Pause: Timing In Stand-Up',
      description:
        'In comedy, silence can be just as powerful as the punchline. The awkward pause creates tension, heightens anticipation, and makes the eventual joke hit harder. Great comedians master the pause to let the audience squirm — then explode with laughter.',
    },
    {
      id: 2,
      tag: 'Tips',
      image: 'Blog2.jpg',
      title: 'Comedy Or Therapy? When Stand-Up Gets Real',
      description:
        'Sometimes laughter is just a mask for pain. Many stand-up acts dive deep into personal struggles, turning trauma into punchlines. For comedians, the stage can feel like a therapy couch — and the audience, a room full of understanding strangers.',
    },
    {
      id: 3,
      tag: 'Stories',
      image: 'Blog3.jpg',
      title: 'Punchlines & Panic Attacks: The Truth Behind Stage Nerves',
      description:
        'Beneath the spotlight and steady flow of punchlines lies a heart racing with anxiety. Stage fright doesn’t spare even the funniest performers — the pressure to deliver laughs can trigger real panic. But in facing those nerves, comedians find strength, authenticity.',
    },
  ];

  return (
    <div className="py-16 px-4 md:px-12 lg:px-20 bg-white text-black ">
      <div className="text-center mb-12 ">
        <h2 className="text-4xl font-extrabold text-[#FF6427]">"Mic Drop? Still a Joke Machine!"</h2>
        <p className="text-gray-600 mt-2">
        "Mic’s down, but I’m still firing jokes like it’s open mic night!"
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1300px] mx-auto">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="relative">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-64 object-cover"
              />
              <span className="absolute top-4 left-4 bg-[#FEF335] text-black font-bold px-3 py-1 text-sm rounded-md shadow">
                {blog.tag}
              </span>
            </div>
            <div className="p-5">
              <h3 className="text-lg font-extrabold text-black mb-2">{blog.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{blog.description}</p>
              <a href="#" className="text-red-600 font-semibold">
                Read More &raquo;
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
