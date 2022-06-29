import React, { Component, useState } from "react";
import { checkIfIsDecimal } from "../functions/functions-bag";
export default function EasyCSS(props) {
  const [css, setCSS] = useState([]);
  const [cssString, setCSSString] = useState("");
  const styles = {
    mainContainer: {
      width: "100%",
      height: "100%",
      display: "flex",
      overFlow: "hidden",
    },
    leftContainer: {
      width: 300,
      minWidth: 300,
      height: "100%",
      display: "flex",
      flexFlow: "column",
      backgroundColor: "",
      alignItems: "center",
      paddingTop: 30,
      boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
    },
    rightContainer: {
      width: "100%",
      height: "100%",
      maxHeight: "100%",
      display: "flex",
      flexFlow: "column",
      backgroundColor: "",
      justifyContent: "start",
      alignItems: "center",
      paddingTop: 10,
      overflowY: "auto",
    },
    inputStyles: {
      width: "80%",
      height: 30,
      borderRadius: 20,
      backgroundColor: "white",
      border: "0px",
      marginBottom: 20,
      padding: 10,
      boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
    },
    buttonStyles: {
      width: "80%",
      height: 30,
      borderRadius: 5,
      border: "0px",
      marginBottom: 20,
      // padding:30,
      color: "white",
      boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
      cursor: "pointer",
      backgroundColor: "blue",
    },
    cssBlockStles: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "90%",
      height: 50,
      backgroundColor: "white",
      color: "grey",
      borderRadius: 20,
      marginBottom: 20,
      boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
    },
  };
  let settings = {};
  let cssCode = "asem oo";
  let createClass = () => {
    let create;
    let classNameProperty =
      settings.preferedPropName !== null || settings.preferedPropName !== ""
        ? settings.preferedPropName
        : settings.property;
    let cssProperty = settings.property;
    let min = settings.min;
    let max = settings.max;
    let unit = settings.unit ? settings.unit : "";
    let classUnit = unit === "%" ? "c" : unit;
    let interval = settings.interval;
    if (
      min === null ||
      min === "" ||
      min === undefined ||
      min === " " ||
      max === null ||
      max === "" ||
      max === undefined ||
      max === " " ||
      interval === null ||
      interval === "" ||
      interval === undefined ||
      interval === " "
    ) {
      alert("min, max and interval cannot be empty");
      return;
    }
    let iterationCount = (max - min) / interval;
    let cssForProperty = "";
    let value = 0;
    [...Array(iterationCount)].map((item, index) => {
      if (index === 0) {
        value = parseInt(min);
      } else {
        if (parseInt(interval) <= 0 || checkIfIsDecimal()) {
          interval = parseFloat(interval);
          value = value + interval;
          let decimalValue = value.toFixed(1);
          value = parseFloat(decimalValue);
        } else {
          interval = parseInt(interval);
          value = value + interval;
        }
        console.log(value);
      }

      let template = `.${classNameProperty}-${value}${classUnit}{
                    ${cssProperty}:${value}${unit}
                }`;
      cssForProperty += template;
    });
    // console.log(cssForProperty);
    let createdCSS = cssForProperty.split(".");
    cssCode = cssForProperty;
    setCSS(createdCSS);
    setCSSString(cssForProperty);
    // setCSS(createdCSS)
    // console.log(cssForProperty)
  };
  let createSetttings = (setting, value) => {
    settings[setting] = value;
    console.log(settings);
  };
  let copyText = (text) => {
    navigator.clipboard.writeText(text).then(
      function () {
        console.log("Async: Copying to clipboard was successful!");
      },
      function (err) {
        console.error("Async: Could not copy text: ", err);
      }
    );
  };
  function copy(text) {
    console.log(text);
    var input = document.createElement("textarea");
    input.innerHTML = text;
    // console.log(input)
    document.body.appendChild(input);
    input.select();
    var result = document.execCommand("copy");
    document.body.removeChild(input);
    console.log(result);
    return result;
  }

  return (
    <div style={styles.mainContainer}>
      <div style={styles.leftContainer}>
        <input
          onChange={(e) => {
            createSetttings(e.target.name, e.target.value);
          }}
          onBlur={(e) => {
            createSetttings(e.target.name, e.target.value);
          }}
          name="preferedPropName"
          placeholder="Prefered Property Name"
          style={styles.inputStyles}
        />
        <input
          onChange={(e) => {
            createSetttings(e.target.name, e.target.value);
          }}
          onBlur={(e) => {
            createSetttings(e.target.name, e.target.value);
          }}
          name="property"
          placeholder="Property name in css"
          style={styles.inputStyles}
        />
        <select
          onChange={(e) => {
            createSetttings(e.target.name, e.target.value);
          }}
          onBlur={(e) => {
            createSetttings(e.target.name, e.target.value);
          }}
          name="unit"
          placeholder="value"
          style={{
            ...styles.inputStyles,
            height: 50,
            width: "85%",
            paddingLeft: 10,
            paddingRight: 20,
          }}
        >
          <option>px</option>
          <option>%</option>
          <option>em</option>
          <option>rem</option>
          <option>vh</option>
          <option>vw</option>
        </select>
        {/* <input 
                        onChange={(e)=>{createSetttings(e.target.name,e.target.value)}} 
                        name="unit" placeholder='unit'
                        style={styles.inputStyles}
                    /> */}
        <input
          onChange={(e) => {
            createSetttings(e.target.name, e.target.value);
          }}
          onBlur={(e) => {
            createSetttings(e.target.name, e.target.value);
          }}
          name="interval"
          placeholder="interval"
          style={styles.inputStyles}
        />
        <input
          onChange={(e) => {
            createSetttings(e.target.name, e.target.value);
          }}
          onBlur={(e) => {
            createSetttings(e.target.name, e.target.value);
          }}
          name="min"
          placeholder="min"
          style={styles.inputStyles}
        />
        <input
          onChange={(e) => {
            createSetttings(e.target.name, e.target.value);
          }}
          onBlur={(e) => {
            createSetttings(e.target.name, e.target.value);
          }}
          name="max"
          placeholder="max"
          style={styles.inputStyles}
        />
        <button
          onClick={() => {
            createClass();
          }}
          style={styles.buttonStyles}
        >
          {" "}
          Generate{" "}
        </button>
        <button
          onClick={() => {
            copy(cssString);
          }}
          style={styles.buttonStyles}
        >
          {" "}
          Copy{" "}
        </button>
      </div>
      <div style={styles.rightContainer}>
        {css.map((item, index) => {
          // if(index === 100){
          //     return <div style={styles.cssBlockStles}>
          //     <span>More...</span>
          // </div>
          // }
          return (
            <div style={styles.cssBlockStles}>
              <span>{item}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
