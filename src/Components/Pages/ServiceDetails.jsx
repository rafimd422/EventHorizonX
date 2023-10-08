import { Helmet, HelmetData } from 'react-helmet-async';
import { FaBug, FaNewspaper, FaPhoneVolume, FaWpforms } from 'react-icons/fa6';
import { useLoaderData, useParams } from 'react-router-dom'
import Speakers from './speakers';

const ServiceDetails = () => {
  const { id } = useParams()
  const data = useLoaderData()
  const parseId = parseInt(id)
  // console.log(data, parseId)

  const getData = data.find(data => data.id === parseId)
  console.log(getData)
  const { title, description, hashtags, img } = getData;
  const helmetData = new HelmetData({});

  return (
    <>
      <Helmet helmetData={helmetData}>
        <title>{title} | EventHorizonX</title>
      </Helmet>
      <div className='container mx-auto mt-4'>
        <img src={img} className='xl:w-9/12 mx-auto w-full sm:p-0 p-2' alt="" />
        <h3 className='my-3 lg:text-4xl text-3xl font-bold sm:ms-0 ms-4 text-red-300'>{title}</h3>
        <p className='my-3 sm:p-2 p-4 text-justify'>{description}</p>
      </div>

      <Speakers />

      <div>
        <p className='container mx-auto text-justify mt-4 sm:p-1 p-4'>We understand that every corporate event has a unique story to tell, and we are dedicated to helping you craft and narrate that story brilliantly, ensuring that it resonates with your audience, leaves a lasting impression, and aligns seamlessly with your corporate mission and vision.</p>
        <h3 className='lg:text-4xl sm:text-3xl text-2xl text-center font-bold mt-12 text-red-200'>Contact With Us for Any Query</h3>
        <div className="flex justify-center w-full">
          <div className="w-full lg:w-7/12 md:my-16 my-12">
            <div className="flex flex-wrap justify-center sm:ms-0 ms-24">
              {/* Technical Support */}
              <div className="mb-12 w-full sm:w-1/2 md:w-1/2 lg:w-1/4 mx-auto md:px-3 lg:px-6">
                <div className="flex justify-center items-center">
                  <div className="mr-4">
                    <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                      <FaPhoneVolume />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <p className="mb-2 font-bold dark:text-white">Technical Support</p>
                    <p className="text-neutral-500 dark:text-neutral-200">
                      Email: <a href="">support@example.com</a>
                    </p>
                    <p className="text-neutral-500 dark:text-neutral-200">
                      Phone: +1 234-567-89
                    </p>
                  </div>
                </div>
              </div>

              {/* Sales Questions */}
              <div className="mb-12 w-full sm:w-1/2 md:w-1/2 lg:w-1/4 mx-auto md:px-3 lg:px-6">
                <div className="flex items-start">
                  <div className="mr-4">
                    <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                      <FaWpforms />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <p className="mb-2 font-bold dark:text-white">Sales Questions</p>
                    <p className="text-neutral-500 dark:text-neutral-200">
                      Email: <a href="">sales@example.com</a>
                    </p>
                    <p className="text-neutral-500 dark:text-neutral-200">
                      Phone: +1 234-567-89
                    </p>
                  </div>
                </div>
              </div>

              {/* Press */}
              <div className="mb-12 w-full sm:w-1/2 md:w-1/2 lg:w-1/4 mx-auto md:px-3 lg:px-6">
                <div className="flex items-start">
                  <div className="mr-4">
                    <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                      <FaNewspaper />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <p className="mb-2 font-bold dark:text-white">Press</p>
                    <p className="text-neutral-500 dark:text-neutral-200">
                      Email: <a href="">press@example.com</a>
                    </p>
                    <p className="text-neutral-500 dark:text-neutral-200">
                      Phone: +1 234-567-89
                    </p>
                  </div>
                </div>
              </div>

              {/* Bug Report */}
              <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 mx-auto md:px-3 lg:px-6">
                <div className="flex items-start">
                  <div className="mr-4">
                    <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                      <FaBug />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <p className="mb-2 font-bold dark:text-white">Bug Report</p>
                    <p className="text-neutral-500 dark:text-neutral-200">
                      Email: <a href="">bugs@example.com</a>
                    </p>
                    <p className="text-neutral-500 dark:text-neutral-200">
                      Phone: +1 234-567-89
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ServiceDetails;
