import user from "@/assets/user_pic.jpg";

export default function Avatar({ src = user, alt = "", size = 10 }) {
  return (
    <>
      <div className="group relative !cursor-pointer ">
        <img
          src={src}
          alt={alt}
          className={`w-${size} h-${size}  rounded-full`}
          style={{ width: `${size * 4}px`, height: `${size * 4}px` }}
        />
      </div>
      {/* <div className="absolute left-0 top-2 z-10 hidden w-96 space-y-3 rounded-lg bg-white shadow-2xl group-hover:block">
        <ProfileInfoCard />
      </div> */}
    </>
  );
}
