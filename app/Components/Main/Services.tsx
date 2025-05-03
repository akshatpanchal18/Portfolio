import Header from "@/app/Utils/Header";
import HeaderDiv from "@/app/Utils/HeaderDiv";
import { CloudSVG, MobileSVG, WebSVG } from "@/app/Utils/SVGs";

export default function Services() {
  const services = [
    {
      title: "Web Development",
      desc: "We create modern, responsive, and scalable websites that offer seamless user experiences. Whether it's a personal blog or a large-scale web app, we ensure high performance, security, and aesthetics.",
      icon: <WebSVG height="100" width="100" />,
    },
    {
      title: "Cloud Services",
      desc: "Our cloud solutions help businesses scale efficiently. From cloud migration to infrastructure optimization, we ensure seamless integration with AWS, Azure, and Google Cloud.",
      icon: <CloudSVG height="100" width="100" />,
    },
    {
      title: "App Development",
      desc: "We specialize in building high-quality mobile and web applications that provide a smooth user experience. From concept to deployment, we create tailored solutions for your business needs.",
      icon: <MobileSVG height="100" width="100" />,
    },
  ];
  return (
    <>
      {/* <div className="max-w-7xl mx-auto lg:min-h-screen md:h-[70vh] h-screen"> */}
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-8 justify-center text-center items-center mb-8">
          {/* <Header
            tag="Our Expertise"
            title="Comprehensive Solutions Tailored for You"
            content="Leveraging cutting-edge technology, we craft innovative digital solutions that simplify processes, enhance efficiency, and drive growth. Our expertise spans web development, UI/UX design, and seamless integrations, ensuring a smarter and more rewarding digital experience for businesses and individuals alike."
            bgColor="bg-indigo-100"
          /> */}
          <HeaderDiv />
        </div>
        <div className="w-full max-w-5xl flex flex-col gap-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative p-8 bg-indigo-100 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6 flex items-center justify-center w-24 h-24 bg-gray-100 rounded-full">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
                <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-transparent to-indigo-50 opacity-0 hover:opacity-30 transition-opacity duration-300 rounded-2xl"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
