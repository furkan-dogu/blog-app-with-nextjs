"use client";

import { Provider } from "react-redux";
import store, { persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { blueGrey, grey } from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material";

export const Providers = ({ children }) => {
    const theme = createTheme({
        palette: {
            primary: {
                main: grey["900"],
            },
            secondary: {
                main: blueGrey["900"],
            },
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    {children}
                </PersistGate>
            </Provider>
        </ThemeProvider>
    );
};