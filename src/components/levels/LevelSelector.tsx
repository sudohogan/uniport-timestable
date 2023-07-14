"use client"
import { useState } from 'react';
import First from './100';
import Second from './200';
import Third from './300';
import Four from './400';
import Timetable from '../Timetable';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '../ui/select';


const LevelSelector: React.FC = () => {
  const [selectedLevel, setSelectedLevel] = useState('');

  const handleLevelChange = (event: string) => {
    setSelectedLevel(event);
  };

  const renderLevelComponent = () => {
    switch (selectedLevel) {
      case '100':
        return <First />;
      case '200':
        return <Second />;
      case '300':
        return <Third />;
      case '400':
        return <Four />;
      case 'general':
        return <Timetable />;
      default:
        return <Timetable />;
    }
  };

  return (
    <div className='grid gap-3'>
      <div className='grid justify-items-end'>
        <Select onValueChange={handleLevelChange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a Level" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Select a level</SelectLabel>
              <SelectItem value="100">100lvl</SelectItem>
              <SelectItem value="200">200lvl</SelectItem>
              <SelectItem value="300">300lvl</SelectItem>
              <SelectItem value="400">400lvl</SelectItem>
              <SelectItem value="general">general</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      {renderLevelComponent()}
    </div>
  );
};

export default LevelSelector;
