const BlogCommentForm = () => {
  return (
    <div className="flex flex-col gap-6 pt-32 pb-10">
      <div className="flex flex-col gap-6">
        <h3 className="font-semibold text-[1.375rem] text-[#242424] uppercase">
          Leave a Reply
        </h3>
        <p className="text-sm text-[#777]">
          Your email address will not be published. Required fields are marked *
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <label className="">
            Comment <span className="text-red-700">*</span>
          </label>
          <textarea className="w-full h-[190px] border-[2px] border-[#777]/30 outline-none px-4 py-2" />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="flex flex-col gap-2">
            <label className="">
              Name<span className="text-red-700">*</span>
            </label>
            <input className="w-full border-[2px] border-[#777]/30 outline-none py-2 px-4" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="">
              Email<span className="text-red-700">*</span>
            </label>
            <input className="w-full border-[2px] border-[#777]/30 outline-none py-2 px-4" />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label className="">Website</label>
          <input className="w-full border-[2px] border-[#777]/30 outline-none py-2 px-4" />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <input type="checkbox" />
        <p className="text-sm text-[#242424]">
          Save my name, email, and website in this browser for the next time I
          comment.
        </p>
      </div>
      <button className="w-max bg-primary hover:bg-[#e59b78] px-4 py-3 font-semibold text-[.8125rem] text-white uppercase">
        Post Comment
      </button>
    </div>
  );
};
export default BlogCommentForm;
