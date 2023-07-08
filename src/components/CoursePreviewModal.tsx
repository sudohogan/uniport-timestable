import React from 'react';

const CoursePreviewModal: React.FC<{
    isOpen: boolean;
    onClose: () => void;
    course: string;
    venue: string;
    lecturers?: string[]
  }> = ({ isOpen, onClose, course, venue, lecturers }) => {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 bg-gray-500 p-4">
        <div className="bg-gray-900 p-4 rounded-md w-full max-w-[400px]">
          <h2 className="text-2xl mb-3">Course Preview</h2>
          <p className="font-semibold text-xl">{course}</p>
          <p>{venue}</p>
          {lecturers && lecturers.length > 0 && (
            <div className="flex items-center justify-end mb-4">
              <div>
                <p>Lecturers:</p>
                <ul className="list-none ml-6">
                  {lecturers.map((lecturer, index) => (
                    <li key={index}>{lecturer}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
          <div className="flex items-center justify-end">
            <button
              className="px-2 ml-2 text-white bg-red-500 rounded"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  };
export default CoursePreviewModal;