
const OurFeatures = () => {

    const features = [
        {
          id: 1,
          title: "Best Certified Speaker",
          description: "Experience top-notch keynote speakers and industry experts who bring valuable insights to your corporate events.",
        },
        {
          id: 2,
          title: "Brand Digital Ideas",
          description: "Unlock innovative ideas and strategies that will help elevate your brand's digital presence and impact.",
        },
        {
          id: 3,
          title: "Networking Opportunities",
          description: "Connect with like-minded professionals, build valuable relationships, and expand your network.",
        },
        {
          id: 4,
          title: "Live Stream & Recording",
          description: "Extend the reach of your events with live streaming and provide access to recorded content for a broader audience.",
        },
        {
          id: 5,
          title: "Feedback and Surveys",
          description: "Gather valuable feedback and insights from participants through surveys and feedback mechanisms.",
        },
        {
          id: 6,
          title: "Additional Feature",
          description: "Explore an extra feature that enhances your corporate event experience even further.",
        },
      ];
      

      



  return (
<section className="m-4 md:m-8 text-gray-100">

	<div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
    {features.map((feature) => (
  <div data-aos="fade-up"
  data-aos-duration="800" key={feature.id} className="flex flex-col items-center md:mx-0 mx-6 p-4">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 text-violet-400">
      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
    </svg>
    <h3 className="my-3 text-2xl font-semibold text-center">{feature.title}</h3>
    <div className="space-y-1 leadi">
      <p className="lg:px-12 px-6 text-justify text-gray-400">{feature.description}</p>
    </div>
  </div>
))}

	</div>
</section>
  )
}

export default OurFeatures
