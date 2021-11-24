import React, { useState, useEffect } from "react";
import axios from "axios";

const TooltipComponent = (props) => {
  let timeout;
  const [active, setActive] = useState(false);

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, props.delay || 400);
  };

  const hideTip = () => {
    clearInterval(timeout);
    setActive(false);
  };

  const [state, setState] = useState({
    title: "",
    details: [],
  });

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = async () => {
    const result = await axios.get(
      "https://api.jsonbin.io/b/6128c389c5159b35ae04d4ed/1"
    );
    setState({
      ...state,
      title: result.data.title,
      details: result.data.details,
    });
  };

  return (
    <div
      className="tooltip-wrapper"
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
    >
      {props.children}
      {active && (
        <div className="tooltip-container">
          <div className={`tooltip-tip ${props.direction || "top"}`}>
            <div>{state.title}</div>
          </div>
        </div>
      )}
    </div>
  );
};
export default TooltipComponent;
