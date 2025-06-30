// import { useState, useEffect, useCallback } from 'react';

type LinkCardProps = {
  url: string;
  description?: string;
  className?: string;
  onClick?: () => void;
};

export const LinkCard = ({
  url,
  description,
  className = '',
  onClick
}: LinkCardProps) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div
      className={`
        bg-white rounded-lg border border-gray-200 
        shadow-sm hover:shadow-md transition-all duration-200 
        cursor-pointer group hover:border-blue-300
        p-4
        ${className}
      `}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      }}
    >
      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-1">
        {url}
      </h3>
      {description && (
        <p className="text-sm text-gray-600 mb-1 line-clamp-2">
          {description}
        </p>
      )}
      <div className="flex items-center text-sm text-blue-600 group-hover:text-blue-700 transition-colors">
        <span className="truncate">{url}</span>
        <svg
          className="ml-2 w-4 h-4 flex-shrink-0 group-hover:translate-x-1 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      </div>
    </div>
  );
};