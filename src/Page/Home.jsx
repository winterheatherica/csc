import React from 'react';
import imgAboutCharacter from '../Image/Icon_Character_Archive.webp';
import DSS from '../Image/DSS.jpg';
import Button from '../Components/Button';

export default function Home() {
  return (
    <div className="flex justify-center bg-purple-300" style={{ backgroundImage: `url(${DSS})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundColor: 'rgba(0, 0, 0, 1)' }}>
      <div className="Genshin-Impact h-screen flex flex-col justify-center items-center">
        <h2 className="md:text-6xl sm:text-4xl text-center text-white mt-4 pb-8" style={{ textShadow: '1px 1px 0 #7E22CE' }}>
        Welcome to <br />
        Decision Support System <br />
        Calculation
        </h2>
        <div className="flex flex-col justify-center items-center" style={{ width: '800px' }}>
          <Button to="/WP" text="WP" imageSrc={imgAboutCharacter} alt="Logo WP" />
          <Button to="/AHP" text="AHP" imageSrc={imgAboutCharacter} alt="Logo AHP" />
          <Button to="/TOPSIS" text="TOPSIS" imageSrc={imgAboutCharacter} alt="Logo TOPSIS" />
        </div>
      </div>
    </div>
  );
}
