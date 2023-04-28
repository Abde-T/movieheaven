import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faFilm, faGaugeHigh } from "@fortawesome/free-solid-svg-icons";

export default function Info({ data }) {
  return (
    <>
      <section className="bg-white border-b py-8">
        <div className="container max-w-5xl mx-auto m-8">
          <h2 data-aos="zoom-in" className="w-full my-2 p-5 text-4xl font-bold leading-relaxed	 text-center text-[#242424]">
            why choose <br className="md:hidden mb-2" />{" "}
            <span className="border bg-[#242424] rounded-b-[20px] p-1 text-[#f0dcae]">
              {" "}
              Movie Heaven ?{" "}
            </span>
          </h2>
          <div className="w-full mb-4">
            <div className="h-1 mx-auto gradient w-64 opacity-55 my-5 py-0 rounded-t"></div>
          </div>
          <div className="flex flex-wrap justify-around">
          <div data-aos="fade-right" className="m-10  w-full md:w-[250px]  rounded-2xl  shadow-2xl shadow-[#242424]   h-[250px] bg-[#242424] border-white border-2 flex flex-col justify-around items-center ">
            <div className="text-3xl text-[#242424] mt-3   shadow-lg shadow-[#f0dcae] rounded-[10px]  border-2 bg-[#f0dcae] w-[70px] h-[70px] flex justify-center items-center">
              <FontAwesomeIcon icon={faBolt} />
            </div>
            <h3 className="text-white text-2xl"> Easy and quick</h3>
            <p className="text-white text-center text-l m-2 font-[600]">
              {" "}
              Get access to the movie you desire instantly.
            </p>
          </div>
          <div data-aos="zoom-in" className="m-10  w-full md:w-[250px] rounded-2xl  shadow-2xl shadow-[#242424]  h-[250px] bg-[#242424] border-white border-2 flex flex-col justify-around items-center ">
            <div className="text-3xl text-[#242424] mt-3  shadow-lg shadow-[#f0dcae] rounded-[10px]  border-2 bg-[#f0dcae] w-[70px] h-[70px] flex justify-center items-center">
              <FontAwesomeIcon icon={faFilm} />
            </div>
            <h3 className="text-white text-2xl">10,000+ movies</h3>
            <p className="text-white text-center text-l m-2 font-[600]">
              Movie heaven has movies in all your favourite categories.
            </p>
          </div>
          <div data-aos="fade-left" className="m-10  w-full md:w-[250px]  rounded-2xl  shadow-2xl shadow-[#242424] h-[250px] bg-[#242424] border-white border-2 flex flex-col justify-around items-center ">
            <div className="text-3xl text-[#242424] mt-3   shadow-lg shadow-[#f0dcae] rounded-[10px]  border-2 bg-[#f0dcae] w-[70px] h-[70px] flex justify-center items-center">
              <FontAwesomeIcon icon={faGaugeHigh} />
            </div>
            <h3 className="text-white text-2xl">High quality</h3>
            <p className="text-white text-center text-l m-2 font-[600]">
              Experience our high quality and fast streaming service
            </p>
          </div>
          </div>
        </div>
      </section>
    </>
  );
}
