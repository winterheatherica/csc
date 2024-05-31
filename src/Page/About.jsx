import React from 'react';
import OurDescription from '../Components/OurDescription';
import DSS from '../Image/DSS.jpg';

const About = () => {
  return (
    <div className="flex justify-center items-center h-screen" style={{ backgroundImage: `url(${DSS})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
      <div className="grid rounded-lg border-2 border-purple-300" style={{ backgroundColor: 'rgba(0, 0, 0, 0.75)', width: '500px' }}>
        <div className="py-10 flex justify-center items-start border-4 border-purple-300">
          <OurDescription
            title="About Me"
            title1="Name"
            title2="Role"
            title3="Description"
            content1="Admint Keqing"
            content2="Badut Kalku"
            content3={
              <>
                Mahasiswa yang gemar bermain Genshin Impact <br />
              </>
            }
          />
        </div>
      </div>
    </div>
  );
}

export default About;
