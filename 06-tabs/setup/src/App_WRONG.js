import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";
function App() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [value, setValue] = useState(0);

  const fetchData = async () => {
    setLoading(true);
    try {
      const repsonse = await fetch(url);
      const newdata = await repsonse.json();
      setLoading(false);
      setData(newdata);
      console.log(newdata);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <main>
        <h1>Loading...</h1>
      </main>
    );
  }
  const { company, dates, duties, title } = data[value];
  return (
    <section className="section">
      <div className="title">
        <h2>Expierence</h2>
        <div className="underline"></div>
      </div>

      <div className="job-center">
        <div className="btn-container">
          {data.map((item, index) => {
            return (
              <button key={item.id} onClick={() => setValue(index)}>
                {item.company}
              </button>
            );
          })}
        </div>
      </div>

      <article className="job-info">
        <h3>{title}</h3>
        {duties.map((duty, index) => {
          return (
            <div key={index} className="job-desc">
              <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
              <p>{duty}</p>
            </div>
          );
        })}
      </article>
    </section>
  );
}

export default App;
