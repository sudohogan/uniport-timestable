"use client"
import React, { useState } from 'react';
import { Data } from './data'
import CourseModal from './CourseModal';
import { useToast } from './ui/use-toast';
import CoursePreviewModal from './CoursePreviewModal';

const Timetable: React.FC = () => {
    const [timetableData, setTimetableData] = useState<any>(Data);
    const [inputValue, setInputValue] = useState<string>('');
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [selectedDay, setSelectedDay] = useState<number>(-1);
    const [selectedTimeSlot, setSelectedTimeSlot] = useState<number>(-1);
    const [isPreviewModalOpen, setIsPreviewModalOpen] = useState<boolean>(false);
    const [selectedCourse, setSelectedCourse] = useState<string>('');
    const [isCancel, setIsCancel] = useState<boolean>(false)

    const {toast} = useToast()

    const handleOpenModal = (dayIndex: number, timeSlotIndex: number) => {
        setSelectedDay(dayIndex);
        setSelectedTimeSlot(timeSlotIndex);
        setIsModalOpen(true);
    };
    const handleOpenPreviewModal = (course: string, dayIndex: number, timeSlotIndex: number) => {
      setSelectedDay(dayIndex);
      setSelectedTimeSlot(timeSlotIndex);
      setSelectedCourse(course);
      setIsPreviewModalOpen(true);
      setIsCancel(false)
    };

    const handleAddCourseFromModal = () => {
        const updatedTimetableData = [...timetableData];
        const updatedSchedule = [...updatedTimetableData[selectedDay].schedule];
        updatedSchedule[selectedTimeSlot].course = inputValue;
        updatedTimetableData[selectedDay].schedule = updatedSchedule;
        setTimetableData(updatedTimetableData);
        setInputValue('');
        setIsModalOpen(false);

      toast({
        description: "Class successfully added"
      })
    };

    const handleCancelCourse = () => {
      setIsCancel(true)
      toast({
        description: "Class successfully cancelled"
      })
    };


    const timeSlots = [
        '8AM - 9AM',
        '9AM - 10AM',
        '10AM - 11AM',
        '11AM - 12PM',
        '12PM - 1PM',
        '1PM - 2PM',
        '2PM - 3PM',
        '3PM - 4PM',
        '4PM - 5PM',
        '5PM - 6PM',
      ];
  return (
    <div className="w-full">
      <div className="grid grid-cols-6">
        <div className="border border-gray-300"></div> {/* Placeholder for the top-left corner */}
        {Data.map((dayData, index) => (
          <div className="flex items-center justify-center border border-gray-300 font-bold" key={index}>
            {dayData.day}
          </div>
        ))}
      </div>
      {timeSlots.map((timeSlot, index) => (
        <div className="grid grid-cols-6 h-16" key={index}>
          <div className="flex items-center px-2 border border-gray-300 font-bold">{timeSlot}</div>
          {Data.map((dayData, dayIndex) => {
            const courseData = dayData.schedule.find(
              (item) => item.time === timeSlot
            );
            return (
              <div
                className={`flex items-center justify-center border border-gray-300 hover:bg-gray-700 cursor-pointer
                ${isCancel ? "bg-red-500" : ""}
                `}
                key={dayIndex}
                onClick={() => {
                    const courseData = dayData.schedule.find((item) => item.time === timeSlot);
                    if (courseData && courseData.course !== '') {
                      handleOpenPreviewModal(courseData.course, dayIndex, index);
                    } else if (!courseData || courseData.course === '') {
                      handleOpenModal(dayIndex, index);
                    }
                }}
              >
                {courseData ? courseData.course : 'No course'}
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
        />
        <CoursePreviewModal
          isOpen={isPreviewModalOpen}
          onClose={() => setIsPreviewModalOpen(false)}
          course={selectedCourse}
          onCancel={handleCancelCourse}
        />
    </div>
  );
};

export default Timetable;
