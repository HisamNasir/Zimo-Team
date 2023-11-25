import React from 'react';
import getCountryCode from './getCountryCode';
import { hasFlag } from 'country-flag-icons';
import Image from 'next/image';

const CountryFlag = () => {
  const [countryCode, setCountryCode] = React.useState(null);

  React.useEffect(() => {
    const fetchCountryCode = async () => {
      const code = await getCountryCode();
      setCountryCode(code);
    };

    fetchCountryCode();
  }, []);

  return (
    <div>
      {countryCode && hasFlag(countryCode) && (
        <div>
          <Image
          width={37}
          height={25}
            alt={countryCode}
            src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${countryCode}.svg`}
          />
        </div>
      )}
    </div>
  );
};

export default CountryFlag;
