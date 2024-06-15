import React from 'react';
import imgAboutCharacter from '../Image/Icon_Character_Archive.webp';
import DSS from '../Image/DSS.jpg';
import Button from '../Components/Button';
import imgHistory from '../Image/Icon_Mail.webp';

export default function Home() {
  return (
    <div className="flex justify-center bg-yellow-300" style={{ backgroundImage: `url(${DSS})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundColor: 'rgba(0, 0, 0, 1)' }}>
      <div className="Genshin-Impact h-screen flex flex-col justify-center items-center">
        <h2 className="md:text-6xl sm:text-4xl text-center text-white mt-4 pb-8" style={{ textShadow: '1px 1px 0 #7E22CE' }}>
          Welcome to <br />
          DSS Calculator
        </h2>
        <div className="grid grid-cols-2 gap-4" style={{ width: '800px' }}>
          <Button to="/WP" text="WP" imageSrc={imgAboutCharacter} alt="Logo WP" className="w-full h-full" />
          <Button to="/AHP" text="AHP" imageSrc={imgAboutCharacter} alt="Logo AHP" className="w-full h-full" />
          <Button to="/COPRAS" text="COPRAS" imageSrc={imgAboutCharacter} alt="Logo COPRAS" className="w-full h-full" />
          <Button to="/PM" text="PM" imageSrc={imgAboutCharacter} alt="Logo PM" className="w-full h-full" />
        </div>
        <div className="mt-4" style={{ width: '400px' }}>
          <Button to="/History" text="History" imageSrc={imgHistory} alt="Logo History" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
}
