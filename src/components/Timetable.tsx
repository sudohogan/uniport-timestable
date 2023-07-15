"use client"
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { schedule } from './general-data';

const Timetable: React.FC = () => {
  const renderTimeSlot = (startHour: number): string => {
    const displayHour = startHour > 12 ? startHour - 12 : startHour;
    const timePeriod = startHour < 12 ? 'am' : 'pm';

    return `${displayHour}${timePeriod}`;
  };

  return (
    <div>
      <h1 className="text-xl mb-2 text-center">
        UNIVERSITY OF PORT HARCOURT
        FACULTY OF SCIENCE
        DEPARTMENT OF COMPUTER SCIENCE
        (BSc FULL-TIME) FIRST SEMESTER LECTURE TIMETABLE 2021-2023
      </h1>
      {/* <div>
        <div className="grid grid-cols-6">
          <div className="border border-gray-300"></div>
          {Data.map((dayData, index) => (
            <div className="flex items-center justify-center border border-gray-300" key={index}>
              <p className="text-xs lg:text-xl font-bold">{dayData.day}</p>
            </div>
          ))}
        </div>
        {timeSlots.map((timeSlot, index) => (
          <div className="grid grid-cols-6 lg:h-20 h-full w-full" key={index}>
            <div className="flex items-center px-2 border border-gray-300 text-xs lg:text-base font-bold">{timeSlot}</div>
            {Data.map((dayData, dayIndex) => {
              const courseData = dayData.schedule.find(
                (item: { time: string; course: string; venue?: string; lecturers?: string[] }) =>
                  item.time === timeSlot
              );
              return (
                <div
                  className="flex items-center justify-center border border-gray-300 hover:bg-gray-700 cursor-pointer"
                  key={dayIndex}
                  onClick={() => {
                    const courseData = dayData.schedule.find(
                      (item: { time: string; course: string; venue?: string; lecturers?: string[] }) =>
                        item.time === timeSlot
                    );
                    if (courseData && courseData.course !== '') {
                      handleOpenPreviewModal(
                        courseData.course,
                        courseData.venue ?? '',
                        courseData.lecturers ?? [],
                        dayIndex,
                        index
                      );
                    } else if (!courseData || courseData.course === '') {
                      if (isLecturer) {
                        handleOpenModal(dayIndex, index);
                      } else {
                        toast({
                          description: 'You are not registered as a lecturer.',
                        });
                      }
                    }
                  }}
                >
                  {courseData ? (
                    <div className="text-center">
                      <h1 className="font-bold text-sm lg:text-xl">{courseData.course}</h1>
                      <p className="text-xs lg:text-base">{`${courseData.venue ? `(${courseData.venue})` : ''}`}</p>
                    </div>
                  ) : (
                    'No course'
                  )}
                </div>
              );
            })}
          </div>
        ))}
        <CourseModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onAddCourse={handleAddCourseFromModal}
          inputValue={inputValue}
          setInputValue={setInputValue}
          venueValue={venueValue}
          setVenueValue={setVenueValue}
          lecturerValue={lecturerValue}
          setLecturerValue={setLecturerValue}
        />
        <CoursePreviewModal
          isOpen={isPreviewModalOpen}
          onClose={() => setIsPreviewModalOpen(false)}
          course={selectedCourse}
          venue={selectedVenue}
          lecturers={selectedLecturers}
        />
      </div> */}
      <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Time</TableHead>
            {Object.keys(schedule).map((day) => (
            <TableHead key={day}>{day}</TableHead>
          ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array.from(Array(9)).map((_, index) => {
              const startHour = index + 8;
              return(
                <TableRow key={index}>
                  <TableCell>{`${renderTimeSlot(startHour)} - ${renderTimeSlot(startHour + 1)}`}</TableCell>
                  {Object.values(schedule).map((daySchedule, dayIndex) => (
                      <TableCell key={dayIndex}>
                        {daySchedule[index]?.map((subject, i) => (
                          <div key={i}>{subject.name}</div>
                        ))}
                      </TableCell>
                    ))}
                </TableRow>
              )
          })}
        </TableBody>
      </Table>
      <div className="mt-6">
          <p>Dr. C.B. Marcus</p>
          <p>Time Table Officer</p>
      </div>
    </div>
    </div>
  );
};

export default Timetable;
