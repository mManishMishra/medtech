import { motion } from "framer-motion";

const OfferMarquee = () => {
  return (
    // <div className="w-full bg-gradient-to-r from-yellow-300 via-orange-500 to-red-600 py-2 overflow-hidden fixed top-0 z-50">
    //   <motion.div
    //     animate={{ x: ["100%", "-100%"] }}
    //     transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
    //     className="whitespace-nowrap text-center text-sm sm:text-base font-semibold text-black"
    //   >
    //     🚨 Limited Time Offer! Get Mentorship + Bonuses! 🎁 Only for early
    //     birds! 🕒 Claim Now → corporatebhaiya.com/offer
    //   </motion.div>
    // </div>

    <div className="w-full bg-gradient-to-r from-yellow-300 via-orange-500 to-red-600 py-2 overflow-hidden fixed top-0 z-50">
      <motion.div
        animate={{ x: ["100%", "-100%"] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="whitespace-nowrap text-center text-sm sm:text-base font-semibold text-black"
      >
        🎓 Admissions Open at MEDTECH INSTITUTE – CC Road, Near Reliance Smart
        Point, Deoria 📍 | Industry-Ready Skills • Expert Mentorship •
        Government Certifications ✅ | Enroll Today & Shape Your Future 🚀
      </motion.div>
    </div>
  );
};

export default OfferMarquee;
