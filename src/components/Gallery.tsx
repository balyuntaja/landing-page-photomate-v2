import { useRef, useState } from 'react';

type Category = 'All' | 'Wedding' | 'Event' | 'Corporate' | 'Birthday';

interface GalleryItem {
  id: number;
  category: Category;
  image: string;
}

const categories: Category[] = [
  'All',
  'Wedding',
  'Event',
  'Corporate',
  'Birthday',
];

const galleryItems: GalleryItem[] = [
  { id: 1, category: 'Wedding', image: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg' },
  { id: 2, category: 'Event', image: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg' },
  { id: 3, category: 'Corporate', image: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg' },
  { id: 4, category: 'Birthday', image: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg' },
  { id: 5, category: 'Wedding', image: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg' },
  { id: 6, category: 'Event', image: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg' },
  { id: 7, category: 'Corporate', image: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg' },
  { id: 8, category: 'Birthday', image: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg' },
  { id: 9, category: 'Wedding', image: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg' },
  { id: 10, category: 'Event', image: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg' },
  { id: 11, category: 'Corporate', image: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg' },
  { id: 12, category: 'Birthday', image: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg' },
];

const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const sliderRef = useRef<HTMLDivElement>(null);

  const filteredItems =
    activeCategory === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  // Ambil hanya 8 foto
  const visibleItems = filteredItems.slice(0, 8);

  const scroll = (direction: 'left' | 'right') => {
    if (!sliderRef.current) return;

    const scrollAmount = sliderRef.current.offsetWidth;
    sliderRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <section id="gallery" className="py-20 bg-white scroll-mt-24">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#364e71] text-center mb-10">
          Gallery Photomate
          <span className="block w-20 h-1 bg-[#364e71] mx-auto mt-4 rounded-full" />
        </h2>

        {/* Filter */}
        <div className="flex justify-center flex-wrap gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-sm md:text-base font-medium border transition
                ${
                  activeCategory === category
                    ? 'bg-[#364e71] text-white border-[#364e71]'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-[#364e71] hover:text-[#364e71]'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Prev */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/50 shadow-lg rounded-full py-5 px-2 mx-2 hover:bg-gray-100"
          >
            ‹
          </button>

          {/* Slider */}
          <div
            ref={sliderRef}
            className="
              flex gap-4 overflow-x-auto scroll-smooth
              snap-x snap-mandatory
              scrollbar-hide
            "
          >
            {visibleItems.map((item) => (
              <div
                key={item.id}
                className="min-w-[75%] sm:min-w-[45%] md:min-w-[30%] snap-center"
              >
                <img
                  src={item.image}
                  alt={item.category}
                  className="w-full h-full object-cover rounded-xl transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>

          {/* Next */}
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/50 shadow-lg rounded-full py-5 px-2 mx-2 hover:bg-gray-100"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
