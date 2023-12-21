import millify from 'millify';
import { Chart as ChartJS } from 'chart.js/auto';
import { Line, Bar } from 'react-chartjs-2';

const DetailView = ({ model }) => {
  return (
    <div>
      <h3 className="text-center">
        <span className="me-3 fs-4 font-bold">
          {model?.coin?.detail.symbol}
        </span>
        <span className="fs-2 text-warninf">
          {model?.coin?.detail.name}
        </span>
      </h3>

      <div className="row">
        <section className="col-md-3 d-flex flex-column gap-5 p-5 p-md-3">
          {model?.infoFields?.map((data) => (
            <div className="text-bg-light rounded shadow-lg text-center p-3">
              <span className="fs-2">{data.icon}</span>
              <h4>{data.label}</h4>
              <p>{millify(data.value)}</p>
            </div>
          ))}
        </section>

        {/* grafikler */}
        <section className="col-md-9 d-flex flex-column gap-5">
          <Line data={model?.chartData} />
          <Bar data={model?.chartData} />
        </section>
      </div>
    </div>
  );
};

export default DetailView;
