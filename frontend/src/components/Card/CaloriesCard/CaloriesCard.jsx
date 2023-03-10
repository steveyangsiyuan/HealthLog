import React, { useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { motion, AnimateSharedLayout } from "framer-motion";
import { UilTimes } from "@iconscout/react-unicons";
import Chart from "react-apexcharts";
import { CgFlagAlt } from "react-icons/cg";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { RiFireFill } from "react-icons/ri";
import CaloriesCardCSS from "./CaloriesCard.module.scss";
import "../GlobalCardStyle.css";

// parent Card

const CaloriesCard = (props) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <AnimateSharedLayout>
      {expanded ? (
        <ExpandedCard param={props} setExpanded={() => setExpanded(false)} />
      ) : (
        <CompactCard param={props} setExpanded={() => setExpanded(true)} />
      )}
    </AnimateSharedLayout>
  );
};

// Compact Card
function CompactCard({ param, setExpanded }) {
  return (
    <motion.div
      className={CaloriesCardCSS.CompactCard}
      style={{
        background: "linear-gradient(180deg, #252849 0%, #2e325c 100%)",
        boxShadow: "0px 10px 20px 0px #2e325c",
      }}
      layoutId="expandableCard"
      onClick={setExpanded}
    >
      <span style={{ fontSize: 16, fontWeight: "bold" }}>{param.title}</span>
      <div className={CaloriesCardCSS.Container}>
        <div className={CaloriesCardCSS.radialBar}>
          <CircularProgressbar
            className={CaloriesCardCSS.CircularProgressbar}
            value={param.barValue}
            text={`${param.barValue}%`}
          />
        </div>

        <div className={CaloriesCardCSS.detail}>
          <div className={CaloriesCardCSS.detailContainer}>
            <CgFlagAlt fontSize="24px" />
            <div className={CaloriesCardCSS.detailInfo}>
              <span>Base Goal</span>
              <span>0</span>
            </div>
          </div>
          <div className={CaloriesCardCSS.detailContainer}>
            <GiForkKnifeSpoon fontSize="24px" />
            <div className={CaloriesCardCSS.detailInfo}>
              <span>Food</span>
              <span>0</span>
            </div>
          </div>
          <div className={CaloriesCardCSS.detailContainer}>
            <RiFireFill fontSize="24px" />
            <div className={CaloriesCardCSS.detailInfo}>
              <span>Exercise</span>
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Expanded Card
function ExpandedCard({ param, setExpanded }) {
  const data = {
    options: {
      chart: {
        type: "area",
        height: "auto",
      },

      dropShadow: {
        enabled: false,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: "#000",
        opacity: 0.35,
      },

      fill: {
        colors: ["#fff"],
        type: "gradient",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: ["white"],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      grid: {
        show: true,
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
        ],
      },
    },
  };

  return (
    <motion.div
      className={CaloriesCardCSS.ExpandedCard}
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      layoutId="expandableCard"
    >
      <div style={{ alignSelf: "flex-end", cursor: "pointer", color: "white" }}>
        <UilTimes onClick={setExpanded} />
      </div>
      <span>{param.title}</span>
      <div className={CaloriesCardCSS.chartContainer}>
        <Chart options={data.options} series={param.series} type="area" />
      </div>
      <span>Last 24 hours</span>
    </motion.div>
  );
}

export default CaloriesCard;
