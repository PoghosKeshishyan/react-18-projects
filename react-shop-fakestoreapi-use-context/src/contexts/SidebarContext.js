import { createContext, useState } from "react";

export const SidebarContext = createContext();

export default function SidebarProvider({ children }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleClose = () => {
        setIsOpen(!isOpen);
    }

    return (
        <SidebarContext.Provider value={{ isOpen, handleClose }}>
            {children}
        </SidebarContext.Provider>
    )
}