import Image from "next/image";

const teamMembers = [
  {
    name: "Supun Chathuranga",
    role: "Team Leader",
    image: "/images/testimonials/supun.jpg", // Replace with actual image path
  },
  {
    name: "Madura Subash",
    role: "Team Member",
    image: "/images/testimonials/madhura.jpg", // Replace with actual image path
  },
  {
    name: "Chandika Prabashwara",
    role: "Team Member",
    image: "/images/testimonials/chandika.png", // Replace with actual image path
  },
  {
    name: "Dr. Chamara Liyanage",
    role: "Main Supervisor",
    image: "/images/testimonials/CHAMARA.png", // Replace with actual image path
  },
  {
    name: "Dr. Eranga Jayasekara",
    role: "Co-Supervisor",
    image: "/images/testimonials/eranga.jpg", // Replace with actual image path
  },
];

const Contact = () => {
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-3 gap-4 justify-center">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <div className="relative inline-block">
                <Image src={member.image} alt={member.name} width={120} height={120} className="rounded-full" />
              </div>
              <div className="mt-2">
                <h3 className="text-lg font-bold text-black dark:text-white">{member.name}</h3>
                <p className="text-sm text-gray-500">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;