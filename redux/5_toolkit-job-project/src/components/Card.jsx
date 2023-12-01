import { MdLocationOn } from 'react-icons/md';
import { FaSuitcase } from 'react-icons/fa';
import { BsFillCalendarDateFill } from 'react-icons/bs';

const Card = ({ job }) => {
  return (
    <div className="card">
      {/* Üst Kısım */}
      <div className="head">
        <div className="letter">
          <span>{job.company[0]}</span>
        </div>

        <div className="info">
          <p>{job.position}</p>
          <p>{job.company}</p>
        </div>
      </div>

      {/* Alt Kısım */}
      <div className="body">
        <div className="field">
          <MdLocationOn />
          <p>{job.location}</p>
        </div>
        <div className="field">
          <FaSuitcase />
          <p>{job.type}</p>
        </div>
        <div className="field">
          <BsFillCalendarDateFill />
          <p>{job.date}</p>
        </div>
        <div className="status">
          <p>{job.status}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
