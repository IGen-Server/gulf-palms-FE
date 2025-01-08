import { Button } from "@/components/ui/button";
import CustomCarousel from "../common/CustomCarousel";

export default function Services() {
  const createSlide = (bgURL: string) => (
    <div
      style={{
        width: "440px",
        height: "440px",
        backgroundImage: `url(${bgURL})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="relative group/number"
    >
      <div className="absolute top-0 left-0 h-full w-full bg-black bg-opacity-50 p-5 text-white space-y-[10px]">
        <p className="text-xl font-sans">PLANTS DOCTORS</p>
        <p className="text-2xl font-bold font-arabic">GULF PALM</p>
        <p className="font-sans">
          Gulf Palms caters to a wide scope of clients ranging from
          Governmental, Commercial, Industrial to Residential. Our experienced
          team provides customized solutions from design to execution based on
          our clients.
        </p>
        <div className="w-full h-[48px] overflow-hidden !mt-4 ">
          <Button
            className="translate-y-[48px] group-hover/number:translate-y-[0px] rounded-none bg-primary transition-transform duration-500 opacity-90 hover:bg-primary hover:opacity-100 w-[113px] h-[42px] grid place-content-center"
            variant={"default"}
          >
            READ MORE
          </Button>
        </div>
      </div>
    </div>
  );

  const slidesData = [
    {
      component: createSlide(
        "https://gulfpalms.com/wp-content/uploads/2023/10/compressed-shutterstock_567716494.jpg"
      ),
    },
    {
      component: createSlide(
        "https://gulfpalms.com/wp-content/uploads/2023/10/compressed-shutterstock_106616339.jpg"
      ),
    },
    {
      component: createSlide(
        "https://gulfpalms.com/wp-content/uploads/2023/10/indoor-services-thumb.jpg"
      ),
    },
    {
      component: createSlide(
        "https://gulfpalms.com/wp-content/uploads/2023/10/DSC08580.jpg"
      ),
    },
    {
      component: createSlide(
        "https://gulfpalms.com/wp-content/uploads/2023/10/DSC08580.jpg"
      ),
    },
    {
      component: createSlide(
        "https://gulfpalms.com/wp-content/uploads/2023/10/DSC08580.jpg"
      ),
    },
  ];

  return (
    <div className="w-[1458px] mx-auto">
      <div className="pb-[30px] space-y-2 max-w-[800px] px-6">
        <p className="text-[#777777] text-[30px] font-light font-sans">
          OUR SERVICES
        </p>
        <p className="text-[#242424] font-bold text-[36px] font-arabic">
          SERVICES PROVIED BY GULF PALM
        </p>
        <p className="text-[#777777] text-[16px] font-sans">
          Our experienced team provides customized solutions from design to
          execution based on our clients needs while keeping in mind the
          agricultural environment to ensure sustainable green spaces.
        </p>
      </div>
      <div className="pb-[50px]">
        <CustomCarousel
          slidesToScroll={3}
          slidesToShow={3}
          data={[...slidesData]}
          autoPlay={true}
        />
      </div>
    </div>
  );
}
