'use client';
import React, {
    createContext,
    useContext,
    useRef,
    useState,
    ReactNode,
} from 'react';

interface ScrollContextType {
    specificSectionRef: React.RefObject<HTMLDivElement>;
    setSpecificSectionRef: (ref: HTMLDivElement) => void;
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export const ScrollProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const specificSectionRef = useRef<HTMLDivElement | null>(null);

    // Function to set the ref
    const setSpecificSectionRef = (ref: HTMLDivElement) => {
        specificSectionRef.current = ref;
    };

    return (
        <ScrollContext.Provider
            value={{ specificSectionRef, setSpecificSectionRef }}
        >
            {children}
        </ScrollContext.Provider>
    );
};

export const useScroll = (): ScrollContextType => {
    const context = useContext(ScrollContext);
    if (context === undefined) {
        throw new Error('useScroll must be used within a ScrollProvider');
    }
    return context;
};
