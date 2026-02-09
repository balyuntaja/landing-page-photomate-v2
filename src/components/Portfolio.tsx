const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 bg-white scroll-mt-24">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 relative">
          You're Using Free Lite Version
          <span className="block w-20 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </h2>

        <div className="text-center max-w-2xl mx-auto">
          <h4 className="text-xl font-semibold text-gray-800 mb-6">
            Please, purchase full version to get all features and pages
          </h4>
          <div className="space-y-2 text-gray-600 mb-8">
            <p><strong>Including:</strong></p>
            <p>- All Pages (Like Demo)</p>
            <p>- All Elements and Features</p>
            <p>- Documentation File</p>
            <p>- Permission to Use in Commercial Projects</p>
            <p>- Footer Credit Removal</p>
            <p>- Working Contact Form</p>
            <p>- Portfolio Sections</p>
            <p>- SASS Files</p>
          </div>
          <a
            href="#"
            className="inline-block px-10 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition-colors duration-300 shadow-lg hover:shadow-xl text-lg"
          >
            Purchase Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
