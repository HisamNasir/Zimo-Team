import { useEffect, useState } from 'react';
import axios from 'axios';

const Clock = () => {
  const [locationData, setLocationData] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        axios
          .get(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
          )
          .then((response) => {
            const address = response.data.address;
            const city = address.city || address.town || address.village || address.hamlet || address.suburb;

            const country = address.country;

            const date = new Date();
            const options = {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: 'numeric',
              minute: 'numeric',
              hour12: false,
              timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            };

            const formattedDate = date.toLocaleDateString(undefined, options);
            const [weekday, monthYear, time] = formattedDate.split(', ');

            setLocationData({
              city,
              country,
              weekday,
              monthYear,
              time,
            });
          })
          .catch((error) => {
            console.error('Error fetching location data:', error);
          });
      },
      (error) => {
        console.error('Error getting geolocation:', error);
      }
    );
  }, []);
  return (
    <div className="text-right">
      {locationData ? (
        <div className=''>
          <p className=''>
          <span>{locationData.time.split(' at ')[1]}</span>&nbsp;
          <span>{locationData.city}</span>&nbsp;
          <span>{locationData.country}</span>

          </p>
          <p className='text-[#BE9F56]'>
            <span>{locationData.weekday}</span>
            <span>{locationData.monthYear.split(' ')[1]}</span>&nbsp;
            <span>{locationData.monthYear.split(' ')[0]}</span>&nbsp;
            <span>{locationData.time.split(' at ')[0]}</span>

            
          </p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Clock;
