import Image from "next/image";
import Link from "next/link";
import { serviceData } from "@/data/serviceData";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";

export default async function ServiceDetails({
  params,
}: {
  params: { id: string };
}) {
  const service = serviceData.find((s) => s.id === params.id);

  if (!service) {
    notFound();
  }

  return (
    <div className="pt-[98px] w-screen mx-auto flex flex-col items-center !font-sans">
      <div className="max-w-content mx-auto">
        {/* Hero Section */}
        <div className="flex gap-3 pt-[40px]">
          <Image
            src={service.details.heroSection.images[0] || "/placeholder.svg"}
            alt=""
            width={575}
            height={588}
            className="max-w-[575px] h-[588px] object-cover"
          />
          <div
            className="w-[490px] h-[588px] bg-black/95 text-gray-300 grid place-content-center space-y-[20px] px-[30px]"
            style={{
              backgroundImage: "url('/images/texture-overlay.svg')",
              backgroundSize: "cover",
              backgroundPosition: "right center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <p className="text-sm tracking-wide">OUR PROFESSIONAL SERVICES</p>
            <p className="text-[38px] font-bold text-white">
              {service.title.split(" ").slice(0, -1).join(" ")}{" "}
              <span className="text-[#C17C0E]">
                {service.title.split(" ").slice(-1)}
              </span>
            </p>
            <p>{service.details.heroSection.summary}</p>
            <Link href="/contact" className="underline text-white">
              GET IN TOUCH
            </Link>
          </div>
          <div className="w-[322px] flex flex-col gap-3">
            {service.details.heroSection.images.slice(1).map((image, index) => (
              <Image
                key={index}
                src={image || "/placeholder.svg"}
                alt={`Palm service ${index + 2}`}
                width={322}
                height={280}
                className="w-full h-full object-cover"
              />
            ))}
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full ">
          <div className="py-16">
            <div className="text-center mb-12">
              <p className="text-sm uppercase tracking-wider text-gray-600 mb-2">
                OUR PROFESSIONAL SERVICES
              </p>
              <h1 className="text-4xl font-bold text-gray-900">
                {service.title}
              </h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Content Column */}
              <div className="space-y-8">
                <div className="prose max-w-none">
                  <p className="text-gray-700 leading-relaxed">
                    {service.details.content.overview}
                  </p>
                </div>

                <div className="space-y-6">
                  <h2 className="text-xl font-semibold text-gray-900">
                    What our maintenance contracts include:
                  </h2>
                  <ul className="space-y-4">
                    {service.details.content.serviceHighlights.map(
                      (highlight, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="text-primary text-xl"><ChevronRight/></span>
                          <span className="text-gray-700">{highlight}</span>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>

              {/* Image Column */}
              <div className="relative h-[600px] rounded-lg overflow-hidden">
                <Image
                  src={
                    service.details.heroSection.images[0] ||
                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-9F2WinKvnGRw6HTYDoKOEAUgST4giB.png"
                  }
                  alt="Palm maintenance service"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="py-[80px]">
          <div className="grid grid-cols-4 gap-4 auto-rows-[200px]">
            {service.details.galleryImages.map((image, index) => {
              // Determine if image should span multiple rows
              const spanClass = index % 3 === 0 ? "row-span-1" : "row-span-2";

              return (
                <div
                  key={index}
                  className={`relative overflow-hidden ${spanClass}`}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`Gallery image ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
