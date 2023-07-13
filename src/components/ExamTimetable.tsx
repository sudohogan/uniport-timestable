import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { exams } from './exam-data'

const ExamTimetable = () => {
  return (
    <div>
      <Table>
      <TableCaption>NOTE: GES Registration Handbook is required for GES Examination.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Day</TableHead>
            <TableHead>Course</TableHead>
            <TableHead>Time</TableHead>
            <TableHead>Venue</TableHead>
            <TableHead>Supervisor</TableHead>
            <TableHead>Course Lecturers</TableHead>
            <TableHead>Invigilators</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {exams.map((exam, index) => (
            <>
              <TableRow key={index}>
                <TableCell>{exam.date}</TableCell>
                <TableCell>{exam.day}</TableCell>
                {exam.morning && (
                  <>
                    <TableCell>
                      {Array.isArray(exam.morning?.course)
                            ? exam.morning?.course.join(' / ')
                            : exam.morning?.course}
                    </TableCell>
                    <TableCell>{exam.morning?.time}</TableCell>
                    <TableCell>{exam.morning?.venue}</TableCell>
                    <TableCell>{exam.morning?.supervisor}</TableCell>
                    <TableCell>
                      {exam.morning.lecturers.map(lecturer => <p key={lecturer}>{lecturer}</p>)}
                    </TableCell>
                    <TableCell>{exam.morning?.invigilators.map(invigilator => <p key={invigilator}>{invigilator}</p>)}</TableCell>
                  </>
                )}
            </TableRow>
            <TableRow key={`${index}-afternoon`}>
            {exam.afternoon && (
              <>
                {exam.afternoon && (
                  <>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                  </>
                )}
                  <TableCell>{exam.afternoon?.course}</TableCell>
                  <TableCell>{exam.afternoon?.time}</TableCell>
                  <TableCell>{exam.afternoon?.venue}</TableCell>
                  <TableCell>{exam.afternoon?.supervisor}</TableCell>
                  <TableCell>{exam.afternoon?.lecturers.join(', ')}</TableCell>
                  <TableCell>{exam.afternoon?.invigilators.join(', ')}</TableCell>
              </>
            )}
            </TableRow>

            </>
          ))}
        </TableBody>
      </Table>
      <div className="flex justify-end items-center">
        <span>
          <p>Dr. C.B. Marcus</p>
          <p>Time Table Officer</p>
        </span>
      </div>
    </div>
  )
}

export default ExamTimetable


