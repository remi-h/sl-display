import React, { useState, useEffect } from 'react';
import { getDepartures, DepartureParam } from '../api/get-departures';
import Typewriter from 'typewriter-effect';

export function Departures() {
    const [departures, setDepartures] = useState<DepartureParam[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);


    const formatTime = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleTimeString('en-GB', { hour12: false });
    };

    const fetchDepartures = async () => {
        try {
            const data = await getDepartures(9202, 'METRO', 2, 14, 60);
            setDepartures(data);
        } catch (err) {
            setError('Failed to fetch departures');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchDepartures();
        const intervalId = setInterval(fetchDepartures, 10000); // Fetch every 10 seconds
        return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className='flex flex-col gap-20'>
            <div className='flex justify-between text-2xl'>
                {departures[0].destination}
                <div className='w-96'>
                    <Typewriter
                        key={departures[0].display} // Use key to force re-render
                        onInit={(typewriter) => {
                            typewriter.typeString(departures[0].display)
                                .start();
                        }}
                    />
                    <p className='text-xl'>{formatTime(departures[0].expected)}</p>
                </div>
            </div>
            <div className='flex flex-col text-xl gap-10'>
                {departures.slice(1).map((departure, index) => (
                    <div key={index} className='flex justify-between'>
                        <p> {departure.destination} </p>
                        <div className='w-96'>
                            <p>{departure.display}</p>
                            <p className='text-md'>{formatTime(departure.expected)}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}