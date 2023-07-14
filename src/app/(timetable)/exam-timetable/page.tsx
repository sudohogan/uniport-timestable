import React from 'react'
import ExamTimetable from '@/components/ExamTimetable'

const page = () => {
  return (
    <section className="py-6">
        <div className="container flex flex-col items-center gap-4">
        <h1 className="text-2xl mb-2 text-center">
        UNIVERSITY OF PORT HARCOURT FACULTY OF SCIENCE DEPARTMENT OF COMPUTER SCIENCE
        FIRST SEMESTER EXAMINATION TIME TABLE 2021/2022 SESSION
        </h1>
          <div className="w-full">
            <ExamTimetable />
          </div>
        </div>
    </section>
  )
}

export default page