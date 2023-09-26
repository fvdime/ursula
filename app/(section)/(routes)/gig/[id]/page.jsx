import Stepper from "@/components/Stepper";
import prisma from "@/utils/connect";
import Image from "next/image";

const getGig = async (id) => {
  const res = await prisma.post.findFirst({
    where: {id: id}, select: {
      id: true,
      title: true,
      desc: true
    }
  })
  console.log(res)

  // if (!res.ok) {
  //   throw new Error("Failed!")
  // }

  return res
}

const page = async ({params}) => {
  // const slides = [
  //     {
  //       id: 1,
  //       url: '/1.jpg'
  //     },
  //     {
  //       id: 2,
  //       url: '/2.jpg'
  //     },
  //     {
  //       id: 3,
  //       url: '/3.jpg'
  //     },
  //     {
  //       id: 4,
  //       url: '/4.jpg'
  //     }
  //   ]

  // const [currentIndex, setCurrentIndex] = useState(0)

  // const prevSlide = () => {
  //   const isFirstSlide = currentIndex === 0;
  //   const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
  //   setCurrentIndex(newIndex)
  // }

  // const nextSlide = () => {
  //   const isLastSlide = currentIndex === slides.length - 1;
  //   const newIndex = isLastSlide ? 0 : currentIndex + 1;
  //   setCurrentIndex(newIndex)
  // }

  // const {slug} = params

  const data = await getGig(params.id)
  console.log(data)

  return (
    <div className="max-w-screen-xl mx-auto my-4 p-2">
      <div>
        <div>
          <Stepper />
          <h1 className="my-4 text-2xl font-semibold">
            {data?.title}
          </h1>
          <div className="border-b py-2 my-4">
            <figcaption className="flex items-center space-x-3">
              <Image
                width={24}
                height={24}
                className="w-6 h-6 rounded-full"
                src="/1.jpg"
                alt="profile picture"
              />
              <div className="flex items-center divide-x-2 divide-gray-300">
                <h3 className="pr-3 font-medium text-gray-900">Bonnie Green</h3>
                <cite className="pl-3 text-sm text-gray-500">
                  Web Developer
                </cite>
              </div>
            </figcaption>
          </div>
        </div>
        <div className="md:flex flex-row justify-between items-center">
          <div>
            <div className="relative w-full mr-4">
              <div className="relative h-96 overflow-hidden rounded-lg md:h-96">
                <div className="duration-700 ease-in-out">
                  <img
                    src="/1.jpg"
                    className="absolute block w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    alt=""
                  />
                </div>
              </div>
              <button
                // onClick={prevSlide}
                type="button"
                className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
                  <svg
                    className="w-4 h-4 text-white dark:text-gray-800"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 1 1 5l4 4"
                    />
                  </svg>
                  <span className="sr-only">Previous</span>
                </span>
              </button>
              <button
                // onClick={nextSlide}
                type="button"
                className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50  group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
                  <svg
                    className="w-4 h-4 text-white dark:text-gray-800"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                  <span className="sr-only">Next</span>
                </span>
              </button>
            </div>
            <div className="max-w-screen-md mx-auto my-4">
              <h3 className="text-lg font-semibold my-4">About This Gig</h3>
              <div />
            </div>
          </div>
          <div className="md:w-96 w-full">
            <div className="border p-4 border-gray-400 rounded-sm">
              <div className="border-b border-gray-400  py-4">
                <div className="flex flex-row items-center justify-between">
                  <div>
                    <h1 className="font-semibold text-lg mb-2">
                      Contact with creator
                    </h1>
                    <span className="font-bold text-gray-500">
                      something@gmail.com
                    </span>
                  </div>
                  <div>
                    <h1 className="font-semibold text-lg mb-2">From</h1>
                    <span className="font-bold">$199</span>
                  </div>
                </div>
              </div>
              <div className="py-4">
                <h1 className="font-semibold text-lg mb-2">About the seller</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod
                  repellendus sunt sed veritatis porro hic quas dolorum
                  explicabo quam, aperiam voluptatem culpa? Vitae itaque
                  quisquam impedit praesentium ab unde tempore.
                </p>

                <figcaption className="flex items-center space-x-3 mt-4">
                  <Image
                    width={24}
                    height={24}
                    className="w-6 h-6 rounded-full"
                    src="/1.jpg"
                    alt="profile picture"
                  />
                  <div className="flex items-center divide-x-2 divide-gray-300">
                    <h3 className="pr-3 font-medium text-gray-900">
                      Bonnie Green
                    </h3>
                    <cite className="pl-3 text-sm text-gray-500">
                      Web Developer
                    </cite>
                  </div>
                </figcaption>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
