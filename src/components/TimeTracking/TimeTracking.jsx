import React from 'react';
import './TimeTracking.scss';
import image from '../../assets/images/image-jeremy.png';

const TimeTracking = () => {
  return (
    <div className='TimeTracking'>
      <div className='TimeTracking__wrapper'>
        <div className='TimeTracking__Info'>
          <div className='TimeTracking__Info__picture'>
            <img src={image} alt='Haron Acosta' />
          </div>
          <div className='TimeTracking__Info__title'>Haron Acosta</div>
        </div>
      </div>
    </div>
  );
};

export default TimeTracking;
