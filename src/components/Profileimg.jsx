import profile from "../assets/profile.jpg";

function Profileimg ()  {
  return (
    <div className="rounded-full border-4 select-none pointer-events-none border-white shadow-white shadow-2xl">
    <div className="border-2 border-black rounded-full ">
      <img
      src={profile}
      alt="profile"
      className="size-[500px] border-4  rounded-full object-cover"
    /></div></div>
  )
}
export default Profileimg;