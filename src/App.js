import './App.css';
import tvtCategoryList from './componets/tvtCategoryList.js';
import { useEffect, useState } from 'react';
import axios from './api/tvtApi.js';
import tvtCategoryFrom from './componets/tvtCategoryForm.js';

function App() {
  const [tvtCategories, settvtCategories] = useState([]);
  
  const getCategories = async () => {
    try {
      const tvtResponse = await axios.get("tvtCategory");
      settvtCategories(tvtResponse.data);  
    } catch (error) {
      console.log("Error: ", error);
    }
  }

  useEffect(() => {
    getCategories();
  }, []);

  const [tvtCategoryIsFrom, settvtCategoryIsFrom] = useState(false);

  const tvtHandleAddNew = (param) => {
    settvtCategoryIsFrom(param);

  }

  const tvtHandleCategoryCloseForm = (param) => {
    settvtCategoryIsFrom(param);
  }

  const tvtHandleCategorySubmit = (param) => {
    let id = tvtCategories[tvtCategories.length - 1].tvtId;
    console.log("ma: ", id);
    param.tvtId = id + 1;
    tvtCategories.push(param);
    settvtCategories((prev) => {
      return [...prev];
    })
    settvtCategoryIsFrom(false);
  }

  return (
    <div className="container border my-3">
      <h1>tạ Văn Thắng API</h1>
      <tvtCategoryList rendertvtCateGories={tvtCategories} onAddNew={tvtHandleAddNew} />
      <hr />
      {
        tvtCategoryIsFrom === true ? <tvtCategoryFrom onCloseForm={tvtHandleCategoryCloseForm} onCategorySubmit={tvtHandleCategorySubmit} /> : ""
      }
      
    </div>
  );
}

export default App;