import axios from 'axios';
import { useEffect } from 'react';
import {
  setError,
  setJobs,
  setLoading,
} from '../redux/slices/jobSlice';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import Card from './../components/Card';

const JobList = () => {
  const dispatch = useDispatch();

  const state = useSelector((store) => store.jobSlice);

  useEffect(() => {
    // 1) yüklenme durumunu güncelle
    dispatch(setLoading());

    axios
      .get('http://localhost:4500/jobs')
      //2) veri gelirse store'a aktar
      .then((res) => dispatch(setJobs(res.data)))
      //3) hata olursa store'u güncelle
      .catch(() => dispatch(setError()));
  }, []);

  return (
    <div className="list-page">
      {/* 
       1) Yüklenme devam ediyorsa loader bas
       2) Yüklenme bittiyse ve hata varsa hata measjı bas
       3) Yüklenme bittiyse ve hata yoksa verileri bas
      */}
      {state.isLoading ? (
        <Loader />
      ) : state.isError ? (
        <p>Üzgünüz verilere erişirken sorun oluştu</p>
      ) : (
        <div className="job-list">
          {state.jobs?.map((job) => (
            <Card key={job.id} job={job} />
          ))}
        </div>
      )}
    </div>
  );
};

export default JobList;
