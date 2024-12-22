import Image from "next/image";
import homePageImage from "../../../../../assets/images/homePageImage.jpg";

async function HomePage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return (
    <div>
      <Image src={homePageImage} alt="Home Page" className="min-w-full" />
    </div>
  );
}

export default HomePage;
