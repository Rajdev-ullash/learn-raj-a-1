/* eslint-disable react/no-unknown-property */
import Footer from "./components/Footer";
import Search from "./components/Search";
import Table from "./components/Table";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
const jsonData = {
  classes: [
    {
      class_name: "Class One",
      students: [
        { id: 1, name: "Emma Johnson", grade: "A+", percentage: 90 },
        { id: 2, name: "Daniel Smith", grade: "A", percentage: 85 },
        { id: 3, name: "Olivia Davis", grade: "B+", percentage: 78 },
        { id: 4, name: "William Wilson", grade: "B", percentage: 72 },
        { id: 5, name: "Ava Anderson", grade: "C+", percentage: 65 },
        { id: 6, name: "Liam Thompson", grade: "C", percentage: 60 },
        { id: 7, name: "Sophia Garcia", grade: "D+", percentage: 50 },
        { id: 8, name: "James Rodriguez", grade: "D", percentage: 45 },
        { id: 9, name: "Oliver Miller", grade: "F", percentage: 30 },
        { id: 10, name: "Emma Brown", grade: "F", percentage: 25 },
      ],
    },
    {
      class_name: "Class Two",
      students: [
        { id: 11, name: "Ava Moore", grade: "A+", percentage: 92 },
        { id: 12, name: "Liam Baker", grade: "A", percentage: 88 },
        { id: 13, name: "Olivia Green", grade: "B+", percentage: 80 },
        { id: 14, name: "Noah Hall", grade: "B", percentage: 75 },
        { id: 15, name: "Sophia Brooks", grade: "C+", percentage: 68 },
        { id: 16, name: "Lucas Reed", grade: "C", percentage: 62 },
        { id: 17, name: "Mia Bell", grade: "D+", percentage: 53 },
        { id: 18, name: "Ethan Powell", grade: "D", percentage: 48 },
        { id: 19, name: "Isabella Clark", grade: "F", percentage: 35 },
        { id: 20, name: "Logan Turner", grade: "F", percentage: 20 },
      ],
    },
    {
      class_name: "Class Three",
      students: [
        { id: 21, name: "Harper Ward", grade: "A+", percentage: 95 },
        { id: 22, name: "Elijah Foster", grade: "A", percentage: 90 },
        { id: 23, name: "Aria Adams", grade: "B+", percentage: 82 },
        { id: 24, name: "Mason Murphy", grade: "B", percentage: 77 },
        { id: 25, name: "Scarlett Price", grade: "C+", percentage: 70 },
        { id: 26, name: "Carter Evans", grade: "C", percentage: 64 },
        { id: 27, name: "Luna Mitchell", grade: "D+", percentage: 55 },
        { id: 28, name: "Jackson Hayes", grade: "D", percentage: 50 },
        { id: 29, name: "Evelyn Taylor", grade: "F", percentage: 40 },
        { id: 30, name: "Leo Rogers", grade: "F", percentage: 15 },
      ],
    },
  ],
};
export default function App() {
  return (
    <div className="bg-[#172227] font-[Inter] text-white">
      {/* <!-- Navbar Starts --> */}
      <Navbar />
      {/* <!-- Navbar Ends --> */}

      {/* <!-- Begin hero --> */}
      <Hero />
      {/* <!-- End Hero --> */}

      {/* <!--Begin Students table --> */}
      <section className="py-24 lg:pt-[120px] lg:pb-28">
        <div className="container">
          <div className="mb-16 flex flex-col items-center">
            <h2 className="text-3xl lg:text-[40px] mb-9 font-bold">
              <span className="text-[#00CC8C]">Students</span> of the Year
            </h2>
            {/* <!-- Search Box --> */}
            <Search />
            {/* <!-- Search Box Ends --> */}
          </div>
          <div className="max-w-[848px] mx-auto overflow-auto">
            <Table classData={jsonData.classes} />
          </div>
        </div>
      </section>

      {/* <!-- Footer --> */}
      <Footer />
    </div>
  );
}
