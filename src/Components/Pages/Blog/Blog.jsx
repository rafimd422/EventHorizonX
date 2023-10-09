import './../About/about.css';
import { Helmet, HelmetData } from 'react-helmet-async';


const Blog = () => {
  const helmetData = new HelmetData({});






  const blogPosts = [
    {
      id: 1,
      title: "The Art of Corporate Event Design",
      description: "Explore the creative process behind designing memorable corporate events.",
      author: "Emily Smith",
      date: "October 5, 2023",
      categories: ["Event Design", "Corporate Events"],
      image: "https://i.ibb.co/wQrrpJG/dane-deaner-KLkj7on-c-unsplash.jpg"
    },
    {
      id: 2,
      title: "Effective Event Marketing Strategies",
      description: "Discover powerful marketing techniques to promote your corporate events.",
      author: "David Johnson",
      date: "September 20, 2023",
      categories: ["Event Marketing", "Corporate Events"],
      image: "https://i.ibb.co/TqLxqmc/austin-distel-Vwsuh-J9uee4-unsplash.jpg"
    },
    {
      id: 3,
      title: "Navigating Event Legalities",
      description: "Learn about the legal aspects of corporate event planning and compliance.",
      author: "Sarah Anderson",
      date: "August 12, 2023",
      categories: ["Legal Compliance", "Corporate Events"],
      image: "https://i.ibb.co/GczNRcL/jorge-gordo-W2-UH8-Ld-D3-Tc-unsplash.jpg"
    },
    {
      id: 4,
      title: "Hybrid Events: The Future of Corporate Gatherings",
      description: "Explore the benefits and strategies for hosting successful hybrid corporate events.",
      author: "Michael Brown",
      date: "July 30, 2023",
      categories: ["Hybrid Events", "Corporate Events"],
      image: "https://i.ibb.co/CzR4PHt/dylan-gillis-Kdeq-A3a-Tn-BY-unsplash.jpg"
    },
    {
      id: 5,
      title: "Creating Engaging Virtual Conferences",
      description: "Tips for planning and hosting interactive virtual corporate conferences.",
      author: "Jennifer Lee",
      date: "June 15, 2023",
      categories: ["Virtual Events", "Corporate Events"],
      image: "https://i.ibb.co/GcBNwP8/glenn-carstens-peters-RLw-UC03-Gwc-unsplash.jpg"
    },
    {
      id: 6,
      title: "Corporate Event Photography: Capturing Memories",
      description: "The role of photography in preserving the moments of corporate events.",
      author: "Daniel Carter",
      date: "May 8, 2023",
      categories: ["Event Photography", "Corporate Events"],
      image: "https://i.ibb.co/Yf4fYN5/pablo-heimplatz-ZODc-Bk-Eohk8-unsplash.jpg"
    },
    {
      id: 7,
      title: "Innovative Team Building Activities for Corporations",
      description: "Engage employees with fun team building activities that foster collaboration.",
      author: "Sophia Turner",
      date: "April 19, 2023",
      categories: ["Team Building", "Corporate Events"],
      image: "https://i.ibb.co/Tq091N6/annie-spratt-sggw4-q-DD54-unsplash.jpg"
    },
    {
      id: 8,
      title: "The Impact of Sustainable Event Practices",
      description: "How sustainable practices are shaping the future of corporate events.",
      author: "Matthew Green",
      date: "March 5, 2023",
      categories: ["Sustainability", "Corporate Events"],
      image: "https://i.ibb.co/nQZZkms/adeolu-eletu-E7-RLg-Ujjazc-unsplash.jpg"
    }
  ];
  

  

  return (
  
    <>
<Helmet helmetData={helmetData}>
        <title>Blog | EventHorizonX</title>
      </Helmet>
    <div className='h-fit'>
      <div data-aos="zoom-out-up" className="bg h-[180px] w-full md:h-[400px] sm:h-[200px] bg-cover bg-no-repeat bg-center flex justify-center items-center">
       <p className='xl:text-5xl md:text-4xl text-2xl font-bold border-b-2 border-red-600 p-3'>Blogs</p>
      </div>
      




      
    <section className="pt-20 lg:pt-[120px] pb-10 lg:pb-20">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center -mx-4">
          <div className="w-full px-4">
            <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
              <span className="font-semibold text-lg text-primary mb-2 block">
                Our Blogs
              </span>
              <h2 data-aos="zoom-out-left" className="font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4">
                Our Recent Blogs
              </h2>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap md:flex-row flex-row-reverse justify-center -mx-4">
 
        {blogPosts.map(blog =>
          ( <div key={blog.id}  data-aos="fade-up"
          data-aos-duration="3000" className="shadow-xl w-full md:w-1/2 lg:w-1/3 px-4 my-2">
          <div className="max-w-[370px] mx-auto mb-10">
            <div className="rounded overflow-hidden mb-8">
              <img
                src={blog.image}
                alt="image"
                className="w-full h-60"
              />
            </div>
            <div>
<div className="flex justify-between mx-2">

              <span className='text-sm'>{blog.author}</span>

              <span className="bg-primary rounded inline-block text-center py-1 px-4 text-xs leading-loose font-semibold text-white mb-5">
               {blog.date}
              </span>
</div>
              <h3>
                <p
                  className="font-semibold text-xl sm:text-2xl lg:text-xl xl:text-2xl mb-4 inline-block text-dark hover:text-primary"
                >
                 {blog.title}
                </p>
              </h3>
              <p className="text-base text-body-color">
              {blog.description}
              </p>
            </div>
          </div>
        </div>))}

         
        </div>
      </div>
    </section>






























    </div>
    </>
  )
}

export default Blog
