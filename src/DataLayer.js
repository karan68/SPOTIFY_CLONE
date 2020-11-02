import React, {createContext, useContext, useReducer} from "react";
export const DataLayerContext = createContext();

export const DataLayer =({intialState, reducer, children }) => (
        <DataLayerContext.Provider value = {useReducer(reducer, intialState)}>
            {children}
        </DataLayerContext.Provider>
);


// anytime if we want get either a value from data layer or dispatch an action to it we want to have a way to get acces to it .

export  const useDataLayerValue =() =>  useContext(DataLayerContext);
