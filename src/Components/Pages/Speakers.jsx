import speaker1 from './../../assets/speaker1.jpg';
import speaker2 from './../../assets/speaker2.jpg';
import speaker3 from './../../assets/speaker3.jpg';
import speaker4 from './../../assets/speaker4.jpg';

const Speakers = () => {
  const speakers = [
    {
      name: 'Dr. Emily Parker',
      designation: 'Keynote Speaker',
      img: speaker1,
      id: 1,
    },
    {
      name: 'Mark Johnson',
      designation: 'Thought Leader',
      img: speaker2,
      id: 2,
    },
    {
      name: 'Sarah Anderson',
      designation: 'Innovator in Residence',
      img: speaker3,
      id: 3,
     },
    {
      name: 'David Lee',
      designation: 'Industry Expert',
      img: speaker4,
      id: 4,
    },
  ];

  return (
    <div className='container mx-auto my-4'>
      <p className='lg:text-4xl text-2xl font-bold text-center my-6 mb-8 text-red-300'>Meet the Visionaries: Our Esteemed Speakers</p>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 justify-center">
        {speakers.map((speaker) => (
          <div key={speaker.id} className="card mx-auto card-compact w-96 bg-gray-900 shadow-xl">
            <figure><img src={speaker.img} className='h-64 w-full object-cover' alt={speaker.name} /></figure>
            <div className="card-body">
              <h2 className="card-title">{speaker.name}</h2>
              <p>{speaker.designation}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Speakers;
