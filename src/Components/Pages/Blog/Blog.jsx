import './../About/about.css';
import { Helmet, HelmetData } from 'react-helmet-async';


const Blog = () => {
  const helmetData = new HelmetData({});
  return (
    <>
<Helmet helmetData={helmetData}>
        <title>Blog | EventHorizonX</title>
      </Helmet>
    <div className='h-screen'>
      <div className="bg h-[180px] w-full md:h-[400px] sm:h-[200px] bg-cover bg-no-repeat bg-center flex justify-center items-center">
       <p className='xl:text-5xl md:text-4xl text-2xl font-bold border-b-2 border-red-600 p-3'>Blogs</p>
      </div>
    </div>
    </>
  )
}

export default Blog
