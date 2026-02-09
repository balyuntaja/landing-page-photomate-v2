import team1 from '../assets/img/team/img1.png';
import team2 from '../assets/img/team/img2.png';
import team3 from '../assets/img/team/img3.png';
import team4 from '../assets/img/team/img4.png';

interface TeamMember {
  image: string;
  name: string;
  role: string;
  description: string;
  social: {
    facebook: string;
    twitter: string;
    linkedin: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    image: team1,
    name: 'Jsusna Black',
    role: 'CEO',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo quidem, excepturi facere magnam illum.',
    social: { facebook: '#', twitter: '#', linkedin: '#' },
  },
  {
    image: team2,
    name: 'Aoife Geraghty',
    role: 'Designer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo quidem, excepturi facere magnam illum.',
    social: { facebook: '#', twitter: '#', linkedin: '#' },
  },
  {
    image: team3,
    name: 'Alex S.',
    role: 'Developer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo quidem, excepturi facere magnam illum.',
    social: { facebook: '#', twitter: '#', linkedin: '#' },
  },
  {
    image: team4,
    name: 'Fernanda Anaya',
    role: 'Developer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo quidem, excepturi facere magnam illum.',
    social: { facebook: '#', twitter: '#', linkedin: '#' },
  },
];

const Team: React.FC = () => {
  return (
    <section id="team" className="py-20 bg-white scroll-mt-24">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 relative">
          Our Team Members
          <span className="block w-20 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </h2>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover object-top group-hover:scale-110 transition-transform duration-300"
                />
                {/* Social Overlay */}
                <div className="absolute inset-0 bg-primary/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-4">
                    <a
                      href={member.social.facebook}
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary hover:bg-gray-100 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z" />
                      </svg>
                    </a>
                    <a
                      href={member.social.twitter}
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary hover:bg-gray-100 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z" />
                      </svg>
                    </a>
                    <a
                      href={member.social.linkedin}
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary hover:bg-gray-100 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6.5 21.5h-5v-13h5v13zM4 6.5C2.5 6.5 1.5 5.3 1.5 4s1-2.4 2.5-2.4c1.6 0 2.5 1 2.6 2.5 0 1.4-1 2.5-2.6 2.5zm11.5 6c-1 0-2 1-2 2v7h-5v-13h5V10s1.6-1.5 4-1.5c3 0 5 2.2 5 6.3v6.7h-5v-7c0-1-1-2-2-2z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-1">
                  <a href="#" className="hover:text-primary transition-colors">
                    {member.name}
                  </a>
                </h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
