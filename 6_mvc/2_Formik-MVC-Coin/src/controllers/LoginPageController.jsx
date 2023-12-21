import React from 'react';
import LoginPageView from '../views/LoginPageView';
import { useFormik } from 'formik';
import { schema } from '../schema';
import { useNavigate } from 'react-router-dom';

const LoginPageController = () => {
  const navigate = useNavigate();

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
      navigate('/home');
    },
  });

  return <LoginPageView formik={formik} />;
};

export default LoginPageController;
