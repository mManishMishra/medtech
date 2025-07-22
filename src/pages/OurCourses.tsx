import CourseCard from "../components/CoursesCard";
import placeholderImg from "../assets/data_bootcamp.jpg"; // Add a placeholder image to your assets

const courses = [
  {
    image: placeholderImg,
    title: "AIR CONDITIONER",
    price: "₹2999",
    startDate: "Aug 10, 2025",
    duration: "24 months",
    students: 20,
  },
  {
    image: placeholderImg,
    title: "ELECTRICAL",
    price: "₹2999",
    startDate: "Aug 10, 2025",
    duration: "24 months",
    students: 20,
  },
  {
    image: placeholderImg,
    title: "ELECTRICIAN",
    price: "₹2999",
    startDate: "Aug 10, 2025",
    duration: "24 months",
    students: 20,
  },
  {
    image: placeholderImg,
    title: "ELECTRONIC",
    price: "₹2999",
    startDate: "Aug 10, 2025",
    duration: "24 months",
    students: 20,
  },
  {
    image: placeholderImg,
    title: "FITTER",
    price: "₹2999",
    startDate: "Aug 10, 2025",
    duration: "24 months",
    students: 20,
  },
  {
    image: placeholderImg,
    title: "PIPE FITTER",
    price: "₹2999",
    startDate: "Aug 10, 2025",
    duration: "24 months",
    students: 20,
  },
  {
    image: placeholderImg,
    title: "MAINTENANCE FITTER",
    price: "₹2999",
    startDate: "Aug 10, 2025",
    duration: "24 months",
    students: 20,
  },
  {
    image: placeholderImg,
    title: "INSTRUMENT FITTER",
    price: "₹2999",
    startDate: "Aug 10, 2025",
    duration: "24 months",
    students: 20,
  },
  {
    image: placeholderImg,
    title: "MECHANICAL FITTER",
    price: "₹2999",
    startDate: "Aug 10, 2025",
    duration: "12 months",
    students: 20,
  },
  {
    image: placeholderImg,
    title: "DIESEL MECHANIC",
    price: "₹2999",
    startDate: "Aug 10, 2025",
    duration: "12 months",
    students: 20,
  },
  {
    image: placeholderImg,
    title: "ARC/TIG WELDER",
    price: "₹2999",
    startDate: "Aug 10, 2025",
    duration: "12 months",
    students: 20,
  },
  {
    image: placeholderImg,
    title: "COMPUTER DCA, ADCA, DTP, TALLY",
    price: "₹2999",
    startDate: "Aug 10, 2025",
    duration: "12 months",
    students: 20,
  },
  {
    image: placeholderImg,
    title: "COMPUTER HARDWARE",
    price: "₹2999",
    startDate: "Aug 10, 2025",
    duration: "12 months",
    students: 20,
  },
  {
    image: placeholderImg,
    title: "PLUMBER PPR, CPVC, PVC, GI",
    price: "₹2999",
    startDate: "Aug 10, 2025",
    duration: "12 months",
    students: 20,
  },
  {
    image: placeholderImg,
    title: "RIGGER",
    price: "₹2999",
    startDate: "Aug 10, 2025",
    duration: "6 months",
    students: 20,
  },
  {
    image: placeholderImg,
    title: "MESSON",
    price: "₹2999",
    startDate: "Aug 10, 2025",
    duration: "3 months",
    students: 20,
  },
  {
    image: placeholderImg,
    title: "JCB, PROKLEN, CRAIN",
    price: "₹2999",
    startDate: "Aug 10, 2025",
    duration: "6 months",
    students: 20,
  },
  {
    image: placeholderImg,
    title: "SETRING CARPENTER",
    price: "₹2999",
    startDate: "Aug 10, 2025",
    duration: "12 months",
    students: 20,
  },
  {
    image: placeholderImg,
    title: "AUTOMOBILE MECHANICS",
    price: "₹2999",
    startDate: "Aug 10, 2025",
    duration: "12 months",
    students: 20,
  },
  {
    image: placeholderImg,
    title: "CIVIL COURSE",
    price: "₹2999",
    startDate: "Aug 10, 2025",
    duration: "3 months",
    students: 20,
  },
  {
    image: placeholderImg,
    title: "STRUCTURE FITTER",
    price: "₹2999",
    startDate: "Aug 10, 2025",
    duration: "3 months",
    students: 20,
  },
  {
    image: placeholderImg,
    title: "LAND SURVEYOR",
    price: "₹2999",
    startDate: "Aug 10, 2025",
    duration: "12 months",
    students: 20,
  },
  {
    image: placeholderImg,
    title: "BEAUTICIAN",
    price: "₹2999",
    startDate: "Aug 10, 2025",
    duration: "12 months",
    students: 20,
  },
  {
    image: placeholderImg,
    title: "LEARN STITCHING",
    price: "₹2999",
    startDate: "Aug 10, 2025",
    duration: "12 months",
    students: 20,
  },
  {
    image: placeholderImg,
    title: "FIRE & SAFETY",
    price: "₹2999",
    startDate: "Aug 10, 2025",
    duration: "12 months",
    students: 20,
  },
];

// const coursesUrl = `${import.meta.env.VITE_SERVER_URL}/api/courses`;
const OurCourses = () => {
  // const [courses, setCourses] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState("");

  // useEffect(() => {
  //   const fetchCourses = async () => {
  //     try {
  //       const res = await fetch(coursesUrl);
  //       if (!res.ok) throw new Error("Failed to fetch courses");
  //       const data = await res.json();
  //       setCourses(data); // assuming API returns an array of course objects
  //     } catch (err) {
  //       setError("⚠️ Something went wrong while fetching courses.");
  //       console.error("API fetch error:", err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchCourses();
  // }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-950 py-12 px-4 sm:px-6 lg:px-12">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
        🚀 Our Featured Courses
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {courses.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>
    </div>
  );
};

export default OurCourses;
