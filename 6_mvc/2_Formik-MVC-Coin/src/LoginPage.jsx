import { useFormik } from 'formik';
import { schema } from './schema';
import InputFieldView from './views/InputFieldView';
import { inputs } from './constants';

const LoginPage = () => {
  // useFormik > formik'in bütün özelliklerini kullanmamızı sağlayan hook
  const formik = useFormik({
    // formda tutulacak verilerin ilk değeri
    initialValues: {
      email: '',
      age: '',
      password: '',
      confirmPassword: '',
    },

    // validasyon şeması tanımladnığız zman formik
    // inputlardaki verilerin şemadaki koşulalra uygun olmasını bekler
    // uygun değil içerisnde error state'inde hataları tutar
    validationSchema: schema,

    // form göndeirlince çalışır
    // bu fonk. ototmatik oalra sayfayı yenilemyi engeller
    // 1-param: obje formatında  inputların verisi
    // 2-param: formda bazı işlemler (sıfırlama) yapammızı sağlar
    onSubmit: (values, actions) => {
      console.log(values);
    },
  });

  return (
    <div className="login-page">
      <div className="container my-5">
        <h2 className="d-flex gap-3 justify-content-center align-items-center">
          <img height={60} src="/c-logo.png" />
          <span>Coinmania</span>
        </h2>

        <form onSubmit={formik.handleSubmit}>
          {inputs.map((data) => (
            <InputFieldView formik={formik} data={data} />
          ))}

          <button type="submit">Kaydol</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
