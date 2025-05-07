

import React from 'react';

const UpcomingShows = () => {
  const shows = [
    {
      id: 1,
      image: '/khadoo1.jpg',
      title: 'Khadoo (A Khadoo Comedy)',
      About: 'About Khadoos Life',
      description:
        'Khadoo, also known as A Khadoo Comedy, is a Nigerian comedian and content Creator.',
    },
    {
      id: 2,
      image: '/khadoo2.jpg',
      title: 'Bariyu Yesufu ',
      About: 'About Yesufu Background',
      description:
        'Bariyu Yesufu is a Nigerian comedian and ventriloquist renowned for his unique blend of humor and puppetry. ',
    },
    {
      id: 3,
      image: '/khadoo3.jpg',
      title: 'Son Zuciya',
      About: 'About His Comedy',
      description:
        '"Son Zuciya" is a Hausa-language comedy series that has gained popularity for its humorous portrayal of everyday life.',
    },
    {
      id: 4,
      image: '/khadoo4.jpeg',
      title: 'Yan Pi Network',
      About: 'About Yan Pi Network',
      description:
        '"Yan Pi Network" is a Hausa-language comedy series !',
    },
  ];

  return (
    <div className="bg-[#C5D0E9] text-black px-4 md:px-12 lg:px-24 py-16">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold max-w-2xl">
            The Life of Khadoo: Where Sarcasm Was Born and Laughter Never Dies!
          </h2>
        </div>
      </div>

      <div className="space-y-8">
        {shows.map((show) => (
          <div
            key={show.id}
            className="flex flex-col md:flex-row md:items-center border-b pb-6 gap-4"
          >
            <img
              src={show.image}
              alt={show.title}
              className="w-24 h-24 rounded-full object-cover"
            />
            <div className="flex-1">
              <h3 className="text-lg font-bold">{show.title}</h3>
              <p className="text-sm text-red-600 font-semibold">{show.About}</p>
              <p className="text-sm text-gray-600 mt-1">{show.description}</p>
            </div>
            <button className="mt-4 md:mt-0 bg-[#FEF335] hover:bg-yellow-400 px-4 py-2 rounded font-semibold">
              Explore More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingShows;

