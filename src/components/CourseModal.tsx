import React from 'react'
import { Input } from './ui/input';
import { cn } from '@/lib/utils';
import { buttonVariants } from './ui/button';
import { Textarea } from './ui/textarea';

const CourseModal: React.FC<{
    isOpen: boolean;
    onClose: () => void;
    onAddCourse: () => void;
    inputValue: string;
    setInputValue: React.Dispatch<React.SetStateAction<string>>;
    venueValue: string;
    setVenueValue: React.Dispatch<React.SetStateAction<string>>;
    lecturerValue: string;
    setLecturerValue: React.Dispatch<React.SetStateAction<string>>;
  }> = ({
    isOpen,
    onClose,
    onAddCourse,
    inputValue,
    setInputValue,
    venueValue,
    setVenueValue,
    lecturerValue,
    setLecturerValue,
  }) => {
    if (!isOpen) return null;
    
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 bg-gray-500 p-4">
        <div className="bg-gray-900 p-4 rounded-md grid gap-4 w-full max-w-[400px]">
          <Input
            placeholder="Enter course"
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
            <Input
              placeholder="Enter venue"
              type="text"
              value={venueValue}
              onChange={(e) => setVenueValue(e.target.value)}
          />
          <Textarea
            placeholder="Enter lecturer's name"
            value={lecturerValue}
            className="resize-none bg-gray-900"
            onChange={(e) => setLecturerValue(e.target.value)}
          />
          <div className="justify-end flex items-center gap-3">
            <button
              className={cn(buttonVariants({variant: "default"}))}
              onClick={() => {
                onAddCourse();
                onClose();
              }}
            >
              Add class
            </button>
            <button
              className={cn(buttonVariants({variant: "destructive",}))}
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  };

  export default CourseModal