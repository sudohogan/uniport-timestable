"use client"
import React, { useEffect, useState } from 'react';
import { useToast } from '../ui/use-toast';
import { FirstData } from '../data';
import CourseModal from '../CourseModal';
import CoursePreviewModal from '../CoursePreviewModal';


const First: React.FC = () => {
  const [timetableData, setTimetableData] = useState<any>(FirstData);
  const [inputValue, setInputValue] = useState<string>('');
  const [venueValue, setVenueValue] = useState<string>('');
  const [detailsValue, setDetailsValue] = useState<string>('');
  const [lecturerValue, setLecturerValue] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedDay, setSelectedDay] = useState<number>(-1);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<number>(-1);
  const [isPreviewModalOpen, setIsPreviewModalOpen] = useState<boolean>(false);
  const [selectedCourse, setSelectedCourse] = useState<string>('');
  const [selectedVenue, setSelectedVenue] = useState<string>('');
  const [selectedDetails, setSelectedDetails] = useState<string>('');
  const [selectedLecturers, setSelectedLecturers] = useState<string[]>([]);
  const [isLecturer, setIsLecturer] = useState<boolean>(false);

  const { toast } = useToast();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    let user = null;

    if (storedUser) {
      user = JSON.parse(storedUser);
      setIsLecturer(user.role === 'lecturer');
    }
  }, []);

  const handleOpenModal = (dayIndex: number, timeSlotIndex: number) => {
    setSelectedDay(dayIndex);
    setSelectedTimeSlot(timeSlotIndex);
    setIsModalOpen(true);
  };

  const handleOpenPreviewModal = (
    course: string,
    venue: string,
    lecturers: string[],
    details: string,
    dayIndex: number,
    timeSlotIndex: number
  ) => {
    setSelectedDay(dayIndex);
    setSelectedTimeSlot(timeSlotIndex);
    setSelectedCourse(course);
    setSelectedVenue(venue);
    setSelectedDetails(details);
    setSelectedLecturers(lecturers);
    setIsPreviewModalOpen(true);
  };

  const handleAddCourseFromModal = () => {
    const updatedTimetableData = [...timetableData];
    const updatedSchedule = [...updatedTimetableData[selectedDay].schedule];
    updatedSchedule[selectedTimeSlot].course = inputValue;
    updatedSchedule[selectedTimeSlot].venue = venueValue;
    updatedSchedule[selectedTimeSlot].details = detailsValue;
    updatedSchedule[selectedTimeSlot].lecturers = [lecturerValue];
    updatedTimetableData[selectedDay].schedule = updatedSchedule;
    setTimetableData(updatedTimetableData);
    setInputValue('');
    setVenueValue('');
    setDetailsValue('')
    setLecturerValue('');
    setIsModalOpen(false);

    toast({
      description: 'Class successfully added',
    });
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
    <>
      <h1 className="text-xl mb-2 text-center">
       100LVL DEPARTMENT OF COMPUTER SCIENCE
        (BSc FULL-TIME) FIRST SEMESTER LECTURE TIMETABLE 2021-2023
      </h1>
      <div className="overflow-x-auto">
        <div className="grid grid-cols-6">
          <div className="border border-gray-300"></div> {/* Placeholder for the top-left corner */}
          {FirstData.map((dayData, index) => (
            <div className="flex items-center justify-center border border-gray-300" key={index}>
              <p className="text-xs lg:text-xl font-bold">{dayData.day}</p>
            </div>
          ))}
        </div>
        {timeSlots.map((timeSlot, index) => (
          <div className="grid grid-cols-6 h-20 w-full" key={index}>
            <div className="flex items-center px-2 border border-gray-300 text-xs lg:text-base font-bold">{timeSlot}</div>
            {FirstData.map((dayData, dayIndex) => {
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
                        courseData.details ?? '',
                        dayIndex,
                        index,
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
          detailsValue={detailsValue}
          setDetailsValue={setDetailsValue}
          lecturerValue={lecturerValue}
          setLecturerValue={setLecturerValue}
        />
        <CoursePreviewModal
          isOpen={isPreviewModalOpen}
          onClose={() => setIsPreviewModalOpen(false)}
          course={selectedCourse}
          venue={selectedVenue}
          details={selectedDetails}
          lecturers={selectedLecturers}
        />
      </div>
    </>
  );
};

export default First;
