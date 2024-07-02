import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="py-16 md:py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="border-b border-body-color/[.15] pb-20 dark:border-white/[.15]">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4">
              <SectionTitle
                title="About"
                paragraph="Our project, AI-Enhanced Economic Analysis for Sri Lanka, is dedicated to transforming how we understand and use economic data. By harnessing the power of artificial intelligence and machine learning, we aim to make economic reports clearer and more relatable. We bridge the gap between official government data and how people really feel about the economy. Using advanced tools, we turn complex reports into easy-to-understand summaries and provide insights into public sentiment, ensuring higher accuracy and relevance in data interpretation. Tailored specifically for Sri Lanka, our project helps ensure that economic analysis is transparent, accessible, and meaningful. By incorporating public sentiment data and offering interactive visualizations, we make economic information more relevant and engaging for everyone. Our AI-powered tools significantly enhance the accuracy of economic predictions and assessments, contributing to more informed decision-making. Join us in this journey to transform the way economic information is understood and used in Sri Lanka."
                mb="44px"
              />

              <div className="flex flex-wrap">
                <div className="w-full sm:w-1/2 lg:w-1/2 px-4">
                  <List text="AI-Driven Analysis" />
                  <List text="Sentiment Analysis" />
                  <List text="Automated Summarization" />
                </div>

                <div className="w-full sm:w-1/2 lg:w-1/2 px-4">
                  <List text="Customized for Sri Lankan Context" />
                  <List text="Public Perception Integration" />
                  <List text="Interactive Data Visualization" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
