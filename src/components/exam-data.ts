interface Exam{
    date: string;
    day: string;
    courses: {
        time: string[] | string;
        venue: string[] | string;
        supervisor: string[] | string;
        lecturers: string[];
        invigilators: string[];
    }
}
  
  interface ExamProps {
    date: string;
    day: string;
    courses: string[] | string;
    time: string[] | string;
    venue: string[] | string;
    supervisor: string[] | string;
    lecturers: string[];
    invigilators: string[];
  }
  
export const examTimetable: ExamProps[] = [
    {
      date: '2023-07-12',
      day: 'Monday',
      courses: ['Mathematics', 'English'],
      time: ['9am - 12noon', '2pm - 5pm'],
      venue: 'Room A',
      supervisor: 'John Doe',
      lecturers: ['Jane Smith', 'Alice Johnson'],
      invigilators: ['Alice Johnson', 'Alice Johnson'],
    },
    {
      date: '2023-07-13',
      day: 'Tuesday',
      courses: 'Physics',
      time: '9am - 12noon',
      venue: 'Room B',
      supervisor: 'John Doe',
      lecturers: ['Michael Brown', 'Alice Johnson'],
      invigilators: ['Bob Davis', 'Alice Johnson'],
    },
    // Add more courses here
  ];

  export const exams = [
    {
      date: '2023-07-15',
      day: 'Monday',
      morning: {
        course: 'Mathematics',
        time: '9:00 AM - 12:00 PM',
        venue: 'Room A',
        supervisor: 'John Doe',
        lecturers: ['Jane Smith', 'Michael Johnson'],
        invigilators: ['Alice Brown', 'Bob Wilson'],
      },
      afternoon: {
        course: 'Physics',
        time: '2:00 PM - 5:00 PM',
        venue: 'Room B',
        supervisor: 'Sarah Davis',
        lecturers: ['David Thompson', 'Emily Lee'],
        invigilators: ['James Miller', 'Olivia Wilson'],
      },
    },
    {
        date: '2023-07-15',
        day: 'Tuesday',
        morning: {
          course: 'Mathematics',
          time: '9:00 AM - 12:00 PM',
          venue: 'Room A',
          supervisor: 'John Doe',
          lecturers: ['Jane Smith', 'Michael Johnson'],
          invigilators: ['Alice Brown', 'Bob Wilson'],
        },
        afternoon: {
          course: 'Physics',
          time: '2:00 PM - 5:00 PM',
          venue: 'Room B',
          supervisor: 'Sarah Davis',
          lecturers: ['David Thompson', 'Emily Lee'],
          invigilators: ['James Miller', 'Olivia Wilson'],
        },
      },
    // Add more exam objects for other dates...
];