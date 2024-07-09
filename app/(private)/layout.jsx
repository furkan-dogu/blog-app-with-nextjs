"use client"

import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

const PrivateLayout = ({ children }) => {
    const { user } = useSelector((state) => state.auth);
    const router = useRouter();
    return user ? <>{children}</> : router.replace("/login");
};

export default PrivateLayout;
