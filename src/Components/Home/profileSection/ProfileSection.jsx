
import profile from '../../../assets/profile/Profile Pic (1).png';

import Rectangle1 from '../../../assets/photos/Rectangle 1.png';
import Rectangle2 from '../../../assets/photos/Rectangle 2.png';
import Rectangle3 from '../../../assets/photos/Rectangle 3.png';
import Rectangle4 from '../../../assets/photos/Rectangle 4.png';
import Rectangle5 from '../../../assets/photos/Rectangle 5.png';
import Rectangle6 from '../../../assets/photos/Rectangle 6 (1).png';
import Rectangle7 from '../../../assets/photos/Rectangle 6 (2).png';
import Rectangle8 from '../../../assets/photos/Rectangle 6.png';
import btnPlayer from '../../../assets/photos/video/Btn Player.svg'

const ProfileSection = () => {
  return (
    <div className="mx-4 p-2 md:container md:mx-auto bg-[#F6F6F6] lg:flex justify-around">
      {/* Profile Section */}
      <div className="lg:w-1/2">
        <div className="flex relative justify-between">
          <div className="flex space-x-8">
            {/* Profile Image */}
            <div className="relative" style={{ top: '-90px' }}>
              <img src={profile} alt="Profile" />
            </div>
            <div className="mt-[26px]">
              {/* Profile Information */}
              <div className="flex items-end">
                <h1 className="text-black text-[24px] font-semibold -mt-8">
                  John Doe <span className="text-4xl space-x-2">.</span>
                </h1>
                <h2 className="text-[#76A4CE] text-4 ml-2">@johndoe</h2>
              </div>
              <div>
                <p className="font-medium">
                  Astrophotographer 🌌 <br />
                  Gamer 👾
                </p>
              </div>
            </div>
          </div>
          {/* Follow Button */}
          <div className="mt-[26px]">
            <button className="bg-[#196AA0] rounded-[100px] w-[90px] h-[30px] text-white">
              Follow
            </button>
          </div>
        </div>
        
        {/* Responsive Images for Mobile */}
        <div className="flex justify-around md:hidden space-x-6 -mt-20">
          <div>
            <h1 className="font-semibold text-2xl">Photo</h1>
            <div className="grid grid-cols-2 mt-2">
              <img className="rounded-tl-md w-[80px] h-[80px]" src={Rectangle1} alt="" />
              <img className="rounded-tr-md w-[80px] h-[80px]" src={Rectangle2} alt="" />
              <img className="rounded-bl-md w-[80px] h-[80px]" src={Rectangle3} alt="" />
              <img className="rounded-br-md w-[80px] h-[80px]" src={Rectangle4} alt="" />
            </div>
            <h1 className="text-end font-medium text-xl text-[#196AA0]">More +</h1>
          </div>
          
          <div>
            <h1 className="font-semibold text-2xl mt-2">Video</h1>
            <div>
              <div className='relative'>
              <img className="h-[100px] w-[210px]" src={Rectangle5} alt="" />
              <img className=' -mt-20 ml-16' src={btnPlayer} alt="" />
              </div>
              <div className="flex space-x-1 mt-8">
                <div className='relative'>
                <img className="h-[55px] w-[70px]" src={Rectangle6} alt="" />
                <img className=' w-10 h-9 -mt-10 ml-4' src={btnPlayer} alt="" />
                </div>
               
                <div>
                <img className="h-[55px] w-[70px]" src={Rectangle7} alt="" />
                <img className=' w-10 h-9 -mt-10 ml-4' src={btnPlayer} alt="" />
                </div>
             <div>
             <img className="h-[55px] w-[70px]" src={Rectangle8} alt="" />
             <img className=' w-10 h-9 -mt-10 ml-4' src={btnPlayer} alt="" />
             </div>
              </div>
            </div>
            <h1 className="text-end font-medium text-xl text-[#196AA0]">More +</h1>
          </div>
        </div>

        {/* Content Section */}
        <div className="space-y-2 bg-[#F1F1F1] rounded-md p-2">
          <h1 className="text-3xl font-semibold text-[#2B2B2B]">
            How Astrophotography Changed My Life
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus
            enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
            Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum
            lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in
            elementum tellus.
          </p>
          <hr className="mb-2" />
        </div>

        {/* Category Section */}
        <div className="flex justify-between">
          <ul className="flex text-[#76A4CE] space-x-1 md:space-x-4">
            <li className="bg-[#FEFEFE] rounded-lg px-2">#photography</li>
            <li className="bg-[#FEFEFE] rounded-lg px-2">#astronomy</li>
            <li className="bg-[#FEFEFE] rounded-lg px-2">#astrophotography</li>
            <li className="bg-[#FEFEFE] rounded-lg px-2">+</li>
          </ul>
          <h1 className="text-[#196AA0] md:text-2xl">read more</h1>
        </div>

        {/* Additional Content Section */}
        <div className="space-y-2 mt-5 bg-[#F1F1F1] rounded-md p-2">
          <h1 className="text-3xl font-semibold text-[#2B2B2B]">
            Which Telescope and DSLR I Use
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus
            enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
            Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum
            lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in
            elementum tellus.
          </p>
          <hr className="mb-2" />
        </div>

        {/* Additional Category Section */}
        <div className="flex justify-between">
          <ul className="flex text-[#76A4CE] space-x-1 md:space-x-4 mt-2">
            <li className="bg-[#FEFEFE] rounded-lg px-2">#photography</li>
            <li className="bg-[#FEFEFE] rounded-lg px-2">#astronomy</li>
            <li className="bg-[#FEFEFE] rounded-lg px-2">#astrophotography</li>
            <li className="bg-[#FEFEFE] rounded-lg px-2">+</li>
          </ul>
          <h1 className="text-[#196AA0] md:text-2xl">read more</h1>
        </div>
      </div>

      {/* Photo and Video Section for Desktop */}
      <div className="hidden lg:flex flex-col">
        <div>
          <h1 className="font-semibold text-2xl">Photo</h1>
          <div className="grid grid-cols-2 mt-2">
            <img className="rounded-tl-md" src={Rectangle1} alt="" />
            <img className="rounded-tr-md" src={Rectangle2} alt="" />
            <img className="rounded-bl-md" src={Rectangle3} alt="" />
            <img className="rounded-br-md" src={Rectangle4} alt="" />
          </div>
          <h1 className="text-end font-medium text-xl text-[#196AA0]">More +</h1>
        </div>
        
        <div className='relative'>
          <h1 className="font-semibold text-2xl mt-2">Video</h1>
          <img src={Rectangle5} alt="" />
          <img className=' -mt-20 ml-40' src={btnPlayer} alt="" />
          <h1 className="text-end font-medium text-xl text-[#196AA0] mt-8">More +</h1>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;

