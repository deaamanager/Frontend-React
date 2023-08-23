import Image from "next/image";
function LoadingPage() {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-[#252525] ">
      <div>
        <Image
          src="https://cdn.sanity.io/images/7n5v8za3/production/02c66b9bea28ea8ae320f3fc0a644b92d855ce07-800x600.gif"
          alt="Loader-Gif"
          width={200}
          height={200}
          className=""
        />
      </div>
    </div>
  );
}

export default LoadingPage;
