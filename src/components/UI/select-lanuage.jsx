"use client"
import Select from "react-select";

import ru from "../../assets/icons/ru.svg";
import en from "../../assets/icons/en.svg";
import uz from "../../assets/icons/uz.svg";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from 'next/navigation'

export const language = [
    { label: "EN", value: "en", icon: en },
    { label: "UZ", value: "uz", icon: uz },
    { label: "RU", value: "ru", icon: ru },
];

const SelectLanguage = ({ lng }) => {
    const [lang, setLang] = useState(lng)
    const router = useRouter()
    return (
        <Select
            classNamePrefix="select"
            defaultValue={language.filter(e => e.value === lang)}
            name="lang"
            options={language}
            onChange={(e) => router.push(e.value)}
            formatOptionLabel={(option) => (
                <div className="country-option w-full flex gap-1 items-center justify-center">
                    <span className="text-sm sm:text-base">{option.label}</span>
                    <Image src={option.icon} width={20} height={20} alt="country-image" className="w-4" />
                </div>
            )}
            styles={{
                option: (base) => ({
                    ...base,

                }),
                control: (base) => ({
                    ...base,
                    background: "transparent",
                    border: "1px solid #9B9B9B",
                    borderRadius: "4px",
                    color: "white",
                    textAlign: "center",
                    ":hover": {
                        border: "1px solid #9B9B9B",
                    },
                    ":active": {
                        border: "1px solid #9B9B9B",
                    },
                    backgroundColor: "#f00",
                }),
            }}
        />
    );
};

export default SelectLanguage;
