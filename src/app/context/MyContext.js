"use client";
import React, { createContext, useState, useContext } from "react";

// יצירת ה-Context
const MyContext = createContext();

// יצירת ה-Provider שיספק את המידע
export const MyProvider = ({ children }) => {
  const [value, setValue] = useState([]);

  // כל רכיב שיכנס לתוך ה-Provider יוכל לגשת ל-value ול-setValue
  return (
    <MyContext.Provider value={{ value, setValue }}>
      {children}
    </MyContext.Provider>
  );
};

// יצירת hook כדי להשתמש ב-Context בצורה קלה
export const useMyContext = () => useContext(MyContext);
