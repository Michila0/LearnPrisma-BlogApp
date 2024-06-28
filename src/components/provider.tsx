'use client';

import React, {FC, ReactNode} from 'react';
import {SessionProvider} from "next-auth/react";

interface ProvideProps {
    children: ReactNode
}

const Provider: FC<ProvideProps> = ({ children }) => {
    return (
        <SessionProvider>{children}</SessionProvider>
    )
}


export default Provider;