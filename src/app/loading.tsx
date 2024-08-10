import React from 'react';

const SkeletonRow = () => {
    return (
        <div className="flex animate-pulse items-center justify-end space-x-6 p-1">
        <div className="h-4 w-[120px] rounded bg-gray-300"></div>
        <div className="h-4 w-[120px] rounded bg-gray-300"></div>
        <div className="h-4 w-[100px] rounded bg-gray-300"></div>
        <div className="h-4 w-[100px] rounded bg-gray-300"></div>
        <div className="h-4 w-[50px] rounded bg-gray-300"></div>
        </div>
    );
};

const SkeletonTable = ({ rows = 5 }) => {
    return (
        <div className="space-y-4">
        {Array.from({ length: rows }).map((_, index) => (
            <SkeletonRow key={index} />
        ))}
        </div>
    );
};

const Loading = () => {
    return (
        <section className="grow-1 container mt-0 flex h-3/4 shrink-0 flex-col items-center gap-3 text-center md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
            <SkeletonTable rows={5} />
        </section>
    );
};

export default Loading;
