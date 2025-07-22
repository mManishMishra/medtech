import MockImg from "../assets/mock_interview.jpg";
import MentorImg from "../assets/mentorship.jpg";
import ResumeImg from "../assets/5052521.jpg";
import CoursesImg from "../assets/online_course.jpg";
const cards = [
  {
    // title: "1:1 Mock Interview In Just ₹299",
    // text: "",
    image: MockImg,
    route: "/computer",
    buttonText: "Computer DCA....",
  },
  {
    image: MentorImg,
    route: "/computer-hardware",
    buttonText: "Computer Hardware",
  },
  {
    image: ResumeImg,
    route: "/automobile",
    buttonText: "Automobile Mechanics",
  },
  {
    image: CoursesImg,
    route: "/beautician",
    buttonText: "Beautician",
  },
];

import GodHeader from "../components/GodHeader";
import { FeatureCards } from "../components/TiltCard";

const OurPorgrams = () => {
  return (
    <>
      <GodHeader title="Our Programs" />
      <FeatureCards cards={cards} />
    </>
  );
};

export default OurPorgrams;
