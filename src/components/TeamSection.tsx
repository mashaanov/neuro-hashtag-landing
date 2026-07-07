// components/TeamSection.tsx
import React, { useState } from "react";
import { Users } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  photo: string;
  color: string;
}

interface TeamSectionProps {
  team?: TeamMember[];
}

const TeamCard: React.FC<{ member: TeamMember; index: number }> = ({
  member,
  index,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  if (!member) return null;

  const roleParts = member.role.split(" ");
  const role = member.role;

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative cursor-pointer transform transition-all duration-500 hover:-translate-y-2"
    >
      <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-[#4D4B91] transition-all duration-500 hover:shadow-xl hover:shadow-fuchsia-500/10 h-full">
        {/* Фото с градиентом */}
        <div className="relative overflow-hidden h-56">
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10" />
          <div
            className={`absolute inset-0 bg-[#4D4B91] opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-0`}
          />
          <img
            src={member.photo}
            alt={member.name || "Team member"}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "/fallback-avatar.jpg";
            }}
          />

          {/* Индикатор роли на фото */}
          <div className="absolute top-3 right-3 z-20">
            <span className="px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider rounded-full bg-black/40 backdrop-blur-sm text-white/70 border border-white/10">
              {role}
            </span>
          </div>
        </div>

        {/* Информация */}
        <div className="relative z-10 p-5 text-center">
          <h3 className="text-lg font-bold text-white mb-1 transition-colors duration-300">
            {member.name}
          </h3>

          <p className="text-white/40 text-xs leading-relaxed line-clamp-2">
            {member.bio}
          </p>
        </div>
      </div>
    </div>
  );
};

export const TeamSection: React.FC<TeamSectionProps> = ({ team = [] }) => {
  return (
    <section className="py-20 relative z-10">
      <div className="container mx-auto px-4 md:px-6">
        {/* Заголовок */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white bg-clip-text text-transparent mb-4">
            Команда проекта
          </h2>
        </div>

        {/* Сетка карточек - центрирование через flex */}
        <div className="flex flex-wrap justify-center gap-6">
          {team.map((member, index) => (
            <div
              key={`${member.name}-${index}`}
              className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(20%-19.2px)] min-w-[200px] max-w-[300px]"
            >
              <TeamCard member={member} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
