const ErrorPage401 = ({ errorCode, errorTitle, errorDescription, errorImage }) => {
    return (
      <div className="min-h-[80vh] flex items-center justify-center bg-gray-100 p-4">
        <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col md:flex-row items-center max-w-4xl w-full">
          <img
            src={errorImage}
            alt="Error Illustration"
            className="w-72 mb-6 md:mb-0 md:mr-8"
          />
          <div className="text-center md:text-left">
            <h1 className="text-6xl font-bold text-blue-700 mb-2">{errorCode}</h1>
            <h2 className="text-2xl font-semibold mb-2">{errorTitle}</h2>
            <p className="text-gray-500 mb-6">{errorDescription}</p>
            <a
              href="/"
              className="inline-block border border-blue-700 text-blue-700 px-4 py-2 rounded hover:bg-blue-700 hover:text-white transition"
            >
              ← Back To Home
            </a>
          </div>
        </div>
      </div>
    );
  };
  
  export default ErrorPage401;
  