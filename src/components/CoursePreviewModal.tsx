import React from 'react';

const CoursePreviewModal: React.FC<{
    isOpen: boolean;
    onClose: () => void;
    onCancel: () => void;
    course: string;
  }> = ({ isOpen, onClose, course, onCancel }) => {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 bg-gray-500">
        <div className="bg-gray-900 p-4 rounded-md w-[400px]">
          <h2 className="text-xl mb-3">Course Preview</h2>
          <p>{course}</p>
          <div className="flex items-center justify-end gap-2">
            <button
              className="px-2 ml-2 text-white bg-gray-500 rounded"
              onClick={() => {
                onCancel()
                onClose()
              }}
            >
              Cancel
            </button>
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