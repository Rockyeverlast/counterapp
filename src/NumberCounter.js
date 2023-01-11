import React, { useState, useEffect } from "react";
import axios from "axios";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import styles from "../components/numbercounter.module.css";

// const baseURL = "https://sattvaconnect.com/api/get-user-classes-details";

const NumberCounter = () => {
  const [post, setPost] = useState(null);
  const { ref, inView, entry } = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    axios
      .get("https://sattvaconnect.com/api/get-user-classes-details")
      .then((response) => {
        // handle success
        // this.setState({ seriesdata: response.data.reverse() });
        console.log(response.data);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <section className="new-secHomeCount">
      <div className="container">
        <div
          className="row justify-content-center align-content-center text-center flex-nowrap count-direction"
          style={{ marginLeft: "25px", gap: "1rem" }}
        >
          <div className={`col-md-2 ${styles.counterwidth}`}>
            <p className={styles.u}>You have</p>
            <h2 className={styles.counting} ref={ref}>
              <CountUp
                start={0}
                end={inView ? 900 : 0}
                scrollSpyOnce
                delay={3}
              />
            </h2>
            <h4 className="new-count-type">saved classes</h4>
          </div>

          <div className={`col-md-2 ${styles.counterwidth}`}>
            <p className={styles.u}>You have</p>
            <h2 className={styles.counting}>
              <CountUp
                start={0}
                end={inView ? 75 : 0}
                scrollSpyOnce
                delay={3}
              />
            </h2>
            <h3 className="new-count-type">courses</h3>
          </div>

          <div className={`col-md-2 ${styles.counterwidth}`}>
            <p className={styles.u}>You have</p>
            <h2 className={styles.counting}>
              <CountUp
                start={0}
                end={inView ? 600 : 0}
                scrollSpyOnce
                delay={3}
              />
            </h2>
            <h3 className="new-count-type">favourite classes</h3>
          </div>

          <div className={`col-md-2 ${styles.counterwidth}`}>
            <p className={styles.u}>You have</p>
            <h2 className={styles.counting}>
              <CountUp
                start={0}
                end={inView ? 150 : 0}
                scrollSpyOnce
                delay={3}
              />
            </h2>
            <h3 className="new-count-type">series</h3>
          </div>

          <div className={`col-md-2 ${styles.counterwidth}`}>
            <p className={styles.u}>You have</p>
            <h2 className={styles.counting}>
              <CountUp
                start={0}
                end={inView ? 200 : 0}
                scrollSpyOnce
                delay={3}
              />
            </h2>
            <h3 className="new-count-type">completed classes</h3>
          </div>

          <div className={`col-md-2 ${styles.counterwidth}`}>
            <p className={styles.u}>You participated in</p>
            <h2 className={styles.counting}>
              <CountUp
                start={0}
                end={inView ? 50 : 0}
                scrollSpyOnce
                delay={3}
              />
            </h2>
            <h3 className="new-count-type">live classes</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NumberCounter;
