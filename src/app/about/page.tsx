import Aboutus from "@/components/about-components/aboutus";
import BigCompannies from "@/components/about-components/companies";
import Header from "@/components/about-components/header";
import MeetTeam from "@/components/about-components/meetTeam";
import Problem from "@/components/about-components/problem";
import Work from "@/components/about-components/work";

// import Header from "@/components/Shop/header";
// import Footer from "@/components/footer";



const AboutPage = () => {
  return (
    <>
      <Header />
      <Aboutus />
      <Problem />
      <MeetTeam />
      <BigCompannies />
      <Work />
      {/* <Footer /> */}
    </>
  );
};

export default AboutPage;