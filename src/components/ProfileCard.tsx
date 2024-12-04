import React from 'react';

interface ProfileCardProps {
  desc: string;
  src: string;
  name: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ desc,name, src }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img className="h-48 w-full object-cover md:w-48" src={src} alt="Imagen de perfil" />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{desc}</div>
          <p className="mt-2 text-gray-600">{name}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
