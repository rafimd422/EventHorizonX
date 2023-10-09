import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Service = () => {
  const [service, setService] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  return (
    <div className="h-fit my-20 ">
<h3 data-aos="zoom-in-up"
data-aos-duration="1000" className="text-3xl font-bold border-b-2 border-red-600 p-3 w-fit mx-auto">Our Services</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-16 mx-auto shadow-lg container">
        {service.map((service) => (
          <div
          data-aos="zoom-in-down"
          data-aos-duration="1500"
            className="max-w-sm rounded overflow-hidden shadow-xl mx-auto border-gray-600 md:p-0 p-5 bg-[#080d1d]"
            key={service.id}
          >
            <img className="w-full" src={service.img} alt={service.title} />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{service.title}</div>
              <p className="text-gray-400 text-base">
                {service.description.slice(0, 130)}
                
                <Link className="text-blue-600 font-bold" to={`/serviceDetails/${service.id}`}>
                  Read more...
                </Link>
              </p>
              <br />
              <p>Price is Depends on your requirement</p>
            </div>

            <div className="px-6 pt-4 pb-2">
              {service.hashtags.map((hash) => (
                <span
                  className="inline-block bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                  key={hash}
                >
                  {hash}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
