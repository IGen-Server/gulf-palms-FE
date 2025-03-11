import BlogPostCard from "../BlogPostCard";
import { CustomBreadCrumb } from "@/components/common/CustomBreadCrumb";

const decorationPosts = [
  {
    title: "Exploring Atlanta’s modern homes",
    description:
      "Vivamus enim sagittis aptent hac mi dui a per aptent suspendisse cras odio bibendum augue rhoncus laoreet dui praesent sodales sodales. Dignissim fusce ullamcorper volutpat habitasse tincidunt parturient enim tempor facilisi nostra lobortis proin primis litora",
    image: "https://gulfpalms.com/wp-content/uploads/2021/08/wd-blog-9.jpg",
  },
  {
    title: "Creative water features and exterior",
    image: "https://gulfpalms.com/wp-content/uploads/2021/08/wd-blog-5.jpg",
    description:
      "Ac haca ullamcorper donec ante habi tasse donec imperdiet eturpis varius per a augue magna hac. Nec hac et vestibulum duis a tincidunt per a aptent interdum purus feugiat a id aliquet erat himenaeos nunc torquent euismod adipiscing adipiscing dui gravida justo.",
  },
  {
    title: "New home decor from John Doerson",
    image: "https://gulfpalms.com/wp-content/uploads/2021/08/wd-blog-2.jpg",
    description:
      "Ullamcorper condimentum erat pretium velit at ut a nunc id a adeu vestibulum nibh urna nam consequat erat molestie lacinia rhoncus. Nisi a diamida himenaeos condimentum laoreet pera neque habitant leo feugiat viverra nisl sagittis a curabitur parturient nisi adipiscing.",
  },
];

const inspirationData = [
  {
    title: "Green interior design inspiration",
    image: "https://gulfpalms.com/wp-content/uploads/2021/08/wd-blog-8.jpg",
    description:
      "A sed a risusat luctus esta anibh rhoncus hendrerit blandit nam rutrum sitmiad hac. Cras a vestibulum a varius adipiscing ut dignissim ullamcorper libero fermentum dis aliquet tellus mollis et tristique sodales. Suspendisse vel mi etiam ullamcorper",
  },
  {
    title: "Minimalist Japanese-inspired furniture",
    image: "https://gulfpalms.com/wp-content/uploads/2021/08/wd-blog-1.jpg",
    description:
      "A taciti cras scelerisque scelerisque gravida natoque nulla vestibulum turpis primis adipiscing faucibus scelerisque adipiscing aliquet pretium. Et iaculis mi velit tincidunt vestibulum a duis tempor non magna ultrices porta malesuada ullamcorper scelerisque",
  },
];

const designPosts = [
  {
    title: "Reinterprets the classic bookshelf",
    image: "https://gulfpalms.com/wp-content/uploads/2021/08/wd-blog-6.jpg",
    description:
      "Aliquet parturient scele risque scele risque nibh pretium parturient suspendisse platea sapien torquent feugiat parturient hac amet. Volutpat nullam montes mollis ad mauris in orci eleifend per eu pulvinar sociosqu primis hendrerit parturient volutpat a volutpat",
  },
  {
    title: "The big design: Wall likes pictures",
    image: "https://gulfpalms.com/wp-content/uploads/2021/08/wd-blog-3.jpg",
    description:
      "Parturient in potenti id rutrum duis torquent parturient sceler isque sit vestibulum a posuere scelerisque viverra urna. Egestas tristique vestibulum vestibulum ante vulputate penati bus a nibh dis parturient cum a adipiscing nam condimentum quisque enim",
  },
];

const furniturePosts = [
  {
    title: "Collar brings back coffee brewing ritual",
    image: "https://gulfpalms.com/wp-content/uploads/2021/08/wd-blog-7.jpg",
    description:
      "Adipiscing hac imperdiet id blandit varius scelerisque at sagittis libero dui dis volutpat vehicula mus sed ut. Lacinia dui rutrum arcu cras a at conubia a condimentum curabitur dictumst cum consectetur ullamcorper",
  },
  {
    title: "Sweet seat: functional seat for IT folks",
    image: "https://gulfpalms.com/wp-content/uploads/2021/07/wd-blog-4.jpg",
    description:
      "A sed a risusat luctus esta anibh rhoncus hendrerit blandit nam rutrum sitmiad hac. Cras a vestibulum a varius adipiscing ut dignissim ullamcorper libero fermentum dis aliquet tellus mollis et tristique sodales. Suspendisse vel mi etiam ullamcorper parturient",
  },
];

const page = async ({
  params,
}: {
  params: Promise<{
    id: any;
    slug: string;
  }>;
}) => {
  const slug = (await params).slug;

  const breadcrumbLinks = [
    { name: "Home", arabicName: "Home", href: "/" },
    {
      name: 'Archive by Category "Decoration"',
      arabicName: 'Archive by Category "Decoration"',
      href: "",
    },
  ];

  return (
    <div className="max-w-[1222px] mx-auto mt-[98px]">
      <div className="flex flex-col items-center">
        <h1
          className={`mb-3 text-4xl lg:text-[4.25rem] lg:leading-[5.125rem] font-bold text-black`}
        >
          Decoration
        </h1>
        <CustomBreadCrumb links={breadcrumbLinks} />
      </div>
      <div className="grid grid-cols-3 gap-5">
        {decorationPosts.map((post, index) => (
          <BlogPostCard key={index} post={post} slug={slug} />
        ))}
      </div>
    </div>
  );
};
export default page;
