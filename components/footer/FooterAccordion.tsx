"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";

const FooterAccordion = ({ section }: {
    section: {
        title: string;
        items: {
            label: string;
            link: string;
        }[]
    }
}) => {
    const { t } = useTranslation("common");
    const [isOpen, setIsOpen] = useState(false);
    const [contentHeight, setContentHeight] = useState(0);
    const contentRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
        if (contentRef.current) {
            setContentHeight(contentRef.current.scrollHeight);
        }
    }, [section.items]);

    return (
        <div className="flex flex-col lg:hidden">
            <h5
                className="text-sm font-bold text-white mb-4 cursor-pointer flex items-center justify-between"
                onClick={() => setIsOpen(prev => !prev)}
            >
                {t(section.title)}
                <span className={`transition-transform duration-300`}>
                    {!isOpen ? <ChevronDown size={24} />
                        :
                        <div className="w-5 h-5 bg-white rounded-full flex justify-center items-center"><ChevronUp size={24} className="text-primary" /></div>}
                </span>
            </h5>
            <ul
                ref={contentRef}
                className={`space-y-2 footer-nav-list overflow-hidden transition-all duration-300 ease-in-out`}
                style={{ maxHeight: isOpen ? `${contentHeight}px` : '0px' }}
            >
                {section.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                        <Link
                            href={item.link}
                            className="text-sm text-white/80 hover:text-white transition-colors duration-200 cursor-pointer"
                        >
                            {t(item.label)}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FooterAccordion;