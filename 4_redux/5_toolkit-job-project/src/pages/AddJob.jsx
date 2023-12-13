import axios from 'axios';
import { statusOpt, typeOpt } from '../constants';
import { v4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  createJob,
  setError,
  setJobs,
  setLoading,
} from '../redux/slices/jobSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const AddJob = () => {
  const state = useSelector((store) => store.jobSlice);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // bileşen ekrana basıldığında verileri çek
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // input'lardan verileri al
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    // işe id ve oluşturulma tarihi ekle
    data.id = v4();
    data.date = new Date().toLocaleDateString();

    // hem apiye hem store'a işi ekle
    axios.post('http://localhost:4500/jobs', data).then(() => {
      navigate('/');
      dispatch(createJob(data));
      toast.success('Ekleme İşlemi Başarılı');
    });

    // bütun formu sıfırlar
    e.target.reset();
  };

  return (
    <div className="add-page">
      <section className="add-sec">
        <h2>Yeni İş Ekle</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Pozisyon</label>
            <input
              list="positions"
              name="position"
              type="text"
              required
            />

            <datalist id="positions">
              {state.jobs.map((job) => (
                <option value={job.position} />
              ))}
            </datalist>
          </div>

          <div>
            <label>Şirket</label>
            <input
              list="companies"
              name="company"
              type="text"
              required
            />
            <datalist id="companies">
              {state.jobs.map((job) => (
                <option value={job.company} />
              ))}
            </datalist>
          </div>

          <div>
            <label>Lokasyon</label>
            <input
              list="locations"
              name="location"
              type="text"
              required
            />
            <datalist id="locations">
              {state.jobs.map((job) => (
                <option value={job.location} />
              ))}
            </datalist>
          </div>

          <div>
            <label>Durum</label>
            <select name="status" required>
              <option value={''} hidden>
                Seçiniz
              </option>
              {statusOpt.map((text) => (
                <option>{text}</option>
              ))}
            </select>
          </div>

          <div>
            <label>Tür</label>
            <select name="type" required>
              <option value={''} hidden>
                Seçiniz
              </option>
              {typeOpt.map((text) => (
                <option>{text}</option>
              ))}
            </select>
          </div>

          <div>
            <button className="add-button" type="submit">
              <span class="button_top">Oluştur</span>
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddJob;
