import { createContext } from "react";

const alertsContext = createContext<{
    alert: {
        type: string,
        message: string
    };
    setAlert: Function;
}>({
    alert: {
        type: "",
        message: ""
    },
    setAlert: () => { }
});

export default alertsContext;