import Timetable from '@/components/Timetable';
import React from 'react'

const CSCTimetable = () => {
  return (
    <section className="py-6">
        <div className="container flex flex-col items-center gap-4">
        <h1 className="text-2xl mb-2 text-center">
          UNIVERSITY OF PORT HARCOURT
          FACULTY OF SCIENCE
          DEPARTMENT OF COMPUTER SCIENCE
          (BSc FULL-TIME) FIRST SEMESTER LECTURE TIMETABLE 2021-2023
        </h1>
          <div className="w-full">
            <Timetable />
          </div>
        </div>
    </section>
  )
}

export default CSCTimetable;