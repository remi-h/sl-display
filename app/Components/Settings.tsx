import React, { useState } from 'react';
import * as Label from '@radix-ui/react-label';
import * as Popover from '@radix-ui/react-popover';
import { MixerHorizontalIcon } from '@radix-ui/react-icons';

interface UserInputProps {
    label: string;
    value: string | number;
    type: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const UserInput: React.FC<UserInputProps> = ({ label, value, type, onChange }) => {
    return (
        <div className='flex items-center p-1'>
            <Label.Root className="w-36">
                {label}
            </Label.Root>
            <input
                className="p-2 border-b border-black w-36 focus:outline-none"
                type={type}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export function Settings() {
    const [trainFrom, setTrainFrom] = useState<string>('Bergshamra');
    const [direction, setDirection] = useState<number>(2);
    const [line, setLine] = useState<number>(14);
    const [forecast, setForecast] = useState<number>(60);

    const [tempTrainFrom, setTempTrainFrom] = useState<string>(trainFrom);
    const [tempDirection, setTempDirection] = useState<number>(direction);
    const [tempLine, setTempLine] = useState<number>(line);
    const [tempForecast, setTempForecast] = useState<number>(forecast);

    const handleSave = () => {
        setTrainFrom(tempTrainFrom);
        setDirection(tempDirection);
        setLine(tempLine);
        setForecast(tempForecast);
        console.log('Train from:', tempTrainFrom);
        console.log('Direction:', tempDirection);
        console.log('Line:', tempLine);
        console.log('Forecast:', tempForecast);
    };

    return (
        <div className='absolute bottom-10 right-5'>
            <Popover.Root>
                <Popover.Trigger asChild>
                    <button
                        className="rounded-full w-[35px] h-[35px] inline-flex items-center justify-center border"
                        aria-label="Update settings"
                    >
                        <MixerHorizontalIcon />
                    </button>
                </Popover.Trigger>
                <Popover.Portal>
                    <Popover.Content
                        className="rounded p-5 bg-white text-black"
                        align='start'
                        alignOffset={-20}
                        sideOffset={5}
                    >
                        <UserInput label='Train from' type="text" value={tempTrainFrom} onChange={(e) => setTempTrainFrom(e.target.value)} />
                        {/* <UserInput label='Transportation' type="text" value="METRO" onChange={(e) => setTransportation(e.target.value)} /> */}
                        <UserInput label='Direction' type="number" value={tempDirection} onChange={(e) => setTempDirection(Number(e.target.value))} />
                        <UserInput label='Line' type="number" value={tempLine} onChange={(e) => setTempLine(Number(e.target.value))} />
                        <UserInput label='Forecast' type="number" value={tempForecast} onChange={(e) => setTempForecast(Number(e.target.value))} />
                        <Popover.Close
                            aria-label="Close"
                            onClick={handleSave}
                            className='block bg-black text-white p-2 w-full mt-3'
                        >
                            Save
                        </Popover.Close>
                        <Popover.Arrow className="fill-white" />
                    </Popover.Content>
                </Popover.Portal>
            </Popover.Root>
        </div>
    );
}