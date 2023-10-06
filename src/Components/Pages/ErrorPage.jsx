import errorPic from '../../assets/error.png'

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center md:py-24">
      <div className="container flex flex-col-reverse md:flex-row-reverse items-center justify-center px-5 text-gray-700">
        <div className="max-w-md text-white">
          <div className="text-5xl font-bold">404</div>
          <p className="text-2xl md:text-3xl leading-normal">
            Sorry, we couldn't find this page.
          </p>
          <p className="mb-8">
            But don't worry, you can find plenty of other things on our
            homepage.
          </p>
          <button className="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-blue-600 active:bg-blue-600 hover:bg-blue-700">
            Back to homepage
          </button>
        </div>
        <div className="max-w-lg">
<img src={errorPic} alt="Error" />
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
