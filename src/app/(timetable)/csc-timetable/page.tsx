import Timetable from '@/components/Timetable';
import LevelSelector from '@/components/levels/LevelSelector';
import React from 'react'

const CSCTimetable = () => {
  return (
    <section className="py-6">
        <div className="container grid gap-4">
          <div className="w-full">
            <LevelSelector />
          </div>
        </div>
    </section>
  )
}

export default CSCTimetable;