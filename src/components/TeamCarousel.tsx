import ImagePlaceholder from "./ImagePlaceholder";

const teamMembers = [
  {
    name: "Sandro Rodríguez",
    role: "Verbal Commendation",
    img: "/assets/images/team/sandro-rodriguez.jpg",
  },
  {
    name: "Maria Gonzalez",
    role: "Employee of the Month",
    img: "/assets/images/team/maria-gonzalez.jpg",
  },
  {
    name: "John Smith",
    role: "Project Completion",
    img: "/assets/images/team/john-smith.jpg",
  },
  {
    name: "Emily Chen",
    role: "Outstanding Performance",
    img: "/assets/images/team/emily-chen.jpg",
  },
  {
    name: "Raj Patel",
    role: "Team Leadership",
    img: "/assets/images/team/raj-patel.jpg",
  },
  {
    name: "Sophia Lee",
    role: "Innovation Award",
    img: "/assets/images/team/sophia-lee.jpg",
  },
];

export default function TeamCarousel() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {teamMembers.map((member) => (
        <div key={member.name} className="rounded-2xl overflow-hidden bg-neutral-200 relative">
          <ImagePlaceholder
            src={member.img}
            alt={member.name}
            aspectRatio="aspect-[3/4]"
            className="rounded-2xl"
          />
          <div className="absolute inset-x-4 bottom-4">
            <div className="bg-white rounded-xl px-4 py-3 shadow-sm flex items-center justify-between gap-3">
              <div>
                <p className="font-bebas text-lg text-neutral-900 leading-tight">
                  {member.name}
                </p>
                <p className="text-xs text-neutral-500">{member.role}</p>
              </div>
              <span className="h-7 w-7 rounded-md border border-neutral-200 flex items-center justify-center text-[10px] font-bold text-neutral-500">
                in
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
