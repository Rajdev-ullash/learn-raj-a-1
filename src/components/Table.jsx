/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { Fragment } from "react";
import Avatar from "../assets/Avatar.png";

export default function Table({ classData }) {
  return (
    <table className="w-full">
      <thead>
        <tr className="border-b border-[#FFFFFF0D]">
          <th className="uppercase p-5 text-sm md:text-xl font-semibold md:min-w-[110px] text-left">
            ID
          </th>
          <th className="p-5 text-sm md:text-xl font-semibold text-left">
            Name
          </th>
          <th className="p-5 text-sm md:text-xl font-semibold">Scores</th>
          <th className="p-5 text-sm md:text-xl font-semibold">Percentage</th>
        </tr>
      </thead>
      <tbody>
        {classData.map((classItem, classIndex) => (
          <Fragment key={classIndex}>
            {/* Class Name Row */}
            <tr className="bg-white/5">
              <td className="p-5 text-sm md:text-xl" colSpan="4">
                {classItem.class_name}
              </td>
            </tr>

            {/* Students Rows */}
            {classItem.students.map((student, studentIndex) => (
              <tr key={student.id} className="border-b border-[#7ECEB529]">
                <td className="p-5 text-sm md:text-xl">{studentIndex + 1}</td>
                <td className="p-5 text-sm md:text-xl">
                  <div className="flex space-x-3 items-center">
                    <img
                      className="w-8 h-8"
                      src={Avatar}
                      width="32"
                      height="32"
                      alt={student.name}
                    />
                    <span className="whitespace-nowrap">{student.name}</span>
                  </div>
                </td>
                <td className="p-5 text-sm md:text-xl text-center">
                  {student.grade}
                </td>
                <td className="p-5 text-sm md:text-xl text-center">{`${student.percentage}%`}</td>
              </tr>
            ))}
          </Fragment>
        ))}
      </tbody>
    </table>
  );
}
